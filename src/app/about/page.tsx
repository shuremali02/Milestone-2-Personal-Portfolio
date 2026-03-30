"use client";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaGraduationCap, FaBriefcase, FaCode, FaRocket } from "react-icons/fa";
import ExperienceCounter from "../components/experience-counter";

export default function About() {
  useEffect(() => { AOS.init({ duration: 800, once: true }) }, [])

  return (
    <div className="bg-background py-12 text-textMuted relative overflow-hidden">
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

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center relative mb-12">
          <div className="absolute -top-4 left-1/4 sparkle" style={{ animationDelay: '0s' }} />
          <div className="absolute -top-4 right-1/4 sparkle" style={{ animationDelay: '0.5s' }} />
          
          <h1 className="text-center text-4xl md:text-5xl font-bold text-primary mb-12 neon-text">
            About Me
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div
            className="lg:col-span-1"
            data-aos="fade-right"
          >
            <div className="bg-surface border border-border rounded-2xl p-6 text-center shadow-lg card-glow relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 opacity-0 hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-4 right-4 sparkle" style={{ animationDelay: '0s' }} />
              <div className="absolute bottom-4 left-4 sparkle" style={{ animationDelay: '0.5s' }} />
              
              <div className="relative z-10">
                <Image
                  src="https://res.cloudinary.com/dd4xvwf8d/image/upload/v1755281625/c9cc0a17-e6c2-44e4-aab5-0a2482786f3f_blwhw3.jpg"
                  alt="Syed Shurem Ali"
                  width={180}
                  height={180}
                  className="rounded-full mx-auto border-4 border-primary shadow-lg ai-glow"
                />
                <h2 className="text-2xl font-bold text-primary mt-4">Syed Shurem Ali</h2>
                <p className="text-textMuted mt-1">Frontend Developer</p>
                <p className="text-primary font-semibold mt-1"><ExperienceCounter /> Years Experience</p>

                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-textMuted text-sm">Based in Pakistan</p>
                  <p className="text-primary text-sm mt-1">Available for Freelance</p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="lg:col-span-2 space-y-6"
            data-aos="fade-left"
          >
            <div className="bg-surface border border-border rounded-2xl p-6 shadow-lg card-glow relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-4 right-4 sparkle" style={{ animationDelay: '0s' }} />
              
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2 neon-text">
                  <FaRocket className="text-primaryHover" /> Who I Am
                </h3>
                <p className="text-textMain leading-relaxed">
                  I am a passionate Frontend Developer specializing in building modern, responsive, and user-friendly web applications. With over <span className="text-primary font-semibold"><ExperienceCounter /> years</span> of hands-on experience, I have developed expertise in React.js, Next.js, TypeScript, and Tailwind CSS.
                </p>
                <p className="text-textMain leading-relaxed mt-3">
                  Currently, I am expanding my skills in Agentic AI development through the Governor House Initiative, exploring the intersection of AI and web technologies to create intelligent applications.
                </p>
              </div>
            </div>

            <div className="bg-surface border border-border rounded-2xl p-6 shadow-lg card-glow relative overflow-hidden">
              <div className="absolute top-4 right-4 sparkle" style={{ animationDelay: '0.25s' }} />
              
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2 neon-text">
                  <FaGraduationCap className="text-primaryHover" /> Education
                </h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-textMain font-semibold">Agentic AI Development Course</h4>
                      <p className="text-textMuted text-sm">Governor House Initiative - Ongoing</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-textMain font-semibold">Diploma in Information Technology</h4>
                      <p className="text-textMuted text-sm">SZABIST ZABTech, Hyderabad - 1 Year</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-surface border border-border rounded-2xl p-6 shadow-lg card-glow relative overflow-hidden">
              <div className="absolute top-4 right-4 sparkle" style={{ animationDelay: '0.5s' }} />
              
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2 neon-text">
                  <FaCode className="text-primaryHover" /> What I Do
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <p className="text-textMain">Frontend Development with React & Next.js</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <p className="text-textMain">Responsive UI/UX Implementation</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <p className="text-textMain">API Integration & State Management</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <p className="text-textMain">AI-Powered Web Applications</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-surface border border-border rounded-2xl p-6 shadow-lg card-glow relative overflow-hidden">
              <div className="absolute top-4 right-4 sparkle" style={{ animationDelay: '0.75s' }} />
              
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2 neon-text">
                  <FaBriefcase className="text-primaryHover" /> Experience Highlights
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div className="bg-background rounded-xl p-4 border border-border">
                    <p className="text-2xl font-bold text-primary">15+</p>
                    <p className="text-textMuted text-sm">Projects</p>
                  </div>
                  <div className="bg-background rounded-xl p-4 border border-border">
                    <p className="text-2xl font-bold text-primary"><ExperienceCounter /></p>
                    <p className="text-textMuted text-sm">Years Exp.</p>
                  </div>
                  <div className="bg-background rounded-xl p-4 border border-border">
                    <p className="text-2xl font-bold text-primary">5+</p>
                    <p className="text-textMuted text-sm">Hackathons</p>
                  </div>
                  <div className="bg-background rounded-xl p-4 border border-border">
                    <p className="text-2xl font-bold text-primary">10+</p>
                    <p className="text-textMuted text-sm">Technologies</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
