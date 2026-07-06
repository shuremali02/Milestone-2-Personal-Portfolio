"use client";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaGraduationCap, FaCode, FaRocket } from "react-icons/fa";
import ExperienceCounter from "../components/experience-counter";
import BentoExperience from "../components/bento-experience";

export default function About() {
  useEffect(() => { AOS.init({ duration: 800, once: true }) }, [])

  return (
    <div className="bg-background py-12 text-textMuted relative overflow-hidden">
      <div className="absolute inset-0 animated-gradient opacity-5" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center relative mb-12">
          
          <h1 className="text-center text-4xl md:text-5xl font-bold gradient-text mb-12">
            About Me
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div
            className="lg:col-span-1"
            data-aos="fade-right"
          >
            <div className="bg-surface border border-border rounded-2xl p-6 text-center shadow-lg card-glow relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 opacity-0 hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <Image
                  src="https://res.cloudinary.com/dd4xvwf8d/image/upload/v1755281625/c9cc0a17-e6c2-44e4-aab5-0a2482786f3f_blwhw3.jpg"
                  alt="Syed Shurem Ali"
                  width={180}
                  height={180}
                  className="rounded-full mx-auto border-4 border-primary shadow-lg ai-glow"
                />
                <h2 className="text-2xl font-bold text-primary mt-4">Syed Shurem Ali</h2>
                <p className="text-textMuted mt-1">Full-Stack Developer &amp; AI Engineer</p>
                <p className="text-primary font-semibold mt-1"><ExperienceCounter /> Years Experience</p>

                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-textMuted text-sm">Based in Pakistan</p>
                  <p className="text-primary text-sm mt-1">Available for Freelance</p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="lg:col-span-2 space-y-6"
            data-aos="fade-left"
          >
            <div className="bg-surface border border-border rounded-2xl p-6 shadow-lg card-glow relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                  <FaRocket className="text-primaryHover" /> Who I Am
                </h3>
                <p className="text-textMain leading-relaxed">
                  I am a passionate Full-Stack Developer &amp; AI Engineer building modern, responsive products across web and mobile. With over <span className="text-primary font-semibold"><ExperienceCounter /> years</span> of hands-on experience, I work end-to-end with React.js, Next.js, TypeScript, Tailwind CSS, and Flutter / Dart for native Android apps — and integrate Agentic AI to make them intelligent.
                </p>
                <p className="text-textMain leading-relaxed mt-3">
                  I currently work <span className="text-primary font-semibold">full-time as a Full-Stack Developer</span>, where I ship production apps and own their deployment — VPS servers with Nginx and NSSM, plus Hostinger hosting with custom domains, subdomains, and MySQL databases. Alongside this, I&apos;m advancing my Agentic AI skills through the Governor House Initiative.
                </p>
              </div>
            </div>

            <div className="bg-surface border border-border rounded-2xl p-6 shadow-lg card-glow relative overflow-hidden">
              
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                  <FaGraduationCap className="text-primaryHover" /> Education
                </h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-textMain font-semibold">Agentic AI Development Course</h4>
                      <p className="text-textMuted text-sm">Governor House Initiative - Ongoing</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-textMain font-semibold">Diploma in Information Technology</h4>
                      <p className="text-textMuted text-sm">SZABIST ZABTech, Hyderabad - 1 Year</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-surface border border-border rounded-2xl p-6 shadow-lg card-glow relative overflow-hidden">
              
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                  <FaCode className="text-primaryHover" /> What I Do
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <p className="text-textMain">Full-Stack Web Apps with Next.js & MySQL</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <p className="text-textMain">Android Apps with Flutter, Dart & Android SDK</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <p className="text-textMain">VPS Deployment with Nginx & NSSM</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <p className="text-textMain">Hostinger Hosting — Domains, Subdomains & MySQL DBs</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Professional Experience — part of the About story */}
      <div id="experience" className="relative z-10 mt-8">
        <BentoExperience />
      </div>
    </div>
  )
}
