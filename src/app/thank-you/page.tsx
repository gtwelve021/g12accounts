import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Thank You", description: "Your enquiry has been received by G12 Accounts.", robots: { index: false, follow: false }, alternates: { canonical: "/thank-you/" } };

export default function ThankYouPage() {
  return <main className="relative grid min-h-svh place-items-center overflow-hidden bg-[linear-gradient(130deg,#030b1c,#071a3c_58%,#123b7e)] px-6 pt-[150px] pb-[85px] text-white max-[520px]:pt-[120px]">
    <div className="absolute size-[min(75vw,850px)] rounded-full border border-white/10 before:absolute before:inset-[12%] before:rounded-full before:border before:border-white/[.07] after:absolute after:inset-[27%] after:rounded-full after:border after:border-white/[.07]" aria-hidden="true" />
    <div className="absolute top-[20%] right-[12%] size-[180px] rounded-full bg-[#3664d466] blur-[25px]" aria-hidden="true" />
    <section className="relative z-10 w-full max-w-[900px] text-center">
      <div className="mb-[30px] inline-flex items-center gap-2.5 text-[9px] font-bold uppercase tracking-[.2em] text-[#a9c0f8] before:h-px before:w-7 before:bg-g12-gold before:content-['']">Enquiry received</div>
      <h1 className="m-0 text-[clamp(62px,9vw,125px)] leading-[.9] font-medium tracking-[-.065em] max-[520px]:text-[58px] [&_em]:text-[#a9c0f8]">Thank you.<br />We’ll be in <em>touch.</em></h1>
      <p className="mx-auto mt-[35px] max-w-[650px] text-base leading-[1.8] text-white/70 max-[520px]:text-sm">Your message has reached the G12 Accounts team. One of our specialists will review your enquiry and contact you with a clear next step.</p>
      <div className="mt-11 flex items-center justify-center gap-[35px] max-[800px]:flex-col max-[520px]:mt-[35px]"><Link className="button button--primary" href="/">Return to homepage <span>↗</span></Link><a className="text-link text-link--light" href="https://g12accounts.ae/insights/">Explore our insights</a></div>
    </section>
    <p className="absolute z-10 bottom-8 flex items-center gap-2.5 text-[9px] uppercase tracking-[.12em] text-white/45"><span className="size-[5px] rounded-full bg-g12-gold" />Your information is handled confidentially.</p>
  </main>;
}
