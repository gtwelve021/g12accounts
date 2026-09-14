import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://g12accounts.ae/", changeFrequency: "weekly", priority: 1 },
    { url: "https://g12accounts.ae/about-us/", changeFrequency: "monthly", priority: 0.8 },
    { url: "https://g12accounts.ae/contact-us/", changeFrequency: "monthly", priority: 0.8 },
    { url: "https://g12accounts.ae/privacy-policy/", changeFrequency: "yearly", priority: 0.3 },
  ];
}
