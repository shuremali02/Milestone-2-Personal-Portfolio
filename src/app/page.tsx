import About from "./about/page";
import Hero from "./components/hero";
import Auto from "./components/auto scroll";
import Contact from "./contact/page";
import "./globals.css";
import BentoProjects from "./components/bento-projects";
import BentoSkills from "./components/bento-skills";
import BentoStats from "./components/bento-stats";
import BentoTestimonials from "./components/bento-testimonials";
import Blog from "./components/blog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Syed Shurem Ali - Frontend Developer & AI Specialist",
  description: "Welcome to my portfolio. I'm a Frontend Developer specializing in React, Next.js, TypeScript, and Agentic AI. Explore my projects, skills, and expertise in modern web development.",
  openGraph: {
    title: "Syed Shurem Ali - Frontend Developer & AI Specialist",
    description: "Welcome to my portfolio. I'm a Frontend Developer specializing in React, Next.js, TypeScript, and Agentic AI. Explore my projects, skills, and expertise in modern web development.",
    type: "website",
    url: "https://syed-shurem-ali.vercel.app/",
  },
};


export default function Main() {
  return (
    <div className="bg-background min-h-screen w-full overflow-x-hidden">
      <div>
        <Hero />
      </div>

      <div className="pt-12" id="stats">
        <BentoStats />
      </div>

      <div className="pt-12" id="project">
        <BentoProjects />
      </div>

      <div className="pt-12" id="skills">
        <BentoSkills />
      </div>

      <div className="pt-12" id="testimonials">
        <BentoTestimonials />
      </div>

      <div className="pt-12" id="blog">
        <Blog />
      </div>

      <div className="pt-20" id="about">
        <About />
        <div className="pt-20">
          <Auto />
        </div>
      </div>

      <div className="pt-20" id="contact">
        <Contact />
      </div>
    </div>
  );
}
