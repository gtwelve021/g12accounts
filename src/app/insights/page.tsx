import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { SectionLabel } from "@/components/section-label";
import { posts } from "@/content/site-data";

export const metadata: Metadata = { title: "Insights", description: "Practical perspectives on accounting, tax, audit and business growth in the UAE." };

export default function InsightsPage() {
  return <main><PageHero index="06" label="Insights" title={<>Clarity for what’s<br/><em>coming next.</em></>} description="Practical perspectives for leaders making better financial and business decisions."/><section className="section insights"><SectionLabel number="01">Latest perspectives</SectionLabel><div className="insight-grid">{posts.map((post) => <article className="insight-featured" key={post.slug}><Link className="insight-featured__visual" href={`/${post.slug}/`}><Image src={insightImage(post.label)} alt={`${post.label} business perspective`} fill sizes="(max-width: 680px) 100vw, 50vw"/></Link><div><small>{post.label} · G12 Accounts</small><h3><Link href={`/${post.slug}/`}>{post.title} {post.emphasis}</Link></h3><Link className="text-link" href={`/${post.slug}/`}>Read insight <span>↗</span></Link></div></article>)}</div></section></main>;
}

function insightImage(label: string) {
  const images: Record<string, string> = { "Corporate Tax": "/images/live/corporate-tax-advisory.jpg", VAT: "/images/live/vat-services.jpg", Compliance: "/images/live/compliance-services.jpg", "International Tax": "/images/live/international-tax.jpg", Audit: "/images/live/audit-assurance.jpg" };
  return images[label] ?? "/images/live/perspective-advisory.jpg";
}
