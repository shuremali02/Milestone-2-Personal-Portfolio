"use client";

import { useEffect, useRef } from "react";

/**
 * Soft radial spotlight that trails the cursor, giving the page a
 * "lit surface" feel. Desktop (fine pointer) only; the CSS hides it
 * entirely under prefers-reduced-motion.
 */
export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run on devices with a real cursor
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const el = glowRef.current;
    if (!el) return;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let x = targetX;
    let y = targetY;
    let raf = 0;
    let running = false;

    const loop = () => {
      // Lerp toward the cursor for a smooth trailing feel
      x += (targetX - x) * 0.12;
      y += (targetY - y) * 0.12;
      el.style.transform = `translate(${x - 300}px, ${y - 300}px)`;

      if (Math.abs(targetX - x) > 0.5 || Math.abs(targetY - y) > 0.5) {
        raf = requestAnimationFrame(loop);
      } else {
        running = false;
      }
    };

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      el.style.opacity = "1";
      if (!running) {
        running = true;
        raf = requestAnimationFrame(loop);
      }
    };

    const onLeave = () => {
      el.style.opacity = "0";
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="cursor-glow"
      style={{ opacity: 0, transform: "translate(-50%, -50%)", transition: "opacity 0.4s ease" }}
      aria-hidden="true"
    />
  );
}
