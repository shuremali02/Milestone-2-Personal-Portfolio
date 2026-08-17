"use client";

import React from 'react'
import Link from 'next/link';
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";
import ContactForm from "../components/contact-form";
// CV modal temporarily disabled — see cv-modal.tsx
// import CVModal from "../components/cv-modal";
import TiltCard from "../components/tilt-card";

const contactItems = [
  { icon: FaEnvelope, label: "Email", value: "shuremsyed41@gmail.com", href: "mailto:shuremsyed41@gmail.com" },
  { icon: FaLinkedin, label: "LinkedIn", value: "Syed Shurem Ali", href: "https://linkedin.com/in/syed-shurem-ali-5a55852a0" },
  { icon: FaGithub, label: "GitHub", value: "shuremali02", href: "https://github.com/shuremali02" },
  { icon: FaMapMarkerAlt, label: "Location", value: "Pakistan", href: null as string | null },
];

export default function Contact() {
  // const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  return (
    <section className="bg-background py-16 text-textMuted relative overflow-hidden">
      {/* Decorative layers */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{ backgroundImage: "radial-gradient(var(--text-main) 1px, transparent 1px)", backgroundSize: "24px 24px" }}
      />
      <div className="hero-glow absolute -top-24 -right-16 w-80 h-80 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
      <div className="hero-glow absolute bottom-0 -left-20 w-80 h-80 rounded-full bg-gold/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12 relative">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold mb-3">
            <span className="w-6 h-px bg-gold" /> Contact <span className="w-6 h-px bg-gold" />
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-textMain mb-4">
            Let&apos;s Build Something <span className="text-primary">Real</span>
          </h1>
          <p className="text-textMuted text-lg max-w-2xl mx-auto">
            Tell me what you&apos;re building — I reply within 24 hours. From a full product to an
            AI feature or a deployment that just works, I take it from idea to live URL.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Left — contact info + availability */}
          <div className="lg:col-span-2 space-y-6">
            <TiltCard max={5} glare={false} className="rounded-xl">
              <div className="bg-surface border border-border rounded-xl p-6 shadow-lg h-full">
                <h2 className="text-xl font-bold text-textMain mb-6 flex items-center gap-2">
                  <span className="w-1 h-6 bg-gold rounded-full" /> Contact Information
                </h2>

                <div className="space-y-2">
                  {contactItems.map((item) => {
                    const Icon = item.icon;
                    const inner = (
                      <div className="flex items-center gap-4 p-2 rounded-lg group hover:bg-primary/5 transition-colors">
                        <div className="w-11 h-11 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors flex-shrink-0">
                          <Icon className="text-primary text-lg group-hover:text-background transition-colors" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-textMuted text-xs">{item.label}</p>
                          <p className="text-textMain font-medium truncate group-hover:text-primary transition-colors">
                            {item.value}
                          </p>
                        </div>
                      </div>
                    );
                    return item.href ? (
                      <Link key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined}>
                        {inner}
                      </Link>
                    ) : (
                      <div key={item.label}>{inner}</div>
                    );
                  })}
                </div>
              </div>
            </TiltCard>

            {/* Availability */}
            <div className="rounded-xl bg-green-500/[0.07] border border-green-500/20 p-5 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <span className="relative flex w-2.5 h-2.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-40 animate-ping" />
                  <span className="relative inline-flex rounded-full w-2.5 h-2.5 bg-green-500" />
                </span>
                <span className="text-green-500 font-semibold">Open for Projects</span>
              </div>
              <p className="text-textMuted text-sm">Available for freelance &amp; contract work — idea to live URL.</p>
            </div>

            {/* Quick actions */}
            <div className="grid grid-cols-1 gap-3">
              <Link href="mailto:shuremsyed41@gmail.com" className="bg-surface border border-border rounded-xl p-4 shadow-sm hover:border-primary hover:-translate-y-0.5 transition-all group">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-2 group-hover:scale-105 transition-transform">
                  <FaEnvelope className="text-primary" />
                </div>
                <p className="text-textMain font-semibold text-sm">Email me</p>
                <p className="text-textMuted text-xs">Direct inbox</p>
              </Link>
              {/* Resume quick action temporarily disabled — CV flow commented out
              <button
                onClick={() => setIsCVModalOpen(true)}
                className="text-left bg-surface border border-border rounded-xl p-4 shadow-sm hover:border-gold hover:-translate-y-0.5 transition-all group"
              >
                <div className="w-10 h-10 bg-gold/15 rounded-lg flex items-center justify-center mb-2 group-hover:scale-105 transition-transform">
                  <FaFileAlt className="text-gold" />
                </div>
                <p className="text-textMain font-semibold text-sm">Resume</p>
                <p className="text-textMuted text-xs">View / download</p>
              </button>
              */}
            </div>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-3">
            <div className="bg-surface border border-border rounded-xl p-6 sm:p-8 shadow-lg h-full">
              <h3 className="text-xl font-bold text-textMain mb-1 flex items-center gap-2">
                <span className="w-1 h-6 bg-primary rounded-full" /> Send me a message
              </h3>
              <p className="text-textMuted text-sm mb-6">I&apos;ll get back to you within 24 hours.</p>
              <ContactForm />
            </div>
          </div>
        </div>

        {/* Bottom social + CTA */}
        <div className="mt-14 text-center">
          <p className="text-textMuted mb-4">Or connect with me on social</p>
          <div className="flex justify-center gap-3 mb-8">
            {[
              { icon: FaLinkedin, href: "https://linkedin.com/in/syed-shurem-ali-5a55852a0", label: "LinkedIn" },
              { icon: FaGithub, href: "https://github.com/shuremali02", label: "GitHub" },
              { icon: FaEnvelope, href: "mailto:shuremsyed41@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <Link key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} aria-label={label}
                className="w-11 h-11 bg-surface border border-border rounded-lg flex items-center justify-center text-textMuted hover:text-primary hover:border-primary transition-colors">
                <Icon className="text-lg" />
              </Link>
            ))}
          </div>
          <Link href="mailto:shuremsyed41@gmail.com">
            <button className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-background rounded-lg font-semibold hover:bg-primaryHover hover:shadow-lg hover:shadow-primary/25 transition-all">
              Let&apos;s Work Together <FaArrowRight className="text-sm" />
            </button>
          </Link>
        </div>
      </div>

      {/* <CVModal isOpen={isCVModalOpen} onClose={() => setIsCVModalOpen(false)} /> */}
    </section>
  );
}
