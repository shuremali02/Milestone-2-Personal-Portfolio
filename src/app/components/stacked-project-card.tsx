"use client";

import Link from "next/link";
import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";
import { project, type GalleryShot } from "@/data";
import MediaImage from "./media-image";

type Project = (typeof project)[number];

/** Base sticky offset (clears the fixed navbar) plus the per-card stagger. */
const STICKY_BASE = 96;
const STICKY_STEP = 28;

const PANEL = "relative overflow-hidden rounded-[28px] sm:rounded-[40px] md:rounded-[50px] bg-background";

/**
 * One card in the sticky stack. Each card pins `STICKY_STEP` px lower than the
 * previous one so the stack fans out, and the parent section drives
 * `--stack-scale` on scroll to shrink cards as they fall behind.
 */
export default function StackedProjectCard({
  proj,
  index,
  total,
}: {
  proj: Project;
  index: number;
  total: number;
}) {
  // Use as many distinct gallery shots as exist, cycling to fill the three
  // slots. Any slot showing a repeat gets a different crop so the duplication
  // reads as intentional rather than lazy.
  const shots: GalleryShot[] = proj.gallery?.length
    ? proj.gallery
    : [{ src: proj.img, alt: "project screenshot" }];
  const [slotA, slotB, slotC] = [0, 1, 2].map((i) => ({
    ...shots[i % shots.length],
    repeated: i >= shots.length,
  }));

  return (
    <div
      data-stack-card
      data-stack-index={index}
      data-stack-total={total}
      // Height must become definite at the same breakpoint the panels switch
      // from `aspect-ratio` to flex-sharing (`sm:`), or they collapse to zero.
      className="sticky w-full pb-6 sm:h-[85vh] sm:pb-0"
      style={{ top: `${STICKY_BASE + index * STICKY_STEP}px` }}
    >
      <article
        className="origin-top flex h-full flex-col gap-4 overflow-hidden rounded-[32px] border-2 border-border bg-surface p-4 shadow-xl shadow-primary/5 sm:gap-6 sm:rounded-[44px] sm:p-6 md:gap-8 md:rounded-[60px] md:p-8"
        style={{ transform: "scale(var(--stack-scale, 1))", willChange: "transform" }}
      >
        {/* Header: giant index, category + title, live/code actions */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
          <div className="flex w-full min-w-0 flex-row items-start gap-3 sm:gap-6 md:gap-10">
            <span
              aria-hidden
              className="shrink-0 font-black leading-none text-primary"
              // Height-aware as well as width-aware: on short laptop screens a
              // purely `vw` size overflows the `85vh` card.
              style={{ fontSize: "clamp(2.5rem, min(10vw, 14vh), 140px)" }}
            >
              {String(index + 1).padStart(2, "0")}
            </span>

            <div className="flex min-w-0 flex-1 flex-col gap-1 pt-1 sm:gap-2 sm:pt-3 md:pt-4">
              <div
                className="flex items-center gap-3 font-semibold uppercase tracking-widest"
                style={{ fontSize: "clamp(0.65rem, 1.2vw, 1rem)" }}
              >
                {proj.category && <span className="text-gold">{proj.category}</span>}
                {proj.year && (
                  <>
                    <span aria-hidden className="h-3 w-px bg-border" />
                    <span className="text-textMuted">{proj.year}</span>
                  </>
                )}
              </div>

              <h3
                className="font-medium uppercase leading-tight text-textMain"
                style={{ fontSize: "clamp(1.1rem, 2.2vw, 2.1rem)" }}
              >
                {proj.title}
              </h3>

              <p className="hidden max-w-2xl text-sm leading-relaxed text-textMuted line-clamp-2 sm:block lg:line-clamp-3">
                {proj.description}
              </p>

              {proj.tags && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {proj.tags.slice(0, 4).map((tag, i) => (
                    <span
                      key={tag}
                      className={`rounded-full border border-border px-3 py-1 text-xs text-textMuted ${
                        i === 3 ? "hidden md:inline-block" : ""
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="flex w-full shrink-0 flex-col gap-3 self-start sm:w-auto sm:flex-row sm:items-center sm:pt-2 md:pt-3">
            <Link
              href={proj.route}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border-2 border-primary px-8 py-3 text-sm font-medium uppercase tracking-widest text-primary transition-colors duration-200 hover:bg-primary hover:text-background sm:px-10 sm:py-3.5"
            >
              Live Project <FaArrowUpRightFromSquare className="text-xs" />
            </Link>
            {proj.github && (
              <Link
                href={proj.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${proj.title} source code on GitHub`}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border-2 border-border px-8 py-3 text-sm font-medium uppercase tracking-widest text-textMuted transition-colors duration-200 hover:border-primary hover:text-primary sm:px-6 sm:py-3.5"
              >
                <FaGithub /> <span className="sm:hidden">Code</span>
              </Link>
            )}
          </div>
        </div>

        {/* Gallery: two stacked panels beside one tall panel */}
        <div className="grid min-h-0 flex-1 grid-cols-1 gap-3 sm:grid-cols-[40%_60%] sm:gap-4 md:gap-5">
          {/* Left column: panels flex-share the remaining height rather than
              using fixed `vw`-derived heights, which overflowed the `85vh`
              card on short laptop screens. */}
          <div className="flex min-h-0 flex-col gap-3 sm:gap-4 md:gap-5">
            <div className={`${PANEL} aspect-[16/10] sm:aspect-auto sm:min-h-0 sm:flex-[2]`}>
              <MediaImage
                src={slotA.src}
                alt={`${proj.title} — ${slotA.alt}`}
                fill
                cldWidth={500}
                sizes="(max-width: 640px) 100vw, 400px"
                className="object-cover object-top"
              />
            </div>
            <div className={`${PANEL} aspect-[16/10] sm:aspect-auto sm:min-h-0 sm:flex-[3]`}>
              <MediaImage
                src={slotB.src}
                alt={`${proj.title} — ${slotB.alt}`}
                fill
                cldWidth={500}
                sizes="(max-width: 640px) 100vw, 400px"
                className={`object-cover ${slotB.repeated ? "object-bottom scale-110" : "object-top"}`}
              />
            </div>
          </div>

          <div className={`${PANEL} aspect-[16/10] sm:aspect-auto sm:min-h-0`}>
            <MediaImage
              src={slotC.src}
              alt={`${proj.title} — ${slotC.alt}`}
              fill
              cldWidth={800}
              sizes="(max-width: 640px) 100vw, 700px"
              className={`object-cover ${slotC.repeated ? "object-center scale-105" : "object-top"}`}
            />
          </div>
        </div>
      </article>
    </div>
  );
}
