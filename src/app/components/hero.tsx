"use client";
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
// CV modal temporarily disabled — see cv-modal.tsx
// import CVModal from "./cv-modal";
import TiltCard from "./tilt-card";
import Magnetic from "./magnetic";
import { buildingSince } from "@/data";

const NAME = "Syed Shurem Ali";

const roles = [
  "AI Engineer",
  "Full-Stack Developer",
];

const stack = ["OpenAI Agents SDK", "RAG", "Python", "Multi-Agent Systems"];

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
              I&apos;m an{" "}
              <br className="hidden sm:block" />
              <span className="sr-only">AI Engineer and Full-Stack Developer</span>
              <span aria-hidden="true" className="text-gold typing-cursor">{displayText}</span>
            </h1>

            <p
              className="text-textMuted text-base md:text-lg max-w-xl mx-auto lg:mx-0 mb-6 leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              I build production LLM agents — multi-agent orchestration, RAG, and tool-calling
              on the OpenAI Agents SDK — and ship them as full-stack products end-to-end, from
              MySQL schema to VPS deployment.
            </p>

            <div
              className="flex flex-wrap justify-center lg:justify-start gap-2 mb-8"
              data-aos="fade-up"
              data-aos-delay="250"
            >
              {stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border px-3 py-1 text-xs text-textMuted"
                >
                  {item}
                </span>
              ))}
            </div>

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

          {/* ===== Right column — clean framed photo ===== */}
          <div className="order-1 lg:order-2 flex justify-center" data-aos="fade-up" data-aos-delay="150">
            <TiltCard max={6} glare={false} className="relative">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                {/* Offset accent panel behind the photo */}
                <div className="absolute -top-3 -right-3 w-full h-full rounded-2xl bg-primary/10 border border-primary/20" />

                <Image
                  src="/profile-photo.jpeg"
                  width={320}
                  height={320}
                  alt={NAME}
                  priority
                  sizes="(max-width: 768px) 256px, 320px"
                  className="relative rounded-2xl border-4 border-surface object-cover w-full h-full shadow-2xl"
                />

                {/* Building-since badge */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-gold on-gold rounded-full px-4 py-1.5 text-xs font-bold shadow-lg whitespace-nowrap">
                  Building since {buildingSince}
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
