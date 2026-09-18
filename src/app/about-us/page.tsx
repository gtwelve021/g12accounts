import type { Metadata } from "next";
import { ContactBand } from "@/components/contact-band";
import { PageHero } from "@/components/page-hero";
import { SectionLabel } from "@/components/section-label";
import { outlineButtonClass, sectionClass } from "@/components/ui-classes";

export const metadata: Metadata = { title: "About Us", description: "Meet G12 Accounts, a UAE-focused accounting, tax and advisory firm built for clear decisions and sustainable business progress.", alternates: { canonical: "/about-us/" }, openGraph: { title: "About G12 Accounts", description: "Senior-led accounting, tax and advisory expertise for UAE businesses.", url: "/about-us/" } };

const strengths = [{ title: "Senior-led", text: "Experienced specialists stay close to the work and the decisions behind it." }, { title: "UAE-focused", text: "Local regulatory knowledge shaped around the realities of doing business here." }, { title: "Commercially aware", text: "Advice designed around business momentum, not compliance in isolation." }];
const principles = [{ title: "Clarity first.", text: "We turn technical complexity into language, priorities and actions that make sense." }, { title: "Personally involved.", text: "Senior expertise stays connected, responsive and accountable from start to finish." }, { title: "Progress minded.", text: "Every engagement looks beyond the immediate requirement toward what the business needs next." }];

export default function AboutPage() {
  return <main>
    <PageHero index="02" label="About" title={<>Clarity that moves<br />business <em>forward.</em></>} description="We bring accounting discipline, tax expertise and commercial perspective together—so every financial decision has a clearer direction." />
    <section className={`${sectionClass} bg-white shadow-[0_0_0_100vmax_#fff] [clip-path:inset(0_-100vmax)]`}>
      <SectionLabel number="01">Who we are</SectionLabel>
      <div className="mt-[60px] mb-[85px] grid items-start gap-[clamp(50px,9vw,140px)] min-[801px]:ml-[clamp(0px,7vw,110px)] min-[801px]:grid-cols-[1fr_.72fr]">
        <h2>Built for decisions,<br />not just <em>deadlines.</em></h2>
        <div><p className="mb-[22px] text-[15px] leading-[1.85] text-[#66718a]">G12 Accounts is a UAE-focused accounting, tax and advisory firm for businesses that expect more from their financial partner. We help leaders understand the numbers, meet their obligations and move with greater confidence.</p><p className="mb-[22px] text-[15px] leading-[1.85] text-[#66718a]">Our work connects day-to-day compliance with the bigger commercial picture. The result is advice that is technically sound, clearly communicated and useful when decisions matter.</p></div>
      </div>
      <blockquote className="mx-auto mb-[90px] max-w-[940px] border-l-2 border-g12-blue bg-white px-[clamp(25px,5vw,70px)] py-[45px] font-serif text-[clamp(28px,3.2vw,44px)] leading-[1.3]">Good financial advice should do more than explain the past. It should make the next move clearer.</blockquote>
      <div className="grid gap-12 min-[801px]:grid-cols-3">{strengths.map((item, index) => <article data-reveal className={`relative max-w-[330px] ${index === 1 ? "min-[801px]:mt-16" : ""}`} key={item.title}><span className="font-serif text-[78px] leading-none text-g12-blue/10">0{index + 1}</span><i className="mt-[-12px] block size-2 rounded-full bg-g12-gold" /><h3 className="mt-8 mb-[15px] text-[30px] font-medium tracking-[-.04em]">{item.title}</h3><p className="text-sm leading-[1.8] text-[#66718a]">{item.text}</p></article>)}</div>
    </section>
    <section className={`${sectionClass} bg-white shadow-[0_0_0_100vmax_#fff] [clip-path:inset(0_-100vmax)]`}>
      <SectionLabel number="02">How we work</SectionLabel>
      <h2 className="mt-[60px] mb-[70px] min-[801px]:ml-[clamp(0px,7vw,110px)]">Three principles.<br />One clearer <em>standard.</em></h2>
      <div className="relative grid gap-x-[8vw] gap-y-20 min-[801px]:grid-cols-3">{principles.map((item, index) => <article data-reveal className={`relative max-w-[340px] ${index === 1 ? "min-[801px]:mt-24" : ""}`} key={item.title}><span className="text-[9px] tracking-[.15em] text-g12-blue">0{index + 1}</span><div className="my-7 h-px w-16 bg-g12-gold" /><h3 className="mb-[25px] text-[38px] leading-[1.05] font-medium tracking-[-.04em]">{item.title}</h3><p className="text-sm leading-[1.8] text-[#66718a]">{item.text}</p></article>)}</div>
    </section>
    <section className="relative flex min-h-[600px] items-center overflow-hidden bg-g12-navy px-6 py-[110px] text-white min-[801px]:min-h-[680px] min-[801px]:px-[max(24px,calc((100vw-1240px)/2))]">
      <div className="relative z-10 max-w-[820px]"><SectionLabel number="03" light>The wider perspective</SectionLabel><h2 className="mt-[55px] mb-[30px] [&_em]:text-[#a9c0f8]">Independent expertise.<br />Part of something <em>bigger.</em></h2><p className="mb-10 max-w-[610px] leading-[1.8] text-white/65">As a G12 Group company, we combine specialist accounting and tax capability with a broader understanding of how ambitious businesses grow, operate and transform.</p><a className={outlineButtonClass} href="https://g12.ae/" target="_blank" rel="noreferrer">Discover G12 Group <span>↗</span></a></div><span className="absolute right-[-3%] bottom-[-11%] text-[clamp(220px,35vw,530px)] leading-[.8] font-bold tracking-[-.12em] text-white/[.04]" aria-hidden="true">G12</span>
    </section>
    <ContactBand />
  </main>;
}
