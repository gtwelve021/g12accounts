import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = [
    { url: "https://g12accounts.ae/", changeFrequency: "weekly", priority: 1 },
    { url: "https://g12accounts.ae/about-us/", changeFrequency: "monthly", priority: 0.8 },
    { url: "https://g12accounts.ae/contact-us/", changeFrequency: "monthly", priority: 0.8 },
    { url: "https://g12accounts.ae/privacy-policy/", changeFrequency: "yearly", priority: 0.3 },
    { url: "https://g12accounts.ae/expertise/", changeFrequency: "monthly", priority: 0.8 },
    { url: "https://g12accounts.ae/insights/", changeFrequency: "weekly", priority: 0.8 },
  ];
  const slugs = [
    "audit-assurance", "compliance-services", "corporate-tax", "customs-services", "international-tax", "vat",
    "when-your-finance-function-needs-to-evolve", "internal-controls-that-scale-with-growth", "transfer-pricing-understanding-how-business-works",
    "corporate-tax-strategy-that-supports-growth", "five-vat-risks-growing-businesses-overlook", "what-better-management-reporting-can-unlock",
    "cross-border-growth-questions-to-ask-first", "prepare-finance-team-for-year-end-audit", "cash-flow-forecasting-management-tool", "corporate-tax-records-audit-ready-evidence-trail",
  ];
  return [...pages, ...slugs.map((slug) => ({ url: `https://g12accounts.ae/${slug}/`, changeFrequency: "monthly" as const, priority: 0.6 }))];
}
