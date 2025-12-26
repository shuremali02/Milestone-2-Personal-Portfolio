import { Metadata } from "next";

export const generatePageMetadata = (title: string, description?: string, image?: string): Metadata => {
  const baseUrl = "https://your-portfolio-url.com"; // Replace with your actual domain
  const defaultImage = "https://res.cloudinary.com/dd4xvwf8d/image/upload/v1755281625/c9cc0a17-e6c2-44e4-aab5-0a2482786f3f_blwhw3.jpg";

  return {
    title: `${title} | Syed Shurem Ali Portfolio`,
    description: description || "Portfolio of Syed Shurem Ali - Frontend Developer specializing in React, Next.js, TypeScript, and Agentic AI.",
    openGraph: {
      title: `${title} | Syed Shurem Ali Portfolio`,
      description: description || "Portfolio of Syed Shurem Ali - Frontend Developer specializing in React, Next.js, TypeScript, and Agentic AI.",
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
      description: description || "Portfolio of Syed Shurem Ali - Frontend Developer specializing in React, Next.js, TypeScript, and Agentic AI.",
      images: [image || defaultImage],
    },
  };
};