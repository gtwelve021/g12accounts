import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const form = await request.formData();
  const required = ["first-name", "last-name", "email", "message", "privacy-consent"];
  const missing = required.filter((field) => !String(form.get(field) ?? "").trim());
  if (missing.length) return NextResponse.json({ error: "Please complete all required fields." }, { status: 400 });
  const email = String(form.get("email"));
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
  if (!process.env.RESEND_API_KEY || !process.env.CONTACT_TO_EMAIL) return NextResponse.json({ error: "Contact delivery is not configured yet. Please email finance@g12.ae directly." }, { status: 503 });
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from: process.env.CONTACT_FROM_EMAIL ?? "G12 Website <onboarding@resend.dev>", to: [process.env.CONTACT_TO_EMAIL], reply_to: email, subject: `New G12 enquiry from ${form.get("first-name")} ${form.get("last-name")}`, text: `Email: ${email}\nPhone: ${form.get("phone") ?? ""}\nService: ${form.get("service") ?? ""}\n\n${form.get("message")}` }),
  });
  if (!response.ok) return NextResponse.json({ error: "We could not send your enquiry. Please try again." }, { status: 502 });
  return NextResponse.json({ ok: true });
}
