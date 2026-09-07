import { Metadata } from "next";
import { buildMetadata, SITE_URL } from "@/utils/metadata";
import { Breadcrumbs } from "../components/structured-data";

const profilePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${SITE_URL}/about#profilepage`,
  url: `${SITE_URL}/about`,
  name: "About Syed Shurem Ali",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  mainEntity: { "@id": `${SITE_URL}/#person` },
};

export const metadata: Metadata = buildMetadata({
  title: "About Syed Shurem Ali",
  path: "/about",
  type: "profile",
  description:
    "About Syed Shurem Ali — a Full-Stack Developer & AI Engineer from Pakistan with 2.5+ years building across web and mobile. Full-time at a software studio shipping Next.js/TypeScript + MySQL apps and owning VPS/Hostinger deployment, and Head of Business Development & AI Engineer at an AI company working with LLMs, AI agents and RAG.",
  keywords: [
    "About Syed Shurem Ali",
    "AI Engineer Pakistan",
    "Full-Stack Developer Pakistan",
    "hire full-stack developer",
  ],
});

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
      />
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ]}
      />
      {children}
    </>
  );
}
