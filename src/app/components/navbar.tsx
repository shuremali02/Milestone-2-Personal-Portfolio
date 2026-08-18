"use client";
import Link from 'next/link';
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";
import ThemeToggle from "./theme-toggle";

const navLinks = [
  { href: "/#project", label: "Projects", section: "project" },
  { href: "/#skills", label: "Skills", section: "skills" },
  { href: "/#services", label: "Services", section: "services" },
  // Blog hidden for now — content isn't ready to show publicly
  // { href: "/blog", label: "Blog", section: "blog" },
  { href: "/about", label: "About", section: "about" },
  { href: "/contact", label: "Contact", section: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track active section on scroll (home page only)
  useEffect(() => {
    const handleScroll = () => {
      if (pathname !== "/") return;
      const sections = ["project", "skills", "services", "about", "contact"];
      const scrollPosition = window.scrollY + 200;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const elementTop = element.offsetTop;
          const elementBottom = elementTop + element.offsetHeight;
          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            setActiveSection(section);
            return;
          }
        }
      }
      if (scrollPosition < 300) setActiveSection("");
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  useEffect(() => {
    if (pathname === "/portfolio") setActiveSection("project");
    else if (pathname === "/about") setActiveSection("about");
    else if (pathname === "/contact") setActiveSection("contact");
    else if (pathname === "/") setActiveSection("");
  }, [pathname]);

  const isActive = (link: typeof navLinks[0]) => {
    if (link.href.startsWith("/#")) return activeSection === link.section;
    return pathname === link.href;
  };

  return (
    <header className={`sticky top-0 z-50 w-full px-4 transition-all duration-300 ${scrolled ? "pt-2" : "pt-4"}`}>
      {/* Floating pill */}
      <div
        className={`max-w-7xl mx-auto flex items-center justify-between gap-4 rounded-full border border-border bg-surface/80 backdrop-blur-md shadow-lg shadow-black/5 px-3 sm:px-4 transition-all duration-300 ${
          scrolled ? "py-1.5" : "py-2"
        }`}
      >
        {/* Logo */}
        <Link href="/" aria-label="Home" className="flex items-center gap-2 pl-1 group">
          <span className="w-8 h-8 rounded-lg bg-primary text-background font-heading font-bold flex items-center justify-center text-sm group-hover:scale-105 transition-transform">
            S
          </span>
          <span className="text-lg font-bold font-heading tracking-tight text-textMain">SSA</span>
        </Link>

        {/* Center links */}
        <nav className="hidden md:flex" aria-label="Main navigation">
          <ul className="flex items-center gap-1 text-sm font-medium">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`px-3 py-2 rounded-full transition-colors ${
                    isActive(link)
                      ? "text-primary bg-primary/10"
                      : "text-textMuted hover:text-textMain"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center gap-2 bg-primary text-background rounded-full px-4 py-2 text-sm font-semibold hover:bg-primaryHover active:scale-95 transition-all shadow-md shadow-primary/20"
          >
            Let&apos;s Talk
          </Link>
          <button
            className="md:hidden text-textMain p-2 rounded-full hover:bg-primary/10 transition"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav
          className="md:hidden max-w-7xl mx-auto mt-2 rounded-2xl border border-border bg-surface shadow-lg overflow-hidden animate-slide-up"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col p-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block py-3 px-4 rounded-xl transition ${
                    isActive(link)
                      ? "text-primary bg-primary/10 font-medium"
                      : "text-textMuted hover:text-textMain hover:bg-primary/5"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="p-2">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="block text-center bg-primary text-background rounded-xl py-3 font-semibold hover:bg-primaryHover transition-colors"
              >
                Let&apos;s Talk
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
