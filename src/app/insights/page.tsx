import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { SectionLabel } from "@/components/section-label";
import { sectionClass, textLinkClass } from "@/components/ui-classes";
import { posts } from "@/content/site-data";

export const metadata: Metadata = { title: "Insights", description: "Practical perspectives on accounting, tax, audit and business growth in the UAE." };

export default function InsightsPage() {
  return <main><PageHero index="06" label="Insights" title={<>Clarity for what’s<br/><em>coming next.</em></>} description="Practical perspectives for leaders making better financial and business decisions."/><section className={`${sectionClass}`}><SectionLabel number="01">Latest perspectives</SectionLabel><div className="mt-[60px] grid gap-[30px] min-[681px]:grid-cols-2">{posts.map((post) => <article className="bg-white" key={post.slug}><Link className="relative grid min-h-[280px] place-items-center overflow-hidden bg-g12-navy text-[#a9c0f8] min-[681px]:min-h-[370px]" href={`/${post.slug}/`}><Image className="object-cover transition-transform duration-500 hover:scale-[1.035]" src={insightImage(post.label)} alt={`${post.label} business perspective`} fill sizes="(max-width: 680px) 100vw, 50vw"/></Link><div className="flex min-h-[185px] flex-col items-start p-[30px_35px_35px]"><small className="text-[9px] font-bold uppercase tracking-[.1em] text-g12-blue">{post.label} · G12 Accounts</small><h3 className="mt-[15px] mb-6 text-[clamp(21px,2.1vw,29px)] leading-[1.25] font-medium"><Link href={`/${post.slug}/`}>{post.title} {post.emphasis}</Link></h3><Link className={`${textLinkClass} mt-auto text-[10px]`} href={`/${post.slug}/`}>Read insight <span>↗</span></Link></div></article>)}</div></section></main>;
}

function insightImage(label: string) {
  const images: Record<string, string> = { "Corporate Tax": "/images/live/corporate-tax-advisory.jpg", VAT: "/images/live/vat-services.jpg", Compliance: "/images/live/compliance-services.jpg", "International Tax": "/images/live/international-tax.jpg", Audit: "/images/live/audit-assurance.jpg" };
  return images[label] ?? "/images/live/perspective-advisory.jpg";
}
