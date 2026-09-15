import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { SectionLabel } from "@/components/section-label";

export const metadata: Metadata = { title: "Expertise", description: "Meet the senior accounting, tax, audit and advisory specialists at G12 Accounts." };

const experts = [
  { name: "Basit Habib, CA", role: "Director | CFO Advisory & Corporate Tax", image: "/images/live/Account-Employees-1.jpeg", bio: "With over 18 years of international experience across the UAE, Pakistan, the USA and Africa, Basit specialises in corporate tax, VAT advisory, CFO services and corporate governance. He works closely with business owners and leadership teams to strengthen financial performance, improve governance and support strategic growth." },
  { name: "Ateeq Ur Rehman, FCMA", role: "Finance & Strategic Advisory", image: "/images/live/Account-Employees-2.jpeg", bio: "A results-driven finance professional with 18+ years of experience, Ateeq specialises in financial planning, budgeting, treasury, ERP implementation and business process optimisation. His expertise helps businesses improve operational efficiency while making informed financial decisions." },
  { name: "Muhammad Usama", role: "Financial Reporting & Tax Specialist", image: "/images/live/Account-Employees-3.jpeg", bio: "With over 10 years of experience in accounting and financial operations, Muhammad specialises in financial reporting, cash flow management, VAT, corporate tax and audit coordination. His attention to detail helps businesses maintain accurate financial records and remain fully compliant." },
];

export default function ExpertisePage() {
  return <main>
    <PageHero index="01" label="Our experts" title={<>Expertise is<br /><em>personal.</em></>} description="Senior specialists stay close to the work, the conversation and the decisions that move your business forward." />
    <section className="section team-directory"><SectionLabel number="01">The team</SectionLabel><div className="service-page-heading"><h2>The right expertise,<br /><em>directly involved.</em></h2><p>Each specialist brings practical experience and stays connected to the work they lead.</p></div><div className="team-grid">{experts.map((expert, index) => <article key={expert.name}><div className="team-grid__image"><Image src={expert.image} alt={expert.name} fill sizes="(max-width: 800px) 100vw, 33vw" /></div><div className="team-grid__copy"><span>{String(index + 1).padStart(2, "0")} / G12 Accounts</span><h2>{expert.name}</h2><h3>{expert.role}</h3><p>{expert.bio}</p></div></article>)}</div></section>
    <section className="team-connection"><div><SectionLabel number="02" light>One connected team</SectionLabel><h2>Specialists who see<br />the <em>whole picture.</em></h2><p>Our experts work across disciplines, bringing tax, audit, accounting and compliance perspectives together when the issue demands more than one answer.</p><Link className="button button--primary" href="/contact-us/">Start a conversation <span>↗</span></Link></div></section>
  </main>;
}
