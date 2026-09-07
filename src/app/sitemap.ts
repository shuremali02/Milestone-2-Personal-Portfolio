import type { MetadataRoute } from "next";
import { SITE_URL } from "@/utils/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes: {
    path: string;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority: number;
  }[] = [
    { path: "/", changeFrequency: "monthly", priority: 1 },
    { path: "/portfolio", changeFrequency: "weekly", priority: 0.9 },
    { path: "/about", changeFrequency: "monthly", priority: 0.7 },
    { path: "/contact", changeFrequency: "yearly", priority: 0.6 },
  ];

  return routes.map((r) => ({
    url: `${SITE_URL}${r.path === "/" ? "" : r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
