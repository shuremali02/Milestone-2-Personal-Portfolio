"use client";
import Link from 'next/link';
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [Open, setOpen] = useState(false);

  return (
    <header className="bg-background top-0 z-10 sticky w-full shadow-md text-textMain py-3 px-5 flex items-center justify-between border-b border-border backdrop-blur-lg">

      {/* Logo Section */}
      <Link href="/">
        <div className="flex items-center space-x-4 text-primary animate-pulse">
          <h1 className="text-3xl font-bold italic font-serif tracking-wide">
            SSA
          </h1>
        </div>
      </Link>

      {/* Centered Navigation for larger screens */}
      <nav className="hidden md:flex flex-1 justify-center">
        <ul className="flex space-x-8 text-textMuted font-medium">
          <li><Link className="hover:text-primary hover:underline underline-offset-2 transition-all" href="/#skills">Skills</Link></li>
          <li><Link className="hover:text-primary hover:underline underline-offset-2 transition-all" href="/#testimonials">Testimonials</Link></li>
          <li><Link className="hover:text-primary hover:underline underline-offset-2 transition-all" href="/portfolio">Projects</Link></li>
          <li><Link className="hover:text-primary hover:underline underline-offset-2 transition-all" href="/about">About</Link></li>
          <li><Link className="hover:text-primary hover:underline underline-offset-2 transition-all" href="/contact">Contact</Link></li>
        </ul>
      </nav>

      {/* Mobile Menu Button aligned to the right */}
      <div className="md:hidden flex-1 flex justify-end">
        <button className="text-primary border border-border p-2 rounded hover:bg-surface transition" onClick={() => setOpen(!Open)} aria-label="Toggle Menu">
          {Open ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {Open && (
        <nav className="absolute top-16 left-0 right-0 bg-surface text-textMain text-center border-t border-border shadow-md">
          <ul className="flex flex-col gap-4 py-4">
            <li><Link href="/#skills" className="hover:text-primary hover:underline underline-offset-2 transition">Skills</Link></li>
            <li><Link href="/#testimonials" className="hover:text-primary hover:underline underline-offset-2 transition">Testimonials</Link></li>
            <li><Link href="/portfolio" className="hover:text-primary hover:underline underline-offset-2 transition">Projects</Link></li>
            <li><Link href="/about" className="hover:text-primary hover:underline underline-offset-2 transition">About</Link></li>
            <li><Link href="/contact" className="hover:text-primary hover:underline underline-offset-2 transition">Contact</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
}
