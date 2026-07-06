import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me - Syed Shurem Ali Portfolio",
  description: "Learn more about Syed Shurem Ali, a Full-Stack Developer & AI Engineer with 2.5+ years of experience in Next.js, TypeScript, Flutter/Dart, MySQL, and Agentic AI. Discover my journey, experience, skills, and passion for building modern web & mobile applications.",
  openGraph: {
    title: "About Me - Syed Shurem Ali Portfolio",
    description: "Learn more about Syed Shurem Ali, a Full-Stack Developer & AI Engineer with 2.5+ years of experience in Next.js, TypeScript, Flutter/Dart, MySQL, and Agentic AI. Discover my journey, experience, skills, and passion for building modern web & mobile applications.",
    type: "profile",
    url: "https://syed-shurem-ali.vercel.app/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}