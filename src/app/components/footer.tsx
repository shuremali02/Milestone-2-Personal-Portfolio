"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaLinkedin, FaGithub, FaEnvelope, FaHeart } from "react-icons/fa";
import { SiHuggingface } from "react-icons/si";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-background to-surface border-t border-border">
      {/* Main Footer Content */}
      <div className="w-full px-6 lg:px-16 xl:px-24 py-12">

        {/* Top Section - CTA Banner */}
        <div className="bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-2xl p-8 mb-12 border border-border">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-primary mb-2">Let&apos;s Work Together</h3>
            <p className="text-textMuted mb-6">Have a project in mind? I&apos;d love to hear from you!</p>
            <a
              href="mailto:shuremsyed41@gmail.com"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-purple-600 text-white py-3 px-8 rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all"
            >
              <FaEnvelope />
              shuremsyed41@gmail.com
            </a>
          </div>
        </div>

        {/* Middle Section - Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16 mb-12">

          {/* Brand Column */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <Image
                src="https://res.cloudinary.com/dd4xvwf8d/image/upload/v1755281625/c9cc0a17-e6c2-44e4-aab5-0a2482786f3f_blwhw3.jpg"
                alt="Syed Shurem Ali"
                width={50}
                height={50}
                className="rounded-full border-2 border-primary"
              />
              <div>
                <h4 className="font-bold text-textMain">Syed Shurem Ali</h4>
                <p className="text-xs text-textMuted">Front-End Developer</p>
              </div>
            </div>
            <p className="text-sm text-textMuted leading-relaxed">
              Passionate about creating modern, responsive, and user-friendly web experiences with React, Next.js, and AI technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-bold text-textMain mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link href="/#skills" className="text-textMuted hover:text-primary transition-colors">
                Skills
              </Link>
              <Link href="/#testimonials" className="text-textMuted hover:text-primary transition-colors">
                Testimonials
              </Link>
              <Link href="/portfolio" className="text-textMuted hover:text-primary transition-colors">
                Projects
              </Link>
              <Link href="/about" className="text-textMuted hover:text-primary transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-textMuted hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Connect */}
          <div className="text-center md:text-right">
            <h4 className="font-bold text-textMain mb-4">Connect With Me</h4>
            <div className="flex justify-center md:justify-end gap-4 mb-4">
              <Link
                href="https://linkedin.com/in/syed-shurem-ali-5a55852a0"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 bg-surface border border-border rounded-full flex items-center justify-center text-textMuted hover:text-primary hover:border-primary hover:scale-110 transition-all"
              >
                <FaLinkedin size={18} />
              </Link>
              <Link
                href="https://github.com/shuremali02"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 bg-surface border border-border rounded-full flex items-center justify-center text-textMuted hover:text-primary hover:border-primary hover:scale-110 transition-all"
              >
                <FaGithub size={18} />
              </Link>
              <Link
                href="https://www.facebook.com/syed.shuremali?mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 bg-surface border border-border rounded-full flex items-center justify-center text-textMuted hover:text-primary hover:border-primary hover:scale-110 transition-all"
              >
                <FaFacebook size={18} />
              </Link>
              <Link
                href="https://huggingface.co/shuremali02"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="HuggingFace"
                className="w-10 h-10 bg-surface border border-border rounded-full flex items-center justify-center text-textMuted hover:text-primary hover:border-primary hover:scale-110 transition-all"
              >
                <SiHuggingface size={18} />
              </Link>
            </div>
            <p className="text-sm text-textMuted">
              Open to freelance projects & collaborations
            </p>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-textMuted">
              &copy; {currentYear} Syed Shurem Ali. All rights reserved.
            </p>
            <p className="text-sm text-textMuted flex items-center gap-1">
              Made with <FaHeart className="text-red-500" /> using Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
