import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";

import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import StructuredData from "./components/structured-data";
import { buildMetadata, SITE_URL } from "@/utils/metadata";

import ChatBotLoader from "./components/chatbot-loader";
import ScrollToTop from "./components/scroll-to-top";
import ScrollProgress from "./components/scroll-progress";
import CursorGlow from "./components/cursor-glow";
import CustomCursor from "./components/custom-cursor";

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
  metadataBase: new URL(SITE_URL),
  ...buildMetadata({ path: "/", type: "website" }),
  title: {
    default: "Syed Shurem Ali - Full-Stack Developer & AI Engineer",
    template: "%s | Syed Shurem Ali Portfolio",
  },
  applicationName: "Syed Shurem Ali Portfolio",
  authors: [{ name: "Syed Shurem Ali", url: SITE_URL }],
  creator: "Syed Shurem Ali",
  publisher: "Syed Shurem Ali",
  category: "technology",
  formatDetection: { email: false, address: false, telephone: false },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // verification: { google: "<add Search Console token>" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans">
        <StructuredData />
        <ScrollProgress />
        <CursorGlow />
        <CustomCursor />
        <Navbar />
        <main>{children}</main>
        <ChatBotLoader />
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
