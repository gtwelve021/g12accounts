import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { SectionLabel } from "@/components/section-label";
import { primaryButtonClass } from "@/components/ui-classes";

export const metadata: Metadata = { title: "Expertise", description: "Meet the senior accounting, tax, audit and advisory specialists at G12 Accounts." };

const experts = [
  { name: "Basit Habib, CA", role: "Director | CFO Advisory & Corporate Tax", image: "/images/live/Account-Employees-1.jpeg", bio: "With over 18 years of international experience across the UAE, Pakistan, the USA and Africa, Basit specialises in corporate tax, VAT advisory, CFO services and corporate governance. He works closely with business owners and leadership teams to strengthen financial performance, improve governance and support strategic growth." },
  { name: "Ateeq Ur Rehman, FCMA", role: "Finance & Strategic Advisory", image: "/images/live/Account-Employees-2.jpeg", bio: "A results-driven finance professional with 18+ years of experience, Ateeq specialises in financial planning, budgeting, treasury, ERP implementation and business process optimisation. His expertise helps businesses improve operational efficiency while making informed financial decisions." },
  { name: "Muhammad Usama", role: "Financial Reporting & Tax Specialist", image: "/images/live/Account-Employees-3.jpeg", bio: "With over 10 years of experience in accounting and financial operations, Muhammad specialises in financial reporting, cash flow management, VAT, corporate tax and audit coordination. His attention to detail helps businesses maintain accurate financial records and remain fully compliant." },
];

export default function ExpertisePage(){return <main><PageHero index="03" label="Our people" title={<>Expertise has<br /><em>a human side.</em></>} description="Senior specialists stay close to the work, the conversation and the decisions that move your business forward." /><section className="editorial-wrap people-list">{experts.map((expert,i)=><article className="person-profile" key={expert.name}><div className="person-image"><Image src={expert.image} alt={expert.name} fill sizes="(max-width:800px) 100vw, 40vw" /></div><div className="person-bio" data-reveal><SectionLabel number={String(i+1).padStart(2,"0")}>Your advisory team</SectionLabel><h2>{expert.name}</h2><h3>{expert.role}</h3><p>{expert.bio}</p><Link className={primaryButtonClass} href="/contact-us/">Start a conversation ↗</Link></div></article>)}</section><section className="team-statement"><h2>Different disciplines.<br /><em>One connected team.</em></h2><p>Our experts bring tax, audit, accounting and compliance perspectives together when the issue demands more than one answer.</p></section></main>;}
