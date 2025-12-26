"use client";
import { IoLogoJavascript } from "react-icons/io";
import { FaHtml5, FaPython, FaReact, FaGitAlt, FaDocker } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript, SiRedux, SiVercel, SiOpenai, SiHuggingface } from "react-icons/si";
import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

const technologies = [
  { icon: FaReact, color: "text-cyan-400", name: "React" },
  { icon: RiNextjsFill, color: "text-white", name: "Next.js" },
  { icon: SiTypescript, color: "text-blue-500", name: "TypeScript" },
  { icon: IoLogoJavascript, color: "text-yellow-400", name: "JavaScript" },
  { icon: FaHtml5, color: "text-orange-500", name: "HTML5" },
  { icon: FaCss3Alt, color: "text-blue-500", name: "CSS3" },
  { icon: RiTailwindCssFill, color: "text-cyan-400", name: "Tailwind" },
  { icon: FaPython, color: "text-yellow-300", name: "Python" },
  { icon: SiOpenai, color: "text-green-400", name: "OpenAI SDK" },
  { icon: SiHuggingface, color: "text-yellow-500", name: "HuggingFace" },
  { icon: FaDocker, color: "text-blue-400", name: "Docker" },
  { icon: SiRedux, color: "text-purple-500", name: "Redux" },
  { icon: FaGitAlt, color: "text-orange-600", name: "Git" },
  { icon: SiVercel, color: "text-white", name: "Vercel" },
];

export default function TechStack() {
  useEffect(() => {
    AOS.init({ duration: 600, once: true });
  }, []);

  return (
    <div className="w-full bg-background py-16">
      {/* Header */}
      <div className="text-center mb-12" data-aos="fade-up">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-3">
          Tech Stack
        </h2>
        <p className="text-textMuted">Technologies I work with</p>
      </div>

      {/* Scrolling Container */}
      <div className="relative overflow-hidden" data-aos="fade-up" data-aos-delay="100">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10"></div>

        {/* Scrolling Track */}
        <div className="bg-surface border-y border-border py-8">
          <div className="flex animate-auto-scroll whitespace-nowrap">
            {/* First Set */}
            {technologies.map((tech, index) => (
              <div key={index} className="flex flex-col items-center mx-6 md:mx-10 group">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-background rounded-2xl flex items-center justify-center border border-border shadow-lg group-hover:scale-110 group-hover:shadow-xl group-hover:border-primary/50 transition-all duration-300">
                  <tech.icon className={`text-3xl md:text-4xl ${tech.color} group-hover:scale-110 transition-transform`} />
                </div>
                <span className="text-textMuted text-xs md:text-sm mt-2 group-hover:text-primary transition-colors">{tech.name}</span>
              </div>
            ))}
            {/* Duplicate Set for Seamless Loop */}
            {technologies.map((tech, index) => (
              <div key={`dup-${index}`} className="flex flex-col items-center mx-6 md:mx-10 group">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-background rounded-2xl flex items-center justify-center border border-border shadow-lg group-hover:scale-110 group-hover:shadow-xl group-hover:border-primary/50 transition-all duration-300">
                  <tech.icon className={`text-3xl md:text-4xl ${tech.color} group-hover:scale-110 transition-transform`} />
                </div>
                <span className="text-textMuted text-xs md:text-sm mt-2 group-hover:text-primary transition-colors">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Row */}
      <div className="max-w-4xl mx-auto mt-12 px-4" data-aos="fade-up" data-aos-delay="200">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-surface border border-border rounded-xl p-4 text-center hover:border-primary/50 transition-all hover:shadow-lg">
            <p className="text-3xl font-bold text-primary">14+</p>
            <p className="text-textMuted text-sm">Technologies</p>
          </div>
          <div className="bg-surface border border-border rounded-xl p-4 text-center hover:border-primary/50 transition-all hover:shadow-lg">
            <p className="text-3xl font-bold text-primary">3+</p>
            <p className="text-textMuted text-sm">AI/ML Tools</p>
          </div>
          <div className="bg-surface border border-border rounded-xl p-4 text-center hover:border-primary/50 transition-all hover:shadow-lg">
            <p className="text-3xl font-bold text-primary">5+</p>
            <p className="text-textMuted text-sm">Frameworks</p>
          </div>
          <div className="bg-surface border border-border rounded-xl p-4 text-center hover:border-primary/50 transition-all hover:shadow-lg">
            <p className="text-3xl font-bold text-primary">2.5+</p>
            <p className="text-textMuted text-sm">Years Learning</p>
          </div>
        </div>
      </div>
    </div>
  );
}