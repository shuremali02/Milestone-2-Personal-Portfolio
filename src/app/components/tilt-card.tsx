"use client";

import { useRef, ReactNode } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  /** Max rotation in degrees. Lower = subtler. */
  max?: number;
  /** Show the moving glare highlight. */
  glare?: boolean;
}

/**
 * Interactive 3D tilt card. Tracks the pointer and rotates the card in 3D
 * space via CSS custom properties consumed by `.tilt-card` in globals.css.
 * Falls back gracefully (no tilt) when prefers-reduced-motion is set.
 */
export default function TiltCard({
  children,
  className = "",
  max = 10,
  glare = true,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width; // 0..1
    const py = (e.clientY - rect.top) / rect.height; // 0..1
    const rotateY = (px - 0.5) * 2 * max;
    const rotateX = -(py - 0.5) * 2 * max;
    el.style.setProperty("--tilt-x", `${rotateX.toFixed(2)}deg`);
    el.style.setProperty("--tilt-y", `${rotateY.toFixed(2)}deg`);
    el.style.setProperty("--glare-x", `${(px * 100).toFixed(1)}%`);
    el.style.setProperty("--glare-y", `${(py * 100).toFixed(1)}%`);
  };

  const reset = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--tilt-x", "0deg");
    el.style.setProperty("--tilt-y", "0deg");
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className={`tilt-card ${className}`}
    >
      {glare && <div className="tilt-glare" />}
      <div className="tilt-layer relative z-10 h-full">{children}</div>
    </div>
  );
}
