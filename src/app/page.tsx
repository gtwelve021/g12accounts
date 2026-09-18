import Image from "next/image";
import Link from "next/link";
import { Action, Eyebrow, Journal, ServiceDirectory } from "@/components/editorial";
import { ContactBand } from "@/components/contact-band";
const structuredData = { "@context": "https://schema.org", "@type": "ProfessionalService", name: "G12 Accounts", url: "https://g12accounts.ae/", description: "Accounting, tax, audit and strategic advisory for businesses building their future in the UAE.", email: "finance@g12.ae", telephone: "+97145706451", areaServed: { "@type": "Country", name: "United Arab Emirates" }, address: { "@type": "PostalAddress", addressLocality: "Dubai", addressCountry: "AE" }, parentOrganization: { "@type": "Organization", name: "G12 Group", url: "https://g12.ae/" } };
export default function Home() {
return <main className="editorial-site">
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
<section className="new-hero">
<div className="hero-topline" data-hero-reveal><Eyebrow>Independent thinking. Connected expertise.</Eyebrow><span>Dubai, UAE / G12 Accounts</span></div>
<h1 data-hero-reveal>Clarity today.<br /><span>Possibility</span> <em>tomorrow.</em></h1>
<div className="hero-bottom"><div className="hero-art" data-hero-panel><Image src="/images/g12-future-hero.png" alt="Flowing glass architecture framing the Dubai skyline" fill sizes="(max-width: 800px) 100vw, 65vw" priority /><span className="art-caption">A wider perspective. A clearer direction.</span><Link href="#expertise" className="art-scroll" aria-label="Explore our services">↓</Link></div><div className="hero-note" data-hero-reveal><span className="small-cross" aria-hidden="true">✳</span><p>Accounting, tax, audit and strategic advisory for businesses building their future in the UAE.</p><Action href="/contact-us/">Let’s talk business</Action><div className="hero-proof"><strong>18+</strong><span>Years of advisory<br />experience</span></div></div></div>
</section>
<section className="editorial-wrap manifesto"><Eyebrow>01 / Your next chapter</Eyebrow><div data-reveal><h2>Your finances should<br />do more than <span>keep up.</span><br />They should <em>take you further.</em></h2><div className="manifesto-bottom"><p>We combine technical expertise with practical business insight to help UAE companies stay compliant, improve performance and plan for sustainable growth.</p><Action href="/about-us/">The G12 perspective</Action></div></div></section>
<ServiceDirectory />
<section className="perspective-section"><div className="perspective-photo"><Image src="/images/live/perspective-advisory.jpg" alt="Advisors reviewing a business plan" fill sizes="(max-width:800px) 100vw, 50vw" /></div><div className="perspective-copy" data-reveal><Eyebrow>03 / Beyond the numbers</Eyebrow><h2>One view.<br />The <em>whole</em><br />picture.</h2><p>We look beyond the numbers to understand what drives your business. Direct access to experienced professionals. Commercially grounded advice. A team that sees what comes next.</p><Action href="/expertise/">Meet your people</Action></div><span className="perspective-word" aria-hidden="true">FORWARD.</span></section>
<section className="editorial-wrap principles"><Eyebrow>04 / Built around you</Eyebrow><div>{[["Senior expertise.","Personally involved.","Experienced finance professionals stay close to your work and the decisions behind it."],["Connected thinking.","A wider perspective.","Accounting, tax, audit, compliance and advisory working together under one trusted partner."],["Practical advice.","Real momentum.","Clear priorities and useful actions to help you plan beyond the next deadline."]].map(([a,b,c],i)=><article data-reveal key={a}><small>0{i+1}</small><h3>{a}<br /><em>{b}</em></h3><p>{c}</p></article>)}</div></section>
<Journal /><ContactBand />
</main>;
}
