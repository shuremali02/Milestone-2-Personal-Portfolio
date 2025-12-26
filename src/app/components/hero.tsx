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
    <div className="w-full min-h-[90vh] flex items-center justify-center text-textMuted bg-background px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
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
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primaryHover rounded-full blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
            <Image
              src="https://res.cloudinary.com/dd4xvwf8d/image/upload/v1755281625/c9cc0a17-e6c2-44e4-aab5-0a2482786f3f_blwhw3.jpg"
              width={140}
              height={140}
              alt="Syed Shurem Ali"
              className="relative rounded-full border-4 border-primary shadow-xl group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute -bottom-2 -right-2 bg-primary text-background text-xs font-bold px-3 py-1 rounded-full animate-bounce">
              2.5+ yrs
            </div>
          </div>
        </div>

        {/* Name & Title */}
        <h1
          className="text-3xl md:text-5xl font-bold text-primary mb-2"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Syed Shurem Ali
        </h1>

        {/* Typing Animation */}
        <div
          className="text-lg md:text-xl text-textMuted mb-6 h-8"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <span className="text-primary font-medium">{displayText}</span>
          <span className="animate-pulse text-primary">|</span>
        </div>

        {/* Headline */}
        <h2
          className="text-xl md:text-3xl font-semibold text-textMain mb-4 leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          Building <span className="text-primary bg-primary/10 px-2 rounded">Modern Web Experiences</span>
          <br className="hidden md:block" /> that Drive Results
        </h2>

        {/* Description */}
        <p
          className="text-textMuted text-md md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          I specialize in creating responsive, user-friendly web applications using
          <span className="text-primary font-medium"> React, Next.js, TypeScript</span> and
          <span className="text-primary font-medium"> Tailwind CSS</span>. Currently exploring
          <span className="text-primary font-medium"> Agentic AI</span> &
          <span className="text-primary font-medium"> OpenAI Agents SDK</span> to build intelligent solutions.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
          data-aos="fade-up"
          data-aos-delay="700"
        >
          <Link href="/contact">
            <button className="bg-primary text-background hover:bg-primaryHover py-3 px-8 rounded-full transition-all shadow-lg font-medium flex items-center gap-2 hover:scale-105 hover:shadow-xl">
              <FaEnvelope /> Get in Touch
            </button>
          </Link>
          <Link href="https://docs.google.com/document/d/19yPE2EWRe6PUPX9WkA1m3r6wkthM2jRL/edit?usp=sharing&ouid=107599650906310040146&rtpof=true&sd=true" target="_blank">
            <button className="bg-surface border border-border text-textMain hover:border-primary py-3 px-8 rounded-full transition-all shadow-md font-medium flex items-center gap-2 hover:scale-105 hover:shadow-lg">
              <FaDownload /> Download CV
            </button>
          </Link>
        </div>

        {/* Social Links */}
        <div
          className="flex justify-center gap-4"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <Link href="https://github.com/shuremali02" target="_blank" className="w-11 h-11 bg-surface border border-border rounded-full flex items-center justify-center hover:bg-primary hover:border-primary transition-all group hover:scale-110 hover:shadow-lg">
            <FaGithub className="text-primary text-lg group-hover:text-background" />
          </Link>
          <Link href="https://linkedin.com/in/syed-shurem-ali-5a55852a0" target="_blank" className="w-11 h-11 bg-surface border border-border rounded-full flex items-center justify-center hover:bg-primary hover:border-primary transition-all group hover:scale-110 hover:shadow-lg">
            <FaLinkedin className="text-primary text-lg group-hover:text-background" />
          </Link>
          <Link href="mailto:shuremsyed41@gmail.com" className="w-11 h-11 bg-surface border border-border rounded-full flex items-center justify-center hover:bg-primary hover:border-primary transition-all group hover:scale-110 hover:shadow-lg">
            <FaEnvelope className="text-primary text-lg group-hover:text-background" />
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div
          className="mt-12 animate-bounce"
          data-aos="fade-up"
          data-aos-delay="900"
        >
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full mx-auto flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
          <p className="text-textMuted text-xs mt-2">Scroll Down</p>
        </div>
      </div>
    </div>
  );
}
