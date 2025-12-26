"use client";
import Link from 'next/link';
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import ThemeToggle from "./theme-toggle";

export default function Navbar() {
  const [Open, setOpen] = useState(false);

  return (
    <header className="bg-background/80 top-0 z-50 sticky w-full shadow-md text-textMain py-3 px-5 flex items-center justify-between border-b border-border backdrop-blur-lg">

      {/* Logo Section */}
      <Link href="/" aria-label="Home">
        <div className="flex items-center space-x-4 text-primary hover:scale-105 transition-transform">
          <h1 className="text-3xl font-bold italic font-serif tracking-wide">
            SSA
          </h1>
        </div>
      </Link>

      {/* Centered Navigation for larger screens */}
      <nav className="hidden md:flex flex-1 justify-center" aria-label="Main navigation">
        <ul className="flex space-x-8 text-textMuted font-medium">
          <li><Link className="hover:text-primary hover:underline underline-offset-4 transition-all" href="/#skills">Skills</Link></li>
          <li><Link className="hover:text-primary hover:underline underline-offset-4 transition-all" href="/#testimonials">Testimonials</Link></li>
          <li><Link className="hover:text-primary hover:underline underline-offset-4 transition-all" href="/portfolio">Projects</Link></li>
          <li><Link className="hover:text-primary hover:underline underline-offset-4 transition-all" href="/about">About</Link></li>
          <li><Link className="hover:text-primary hover:underline underline-offset-4 transition-all" href="/contact">Contact</Link></li>
        </ul>
      </nav>

      {/* Right Side - Theme Toggle & Mobile Menu */}
      <div className="flex items-center gap-3">
        {/* Theme Toggle - visible on all screens */}
        <ThemeToggle />

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-primary border border-border p-2 rounded hover:bg-surface transition"
          onClick={() => setOpen(!Open)}
          aria-label={Open ? "Close menu" : "Open menu"}
          aria-expanded={Open}
        >
          {Open ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {Open && (
        <nav
          className="absolute top-16 left-0 right-0 bg-surface text-textMain text-center border-t border-border shadow-md animate-slide-up"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col gap-4 py-4">
            <li><Link href="/#skills" onClick={() => setOpen(false)} className="block py-2 hover:text-primary hover:bg-background/50 transition">Skills</Link></li>
            <li><Link href="/#testimonials" onClick={() => setOpen(false)} className="block py-2 hover:text-primary hover:bg-background/50 transition">Testimonials</Link></li>
            <li><Link href="/portfolio" onClick={() => setOpen(false)} className="block py-2 hover:text-primary hover:bg-background/50 transition">Projects</Link></li>
            <li><Link href="/about" onClick={() => setOpen(false)} className="block py-2 hover:text-primary hover:bg-background/50 transition">About</Link></li>
            <li><Link href="/contact" onClick={() => setOpen(false)} className="block py-2 hover:text-primary hover:bg-background/50 transition">Contact</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
}
