import type { MetadataRoute } from "next";

const SITE_URL = "https://site-rho-lime-29.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/studio", "/studio/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
