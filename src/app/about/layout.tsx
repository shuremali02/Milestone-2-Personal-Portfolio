import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me - Syed Shurem Ali Portfolio",
  description: "Syed Shurem Ali is a Full-Stack Developer & AI Engineer working in Next.js, TypeScript, Flutter/Dart, MySQL, and Agentic AI — shipping full-stack products end-to-end, from database to live server.",
  openGraph: {
    title: "About Me - Syed Shurem Ali Portfolio",
    description: "Syed Shurem Ali is a Full-Stack Developer & AI Engineer working in Next.js, TypeScript, Flutter/Dart, MySQL, and Agentic AI — shipping full-stack products end-to-end, from database to live server.",
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