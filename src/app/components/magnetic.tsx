"use client";

import { useRef, ReactNode } from "react";

interface MagneticProps {
  children: ReactNode;
  className?: string;
  /** Max pull distance in px. */
  strength?: number;
}

/**
 * Magnetic hover wrapper: the child is gently pulled toward the cursor
 * while hovered and springs back on leave. No-op on touch devices
 * and under prefers-reduced-motion (transition disabled via `.magnetic`).
 */
export default function Magnetic({ children, className = "", strength = 6 }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width - 0.5; // -0.5..0.5
    const relY = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `translate(${(relX * 2 * strength).toFixed(1)}px, ${(relY * 2 * strength).toFixed(1)}px)`;
  };

  const reset = () => {
    const el = ref.current;
    if (el) el.style.transform = "translate(0, 0)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className={`magnetic ${className}`}
    >
      {children}
    </div>
  );
}
