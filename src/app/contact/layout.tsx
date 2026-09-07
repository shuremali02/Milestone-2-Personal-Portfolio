import { Metadata } from "next";
import { buildMetadata, SITE_URL } from "@/utils/metadata";
import { Breadcrumbs } from "../components/structured-data";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  path: "/contact",
  description:
    "Get in touch with Syed Shurem Ali — Full-Stack Developer & AI Engineer available for freelance and contract work. Web apps, mobile apps, agentic AI features, and deployment, taken from idea to a live URL. Replies within 24 hours.",
  keywords: [
    "contact Syed Shurem Ali",
    "hire AI engineer",
    "hire Next.js developer",
    "freelance full-stack developer",
  ],
});

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${SITE_URL}/contact#contactpage`,
  url: `${SITE_URL}/contact`,
  name: "Contact Syed Shurem Ali",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  about: { "@id": `${SITE_URL}/#person` },
  mainEntity: {
    "@id": `${SITE_URL}/#person`,
    "@type": "Person",
    contactPoint: {
      "@type": "ContactPoint",
      email: "shuremsyed41@gmail.com",
      contactType: "business inquiries",
      availableLanguage: ["English", "Urdu"],
    },
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]}
      />
      {children}
    </>
  );
}
