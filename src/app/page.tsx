import Hero from "./components/hero";
import Auto from "./components/auto-scroll";
import "./globals.css";
import StackedProjects from "./components/stacked-projects";
import BentoSkills from "./components/bento-skills";
import BentoStats from "./components/bento-stats";
import Services from "./components/services";
// Blog section hidden for now — content isn't ready to show publicly
// import Blog from "./components/blog";
import AboutPreview from "./components/about-preview";
import ContactCta from "./components/contact-cta";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Syed Shurem Ali - Full-Stack Developer & AI Engineer",
  description: "Full-Stack Developer & AI Engineer building web & mobile apps with Next.js, TypeScript, Flutter/Dart and MySQL, integrating Agentic AI, and deploying to VPS (Nginx, NSSM) and Hostinger. Explore my projects, experience, and skills.",
  openGraph: {
    title: "Syed Shurem Ali - Full-Stack Developer & AI Engineer",
    description: "Full-Stack Developer & AI Engineer building web & mobile apps with Next.js, TypeScript, Flutter/Dart and MySQL, integrating Agentic AI, and deploying to VPS (Nginx, NSSM) and Hostinger. Explore my projects, experience, and skills.",
    type: "website",
    url: "https://syed-shurem-ali.vercel.app/",
  },
};


export default function Main() {
  return (
    // `overflow-x-clip` (not `-hidden`): hidden would make this a scroll
    // container and break the sticky project stack.
    <div className="bg-background min-h-screen w-full overflow-x-clip">
      <Hero />

      <div id="stats">
        <BentoStats />
      </div>

      <div id="project">
        <StackedProjects />
      </div>

      <div id="skills">
        <BentoSkills />
      </div>

      <div id="services">
        <Services />
      </div>

      <Auto />

      {/* <div id="blog">
        <Blog />
      </div> */}

      <div id="about">
        <AboutPreview />
      </div>

      <div id="contact">
        <ContactCta />
      </div>
    </div>
  );
}
