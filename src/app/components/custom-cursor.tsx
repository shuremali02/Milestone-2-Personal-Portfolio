"use client";

import { useEffect, useRef } from "react";

const INTERACTIVE_SELECTOR = "a, button, input, textarea, select, [role='button'], [data-cursor-hover]";
const MAX_PARTICLES = 90;
const PARTICLE_LIFE_MS = 650;

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  born: number;
  gold: boolean;
  size: number;
}

/**
 * Replaces the native pointer with a neural-trail cursor: a bright head
 * node at the exact pointer position, trailing particles that fade out,
 * connected by faint lines like a reasoning/signal trace. Desktop
 * (fine pointer) only; the native cursor is left untouched on touch
 * devices and under prefers-reduced-motion.
 */
export default function CustomCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    document.documentElement.classList.add("custom-cursor-active");

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const resize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let visible = false;
    let hovering = false;
    let particles: Particle[] = [];
    let spawnCounter = 0;
    let raf = 0;

    const readColor = (varName: string) => {
      const v = getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
      return v || "0 163 140";
    };

    const spawn = (x: number, y: number) => {
      const count = hovering ? 2 : 1;
      for (let i = 0; i < count; i++) {
        spawnCounter++;
        particles.push({
          x: x + (Math.random() - 0.5) * 4,
          y: y + (Math.random() - 0.5) * 4,
          vx: (Math.random() - 0.5) * 0.6,
          vy: (Math.random() - 0.5) * 0.6,
          born: performance.now(),
          gold: spawnCounter % 6 === 0,
          size: hovering ? 4.2 : 3.2,
        });
      }
      if (particles.length > MAX_PARTICLES) {
        particles = particles.slice(particles.length - MAX_PARTICLES);
      }
    };

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      visible = true;
      spawn(mouseX, mouseY);
    };

    const onLeave = () => {
      visible = false;
    };

    const onOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest(INTERACTIVE_SELECTOR)) hovering = true;
    };
    const onOut = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest(INTERACTIVE_SELECTOR)) hovering = false;
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);

    const loop = () => {
      const primary = readColor("--primary-rgb");
      const gold = readColor("--gold-rgb");
      const now = performance.now();

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      particles = particles.filter((p) => now - p.born < PARTICLE_LIFE_MS);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
      });

      // Faint connecting trace between consecutive particles.
      ctx.lineWidth = 1.8;
      for (let i = 1; i < particles.length; i++) {
        const a = particles[i - 1];
        const b = particles[i];
        const dist = Math.hypot(a.x - b.x, a.y - b.y);
        if (dist > 60) continue;
        const ageB = (now - b.born) / PARTICLE_LIFE_MS;
        const alpha = (1 - ageB) * 0.25;
        if (alpha <= 0) continue;
        ctx.strokeStyle = `rgb(${primary} / ${alpha})`;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }

      // Particle nodes.
      particles.forEach((p) => {
        const age = (now - p.born) / PARTICLE_LIFE_MS;
        const alpha = 1 - age;
        if (alpha <= 0) return;
        ctx.fillStyle = `rgb(${p.gold ? gold : primary} / ${alpha * 0.8})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * (1 - age * 0.4), 0, Math.PI * 2);
        ctx.fill();
      });

      // Bright head node at the exact pointer position.
      if (visible) {
        ctx.fillStyle = `rgb(${primary} / 1)`;
        ctx.beginPath();
        ctx.arc(mouseX, mouseY, hovering ? 7 : 5.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = `rgb(${primary} / 0.2)`;
        ctx.beginPath();
        ctx.arc(mouseX, mouseY, hovering ? 18 : 13, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      cancelAnimationFrame(raf);
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    };
  }, []);

  return <canvas ref={canvasRef} className="custom-cursor-canvas" aria-hidden="true" />;
}
