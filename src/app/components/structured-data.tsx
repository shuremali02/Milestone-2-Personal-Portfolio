import {
  SITE_URL,
  SITE_NAME,
  PERSON_NAME,
  PERSON_JOB_TITLE,
} from "@/utils/metadata";
import { experiences, project, skills } from "@/data";

/**
 * Site-wide JSON-LD: a Person entity (the strongest signal for Google's
 * Knowledge Graph and for AI answer engines) plus a WebSite entity.
 * Rendered once in the root layout so it appears on every page.
 */
export default function StructuredData() {
  const sameAs = [
    "https://github.com/shuremali02",
    "https://linkedin.com/in/syed-shurem-ali-5a55852a0",
  ];

  const person = {
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: PERSON_NAME,
    url: SITE_URL,
    image: `${SITE_URL}/profile-pi.jpeg`,
    jobTitle: PERSON_JOB_TITLE,
    description:
      "Full-Stack Developer & AI Engineer building production web and mobile apps with Next.js, TypeScript and Flutter, integrating agentic AI (LLMs, AI agents, RAG), and owning deployment on VPS and Hostinger.",
    email: "mailto:shuremsyed41@gmail.com",
    nationality: "Pakistani",
    address: {
      "@type": "PostalAddress",
      addressCountry: "PK",
    },
    knowsAbout: skills.map((s) => s.name),
    sameAs,
    worksFor: experiences
      .filter((e) => e.current)
      .map((e) => ({ "@type": "Organization", name: e.company })),
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "SZABIST ZABTech, Hyderabad",
      },
      {
        "@type": "EducationalOrganization",
        name: "Governor House Initiative for Artificial Intelligence & Computing (GIAIC)",
      },
    ],
  };

  const website = {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    description: `Portfolio and project showcase of ${PERSON_NAME}, ${PERSON_JOB_TITLE}.`,
    inLanguage: "en",
    publisher: { "@id": `${SITE_URL}/#person` },
    author: { "@id": `${SITE_URL}/#person` },
  };

  const graph = {
    "@context": "https://schema.org",
    "@graph": [person, website],
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}

/**
 * An ItemList of projects as CreativeWork entities — helps search and AI
 * engines understand the portfolio's body of work. Used on the homepage
 * and the /portfolio page.
 */
export function ProjectsStructuredData({ path = "/" }: { path?: string }) {
  const url = `${SITE_URL}${path === "/" ? "" : path}`;
  const graph = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${url}#projects`,
    url,
    name: `Projects by ${PERSON_NAME}`,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#person` },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: project.length,
      itemListElement: project.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "CreativeWork",
          name: p.title,
          abstract: p.description,
          url: p.route,
          ...(p.github ? { codeRepository: p.github } : {}),
          ...(p.year ? { dateCreated: String(p.year) } : {}),
          keywords: p.tags.join(", "),
          author: { "@id": `${SITE_URL}/#person` },
          ...(p.category ? { genre: p.category } : {}),
        },
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}

/** BreadcrumbList JSON-LD for inner pages. */
export function Breadcrumbs({
  items,
}: {
  items: { name: string; path: string }[];
}) {
  const graph = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.path === "/" ? "" : it.path}`,
    })),
  };
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
