"use client";
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const roles = [
  "Frontend Developer",
  "React.js Expert",
  "Next.js Developer",
  "AI Enthusiast",
  "UI/UX Designer"
];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
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
    <div className="w-full min-h-[90vh] flex items-center justify-center text-textMuted bg-background px-4 overflow-hidden relative">
  {/* Animated Background Gradient */}
      <div className="absolute inset-0 animated-gradient opacity-10"></div>
      
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
        <div className="data-stream" style={{ left: '30%', animationDelay: '1s' }} />
        <div className="data-stream" style={{ left: '50%', animationDelay: '2s' }} />
        <div className="data-stream" style={{ left: '70%', animationDelay: '3s' }} />
        <div className="data-stream" style={{ left: '90%', animationDelay: '4s' }} />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Status Badge */}
        <div className="flex justify-center mb-6" data-aos="fade-down" data-aos-delay="100">
          <div className="bg-surface border border-border rounded-full py-2 px-5 text-sm flex items-center gap-2 shadow-md hover:shadow-lg transition-shadow">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-textMuted">Available for work</span>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center mb-6" data-aos="zoom-in" data-aos-delay="200">
          <div className="relative group">
            {/* AI Glow Rings */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary via-purple-500 to-primary rounded-full blur-xl opacity-30 group-hover:opacity-60 animate-pulse" />
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-primary rounded-full blur-lg opacity-40 group-hover:opacity-70 animate-pulse" style={{ animationDelay: '0.5s' }} />

            {/* Rotating Border */}
            <div className="absolute -inset-1 rounded-full border-2 border-transparent bg-gradient-to-r from-primary via-purple-500 to-primary animate-spin" style={{ borderRadius: '50%', filter: 'blur(2px)' }} />

            <Image
              src="https://res.cloudinary.com/dd4xvwf8d/image/upload/v1755281625/c9cc0a17-e6c2-44e4-aab5-0a2482786f3f_blwhw3.jpg"
              width={140}
              height={140}
              alt="Syed Shurem Ali"
              className="relative rounded-full border-4 border-primary shadow-2xl group-hover:scale-105 transition-transform duration-300 ai-glow"
            />
            
  {/* Floating Sparkles */}
            <div className="absolute -top-2 -right-2 sparkle" style={{ animationDelay: '0s' }}></div>
            <div className="absolute -bottom-2 -left-2 sparkle" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute top-1/2 -right-4 sparkle" style={{ animationDelay: '1s' }}></div>
            
            <div className="absolute -bottom-2 -right-2 bg-primary text-background text-xs font-bold px-3 py-1 rounded-full animate-bounce flex items-center gap-1">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span id="experience-years">2.5+</span> yrs
            </div>
          </div>
        </div>

        {/* Name & Title */}
        <h1
          className="text-3xl md:text-5xl font-bold text-primary mb-2 neon-text"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Syed Shurem Ali
        </h1>

        {/* Typing Animation with AI Cursor */}
        <div
          className="text-lg md:text-xl text-textMuted mb-6 h-8 relative"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <span className="text-primary font-medium typing-cursor">{displayText}</span>
        </div>

        {/* Headline with AI Glow */}
        <h2
          className="text-xl md:text-3xl font-semibold text-textMain mb-4 leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          Building <span className="text-primary bg-primary/10 px-2 rounded neon-text">Modern Web Experiences</span>
          <br className="hidden md:block" /> that Drive Results
        </h2>

        {/* Description with Animated Keywords */}
        <p
          className="text-textMuted text-md md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          I specialize in creating responsive, user-friendly web applications using
          <span className="text-primary font-medium inline-block mx-1 hover:scale-110 transition-transform">React, Next.js, TypeScript</span> and
          <span className="text-primary font-medium inline-block mx-1 hover:scale-110 transition-transform">Tailwind CSS</span>. Currently exploring
          <span className="text-primary font-medium inline-block mx-1 hover:scale-110 transition-transform">Agentic AI</span> &
          <span className="text-primary font-medium inline-block mx-1 hover:scale-110 transition-transform">OpenAI Agents SDK</span> to build intelligent solutions.
        </p>

        {/* CTA Buttons with Glow */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
          data-aos="fade-up"
          data-aos-delay="700"
        >
          <Link href="/contact">
            <button className="bg-primary text-background hover:bg-primaryHover py-3 px-8 rounded-full transition-all shadow-lg font-medium flex items-center gap-2 hover:scale-105 hover:shadow-xl ai-glow">
              <FaEnvelope /> Get in Touch
            </button>
          </Link>
          <Link href="https://drive.google.com/file/d/1wi8TLqxmGrDWF0xYxoqccFE62MnFdv13/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <button className="bg-surface border border-border text-textMain hover:border-primary py-3 px-8 rounded-full transition-all shadow-md font-medium flex items-center gap-2 hover:scale-105 hover:shadow-lg card-glow">
              <FaDownload /> View CV
            </button>
          </Link>
        </div>

        {/* Social Links with Sparkles */}
        <div
          className="flex justify-center gap-4 relative"
          data-aos="fade-up"
          data-aos-delay="800"
        >
  {/* Sparkles around social icons */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 sparkle" style={{ animationDelay: '0s' }}></div>
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 sparkle" style={{ animationDelay: '0.7s' }}></div>
          
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

        {/* Scroll Indicator with Animation */}
        <div
          className="mt-12 animate-bounce relative"
          data-aos="fade-up"
          data-aos-delay="900"
        >
  {/* Glow around scroll indicator */}
          <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full"></div>
          
          <div className="relative w-6 h-10 border-2 border-primary/50 rounded-full mx-auto flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse float"></div>
          </div>
          <p className="text-textMuted text-xs mt-2 neon-text">Scroll Down</p>
        </div>
      </div>
    </div>
  );
}
