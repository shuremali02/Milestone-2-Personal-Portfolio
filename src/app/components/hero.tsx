"use client";
import React, { useEffect, useState, useRef } from 'react';
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaCode, FaMobileAlt, FaServer, FaRobot } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import CVModal from "./cv-modal";
import TiltCard from "./tilt-card";
import Magnetic from "./magnetic";

const NAME = "Syed Shurem Ali";

const roles = [
  "Full-Stack Developer",
  "AI Engineer",
  "Flutter & Android Developer",
  "Next.js Developer",
  "VPS / Deployment Engineer"
];

// Floating tech chips orbiting the profile image
const floatingChips = [
  { icon: FaCode, label: "Next.js", className: "-top-2 -left-10 lg:-left-16", delay: "0s" },
  { icon: FaMobileAlt, label: "Flutter", className: "top-10 -right-12 lg:-right-20", delay: "0.8s" },
  { icon: FaServer, label: "VPS / Nginx", className: "-bottom-4 -left-14 lg:-left-20", delay: "1.6s" },
  { icon: FaRobot, label: "Agentic AI", className: "bottom-10 -right-10 lg:-right-16", delay: "2.4s" },
];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  // Mouse parallax: aurora layers read --px / --py at different depths
  const handleParallax = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = heroRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5; // -0.5..0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.setProperty("--px", px.toFixed(3));
    el.style.setProperty("--py", py.toFixed(3));
  };

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
    <div
      ref={heroRef}
      onMouseMove={handleParallax}
      className="w-full min-h-[90vh] flex items-center text-textMuted bg-background px-4 overflow-hidden relative"
    >
  {/* Animated Background Gradient */}
      <div className="absolute inset-0 animated-gradient opacity-5"></div>

  {/* Aurora Blobs — drift + mouse parallax */}
      <div className="aurora-blob aurora-1" />
      <div className="aurora-blob aurora-2" />
      <div className="aurora-blob aurora-3" />

  {/* 3D Perspective Grid Floor */}
      <div className="grid-floor" />

  {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${10 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

  {/* AI Circuit Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="data-stream" style={{ left: '10%', animationDelay: '0s' }} />
        <div className="data-stream" style={{ left: '50%', animationDelay: '2s' }} />
        <div className="data-stream" style={{ left: '90%', animationDelay: '4s' }} />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ===== Left column — text ===== */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Status Badge */}
            <div className="flex justify-center lg:justify-start mb-6" data-aos="fade-down" data-aos-delay="100">
              <div className="glass rounded-full py-2 px-5 text-sm flex items-center gap-2 shadow-md hover:shadow-lg transition-shadow">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-textMuted">Available for work</span>
              </div>
            </div>

            {/* Name — staggered 3D letter reveal */}
            <h1 className="text-4xl md:text-6xl font-bold mb-3" aria-label={NAME}>
              {NAME.split("").map((char, i) => (
                <span
                  key={i}
                  aria-hidden="true"
                  className="letter-reveal gradient-text"
                  style={{ animationDelay: `${300 + i * 45}ms` }}
                >
                  {char === " " ? " " : char}
                </span>
              ))}
            </h1>

            {/* Typing Animation with AI Cursor */}
            <div
              className="text-lg md:text-2xl text-textMuted mb-6 h-9 relative"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <span className="text-primary font-semibold typing-cursor">{displayText}</span>
            </div>

            {/* Headline with AI Glow */}
            <h2
              className="text-xl md:text-3xl font-semibold text-textMain mb-4 leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              Building <span className="text-primary bg-primary/10 px-2 rounded">Full-Stack Web &amp; Mobile Apps</span>
              <br className="hidden md:block" /> from Database to Deployment
            </h2>

            {/* Description with Animated Keywords */}
            <p
              className="text-textMuted text-md md:text-lg max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              Full-Stack Developer &amp; AI Engineer shipping end-to-end products with
              <span className="text-primary font-medium inline-block mx-1 hover:scale-110 transition-transform">Next.js, TypeScript</span> &amp;
              <span className="text-primary font-medium inline-block mx-1 hover:scale-110 transition-transform">Flutter / Android</span>, powered by
              <span className="text-primary font-medium inline-block mx-1 hover:scale-110 transition-transform">Agentic AI</span>. I own the full lifecycle — from
              <span className="text-primary font-medium inline-block mx-1 hover:scale-110 transition-transform">MySQL databases</span> to
              <span className="text-primary font-medium inline-block mx-1 hover:scale-110 transition-transform">VPS, Nginx &amp; Hostinger</span> deployment.
            </p>

            {/* CTA Buttons with Glow */}
            <div
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <Magnetic strength={8}>
                <Link href="/contact">
                  <button className="bg-primary text-background hover:bg-primaryHover py-3 px-8 rounded-full transition-all shadow-lg font-medium flex items-center gap-2 hover:scale-105 hover:shadow-xl ai-glow">
                    <FaEnvelope /> Get in Touch
                  </button>
                </Link>
              </Magnetic>
              <Magnetic strength={8}>
                <button
                  onClick={() => setIsCVModalOpen(true)}
                  className="bg-surface border border-border text-textMain hover:border-primary py-3 px-8 rounded-full transition-all shadow-md font-medium flex items-center gap-2 hover:scale-105 hover:shadow-lg card-glow"
                >
                  <FaDownload /> View CV
                </button>
              </Magnetic>

              <CVModal isOpen={isCVModalOpen} onClose={() => setIsCVModalOpen(false)} />
            </div>

            {/* Social Links */}
            <div
              className="flex justify-center lg:justify-start gap-4 relative z-[100]"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <Link href="https://github.com/shuremali02" target="_blank" className="w-11 h-11 bg-surface border border-border rounded-full flex items-center justify-center hover:bg-primary hover:border-primary transition-all group hover:scale-110 hover:shadow-lg card-glow">
                <FaGithub className="text-primary text-lg group-hover:text-background" />
              </Link>
              <Link href="https://linkedin.com/in/syed-shurem-ali-5a55852a0" target="_blank" className="w-11 h-11 bg-surface border border-border rounded-full flex items-center justify-center hover:bg-primary hover:border-primary transition-all group hover:scale-110 hover:shadow-lg card-glow">
                <FaLinkedin className="text-primary text-lg group-hover:text-background" />
              </Link>
              <Link href="mailto:shuremsyed41@gmail.com" className="w-11 h-11 bg-surface border border-border rounded-full flex items-center justify-center hover:bg-primary hover:border-primary transition-all group hover:scale-110 hover:shadow-lg card-glow">
                <FaEnvelope className="text-primary text-lg group-hover:text-background" />
              </Link>
            </div>
          </div>

          {/* ===== Right column — 3D profile visual ===== */}
          <div className="order-1 lg:order-2 flex justify-center" data-aos="zoom-in" data-aos-delay="200">
            <TiltCard max={16} glare={false}>
              <div className="relative group">
                {/* AI Glow Rings */}
                <div className="absolute -inset-8 bg-gradient-to-r from-primary via-purple-500 to-primary rounded-full blur-2xl opacity-40 group-hover:opacity-70 animate-pulse" />
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-primary rounded-full blur-xl opacity-50 group-hover:opacity-80 animate-pulse" style={{ animationDelay: '0.5s' }} />

                {/* Rotating Border */}
                <div className="absolute -inset-2 rounded-full border-2 border-transparent bg-gradient-to-r from-primary via-purple-500 to-primary animate-spin" style={{ borderRadius: '50%', filter: 'blur(2px)', animationDuration: '6s' }} />

                <Image
                  src="https://res.cloudinary.com/dd4xvwf8d/image/upload/v1755281625/c9cc0a17-e6c2-44e4-aab5-0a2482786f3f_blwhw3.jpg"
                  width={280}
                  height={280}
                  alt="Syed Shurem Ali"
                  priority
                  className="relative rounded-full border-4 border-primary shadow-2xl group-hover:scale-105 transition-transform duration-300 ai-glow w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 object-cover"
                />

                {/* Floating tech chips */}
                {floatingChips.map((chip) => {
                  const Icon = chip.icon;
                  return (
                    <div
                      key={chip.label}
                      className={`absolute ${chip.className} glass rounded-full px-3 py-1.5 flex items-center gap-1.5 text-xs font-semibold text-textMain shadow-lg float whitespace-nowrap`}
                      style={{ animationDelay: chip.delay }}
                    >
                      <Icon className="text-primary" /> {chip.label}
                    </div>
                  );
                })}

                {/* Experience badge */}
                <div className="absolute -bottom-2 right-4 bg-primary text-background text-xs font-bold px-3 py-1 rounded-full animate-bounce flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  <span id="experience-years">2.5+</span> yrs
                </div>
              </div>
            </TiltCard>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-14 relative z-[100] flex flex-col items-center" data-aos="fade-up" data-aos-delay="900">
          <div className="relative w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse float"></div>
          </div>
          <p className="text-textMuted text-xs mt-2">Scroll Down</p>
        </div>
      </div>
    </div>
  );
}
