"use client";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaGraduationCap, FaCode, FaRocket, FaCheckCircle, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import ExperienceCounter from "../components/experience-counter";
import BentoExperience from "../components/bento-experience";
import TiltCard from "../components/tilt-card";
import { cld } from "@/utils/cloudinary";

const whatIDo = [
  "Full-Stack Web Apps with Next.js & MySQL",
  "Android Apps with Flutter, Dart & Android SDK",
  "VPS Deployment with Nginx & NSSM",
  "Hostinger Hosting — Domains, Subdomains & MySQL DBs",
];

export default function About() {
  useEffect(() => { AOS.init({ duration: 800, once: true }) }, [])

  return (
    <div className="bg-background py-16 text-textMuted relative overflow-hidden">
      {/* Decorative layers */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{ backgroundImage: "radial-gradient(var(--text-main) 1px, transparent 1px)", backgroundSize: "24px 24px" }}
      />
      <div className="hero-glow absolute -top-24 -left-16 w-80 h-80 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
      <div className="hero-glow absolute bottom-10 -right-20 w-96 h-96 rounded-full bg-gold/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center relative mb-12">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold mb-3">
            <span className="w-6 h-px bg-gold" /> Get to know me <span className="w-6 h-px bg-gold" />
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-textMain">
            About <span className="text-primary">Me</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile card */}
          <div className="lg:col-span-1" data-aos="fade-right">
            <TiltCard max={6} glare={false} className="rounded-xl">
              <div className="bg-surface border border-border rounded-xl p-6 text-center shadow-lg h-full">
                <div className="relative w-fit mx-auto">
                  <div className="absolute -top-2 -right-2 w-full h-full rounded-xl bg-primary/10 border border-primary/20" />
                  <Image
                    src="/profile-pi.jpeg"
                    alt="Syed Shurem Ali"
                    width={220}
                    height={240}
                    sizes="220px"
                    className="relative rounded-xl border border-border shadow-lg object-cover w-full max-w-[220px] h-56"
                  />
                </div>

                <h2 className="text-2xl font-bold text-textMain mt-5">Syed Shurem Ali</h2>
                <p className="text-textMuted mt-1">Full-Stack Developer &amp; AI Engineer</p>

                <div className="inline-flex items-center gap-2 mt-3 bg-gold/10 border border-gold/20 rounded-full px-3 py-1">
                  <span className="text-gold font-bold"><ExperienceCounter /></span>
                  <span className="text-textMuted text-sm">Years Building</span>
                </div>

                <div className="mt-6 pt-6 border-t border-border space-y-1.5 text-sm">
                  <p className="text-textMuted">Based in <span className="text-textMain font-medium">Pakistan</span></p>
                  <p className="inline-flex items-center gap-2 text-green-500 font-medium">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" /> Available for Freelance
                  </p>
                </div>

                <div className="flex justify-center gap-2 mt-5">
                  <Link href="https://linkedin.com/in/syed-shurem-ali-5a55852a0" target="_blank" aria-label="LinkedIn" className="w-10 h-10 bg-background border border-border rounded-lg flex items-center justify-center text-textMuted hover:text-primary hover:border-primary transition-colors">
                    <FaLinkedin />
                  </Link>
                  <Link href="https://github.com/shuremali02" target="_blank" aria-label="GitHub" className="w-10 h-10 bg-background border border-border rounded-lg flex items-center justify-center text-textMuted hover:text-primary hover:border-primary transition-colors">
                    <FaGithub />
                  </Link>
                  <Link href="mailto:shuremsyed41@gmail.com" aria-label="Email" className="w-10 h-10 bg-background border border-border rounded-lg flex items-center justify-center text-textMuted hover:text-primary hover:border-primary transition-colors">
                    <FaEnvelope />
                  </Link>
                </div>
              </div>
            </TiltCard>
          </div>

          {/* Right column */}
          <div className="lg:col-span-2 space-y-6" data-aos="fade-left">
            {/* Who I Am */}
            <TiltCard max={4} glare={false} className="rounded-xl">
              <div className="bg-surface border border-border rounded-xl p-6 sm:p-7 shadow-lg h-full">
                <h3 className="text-xl font-bold text-textMain mb-4 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <FaRocket className="text-primary" />
                  </span>
                  Who I Am
                </h3>
                <p className="text-textMain leading-relaxed">
                  I&apos;m a Full-Stack Developer &amp; AI Engineer who ships complete products — not just front-ends. With <span className="text-primary font-semibold"><ExperienceCounter /> years building</span> across web and mobile, I work end-to-end with React.js, Next.js, TypeScript, and Tailwind CSS, add cross-platform apps with Flutter &amp; Dart, and integrate agentic AI to make products intelligent.
                </p>
                <p className="text-textMain leading-relaxed mt-3">
                  I work <span className="text-primary font-semibold">full-time at a software studio</span>, shipping production client applications and owning their deployment — VPS servers with Nginx and NSSM, plus Hostinger hosting with custom domains, subdomains, and MySQL databases. Alongside that, I serve as <span className="text-primary font-semibold">Head of Business Development &amp; AI Engineer</span> at an AI company, where I design intelligent applications with LLMs, AI agents, and RAG, and bridge business strategy with technical delivery.
                </p>

                <div className="mt-5 border-l-2 border-gold pl-4">
                  <p className="text-textMain leading-relaxed italic">
                    Most developers stop at <span className="text-gold font-semibold">git push</span>. I take products from a Figma file to a live domain — front-end, mobile, database, and the server it all runs on.
                  </p>
                </div>
              </div>
            </TiltCard>

            {/* Education */}
            <TiltCard max={4} glare={false} className="rounded-xl">
              <div className="bg-surface border border-border rounded-xl p-6 sm:p-7 shadow-lg h-full">
                <h3 className="text-xl font-bold text-textMain mb-5 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-lg bg-gold/15 flex items-center justify-center">
                    <FaGraduationCap className="text-gold" />
                  </span>
                  Education
                </h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-3 h-3 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-textMain font-semibold">Agentic AI Development Course</h4>
                      <p className="text-textMuted text-sm">Governor House Initiative — Ongoing</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-3 h-3 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-textMain font-semibold">Diploma in Information Technology</h4>
                      <p className="text-textMuted text-sm">SZABIST ZABTech, Hyderabad — 1 Year</p>
                    </div>
                  </div>
                </div>
              </div>
            </TiltCard>

            {/* What I Do */}
            <TiltCard max={4} glare={false} className="rounded-xl">
              <div className="bg-surface border border-border rounded-xl p-6 sm:p-7 shadow-lg h-full">
                <h3 className="text-xl font-bold text-textMain mb-5 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <FaCode className="text-primary" />
                  </span>
                  What I Do
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {whatIDo.map((item) => (
                    <div key={item} className="flex items-start gap-3 bg-background rounded-lg border border-border p-3 hover:border-primary/40 transition-colors">
                      <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-textMain text-sm">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </TiltCard>
          </div>
        </div>
      </div>

      {/* Professional Experience — part of the About story */}
      <div id="experience" className="relative z-10 mt-10">
        <BentoExperience />
      </div>
    </div>
  )
}
