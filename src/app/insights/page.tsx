import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { SectionLabel } from "@/components/section-label";
import { posts } from "@/content/site-data";

export const metadata: Metadata = { title: "Insights", description: "Practical perspectives on accounting, tax, audit and business growth in the UAE." };

export default function InsightsPage() {
  return <main><PageHero index="06" label="Insights" title={<>Clarity for what’s<br/><em>coming next.</em></>} description="Practical perspectives for leaders making better financial and business decisions."/><section className="section insights"><SectionLabel number="01">Latest perspectives</SectionLabel><div className="insight-grid">{posts.map((post) => <article className="insight-featured" key={post.slug}><div className="insight-featured__visual"><span>G12</span></div><div><small>{post.label} · G12 Accounts</small><h3><Link href={`/${post.slug}/`}>{post.title} {post.emphasis}</Link></h3><Link className="text-link" href={`/${post.slug}/`}>Read insight <span>↗</span></Link></div></article>)}</div></section></main>;
}
