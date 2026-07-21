"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaLinkedin, FaGithub, FaEnvelope, FaHeart, FaArrowRight } from "react-icons/fa";
import { SiHuggingface } from "react-icons/si";
import { cld } from "@/utils/cloudinary";

const quickLinks = [
  { href: "/#project", label: "Projects" },
  { href: "/#skills", label: "Skills" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const socials = [
  { href: "https://linkedin.com/in/syed-shurem-ali-5a55852a0", label: "LinkedIn", icon: FaLinkedin },
  { href: "https://github.com/shuremali02", label: "GitHub", icon: FaGithub },
  { href: "https://www.facebook.com/syed.shuremali?mibextid=ZbWKwL", label: "Facebook", icon: FaFacebook },
  { href: "https://huggingface.co/shuremali02", label: "HuggingFace", icon: SiHuggingface },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        {/* CTA Banner */}
        <div className="bg-primary/[0.07] border border-primary/20 rounded-xl p-6 sm:p-10 mb-12 text-center">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold mb-3">
            <span className="w-6 h-px bg-gold" /> Let&apos;s connect <span className="w-6 h-px bg-gold" />
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold text-textMain mb-2">
            Let&apos;s Work <span className="text-primary">Together</span>
          </h3>
          <p className="text-textMuted text-sm sm:text-base mb-6 max-w-md mx-auto">
            Have a project in mind? I reply within 24 hours — idea to live URL.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/contact">
              <button className="inline-flex items-center gap-2 bg-primary text-background py-2.5 px-6 rounded-lg font-semibold hover:bg-primaryHover hover:shadow-lg hover:shadow-primary/25 active:scale-[0.98] transition-all">
                Start a Project <FaArrowRight className="text-sm" />
              </button>
            </Link>
            <a
              href="mailto:shuremsyed41@gmail.com"
              className="inline-flex items-center gap-2 border border-border text-textMain py-2.5 px-5 rounded-lg font-medium hover:border-primary hover:text-primary transition-colors break-all"
            >
              <FaEnvelope className="flex-shrink-0" /> <span className="break-all">shuremsyed41@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src={cld("https://res.cloudinary.com/dd4xvwf8d/image/upload/v1755281625/c9cc0a17-e6c2-44e4-aab5-0a2482786f3f_blwhw3.jpg", 100)}
                alt="Syed Shurem Ali"
                width={48}
                height={48}
                sizes="48px"
                className="rounded-lg border border-border object-cover w-12 h-12"
              />
              <div>
                <h4 className="font-bold text-textMain">Syed Shurem Ali</h4>
                <p className="text-xs text-textMuted">Full-Stack Developer &amp; AI Engineer</p>
              </div>
            </div>
            <p className="text-sm text-textMuted leading-relaxed max-w-xs">
              I build production web &amp; mobile apps with Next.js, TypeScript, and Flutter — shipped end-to-end, from database to live server.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-textMain mb-4 flex items-center gap-2">
              <span className="w-1 h-4 bg-gold rounded-full" /> Quick Links
            </h4>
            <nav className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group inline-flex items-center gap-1.5 text-sm text-textMuted hover:text-primary transition-colors w-fit"
                >
                  <span className="w-0 group-hover:w-3 h-px bg-primary transition-all duration-300" />
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-bold text-textMain mb-4 flex items-center gap-2">
              <span className="w-1 h-4 bg-gold rounded-full" /> Connect
            </h4>
            <div className="flex gap-2.5 mb-4">
              {socials.map(({ href, label, icon: Icon }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 bg-background border border-border rounded-lg flex items-center justify-center text-textMuted hover:text-primary hover:border-primary active:scale-95 transition-all"
                >
                  <Icon size={18} />
                </Link>
              ))}
            </div>
            <p className="inline-flex items-center gap-2 text-sm text-green-500 font-medium">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" /> Open to freelance &amp; collaborations
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-sm text-textMuted">
            &copy; {currentYear} Syed Shurem Ali. All rights reserved.
          </p>
          <p className="text-sm text-textMuted flex items-center gap-1.5">
            Made with <FaHeart className="text-red-500" /> using Next.js &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
