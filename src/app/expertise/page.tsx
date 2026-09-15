import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { SectionLabel } from "@/components/section-label";
import { services } from "@/content/site-data";

export const metadata: Metadata = { title: "Expertise", description: "Accounting, tax, audit and advisory expertise for UAE businesses." };

export default function ExpertisePage() {
  return <main><PageHero index="03" label="Expertise" title={<>The right expertise<br/>for what comes <em>next.</em></>} description="Connected accounting, tax, audit and advisory support for ambitious businesses in the UAE."/><section className="section expertise"><SectionLabel number="01">Our services</SectionLabel><div className="section-heading"><h2>Specialists brought together<br/><em>around your business.</em></h2><p>Clear advice across the disciplines that keep your business moving.</p></div><div className="expertise-grid">{services.map((service, index) => <article className="expertise-card" key={service.slug}><Link className="expertise-card__image" href={`/${service.slug}/`}>{service.image && <Image src={service.image} alt={`${service.label} advisory`} fill sizes="(max-width: 680px) 100vw, (max-width: 980px) 50vw, 33vw"/>}</Link><div><span>0{index + 1} / G12 Accounts</span><h3><Link href={`/${service.slug}/`}>{service.label}</Link></h3><p>{service.description}</p><Link className="text-link" href={`/${service.slug}/`}>Explore service <span>↗</span></Link></div></article>)}</div></section></main>;
}
