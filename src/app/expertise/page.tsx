import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { SectionLabel } from "@/components/section-label";
import { services } from "@/content/site-data";

export const metadata: Metadata = { title: "Expertise", description: "Accounting, tax, audit and advisory expertise for UAE businesses." };

export default function ExpertisePage() {
  return <main><PageHero index="03" label="Expertise" title={<>The right expertise<br/>for what comes <em>next.</em></>} description="Connected accounting, tax, audit and advisory support for ambitious businesses in the UAE."/><section className="section expertise"><SectionLabel number="01">Our services</SectionLabel><div className="section-heading"><h2>Specialists brought together<br/><em>around your business.</em></h2><p>Clear advice across the disciplines that keep your business moving.</p></div><div className="service-list">{services.map((service, index) => <article className="service-item" key={service.slug}><Link className="service-trigger" href={`/${service.slug}/`}><span className="service-number">0{index + 1}</span><span className="service-title">{service.label}</span><span className="service-arrow">↗</span></Link></article>)}</div></section></main>;
}
