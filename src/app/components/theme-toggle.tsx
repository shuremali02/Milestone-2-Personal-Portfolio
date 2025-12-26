"use client";
import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check localStorage for saved theme
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      setIsDark(false);
      document.documentElement.classList.add("light");
    } else {
      setIsDark(true);
      document.documentElement.classList.remove("light");
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <button
        className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center"
        aria-label="Toggle theme"
      >
        <FaMoon size={18} className="text-textMuted" />
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center hover:border-primary hover:scale-110 transition-all group"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? (
        <FaSun size={18} className="text-yellow-400 group-hover:rotate-180 transition-transform duration-500" />
      ) : (
        <FaMoon size={18} className="text-primary group-hover:rotate-12 transition-transform duration-300" />
      )}
    </button>
  );
}
