import { Metadata } from "next";

export const generatePageMetadata = (title: string, description?: string, image?: string): Metadata => {
  const baseUrl = "https://syed-shurem-ali.vercel.app"; // Your portfolio domain
  const defaultImage = `${baseUrl}/profile-photo.jpeg`;

  return {
    title: `${title} | Syed Shurem Ali Portfolio`,
    description: description || "Portfolio of Syed Shurem Ali - Full-Stack Developer & AI Engineer building web & mobile apps with Next.js, TypeScript, Flutter/Dart, MySQL, and Agentic AI.",
    openGraph: {
      title: `${title} | Syed Shurem Ali Portfolio`,
      description: description || "Portfolio of Syed Shurem Ali - Full-Stack Developer & AI Engineer building web & mobile apps with Next.js, TypeScript, Flutter/Dart, MySQL, and Agentic AI.",
      url: `${baseUrl}${typeof window !== 'undefined' ? window.location.pathname : ''}`,
      images: [
        {
          url: image || defaultImage,
          width: 1200,
          height: 630,
          alt: "Syed Shurem Ali Portfolio",
        },
      ],
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Syed Shurem Ali Portfolio`,
      description: description || "Portfolio of Syed Shurem Ali - Full-Stack Developer & AI Engineer building web & mobile apps with Next.js, TypeScript, Flutter/Dart, MySQL, and Agentic AI.",
      images: [image || defaultImage],
    },
  };
};