import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me - Syed Shurem Ali Portfolio",
  description: "Learn more about Syed Shurem Ali, a Frontend Developer with 2.5+ years of experience in React, Next.js, TypeScript, and Agentic AI. Discover my journey, skills, and passion for creating modern web applications.",
  openGraph: {
    title: "About Me - Syed Shurem Ali Portfolio",
    description: "Learn more about Syed Shurem Ali, a Frontend Developer with 2.5+ years of experience in React, Next.js, TypeScript, and Agentic AI. Discover my journey, skills, and passion for creating modern web applications.",
    type: "profile",
    url: "https://your-portfolio-url.com/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}