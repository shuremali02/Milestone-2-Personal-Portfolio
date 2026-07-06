"use client";

import { experiences } from "@/data";
import { FaBriefcase, FaMapMarkerAlt, FaCheckCircle } from "react-icons/fa";
import TiltCard from "./tilt-card";
import Reveal from "./reveal";

export default function BentoExperience() {
  return (
    <div className="bg-background py-16 text-textMuted relative overflow-hidden">
      {/* Ambient animated background */}
      <div className="absolute inset-0 animated-gradient opacity-5" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <Reveal className="text-center mb-14 relative">
          <span className="inline-flex items-center gap-2 text-sm font-medium bg-primary/10 text-primary border border-primary/30 rounded-full px-4 py-1.5 mb-4">
            <FaBriefcase /> Where I&apos;ve Worked
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-3 gradient-text">
            Professional Experience
          </h2>
          <p className="text-textMuted max-w-2xl mx-auto">
            My journey building real-world products across web &amp; mobile
          </p>
        </Reveal>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical spine */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primaryHover to-transparent md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <Reveal
                key={index}
                delay={index * 100}
                className="relative pl-12 md:pl-0"
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 top-6 w-4 h-4 -translate-x-1/2 rounded-full bg-primary border-4 border-background timeline-dot z-20" />

                <div
                  className={`md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-12" : "md:ml-auto md:pl-12"
                  }`}
                >
                  <TiltCard
                    max={7}
                    className="gradient-border p-[2px] rounded-3xl"
                  >
                    <div className="glass rounded-3xl p-6 sm:p-8 h-full">
                      {/* Header row */}
                      <div className="flex items-start justify-between gap-4 flex-wrap mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-textMain">
                            {exp.role}
                          </h3>
                          <p className="text-primary font-semibold text-lg">
                            {exp.company}
                          </p>
                        </div>
                        {exp.current && (
                          <span className="flex items-center gap-1.5 text-xs font-semibold bg-green-500/15 text-green-400 border border-green-500/30 rounded-full px-3 py-1">
                            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                            Present
                          </span>
                        )}
                      </div>

                      {/* Meta */}
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-textMuted mb-5">
                        <span className="flex items-center gap-1.5">
                          <FaBriefcase className="text-primary" /> {exp.type}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <FaMapMarkerAlt className="text-primary" />{" "}
                          {exp.location}
                        </span>
                        <span className="font-medium text-textMain">
                          {exp.start} — {exp.end}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-textMain leading-relaxed mb-5">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <ul className="space-y-2.5 mb-6">
                        {exp.achievements.map((item, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <FaCheckCircle className="text-primary mt-1 flex-shrink-0" />
                            <span className="text-textMuted text-sm leading-relaxed">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech pills */}
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((t, i) => (
                          <span
                            key={t}
                            className="pop-in text-xs font-medium bg-primary/10 text-primary border border-primary/20 rounded-full px-3 py-1 hover:bg-primary hover:text-background transition-colors"
                            style={{ animationDelay: `${i * 60}ms` }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </TiltCard>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
