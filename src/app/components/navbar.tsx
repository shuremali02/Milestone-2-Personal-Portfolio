"use client";
import Link from 'next/link';
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";
import ThemeToggle from "./theme-toggle";

const navLinks = [
  { href: "/#skills", label: "Skills", section: "skills" },
  { href: "/#testimonials", label: "Testimonials", section: "testimonials" },
  { href: "/portfolio", label: "Projects", section: "portfolio" },
  { href: "/about", label: "About", section: "about" },
  { href: "/contact", label: "Contact", section: "contact" },
];

export default function Navbar() {
  const [Open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (pathname !== "/") return;

      const sections = ["skills", "testimonials", "about", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            return;
          }
        }
      }

      if (scrollPosition < 300) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  // Set active based on pathname for non-home pages
  useEffect(() => {
    if (pathname === "/portfolio") setActiveSection("portfolio");
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
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`relative py-2 transition-all ${
                  isActive(link)
                    ? "text-primary"
                    : "hover:text-primary"
                }`}
              >
                {link.label}
                {isActive(link) && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full" />
                )}
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
