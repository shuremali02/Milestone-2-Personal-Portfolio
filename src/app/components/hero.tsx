"use client";
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight, FaCode, FaMobileAlt, FaServer, FaRobot } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
// CV modal temporarily disabled — see cv-modal.tsx
// import CVModal from "./cv-modal";
import TiltCard from "./tilt-card";
import Magnetic from "./magnetic";
import { cld } from "@/utils/cloudinary";

const NAME = "Syed Shurem Ali";

const roles = [
  "Full-Stack Developer",
  "AI Engineer",
  "Flutter Developer",
];

// Floating 3D tech chips orbiting the photo
const chips = [
  { icon: FaCode, label: "Next.js", pos: "-top-3 -left-6 lg:-left-12", color: "text-primary", iconBg: "bg-primary/15", delay: "0s", hideSm: false },
  { icon: FaMobileAlt, label: "Flutter", pos: "top-16 -right-8 lg:-right-16", color: "text-gold", iconBg: "bg-gold/15", delay: "0.8s", hideSm: false },
  { icon: FaRobot, label: "Agentic AI", pos: "-bottom-2 -left-8 lg:-left-16", color: "text-gold", iconBg: "bg-gold/15", delay: "1.6s", hideSm: true },
  { icon: FaServer, label: "VPS / Nginx", pos: "bottom-16 -right-6 lg:-right-12", color: "text-primary", iconBg: "bg-primary/15", delay: "2.4s", hideSm: true },
];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  // const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < role.length) {
          setDisplayText(role.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  return (
    <section className="relative w-full min-h-[92vh] flex items-center bg-background px-4 overflow-hidden">
      {/* ===== Decorative layers (solid colours, no gradients) ===== */}
      {/* dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(var(--text-main) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      {/* soft solid colour fields for depth */}
      <div className="hero-glow absolute -top-24 -left-24 w-80 h-80 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
      <div className="hero-glow absolute -bottom-24 right-0 w-96 h-96 rounded-full bg-gold/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-10 items-center">

          {/* ===== Left column — text ===== */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="flex justify-center lg:justify-start mb-5" data-aos="fade-up">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface py-1.5 px-3 text-sm text-textMuted">
                <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" />
                Open to freelance &amp; contract work
              </div>
            </div>

            <p className="text-lg md:text-xl text-textMuted mb-2" data-aos="fade-up" data-aos-delay="50">
              Hi, I&apos;m <span className="text-primary font-semibold">{NAME}</span>
            </p>

            <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.1] text-textMain mb-5" data-aos="fade-up" data-aos-delay="100">
              I&apos;m a{" "}
              <br className="hidden sm:block" />
              <span className="sr-only">Full-Stack Developer, AI Engineer, and Flutter Developer</span>
              <span aria-hidden="true" className="text-gold typing-cursor">{displayText}</span>
            </h1>

            <p
              className="text-textMuted text-base md:text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              AI Engineer and Full-Stack Developer. I build production web &amp; mobile
              apps with Next.js, TypeScript &amp; Flutter, make them intelligent with LLMs
              and agentic AI, and own the whole lifecycle — from MySQL schema to VPS
              deployment.
            </p>

            <div
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mb-8"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <Magnetic strength={6}>
                <Link href="/#project">
                  <button className="bg-primary text-background hover:bg-primaryHover active:scale-[0.98] py-3 px-6 rounded-lg transition-all font-semibold flex items-center gap-2 shadow-lg shadow-primary/25">
                    View My Work <FaArrowRight className="text-sm" />
                  </button>
                </Link>
              </Magnetic>
              {/* Download CV button temporarily disabled
              <Magnetic strength={6}>
                <button
                  onClick={() => setIsCVModalOpen(true)}
                  className="btn-gold on-gold py-3 px-6 rounded-lg transition-all active:scale-[0.98] font-semibold flex items-center gap-2 shadow-lg shadow-gold/25"
                >
                  Download CV
                </button>
              </Magnetic>
              */}
              <Link href="/contact">
                <button className="border border-border text-textMain hover:border-primary py-3 px-5 rounded-lg transition-colors font-medium flex items-center gap-2">
                  <FaEnvelope /> Contact
                </button>
              </Link>
              {/* <CVModal isOpen={isCVModalOpen} onClose={() => setIsCVModalOpen(false)} /> */}
            </div>

            <div className="flex justify-center lg:justify-start gap-3" data-aos="fade-up" data-aos-delay="400">
              <Link href="https://github.com/shuremali02" target="_blank" aria-label="GitHub" className="w-10 h-10 bg-surface border border-border rounded-lg flex items-center justify-center text-textMuted hover:text-primary hover:border-primary transition-colors">
                <FaGithub className="text-lg" />
              </Link>
              <Link href="https://linkedin.com/in/syed-shurem-ali-5a55852a0" target="_blank" aria-label="LinkedIn" className="w-10 h-10 bg-surface border border-border rounded-lg flex items-center justify-center text-textMuted hover:text-primary hover:border-primary transition-colors">
                <FaLinkedin className="text-lg" />
              </Link>
              <Link href="mailto:shuremsyed41@gmail.com" aria-label="Email" className="w-10 h-10 bg-surface border border-border rounded-lg flex items-center justify-center text-textMuted hover:text-primary hover:border-primary transition-colors">
                <FaEnvelope className="text-lg" />
              </Link>
            </div>
          </div>

          {/* ===== Right column — orbit photo + 3D chips ===== */}
          <div className="order-1 lg:order-2 flex justify-center" data-aos="fade-up" data-aos-delay="150">
            <TiltCard max={10} glare={false} className="relative">
              <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
                {/* Orbit rings */}
                <div className="absolute inset-0 rounded-full border border-dashed border-primary/25 orbit-ring">
                  <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gold shadow-lg shadow-gold/40" />
                </div>
                <div className="absolute -inset-6 rounded-full border border-gold/15 orbit-ring-rev">
                  <span className="absolute top-1/2 -right-1 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-primary" />
                </div>

                {/* Solid accent disc behind photo */}
                <div className="absolute w-52 h-52 md:w-64 md:h-64 rounded-full bg-primary/10" />

                {/* Photo */}
                <Image
                  src="/profile-pi.jpeg"
                  width={320}
                  height={320}
                  alt={NAME}
                  priority
                  sizes="(max-width: 768px) 192px, 240px"
                  className="relative rounded-full border-4 border-surface object-cover w-48 h-48 md:w-60 md:h-60 shadow-2xl"
                />

                {/* Floating name tag on the orbit */}
                <div className="absolute -top-3 right-2 bg-surface border border-border rounded-full px-3 py-1 text-xs font-medium text-textMain shadow-lg floaty">
                  {NAME}
                </div>

                {/* Floating 3D tech chips */}
                {chips.map((chip) => {
                  const Icon = chip.icon;
                  return (
                    <div
                      key={chip.label}
                      className={`absolute ${chip.pos} ${chip.hideSm ? "hidden sm:flex" : "flex"} bg-surface border border-border rounded-xl pl-1.5 pr-3 py-1.5 items-center gap-2 text-xs font-semibold text-textMain shadow-xl hover:-translate-y-0.5 transition-transform floaty whitespace-nowrap`}
                      style={{ animationDelay: chip.delay }}
                    >
                      <span className={`w-6 h-6 rounded-lg ${chip.iconBg} flex items-center justify-center`}>
                        <Icon className={`${chip.color} text-xs`} />
                      </span>
                      {chip.label}
                    </div>
                  );
                })}

                {/* Experience badge */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-gold on-gold rounded-full px-3 py-1 text-xs font-bold shadow-lg">
                  2.5+ yrs building
                </div>
              </div>
            </TiltCard>
          </div>
        </div>
      </div>

      {/* ===== Wavy section divider ===== */}
      <svg
        className="absolute bottom-0 left-0 w-full pointer-events-none text-surface"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M0,40 C360,100 1080,0 1440,60 L1440,100 L0,100 Z"
        />
      </svg>
    </section>
  );
}
