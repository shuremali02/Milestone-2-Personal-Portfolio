"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaBriefcase, FaGraduationCap, FaMapMarkerAlt } from "react-icons/fa";
import Reveal from "./reveal";
import TiltCard from "./tilt-card";
import ExperienceCounter from "./experience-counter";

/**
 * Compact About teaser for the homepage — the full story lives at /about.
 */
export default function AboutPreview() {
  return (
    <div className="bg-background py-16 text-textMuted relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal>
          <TiltCard max={4} className="rounded-xl">
            <div className="glass rounded-xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-[auto,1fr] gap-8 items-center">
              <Image
                src="https://res.cloudinary.com/dd4xvwf8d/image/upload/v1755281625/c9cc0a17-e6c2-44e4-aab5-0a2482786f3f_blwhw3.jpg"
                alt="Syed Shurem Ali"
                width={140}
                height={140}
                className="rounded-xl border-2 border-primary/40 shadow-lg mx-auto md:mx-0"
              />
              <div className="text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-textMain mb-3">
                  About <span className="text-primary">Me</span>
                </h2>
                <p className="text-textMain leading-relaxed mb-5 max-w-2xl">
                  Full-Stack Developer &amp; AI Engineer with{" "}
                  <span className="text-primary font-semibold"><ExperienceCounter /> years building</span>{" "}
                  — production web apps with Next.js &amp; TypeScript, mobile with
                  Flutter &amp; Dart, agentic AI features, and the VPS &amp;
                  Hostinger deployments they run on. I ship end-to-end.
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 text-sm mb-6">
                  <span className="flex items-center gap-2">
                    <FaBriefcase className="text-primary" /> AI Engineer &amp; Full-Stack Developer
                  </span>
                  <span className="flex items-center gap-2">
                    <FaGraduationCap className="text-primary" /> Agentic AI — Governor House Initiative
                  </span>
                  <span className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-primary" /> Pakistan
                  </span>
                </div>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                >
                  My full story &amp; experience <FaArrowRight />
                </Link>
              </div>
            </div>
          </TiltCard>
        </Reveal>
      </div>
    </div>
  );
}
