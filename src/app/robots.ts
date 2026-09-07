import type { MetadataRoute } from "next";
import { SITE_URL } from "@/utils/metadata";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Blog isn't ready for public consumption yet — keep it out of crawls.
        disallow: ["/blog", "/blog/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
