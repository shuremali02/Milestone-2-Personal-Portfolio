"use client";

import { skills } from "@/data";
import { FaCode } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function BentoSkills() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [animatedSkills, setAnimatedSkills] = useState<Record<string, boolean>>({});
  const [showAllSkills, setShowAllSkills] = useState(false);

  const categories = ["All", ...Array.from(new Set(skills.map((skill) => skill.category)))];

  // Filter skills based on selected categories (multi-select)
  const filteredSkills = selectedCategories.length === 0 || selectedCategories.includes("All")
    ? skills
    : skills.filter((skill) => selectedCategories.includes(skill.category));

  // Show only 4 skills initially, rest on "View More"
  const displayedSkills = showAllSkills ? filteredSkills : filteredSkills.slice(0, 4);

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

  useEffect(() => {
    const handleScroll = () => {
      const skillElements = document.querySelectorAll('.skill-bar');
      skillElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        if (isVisible && !animatedSkills[element.id]) {
          setAnimatedSkills(prev => ({ ...prev, [element.id]: true }));
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [animatedSkills]);

  useEffect(() => {
    setAnimatedSkills({});
    setTimeout(() => {
      const skillElements = document.querySelectorAll('.skill-bar');
      skillElements.forEach((element) => {
        setAnimatedSkills(prev => ({ ...prev, [element.id]: true }));
      });
    }, 100);
  }, [selectedCategories]);

  const topSkills = [...skills].sort((a, b) => b.level - a.level).slice(0, 6);

  return (
    <div className="bg-background py-16 text-textMuted relative overflow-hidden">
      <div className="absolute inset-0 animated-gradient opacity-5" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
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
          <div className="absolute -top-4 left-1/3 sparkle" style={{ animationDelay: '0s' }} />
          <div className="absolute -top-4 right-1/3 sparkle" style={{ animationDelay: '0.5s' }} />
          
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-3 neon-text">
            Skills & Expertise
          </h2>
          <p className="text-textMuted max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => toggleCategory(category)}
              className={`px-5 py-2 rounded-full border font-medium transition-all duration-300 hover:scale-105 ${
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 rounded-2xl bg-surface border border-border p-6 shadow-lg card-glow relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute top-4 right-4 sparkle" style={{ animationDelay: '0s' }} />
            <div className="absolute bottom-4 left-4 sparkle" style={{ animationDelay: '0.5s' }} />
            
            <div className="flex items-center gap-3 mb-6 relative z-10">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center ai-glow">
                <FaCode className="text-primary text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary neon-text">Top Skills</h3>
                <p className="text-textMuted text-sm">My strongest expertise areas</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {topSkills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-background rounded-xl p-4 border border-border hover:border-primary/50 transition-all group relative z-10"
                >
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-textMain font-semibold group-hover:text-primary transition-colors">
                      {skill.name}
                    </span>
                    <span className="text-primary font-bold text-lg">{skill.level}%</span>
                  </div>
                  <div
                    id={`top-skill-${index}`}
                    className="skill-bar h-3 bg-background rounded-full overflow-hidden"
                  >
                    <div
                      className="h-full bg-gradient-to-r from-primary to-primaryHover rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: animatedSkills[`top-skill-${index}`] ? `${skill.level}%` : '0%',
                        transition: 'width 1s ease-out'
                      }}
                    />
                  </div>
                  <div className="mt-2 text-xs text-textMuted">{skill.category}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-gradient-to-r from-primary/10 to-primaryHover/10 border border-primary/30 p-6 flex flex-col justify-center card-glow relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primaryHover/5 animate-pulse" />
            <div className="absolute top-4 right-4 sparkle" style={{ animationDelay: '0s' }} />
            <div className="absolute bottom-4 left-4 sparkle" style={{ animationDelay: '0.5s' }} />
            
            <div className="flex items-center gap-3 mb-4 relative z-10">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <h3 className="text-xl font-bold text-primary neon-text">Currently Learning</h3>
            </div>
            <div className="space-y-3 relative z-10">
              <div className="bg-background/50 rounded-xl p-4 border border-border">
                <p className="text-textMain font-semibold mb-2">SDD (Spec-Driven Development)</p>
                <div className="h-2 bg-background rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-primary to-primaryHover rounded-full" style={{ width: '75%' }} />
                </div>
                <p className="text-xs text-textMuted mt-2">75% complete</p>
              </div>
              <div className="bg-background/50 rounded-xl p-4 border border-border">
                <p className="text-textMain font-semibold mb-2">Docker Deployment</p>
                <div className="h-2 bg-background rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-primary to-primaryHover rounded-full" style={{ width: '65%' }} />
                </div>
                <p className="text-xs text-textMuted mt-2">65% complete</p>
              </div>
            </div>
          </div>

          {/* All Skills Grid */}
          {displayedSkills.map((skill: { name: string; level: number; category: string }, index: number) => (
            <div
              key={`${selectedCategories}-${index}`}
              className="bg-surface border border-border rounded-xl p-5 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group card-glow relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-2 right-2 sparkle opacity-0 group-hover:opacity-100" style={{ animationDelay: `${index * 0.1}s` }} />

              <div className="relative z-10">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-textMain font-semibold group-hover:text-primary transition-colors">
                    {skill.name}
                  </span>
                  <span className="text-primary font-bold text-lg">{skill.level}%</span>
                </div>
                <div
                  id={`skill-${selectedCategories}-${index}`}
                  className="skill-bar h-3 bg-background rounded-full overflow-hidden"
                >
                  <div
                    className="h-full bg-gradient-to-r from-primary to-primaryHover rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: animatedSkills[`skill-${selectedCategories}-${index}`] ? `${skill.level}%` : '0%',
                      transition: 'width 1s ease-out'
                    }}
                  />
                </div>
                <div className="mt-2 text-xs text-textMuted">{skill.category}</div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        {filteredSkills.length > 4 && (
          <div className="text-center mt-8 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sparkle" style={{ animationDelay: '0s' }} />
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 sparkle" style={{ animationDelay: '0.5s' }} />
            
            <button
              onClick={() => setShowAllSkills(!showAllSkills)}
              className="relative px-8 py-4 bg-gradient-to-r from-primary to-primaryHover text-background rounded-full font-bold text-lg hover:shadow-xl hover:shadow-primary/25 hover:scale-105 transition-all ai-glow"
            >
              {showAllSkills ? 'Show Less' : 'View More Skills'} →
            </button>
            
            <p className="text-textMuted mt-4 text-sm">
              {showAllSkills 
                ? `Showing all ${filteredSkills.length} skills`
                : `${filteredSkills.length - 4} more ${filteredSkills.length - 4 === 1 ? 'skill' : 'skills'} available`}
            </p>
          </div>
        )}

        {/* Clear Filters Button */}
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
