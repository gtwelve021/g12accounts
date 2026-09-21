"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Brand } from "@/components/brand";
import { ConsultationModal } from "@/components/consultation-modal";

const primaryLinks = [
  { href: "/", label: "Home" },
  { href: "/about-us/", label: "About Us" },
  { href: "/expertise/", label: "Expertise" },
  { href: "/insights/", label: "Insights" },
  { href: "/contact-us/", label: "Contact Us" },
];

const serviceLinks = [
  { href: "/corporate-tax/", label: "Corporate Tax" },
  { href: "/audit-assurance/", label: "Audit & Assurance" },
  { href: "/vat/", label: "VAT Services" },
  { href: "/international-tax/", label: "International Tax" },
  { href: "/customs-services/", label: "Customs Services" },
  { href: "/compliance-services/", label: "Compliance Services" },
];

const desktopLink = "relative flex h-full items-center text-xs font-medium after:absolute after:inset-x-0 after:bottom-0 after:h-[2px] after:bg-g12-gold after:scale-x-0 after:transition-transform hover:after:scale-x-100 focus-visible:after:scale-x-100";

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen || consultationOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen, consultationOpen]);

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 28);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 grid h-[85px] grid-cols-[1fr_auto] items-center border-b px-6 text-[#172a40] transition-all duration-500 min-[981px]:h-[100px] min-[981px]:grid-cols-[auto_1fr_auto] min-[981px]:px-[max(46px,calc((100vw-1348px)/2))] ${scrolled ? "border-[#172a401a] bg-[#f6f5f1f5] shadow-sm" : "border-[#172a401a] bg-[#f6f5f1]"}`} id="top">
      <Brand />
      <nav className="hidden h-[74px] items-stretch justify-self-center gap-[clamp(24px,2.6vw,44px)] min-[981px]:flex" aria-label="Main navigation">
        {primaryLinks.slice(0, 2).map((link) => <Link className={`${desktopLink} ${pathname === link.href ? "after:scale-x-100" : ""}`} href={link.href} key={link.label}>{link.label}</Link>)}
        <div className="group relative flex h-full items-center">
          <button className="flex h-full items-center border-0 bg-transparent p-0 text-xs font-medium text-inherit" type="button" aria-haspopup="true">Services <span className="ml-1 text-[10px]" aria-hidden="true">⌄</span></button>
          <div className="invisible absolute top-full left-[-18px] z-20 min-w-[220px] -translate-y-[7px] border-t-2 border-g12-gold bg-g12-navy py-3 opacity-0 shadow-[0_14px_30px_rgba(0,0,0,.18)] transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
            {serviceLinks.map((link) => <Link className="service-menu-link block whitespace-nowrap px-[18px] py-[9px] text-[11px] tracking-[.045em] text-white hover:bg-white/[.06] hover:text-g12-gold focus-visible:bg-white/[.06] focus-visible:text-g12-gold" href={link.href} key={link.label}>{link.label}</Link>)}
          </div>
        </div>
        {primaryLinks.slice(2).map((link) => <Link className={`${desktopLink} ${pathname === link.href ? "after:scale-x-100" : ""}`} href={link.href} key={link.label}>{link.label}</Link>)}
      </nav>
      <button className="hidden justify-self-end rounded-full border border-[#2548d8] bg-[#2548d8] px-5 py-3 text-[11px] font-semibold tracking-[.04em] text-white transition hover:bg-[#1735ac] min-[981px]:block" type="button" onClick={() => setConsultationOpen(true)}>Book a consultation <span className="ml-[7px] text-g12-gold" aria-hidden="true">↗</span></button>
      <button className={`relative z-[60] grid justify-self-end gap-[7px] border-0 bg-transparent p-2 min-[981px]:hidden ${menuOpen ? "text-white" : "text-current"}`} type="button" aria-expanded={menuOpen} aria-controls="mobile-menu" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen((open) => !open)}><span className={`block h-px w-[27px] bg-current transition-transform ${menuOpen ? "translate-y-1 rotate-45" : ""}`} /><span className={`block h-px w-[27px] bg-current transition-transform ${menuOpen ? "-translate-y-1 -rotate-45" : ""}`} /></button>
      <nav className={`fixed inset-0 z-50 flex flex-col justify-start overflow-auto bg-[#030b1c] px-7 pt-[120px] pb-[50px] text-white transition-opacity min-[981px]:hidden ${menuOpen ? "visible opacity-100" : "invisible pointer-events-none opacity-0"}`} id="mobile-menu" aria-label="Mobile navigation">
        {primaryLinks.slice(0, 2).map((link, index) => <Link className="flex items-baseline gap-5 border-b border-white/15 py-4 font-serif text-[38px] leading-[1.1]" href={link.href} key={link.label} onClick={() => setMenuOpen(false)}><small className="text-[9px] text-g12-gold">{String(index + 1).padStart(2, "0")}</small>{link.label}</Link>)}
        <div><span className="flex items-baseline gap-5 border-b border-white/15 py-4 font-serif text-[38px] leading-[1.1]"><small className="text-[9px] text-g12-gold">03</small>Services</span><div className="my-3 ml-7 grid gap-2">{serviceLinks.map((link) => <Link className="text-[13px] text-white/70" href={link.href} key={link.label} onClick={() => setMenuOpen(false)}>{link.label}</Link>)}</div></div>
        {primaryLinks.slice(2).map((link, index) => <Link className="flex items-baseline gap-5 border-b border-white/15 py-4 font-serif text-[38px] leading-[1.1]" href={link.href} key={link.label} onClick={() => setMenuOpen(false)}><small className="text-[9px] text-g12-gold">{String(index + 4).padStart(2, "0")}</small>{link.label}</Link>)}
        <button className="mt-8 w-max border-b border-white/60 pb-1 text-xs tracking-wider" type="button" onClick={() => { setMenuOpen(false); setConsultationOpen(true); }}>Book a consultation ↗</button>
      </nav>
      <ConsultationModal open={consultationOpen} onClose={() => setConsultationOpen(false)} />
    </header>
  );
}
