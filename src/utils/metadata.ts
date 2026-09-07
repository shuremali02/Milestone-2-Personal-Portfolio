import type { Metadata } from "next";

/**
 * Single source of truth for SEO/site-wide constants and per-page metadata.
 * Every page builds its `<title>`, description, canonical URL and social tags
 * through `buildMetadata()` so they stay consistent and never drift.
 */

export const SITE_URL = "https://syed-shurem-ali.vercel.app";
export const SITE_NAME = "Syed Shurem Ali Portfolio";
export const PERSON_NAME = "Syed Shurem Ali";
export const PERSON_JOB_TITLE = "Full-Stack Developer & AI Engineer";
export const LOCALE = "en_US";

/** Primary keyword targets — used in metadata and structured data. */
export const SITE_KEYWORDS = [
  "Syed Shurem Ali",
  "Full-Stack Developer",
  "AI Engineer",
  "Agentic AI Developer",
  "Next.js Developer",
  "React Developer",
  "TypeScript Developer",
  "Flutter Developer",
  "Android App Developer",
  "LLM Integration",
  "RAG Developer",
  "OpenAI Agents SDK",
  "MySQL",
  "Nginx",
  "VPS Deployment",
  "Hostinger Hosting",
  "Web Developer Pakistan",
  "Freelance Full-Stack Developer",
  "Portfolio",
];

const DEFAULT_DESCRIPTION =
  "Portfolio of Syed Shurem Ali — Full-Stack Developer & AI Engineer. I build production web & mobile apps with Next.js, TypeScript, Flutter/Dart and MySQL, integrate agentic AI (LLMs, AI agents, RAG), and own deployment on VPS (Nginx, NSSM) and Hostinger.";

interface BuildMetadataArgs {
  /** Page title WITHOUT the site-name suffix (the template adds it). Omit on the homepage. */
  title?: string;
  description?: string;
  /** Path starting with "/", e.g. "/about". Defaults to "/". */
  path?: string;
  /** Absolute or root-relative image URL. Defaults to the generated OG card. */
  image?: string;
  /** OpenGraph type — "website" | "profile" | "article". Defaults to "website". */
  type?: "website" | "profile" | "article";
  /** Extra keywords merged with the site defaults. */
  keywords?: string[];
  /** Set true to keep the page out of search indexes (e.g. unfinished sections). */
  noindex?: boolean;
}

export function buildMetadata({
  title,
  description = DEFAULT_DESCRIPTION,
  path = "/",
  image,
  type = "website",
  keywords = [],
  noindex = false,
}: BuildMetadataArgs = {}): Metadata {
  const url = `${SITE_URL}${path === "/" ? "" : path}`;
  const fullTitle = title
    ? `${title} | ${SITE_NAME}`
    : `${PERSON_NAME} - ${PERSON_JOB_TITLE}`;

  return {
    // `absolute` bypasses the root layout's title template so the site-name
    // suffix isn't appended twice.
    title: { absolute: fullTitle },
    description,
    keywords: [...SITE_KEYWORDS, ...keywords],
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      type,
      locale: LOCALE,
      ...(image ? { images: [{ url: image, width: 1200, height: 630, alt: fullTitle }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      creator: "@syedshuremali",
      ...(image ? { images: [image] } : {}),
    },
    ...(noindex ? { robots: { index: false, follow: false } } : {}),
  };
}
