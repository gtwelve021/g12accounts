import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/_next/", "/api/"] },
    sitemap: "https://g12accounts.ae/sitemap.xml",
    host: "https://g12accounts.ae",
  };
}
