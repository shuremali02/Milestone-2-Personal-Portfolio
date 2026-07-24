import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";

import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

import ChatBotLoader from "./components/chatbot-loader";
import ScrollToTop from "./components/scroll-to-top";
import ScrollProgress from "./components/scroll-progress";
import CursorGlow from "./components/cursor-glow";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://syed-shurem-ali.vercel.app"),
  title: {
    default: "Syed Shurem Ali - Full-Stack Developer & AI Engineer",
    template: "%s | Syed Shurem Ali Portfolio"
  },
  description: "Portfolio of Syed Shurem Ali - Full-Stack Developer & AI Engineer building web & mobile apps with Next.js, TypeScript, Flutter/Dart, MySQL, and Agentic AI. Showcasing projects, skills, and expertise in modern web & mobile development.",
  keywords: ["Full-Stack Developer", "AI Engineer", "React", "Next.js", "TypeScript", "Flutter", "Dart", "Android Development", "MySQL", "Nginx", "VPS Deployment", "Hostinger", "Agentic AI", "Web Development", "Mobile Development", "Portfolio"],
  authors: [{ name: "Syed Shurem Ali" }],
  creator: "Syed Shurem Ali",
  publisher: "Syed Shurem Ali",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://syed-shurem-ali.vercel.app",
    title: "Syed Shurem Ali - Full-Stack Developer & AI Engineer",
    description: "Portfolio of Syed Shurem Ali - Full-Stack Developer & AI Engineer building web & mobile apps with Next.js, TypeScript, Flutter/Dart, MySQL, and Agentic AI.",
    siteName: "Syed Shurem Ali Portfolio",
    // Social image comes from the generated app/opengraph-image.tsx (branded card).
  },
  twitter: {
    card: "summary_large_image",
    title: "Syed Shurem Ali - Full-Stack Developer & AI Engineer",
    description: "Portfolio of Syed Shurem Ali - Full-Stack Developer & AI Engineer building web & mobile apps with Next.js, TypeScript, Flutter/Dart, MySQL, and Agentic AI.",
    // Social image comes from the generated app/twitter-image.tsx (branded card).
    creator: "@syedshuremali",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans">
        <ScrollProgress />
        <CursorGlow />
        <Navbar />
          {children}
        <ChatBotLoader />
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
