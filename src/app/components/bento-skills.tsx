"use client";

import { skills } from "@/data";
import { FaCode } from "react-icons/fa";
import { useState } from "react";
import TiltCard from "./tilt-card";
import Reveal from "./reveal";

export default function BentoSkills() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const categories = ["All", ...Array.from(new Set(skills.map((skill) => skill.category)))];

  // Filter skills based on selected categories (multi-select)
  const filteredSkills = selectedCategories.length === 0 || selectedCategories.includes("All")
    ? skills
    : skills.filter((skill) => selectedCategories.includes(skill.category));

  const toggleCategory = (category: string) => {
    if (category === "All") {
      setSelectedCategories([]);
    } else {
      setSelectedCategories((prev) => {
        const newCategories = prev.filter((c) => c !== "All");
        if (newCategories.includes(category)) {
          return newCategories.filter((c) => c !== category);
        } else {
          return [...newCategories, category];
        }
      });
    }
  };

  const topSkills = [...skills].sort((a, b) => b.level - a.level).slice(0, 6);

  const groupedSkills = Array.from(new Set(filteredSkills.map((s) => s.category))).map(
    (category) => ({
      category,
      items: filteredSkills.filter((s) => s.category === category),
    })
  );

  return (
    <div className="bg-background py-16 text-textMuted relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal className="text-center mb-12 relative">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold mb-3">
            <span className="w-6 h-px bg-gold" /> Skills <span className="w-6 h-px bg-gold" />
          </span>
          <h2
            className="font-black uppercase leading-none tracking-tight mb-3 text-textMain"
            style={{ fontSize: "clamp(2.5rem, 9vw, 120px)" }}
          >
            Skills &amp; <span className="text-primary">Expertise</span>
          </h2>
          <p className="text-textMuted max-w-2xl mx-auto">
            The technologies I use to design, build, and ship
          </p>
        </Reveal>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => toggleCategory(category)}
              className={`px-5 py-2 rounded-md border font-medium transition-all duration-300 hover:scale-105 ${
                category === "All"
                  ? selectedCategories.length === 0
                    ? "bg-primary text-background border-primary shadow-lg shadow-primary/25"
                    : "bg-surface text-textMuted border-border hover:border-primary hover:text-primary"
                  : selectedCategories.includes(category)
                    ? "bg-primary text-background border-primary shadow-lg shadow-primary/25"
                    : "bg-surface text-textMuted border-border hover:border-primary hover:text-primary"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-2 rounded-xl bg-surface border border-border p-6 shadow-lg card-glow relative overflow-hidden">
            <div className="flex items-center gap-3 mb-6 relative z-10">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                <FaCode className="text-primary text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary">Core Stack</h3>
                <p className="text-textMuted text-sm">Where I have the deepest expertise</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 relative z-10">
              {topSkills.map((skill) => (
                <span
                  key={skill.name}
                  className="rounded-full bg-primary/10 border border-primary/30 px-4 py-2 text-sm font-semibold text-textMain"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-xl bg-primary/10 border border-primary/30 p-6 flex flex-col justify-center card-glow relative overflow-hidden">
            <div className="flex items-center gap-3 mb-4 relative z-10">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <h3 className="text-xl font-bold text-primary">Currently Sharpening</h3>
            </div>
            <div className="flex flex-wrap gap-2 relative z-10">
              <span className="bg-background/50 rounded-full px-4 py-2 border border-border text-textMain font-medium text-sm">
                Loop Engineering
              </span>
              <span className="bg-background/50 rounded-full px-4 py-2 border border-border text-textMain font-medium text-sm">
                Harness Engineering
              </span>
            </div>
          </div>
        </div>

        <TiltCard max={4} className="rounded-xl">
          <div className="bg-surface border border-border rounded-xl p-6 sm:p-8 card-glow relative overflow-hidden">
            <div className="relative z-10 space-y-5">
              {groupedSkills.map(({ category, items }) => (
                <div key={category}>
                  <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-2.5">
                    {category}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill.name}
                        className="rounded-full border border-border px-3.5 py-1.5 text-sm text-textMain hover:border-primary/50 hover:text-primary transition-colors"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TiltCard>

        {selectedCategories.length > 1 && (
          <div className="text-center mt-6">
            <button
              onClick={() => setSelectedCategories([])}
              className="px-4 py-2 text-sm text-textMuted hover:text-primary transition-colors"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
