"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import { project } from "@/data";
import Magnetic from "./magnetic";
import Reveal from "./reveal";
import StackedProjectCard from "./stacked-project-card";

/** Top 4: everything flagged `featured`, padded from the rest of the list. */
const featuredProjects = (() => {
  const picked = project.filter((p) => p.featured);
  const rest = project.filter((p) => !p.featured);
  return [...picked, ...rest].slice(0, 4);
})();

/** How much each card shrinks per position it falls behind in the stack. */
const SCALE_STEP = 0.03;

const clamp01 = (n: number) => Math.min(1, Math.max(0, n));

export default function StackedProjects() {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Drives `--stack-scale` per card from its own scroll progress — the same
  // curve framer-motion's `["start end", "start start"]` offset produces,
  // without pulling in the dependency.
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const cards = Array.from(
      section.querySelectorAll<HTMLElement>("[data-stack-card]")
    );
    if (cards.length === 0) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      const vh = window.innerHeight;
      cards.forEach((card, index) => {
        const target = 1 - (cards.length - 1 - index) * SCALE_STEP;
        const p = clamp01((vh - card.getBoundingClientRect().top) / vh);
        const article = card.firstElementChild as HTMLElement | null;
        article?.style.setProperty("--stack-scale", String(1 - (1 - target) * p));
      });
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="bg-background py-20 text-textMuted">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-12 text-center md:mb-20">
          <span className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold">
            <span className="h-px w-6 bg-gold" /> My Work{" "}
            <span className="h-px w-6 bg-gold" />
          </span>
          <h2
            className="font-black uppercase leading-none tracking-tight text-textMain"
            style={{ fontSize: "clamp(2.5rem, 9vw, 120px)" }}
          >
            Featured <span className="text-primary">Projects</span>
          </h2>
        </Reveal>

        <div ref={sectionRef}>
          {featuredProjects.map((proj, index) => (
            <StackedProjectCard
              key={proj.title}
              proj={proj}
              index={index}
              total={featuredProjects.length}
            />
          ))}
        </div>

        <div className="mt-16 text-center md:mt-24">
          <Magnetic strength={8} className="mx-auto">
            <Link href="/portfolio">
              <button className="mx-auto flex items-center gap-2 rounded-lg bg-primary px-8 py-3 font-semibold text-background transition-all hover:bg-primaryHover hover:shadow-lg hover:shadow-primary/25 active:scale-[0.98]">
                View All Projects <FaExternalLinkAlt className="text-sm" />
              </button>
            </Link>
          </Magnetic>
        </div>
      </div>
    </div>
  );
}
