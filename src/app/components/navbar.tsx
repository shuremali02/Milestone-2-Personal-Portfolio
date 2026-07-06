"use client";
import Link from 'next/link';
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";
import ThemeToggle from "./theme-toggle";

const navLinks = [
  { href: "/#project", label: "Projects", section: "project" },
  { href: "/#skills", label: "Skills", section: "skills" },
  { href: "/blog", label: "Blog", section: "blog" },
  { href: "/about", label: "About", section: "about" },
  { href: "/contact", label: "Contact", section: "contact" },
];

export default function Navbar() {
  const [Open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Shrink + deepen the glass effect once the page is scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (pathname !== "/") return;

      const sections = ["project", "skills", "blog", "about", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = element.offsetTop;
          const elementBottom = elementTop + element.offsetHeight;

          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            setActiveSection(section);
            return;
          }
        }
      }

      if (scrollPosition < 300) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  // Set active based on pathname for non-home pages
  useEffect(() => {
    if (pathname === "/portfolio") setActiveSection("project");
    else if (pathname === "/about") setActiveSection("about");
    else if (pathname === "/contact") setActiveSection("contact");
    else if (pathname === "/") setActiveSection("");
  }, [pathname]);

  const isActive = (link: typeof navLinks[0]) => {
    if (link.href.startsWith("/#")) {
      return activeSection === link.section;
    }
    return pathname === link.href;
  };

  return (
    <header
      className={`glass top-0 z-50 sticky w-full text-textMain border-b border-border transition-all duration-300 ${
        scrolled ? "py-2 shadow-xl shadow-black/20" : "py-3 shadow-md"
      }`}
    >
      {/* Inner container aligned with page content on large screens */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">

      {/* Logo Section */}
      <Link href="/" aria-label="Home">
        <div className="flex items-center space-x-4 hover:scale-105 transition-transform">
          <span className="text-3xl font-bold font-heading gradient-text tracking-tight">
            SSA
          </span>
        </div>
      </Link>

      {/* Centered Navigation for larger screens */}
      <nav className="hidden md:flex flex-1 justify-center" aria-label="Main navigation">
        <ul className="flex space-x-8 text-textMuted font-medium">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`nav-link relative py-2 transition-all ${
                  isActive(link)
                    ? "text-primary"
                    : "hover:text-primary"
                }`}
              >
                {link.label}
                <span className={`nav-underline ${isActive(link) ? "active" : ""}`} />
              </Link>
            </li>
          ))}
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
      </div>

      {/* Mobile Navigation */}
      {Open && (
        <nav
          className="absolute top-16 left-0 right-0 bg-surface text-textMain text-center border-t border-border shadow-md animate-slide-up"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col gap-2 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block py-3 transition ${
                    isActive(link)
                      ? "text-primary bg-primary/10 font-medium"
                      : "hover:text-primary hover:bg-background/50"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
