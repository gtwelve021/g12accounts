import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { SectionLabel } from "@/components/section-label";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact G12 Accounts in Dubai for accounting, corporate tax, VAT, audit, customs and financial advisory support.",
  alternates: { canonical: "/contact-us/" },
  openGraph: { title: "Contact G12 Accounts", description: "Start a conversation with the right accounting, tax or audit specialist in Dubai.", url: "/contact-us/" },
};

export default function ContactPage() {
  return <main>
    <PageHero index="04" label="Contact" title={<>Let’s make the next<br/>move <em>clearer.</em></>} description="Tell us where your business is heading and what stands in the way. We’ll connect you with the right G12 Accounts specialist."/>
    <section className="section contact-page">
      <SectionLabel number="01">Start a conversation</SectionLabel>
      <div className="contact-layout">
        <div className="contact-details">
          <h2>Talk to the<br/>right <em>expert.</em></h2>
          <p>Share a few details and our team will respond with the most relevant next step.</p>
          <div className="contact-methods">
            <div><small>Email</small><a href="mailto:finance@g12.ae">finance@g12.ae</a></div>
            <div><small>Call</small><a href="tel:+97145706451">+971 4 570 6451</a></div>
            <div><small>Based</small><strong>Dubai, United Arab Emirates</strong></div>
          </div>
        </div>
        <ContactForm/>
      </div>
    </section>
    <section className="contact-values">
      <article><span>01 / Relevant</span><h3>The right specialist.</h3><p>Your enquiry is routed according to the service and expertise required.</p></article>
      <article><span>02 / Responsive</span><h3>A clear next step.</h3><p>We come back with a practical response and the information needed to move ahead.</p></article>
      <article><span>03 / Confidential</span><h3>Handled with care.</h3><p>Your business information is treated professionally and shared only where necessary.</p></article>
    </section>
  </main>;
}
