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
    <section className="hero-mesh grid gap-16 px-6 py-[110px] text-white min-[801px]:grid-cols-3 min-[801px]:px-[max(24px,calc((100vw-1240px)/2))]">
      <article data-reveal className="max-w-[310px]"><span className="font-serif text-[76px] leading-none text-white/10">01</span><h3 className="mt-3 mb-[18px] text-[30px] font-medium">The right specialist.</h3><p className="leading-[1.8] text-white/70">Your enquiry is routed according to the service and expertise required.</p></article>
      <article data-reveal className="max-w-[310px] min-[801px]:mt-20"><span className="font-serif text-[76px] leading-none text-white/10">02</span><h3 className="mt-3 mb-[18px] text-[30px] font-medium">A clear next step.</h3><p className="leading-[1.8] text-white/70">We come back with a practical response and the information needed to move ahead.</p></article>
      <article data-reveal className="max-w-[310px]"><span className="font-serif text-[76px] leading-none text-white/10">03</span><h3 className="mt-3 mb-[18px] text-[30px] font-medium">Handled with care.</h3><p className="leading-[1.8] text-white/70">Your business information is treated professionally and shared only where necessary.</p></article>
    </section>
  </main>;
}
