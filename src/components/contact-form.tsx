"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";

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
      if (!response.ok) {
        const result = await response.json().catch(() => null);
        throw new Error(result?.error || "Submission failed");
      }
      if (!response.ok) throw new Error("Submission failed");
      router.push("/thank-you/");
    } catch {
      setError("We couldn’t send your enquiry. Please try again or email finance@g12.ae.");
      setSubmitting(false);
    }
  }

  return <form className={`contact-form${variant === "modal" ? " contact-form--modal" : ""}`} name="g12-enquiry" onSubmit={handleSubmit}>
    <input type="hidden" name="form-name" value="g12-enquiry"/>
    {variant === "page" && <h2>How can we help?</h2>}
    <div className="form-grid">
      <label>First name<input name="first-name" autoComplete="given-name" required/></label>
      <label>Last name<input name="last-name" autoComplete="family-name" required/></label>
      <label>Work email<input name="email" type="email" autoComplete="email" required/></label>
      <label>Phone<input name="phone" type="tel" autoComplete="tel" required/></label>
      <label className="full">Area of support<select name="service" defaultValue="Corporate Tax" required><option>Corporate Tax</option><option>Audit &amp; Assurance</option><option>VAT Services</option><option>International Tax</option><option>Customs &amp; Compliance</option><option>Accounting &amp; Reporting</option></select></label>
      <label className="full">How can we help?<textarea name="message" rows={5} required/></label>
      <label className="consent full"><input type="checkbox" name="privacy-consent" value="accepted" required/><span>I agree to G12 Accounts using my information to respond to this enquiry. See the <Link href="/privacy-policy/">Privacy Policy</Link>.</span></label>
    </div>
    {error && <p className="form-error" role="alert">{error}</p>}
    <button className="button button--primary" type="submit" disabled={submitting}>{submitting ? "Sending…" : <>Send enquiry <span>↗</span></>}</button>
  </form>;
}
