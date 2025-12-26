import type { Metadata } from "next";

import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

import ChatBot from "./components/chatbot";

export const metadata: Metadata = {
  title: {
    default: "Syed Shurem Ali - Frontend Developer & AI Specialist",
    template: "%s | Syed Shurem Ali Portfolio"
  },
  description: "Portfolio of Syed Shurem Ali - Frontend Developer specializing in React, Next.js, TypeScript, and Agentic AI. Showcasing projects, skills, and expertise in modern web development.",
  keywords: ["Frontend Developer", "React", "Next.js", "TypeScript", "Agentic AI", "Web Development", "Portfolio", "JavaScript", "UI/UX"],
  authors: [{ name: "Syed Shurem Ali" }],
  creator: "Syed Shurem Ali",
  publisher: "Syed Shurem Ali",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-portfolio-url.com",
    title: "Syed Shurem Ali - Frontend Developer & AI Specialist",
    description: "Portfolio of Syed Shurem Ali - Frontend Developer specializing in React, Next.js, TypeScript, and Agentic AI.",
    siteName: "Syed Shurem Ali Portfolio",
    images: [
      {
        url: "https://res.cloudinary.com/dd4xvwf8d/image/upload/v1755281625/c9cc0a17-e6c2-44e4-aab5-0a2482786f3f_blwhw3.jpg",
        width: 1200,
        height: 630,
        alt: "Syed Shurem Ali Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Syed Shurem Ali - Frontend Developer & AI Specialist",
    description: "Portfolio of Syed Shurem Ali - Frontend Developer specializing in React, Next.js, TypeScript, and Agentic AI.",
    images: ["https://res.cloudinary.com/dd4xvwf8d/image/upload/v1755281625/c9cc0a17-e6c2-44e4-aab5-0a2482786f3f_blwhw3.jpg"],
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
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="eng">
      <body>
        <Navbar />
      
          {children}
        <ChatBot />
       
        <Footer />
      </body>
    </html>
  );
}
