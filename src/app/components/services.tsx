"use client";

import { services, type Service } from "@/data";
import { FaCode, FaMobileAlt, FaRobot, FaPaintBrush, FaServer } from "react-icons/fa";
import TiltCard from "./tilt-card";
import Reveal from "./reveal";

const ICONS: Record<Service["icon"], React.ElementType> = {
  code: FaCode,
  mobile: FaMobileAlt,
  ai: FaRobot,
  design: FaPaintBrush,
  deploy: FaServer,
};

// Bento spans for the 5 cards at lg+: row 1 is 2+2, row 2 is 1+1+2.
const SPANS = ["lg:col-span-2", "lg:col-span-2", "", "", "lg:col-span-2"];

export default function Services() {
  return (
    <div className="bg-background py-16 text-textMuted relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal className="text-center mb-12 relative">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold mb-3">
            <span className="w-6 h-px bg-gold" /> Services <span className="w-6 h-px bg-gold" />
          </span>
          <h2
            className="font-black uppercase leading-none tracking-tight mb-3 text-textMain"
            style={{ fontSize: "clamp(2.5rem, 9vw, 120px)" }}
          >
            What I <span className="text-primary">Build</span>
          </h2>
          <p className="text-textMuted max-w-2xl mx-auto">
            Full-stack products, from idea to production server
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => {
            const Icon = ICONS[service.icon];
            return (
              <Reveal key={service.title} delay={index * 100} className={SPANS[index]}>
                <TiltCard max={8} className="rounded-xl h-full">
                  <div className="bg-surface border border-border rounded-xl p-6 h-full card-glow hover:border-primary/50 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 group relative overflow-hidden">
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative z-10">
                      <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                        <Icon className="text-primary text-2xl" />
                      </div>
                      <h3 className="text-textMain font-semibold text-lg mb-2">
                        {service.title}
                      </h3>
                      <p className="text-textMuted text-sm mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {service.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-border px-3 py-1 text-xs text-textMuted"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </div>
  );
}
