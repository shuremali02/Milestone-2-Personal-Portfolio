"use client";
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const RING_RADIUS = 22;
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setIsVisible(window.scrollY > 300);
        const max = document.documentElement.scrollHeight - window.innerHeight;
        setProgress(max > 0 ? Math.min(window.scrollY / max, 1) : 0);
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-32 right-5 z-40 w-12 h-12 bg-primary text-background rounded-full shadow-lg flex items-center justify-center hover:bg-primaryHover hover:scale-110 transition-all animate-fade-in"
          aria-label="Scroll to top"
        >
          {/* Progress ring — fills as the page is scrolled */}
          <svg
            className="absolute -inset-1 w-14 h-14 -rotate-90 pointer-events-none"
            viewBox="0 0 52 52"
            aria-hidden="true"
          >
            <circle
              cx="26"
              cy="26"
              r={RING_RADIUS}
              fill="none"
              stroke="var(--border)"
              strokeWidth="3"
              opacity="0.4"
            />
            <circle
              cx="26"
              cy="26"
              r={RING_RADIUS}
              fill="none"
              stroke="var(--primary)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray={RING_CIRCUMFERENCE}
              strokeDashoffset={RING_CIRCUMFERENCE * (1 - progress)}
              style={{ transition: "stroke-dashoffset 0.15s linear" }}
            />
          </svg>
          <FaArrowUp size={18} />
        </button>
      )}
    </>
  );
}
