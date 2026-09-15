"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";

const field = "w-full border-0 border-b border-[#07152f29] bg-transparent px-0 py-[13px] text-[15px] font-normal tracking-normal text-[#07152f] normal-case outline-0 focus:border-[#2447a8]";
const label = "grid gap-2.5 text-[9px] font-bold uppercase tracking-[.12em] text-[#66718a]";

export function ContactForm({ variant = "page" }: { variant?: "page" | "modal" }) {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setError("");
    const formData = new FormData(event.currentTarget);
    try {
      const response = await fetch("/api/contact", { method: "POST", body: formData });
      if (!response.ok) throw new Error("Submission failed");
      router.push("/thank-you/");
    } catch {
      setError("We couldn’t send your enquiry. Please try again or email finance@g12.ae.");
      setSubmitting(false);
    }
  }

  const modal = variant === "modal";
  return <form className={modal ? "bg-transparent" : "bg-[#eaf0fb] p-6 min-[521px]:p-12"} name="g12-enquiry" onSubmit={handleSubmit}>
    <input type="hidden" name="form-name" value="g12-enquiry" />
    {!modal && <h2 className="mb-10 text-[clamp(42px,4vw,58px)] font-normal">How can we help?</h2>}
    <div className={`mb-[34px] grid grid-cols-2 gap-x-[22px] gap-y-[26px] max-[520px]:grid-cols-1 ${modal ? "mb-[22px] gap-x-[18px] gap-y-[22px] max-[700px]:grid-cols-1" : ""}`}>
      <label className={label}>First name <input className={field} name="first-name" autoComplete="given-name" required /></label>
      <label className={label}>Last name <input className={field} name="last-name" autoComplete="family-name" required /></label>
      <label className={label}>Work email <input className={field} name="email" type="email" autoComplete="email" required /></label>
      <label className={label}>Phone <input className={field} name="phone" type="tel" autoComplete="tel" required /></label>
      <label className={`${label} col-span-full ${modal ? "max-[700px]:col-span-1" : "max-[520px]:col-span-1"}`}>Area of support <select className={field} name="service" defaultValue="Corporate Tax" required><option>Corporate Tax</option><option>Audit &amp; Assurance</option><option>VAT Services</option><option>International Tax</option><option>Customs &amp; Compliance</option><option>Accounting &amp; Reporting</option></select></label>
      <label className={`${label} col-span-full ${modal ? "max-[700px]:col-span-1" : "max-[520px]:col-span-1"}`}>How can we help? <textarea className={`${field} resize-y ${modal ? "min-h-[58px]" : ""}`} name="message" rows={modal ? 2 : 5} required /></label>
      <label className={`col-span-full flex items-start gap-3 text-[11px] leading-[1.6] font-normal tracking-normal normal-case text-[#66718a] ${modal ? "max-[700px]:col-span-1 text-[10px]" : "max-[520px]:col-span-1"}`}><input className="mt-px size-4" type="checkbox" name="privacy-consent" value="accepted" required /><span>I agree to G12 Accounts using my information to respond to this enquiry. See the <Link className="text-[#2447a8] underline" href="/privacy-policy/">Privacy Policy</Link>.</span></label>
    </div>
    {error && <p className="mb-6 text-[13px] leading-[1.6] text-[#a12622]" role="alert">{error}</p>}
    <button className="inline-flex min-h-[54px] min-w-[148px] items-center justify-center gap-5 bg-[#2447a8] px-[26px] text-[10px] font-bold uppercase tracking-[.13em] text-white transition-colors hover:bg-[#4d78dc] disabled:cursor-wait disabled:opacity-70" type="submit" disabled={submitting}>{submitting ? "Sending…" : <>Send enquiry <span>↗</span></>}</button>
  </form>;
}
