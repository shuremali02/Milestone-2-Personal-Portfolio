"use client";

import Link from "next/link";
import { FaGithub, FaExternalLinkAlt, FaStar } from "react-icons/fa";
import { project } from "@/data";
import TiltCard from "./tilt-card";
import MediaImage from "./media-image";

type Project = (typeof project)[number];

/**
 * Shared project card used on the home Featured grid and the /portfolio page.
 * Hover reveals Live/Code actions over the image; 3D tilt + skeleton images.
 */
export default function ProjectCard({ proj, featured = false }: { proj: Project; featured?: boolean }) {
  return (
    <TiltCard max={featured ? 6 : 9} className={`h-full ${featured ? "lg:col-span-2" : ""}`}>
      <div className="group relative h-full bg-surface border border-border rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/40 transition-all duration-300">
        {/* Image + hover overlay with quick actions */}
        <div className={`relative w-full overflow-hidden ${featured ? "h-64 md:h-80" : "h-48"}`}>
          <MediaImage
            src={proj.img}
            alt={proj.title}
            fill
            cldWidth={featured ? 800 : 500}
            sizes={featured ? "(max-width: 1024px) 100vw, 700px" : "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"}
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-background/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 z-10">
            <Link
              href={proj.route}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-primary text-background rounded-lg text-sm font-semibold flex items-center gap-2 hover:bg-primaryHover active:scale-95 transition-all translate-y-2 group-hover:translate-y-0 duration-300"
            >
              <FaExternalLinkAlt className="text-xs" /> Live Demo
            </Link>
            {proj.github && (
              <Link
                href={proj.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-surface text-textMain border border-border rounded-lg text-sm font-semibold flex items-center gap-2 hover:border-primary active:scale-95 transition-all translate-y-2 group-hover:translate-y-0 duration-300"
              >
                <FaGithub /> Code
              </Link>
            )}
          </div>

          {proj.featured && (
            <div className="absolute top-4 left-4 z-10 bg-gold on-gold text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 shadow-md">
              <FaStar className="text-[10px]" /> Featured
            </div>
          )}
          {proj.year && (
            <div className="absolute top-4 right-4 z-10 bg-surface/90 backdrop-blur-sm text-textMuted text-xs px-3 py-1.5 rounded-full border border-border">
              {proj.year}
            </div>
          )}
        </div>

        {/* Body */}
        <div className="p-6">
          {proj.category && (
            <div className="text-[11px] font-semibold uppercase tracking-wider text-gold mb-2">
              {proj.category}
            </div>
          )}
          <h3 className={`font-bold text-textMain mb-2 group-hover:text-primary transition-colors ${featured ? "text-2xl" : "text-xl"}`}>
            {proj.title}
          </h3>
          <p className="text-textMuted text-sm mb-4 line-clamp-3">{proj.description}</p>

          <div className="flex flex-wrap gap-2">
            {proj.tags?.map((tag, i) => (
              <span
                key={i}
                className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md border border-primary/20"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </TiltCard>
  );
}
