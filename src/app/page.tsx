import About from "./about/page";
import Hero from "./components/hero";
import Auto from "./components/auto scroll";
import Contact from "./contact/page";
import "./globals.css";
import Portfolio from "./portfolio/page";
import Skills from "./components/skills";
import Testimonials from "./components/testimonials";
import StatsCounter from "./components/stats-counter";
// import Blog from "./components/blog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Syed Shurem Ali - Frontend Developer & AI Specialist",
  description: "Welcome to my portfolio. I'm a Frontend Developer specializing in React, Next.js, TypeScript, and Agentic AI. Explore my projects, skills, and expertise in modern web development.",
  openGraph: {
    title: "Syed Shurem Ali - Frontend Developer & AI Specialist",
    description: "Welcome to my portfolio. I'm a Frontend Developer specializing in React, Next.js, TypeScript, and Agentic AI. Explore my projects, skills, and expertise in modern web development.",
    type: "website",
    url: "https://your-portfolio-url.com/",
  },
};


export default function Main() {
  return (
    <div className="bg-background min-h-screen w-full overflow-x-hidden">
      <div>
        <Hero />
      </div>

      <StatsCounter />

      <div className="pt-20" id="project">
        <Portfolio />
      </div>

      <div className="pt-20" id="skills">
        <Skills />
      </div>

      <div className="pt-20" id="testimonials">
        <Testimonials />
      </div>

      {/* Blog section - commented out for now
      <div className="pt-20" id="blog">
        <Blog />
      </div>
      */}

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
