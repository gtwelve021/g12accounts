import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { SectionLabel } from "@/components/section-label";
import { sectionClass, sectionHeadingClass } from "@/components/ui-classes";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact G12 Accounts in Dubai for accounting, corporate tax, VAT, audit, customs and financial advisory support.",
  alternates: { canonical: "/contact-us/" },
  openGraph: { title: "Contact G12 Accounts", description: "Start a conversation with the right accounting, tax or audit specialist in Dubai.", url: "/contact-us/" },
};

export default function ContactPage() {
  return <main>
    <PageHero index="04" label="Contact" title={<>Let’s make the next<br/>move <em>clearer.</em></>} description="Tell us where your business is heading and what stands in the way. We’ll connect you with the right G12 Accounts specialist."/>
    <section className={`${sectionClass} bg-white shadow-[0_0_0_100vmax_#fff] [clip-path:inset(0_-100vmax)]`}>
      <SectionLabel number="01">Start a conversation</SectionLabel>
      <div className="mt-[65px] grid items-start gap-[clamp(65px,8vw,130px)] min-[801px]:grid-cols-[.8fr_1.2fr]">
        <div>
          <h2 className={sectionHeadingClass}>Talk to the<br/>right <em>expert.</em></h2>
          <p className="mt-[30px] mb-[50px] max-w-[330px] leading-[1.8] text-[#66718a]">Share a few details and our team will respond with the most relevant next step.</p>
          <div>
            <div className="grid gap-2.5 border-t border-[#07152f29] py-[22px]"><small className="text-[9px] uppercase tracking-[.14em] text-g12-blue">Email</small><a className="text-base leading-[1.5] text-[#66718a]" href="mailto:finance@g12.ae">finance@g12.ae</a></div>
            <div className="grid gap-2.5 border-t border-[#07152f29] py-[22px]"><small className="text-[9px] uppercase tracking-[.14em] text-g12-blue">Call</small><a className="text-base leading-[1.5] text-[#66718a]" href="tel:+97145706451">+971 4 570 6451</a></div>
            <div className="grid gap-2.5 border-t border-[#07152f29] py-[22px]"><small className="text-[9px] uppercase tracking-[.14em] text-g12-blue">Based</small><strong className="text-base leading-[1.5] font-normal text-[#66718a]">Dubai, United Arab Emirates</strong></div>
          </div>
        </div>
        <ContactForm/>
      </div>
    </section>
    <section className="grid bg-[#1b3f7c] text-white min-[801px]:grid-cols-3">
      <article className="min-h-[290px] border-r border-white/20 px-[clamp(28px,4vw,65px)] py-[55px] max-[800px]:min-h-0 max-[800px]:border-r-0 max-[800px]:border-b max-[800px]:py-[35px]"><span className="text-[9px] uppercase tracking-[.14em] text-g12-gold">01 / Relevant</span><h3 className="mt-[75px] mb-[18px] text-[30px] font-medium max-[800px]:mt-9">The right specialist.</h3><p className="leading-[1.7] text-white/70">Your enquiry is routed according to the service and expertise required.</p></article>
      <article className="min-h-[290px] border-r border-white/20 px-[clamp(28px,4vw,65px)] py-[55px] max-[800px]:min-h-0 max-[800px]:border-r-0 max-[800px]:border-b max-[800px]:py-[35px]"><span className="text-[9px] uppercase tracking-[.14em] text-g12-gold">02 / Responsive</span><h3 className="mt-[75px] mb-[18px] text-[30px] font-medium max-[800px]:mt-9">A clear next step.</h3><p className="leading-[1.7] text-white/70">We come back with a practical response and the information needed to move ahead.</p></article>
      <article className="min-h-[290px] px-[clamp(28px,4vw,65px)] py-[55px] max-[800px]:min-h-0 max-[800px]:py-[35px]"><span className="text-[9px] uppercase tracking-[.14em] text-g12-gold">03 / Confidential</span><h3 className="mt-[75px] mb-[18px] text-[30px] font-medium max-[800px]:mt-9">Handled with care.</h3><p className="leading-[1.7] text-white/70">Your business information is treated professionally and shared only where necessary.</p></article>
    </section>
  </main>;
}
