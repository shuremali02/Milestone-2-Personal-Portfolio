"use client";

import { project } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt, FaStar } from "react-icons/fa";
import { useState } from "react";

const featuredProjects = project.filter((p) => p.featured || p.year === 2025);
const topProjects = project.slice(0, 9);

export default function BentoProjects() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="bg-background py-16 text-textMuted relative overflow-hidden">
      <div className="absolute inset-0 animated-gradient opacity-5" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 relative">
          <div className="absolute -top-4 left-1/4 sparkle" style={{ animationDelay: '0s' }} />
          <div className="absolute -top-4 right-1/4 sparkle" style={{ animationDelay: '0.5s' }} />
          
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-3 neon-text">
            Featured Projects
          </h2>
          <p className="text-textMuted max-w-2xl mx-auto">
            A curated selection of my best work in web development and AI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
          {featuredProjects[0] && (
            <div
              className="lg:col-span-2 relative group overflow-hidden rounded-2xl bg-surface border border-border shadow-lg hover:shadow-xl transition-all duration-300 card-glow"
              onMouseEnter={() => setHoveredCard(0)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/30 rounded-2xl transition-colors duration-500" />
              
              <div className="relative h-64 md:h-80 w-full overflow-hidden">
                <Image
                  src={featuredProjects[0].img}
                  alt={featuredProjects[0].title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 66vw, 600px"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {featuredProjects[0].featured && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-primary to-primaryHover text-background text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1">
                    <FaStar /> Featured
                  </div>
                )}
                {featuredProjects[0].year && (
                  <div className="absolute top-4 right-4 bg-surface/90 backdrop-blur-sm text-textMuted text-xs px-3 py-1.5 rounded-full border border-border">
                    {featuredProjects[0].year}
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-primary mb-3">
                  {featuredProjects[0].title}
                </h3>
                {featuredProjects[0].category && (
                  <div className="text-xs text-primary font-medium mb-3">
                    {featuredProjects[0].category}
                  </div>
                )}
                <p className="text-textMuted mb-4 line-clamp-3">
                  {featuredProjects[0].description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {featuredProjects[0].tags?.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link
                    href={featuredProjects[0].route}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-primary text-background rounded-lg hover:bg-primaryHover transition-colors text-sm font-medium"
                  >
                    Live Demo
                  </Link>
                  {featuredProjects[0].github && (
                    <Link
                      href={featuredProjects[0].github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-surface text-textMain border border-border rounded-lg hover:bg-surface/80 transition-colors text-sm font-medium"
                    >
                      GitHub
                    </Link>
                  )}
                </div>
              </div>
            </div>
          )}

          {topProjects.slice(1, 7).map((proj, index) => (
            <div
              key={index}
              className="bg-surface border border-border rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group card-glow relative"
              onMouseEnter={() => setHoveredCard(index + 1)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="absolute top-2 right-2 sparkle opacity-0 group-hover:opacity-100" style={{ animationDelay: '0s' }} />
              <div className="absolute bottom-2 left-2 sparkle opacity-0 group-hover:opacity-100" style={{ animationDelay: '0.5s' }} />
              
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={proj.img}
                  alt={proj.title}
                  width={400}
                  height={200}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {proj.featured && (
                  <div className="absolute top-3 left-3 bg-gradient-to-r from-primary to-primaryHover text-background text-xs font-bold px-3 py-1 rounded-full">
                    Featured
                  </div>
                )}
                {proj.year && (
                  <div className="absolute top-3 right-3 bg-surface/80 backdrop-blur-sm text-textMuted text-xs px-2 py-1 rounded-full border border-border">
                    {proj.year}
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">{proj.title}</h3>
                {proj.category && (
                  <div className="text-xs text-primary font-medium mb-2">{proj.category}</div>
                )}
                <p className="text-textMuted mb-4 line-clamp-3">{proj.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {proj.tags?.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link
                    href={proj.route}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-primary text-background rounded-lg hover:bg-primaryHover transition-colors text-sm font-medium"
                  >
                    Live Demo
                  </Link>
                  {proj.github && (
                    <Link
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-surface text-textMain border border-border rounded-lg hover:bg-surface/80 transition-colors text-sm font-medium"
                    >
                      GitHub
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 relative">
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 sparkle" style={{ animationDelay: '0s' }} />
          <div className="absolute top-1/2 right-1/4 -translate-y-1/2 sparkle" style={{ animationDelay: '0.5s' }} />
          
          <Link href="/portfolio">
            <button className="px-8 py-3 bg-gradient-to-r from-primary to-primaryHover text-background rounded-full font-medium hover:shadow-lg hover:shadow-primary/25 hover:scale-105 transition-all flex items-center gap-2 mx-auto ai-glow">
              View All Projects <FaExternalLinkAlt />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
