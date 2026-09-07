import FilterableProjects from "../components/filterable-projects";
import {
  ProjectsStructuredData,
  Breadcrumbs,
} from "../components/structured-data";
import { buildMetadata } from "@/utils/metadata";
import { Metadata } from "next";

export const metadata: Metadata = buildMetadata({
  title: "Projects & Portfolio",
  path: "/portfolio",
  description:
    "Projects by Syed Shurem Ali — agentic AI applications (multi-agent systems, RAG chatbots on the OpenAI Agents SDK), production EdTech and FinTech platforms, e-commerce storefronts, and front-end builds with React, Next.js, TypeScript and Flutter.",
  keywords: [
    "AI projects portfolio",
    "Next.js projects",
    "agentic AI case studies",
    "RAG chatbot project",
    "multi-agent system",
  ],
});

export default function Portfolio() {
  return (
    <div>
      <ProjectsStructuredData path="/portfolio" />
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Projects", path: "/portfolio" },
        ]}
      />
      <FilterableProjects />
    </div>
  );
}
