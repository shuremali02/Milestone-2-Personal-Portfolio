"use client";
import { skills } from "@/data";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface Skill {
  name: string;
  level: number;
  category: string;
}

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [animatedSkills, setAnimatedSkills] = useState<Record<string, boolean>>({});

  const categories = ["All", ...new Set(skills.map(skill => skill.category))];

  const filteredSkills = selectedCategory === "All"
    ? skills
    : skills.filter(skill => skill.category === selectedCategory);

  useEffect(() => {
    AOS.init({ duration: 600, once: true });
  }, []);

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

  // Reset animations when category changes
  useEffect(() => {
    setAnimatedSkills({});
    setTimeout(() => {
      const skillElements = document.querySelectorAll('.skill-bar');
      skillElements.forEach((element) => {
        setAnimatedSkills(prev => ({ ...prev, [element.id]: true }));
      });
    }, 100);
  }, [selectedCategory]);

  return (
    <div className="bg-background py-16 text-textMuted" id="skills">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-3">
            Skills & Expertise
          </h2>
          <p className="text-textMuted max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Category Filter */}
        <div
          className="flex flex-wrap justify-center gap-3 mb-12"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full border font-medium transition-all duration-300 hover:scale-105 ${
                selectedCategory === category
                  ? "bg-primary text-background border-primary shadow-lg shadow-primary/25"
                  : "bg-surface text-textMuted border-border hover:border-primary hover:text-primary"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredSkills.map((skill: Skill, index: number) => (
            <div
              key={`${selectedCategory}-${index}`}
              className="bg-surface border border-border rounded-xl p-5 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <div className="flex justify-between items-center mb-3">
                <span className="text-textMain font-semibold group-hover:text-primary transition-colors">
                  {skill.name}
                </span>
                <span className="text-primary font-bold text-lg">{skill.level}%</span>
              </div>
              <div
                id={`skill-${selectedCategory}-${index}`}
                className="skill-bar h-3 bg-background rounded-full overflow-hidden"
              >
                <div
                  className={`h-full bg-gradient-to-r from-primary to-primaryHover rounded-full transition-all duration-1000 ease-out ${
                    animatedSkills[`skill-${selectedCategory}-${index}`] ? '' : ''
                  }`}
                  style={{
                    width: animatedSkills[`skill-${selectedCategory}-${index}`] ? `${skill.level}%` : '0%',
                    transition: 'width 1s ease-out'
                  }}
                ></div>
              </div>
              <div className="mt-2 text-xs text-textMuted">{skill.category}</div>
            </div>
          ))}
        </div>

        {/* Currently Learning Badge */}
        <div
          className="mt-12 flex justify-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="bg-gradient-to-r from-primary/10 to-primaryHover/10 border border-primary/30 rounded-2xl px-6 py-4 inline-flex items-center gap-3">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-textMain">
              Currently learning: <span className="text-primary font-semibold">SDD (Spec-Driven Development)</span> &
              <span className="text-primary font-semibold"> Docker Deployment</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}