import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ContactBand } from "@/components/contact-band";
import { PageHero } from "@/components/page-hero";
import { SectionLabel } from "@/components/section-label";
import { allContent } from "@/content/site-data";

export function generateStaticParams() {
  return allContent.map(({ slug }) => ({ slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const page = allContent.find((item) => item.slug === slug);
    return page ? { title: page.label, description: page.description } : {};
  });
}

export default async function ContentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = allContent.find((item) => item.slug === slug);
  if (!page) notFound();
  const isPost = postsSlugs.has(slug);
  return <main>
    <PageHero index={isPost ? "07" : "03"} label={page.label} title={<>{page.title}<br/><em>{page.emphasis}</em></>} description={page.description} />
    <section className="section inner-intro">
      <SectionLabel number="01">{isPost ? "G12 perspective" : "Our expertise"}</SectionLabel>
      {!isPost && page.image && <div className="content-page__image"><Image src={page.image} alt={`${page.label} advisory`} fill sizes="(max-width: 800px) 100vw, 1240px"/></div>}
      <div className="inner-intro__grid">
        <h2>{isPost ? "Useful perspective for clearer decisions." : "Specialist advice, clearly connected to your business."}</h2>
        <div>{page.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
      </div>
      {page.bullets && <div className="feature-row">{page.bullets.map((bullet, index) => <article key={bullet}><span>0{index + 1}</span><h3>{bullet}</h3><p>Clear, practical support shaped around your requirements.</p></article>)}</div>}
    </section>
    <ContactBand />
  </main>;
}

const postsSlugs = new Set([
  "when-your-finance-function-needs-to-evolve", "internal-controls-that-scale-with-growth", "transfer-pricing-understanding-how-business-works",
  "corporate-tax-strategy-that-supports-growth", "five-vat-risks-growing-businesses-overlook", "what-better-management-reporting-can-unlock",
  "cross-border-growth-questions-to-ask-first", "prepare-finance-team-for-year-end-audit", "cash-flow-forecasting-management-tool", "corporate-tax-records-audit-ready-evidence-trail",
]);
