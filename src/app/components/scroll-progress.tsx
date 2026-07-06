"use client";

import { useEffect, useRef } from "react";

/**
 * Thin gradient progress bar fixed to the top of the viewport,
 * filled proportionally to how far the page is scrolled.
 * Uses scaleX + rAF so it never causes layout work.
 */
export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      const el = barRef.current;
      if (el) {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const progress = max > 0 ? window.scrollY / max : 0;
        el.style.transform = `scaleX(${Math.min(Math.max(progress, 0), 1)})`;
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return <div ref={barRef} className="scroll-progress w-full" style={{ transform: "scaleX(0)" }} />;
}
