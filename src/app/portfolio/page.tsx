import FilterableProjects from "../components/filterable-projects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects - Syed Shurem Ali Portfolio",
  description: "Explore my portfolio of projects including AI-powered applications, e-commerce platforms, web applications, and more. Built with React, Next.js, TypeScript, and modern web technologies.",
  openGraph: {
    title: "Projects - Syed Shurem Ali Portfolio",
    description: "Explore my portfolio of projects including AI-powered applications, e-commerce platforms, web applications, and more. Built with React, Next.js, TypeScript, and modern web technologies.",
    type: "website",
    url: "https://your-portfolio-url.com/portfolio",
  },
};

export default function Portfolio() {
  return (
    <div>
      <FilterableProjects />
    </div>
  );
}
