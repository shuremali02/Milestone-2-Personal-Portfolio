"use client";

import { project } from "@/data";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import Magnetic from "./magnetic";
import Reveal from "./reveal";
import ProjectCard from "./project-card";

const featuredProjects = project.filter((p) => p.featured || p.year === 2025);
const topProjects = project.slice(0, 9);

export default function BentoProjects() {
  return (
    <div className="bg-background py-20 text-textMuted relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal className="text-center mb-12">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold mb-3">
            <span className="w-6 h-px bg-gold" /> My Work <span className="w-6 h-px bg-gold" />
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-3 text-textMain">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-textMuted max-w-2xl mx-auto">
            A curated selection of my best work in web development and AI
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
          {featuredProjects[0] && (
            <Reveal className="lg:col-span-2 h-full">
              <ProjectCard proj={featuredProjects[0]} featured />
            </Reveal>
          )}
          {topProjects.slice(1, 7).map((proj, index) => (
            <Reveal key={index} className="h-full" delay={index * 80}>
              <ProjectCard proj={proj} />
            </Reveal>
          ))}
        </div>

        <div className="text-center mt-10">
          <Magnetic strength={8} className="mx-auto">
            <Link href="/portfolio">
              <button className="px-8 py-3 bg-primary text-background rounded-lg font-semibold hover:bg-primaryHover hover:shadow-lg hover:shadow-primary/25 active:scale-[0.98] transition-all flex items-center gap-2 mx-auto">
                View All Projects <FaExternalLinkAlt className="text-sm" />
              </button>
            </Link>
          </Magnetic>
        </div>
      </div>
    </div>
  );
}
