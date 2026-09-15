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

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [consultationOpen, setConsultationOpen] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    document.body.style.overflow = menuOpen || consultationOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen, consultationOpen]);

  return (
    <header className={`site-header${isHome ? " site-header--home" : ""}${menuOpen ? " site-header--solid" : ""}`} id="top">
      <Brand light={!isHome && !menuOpen} />
      <nav className="desktop-nav" aria-label="Main navigation">
        {primaryLinks.slice(0, 2).map((link) => <Link href={link.href} key={link.label}>{link.label}</Link>)}
        <div className="nav-dropdown">
          <button type="button" aria-haspopup="true">Services <span aria-hidden="true">⌄</span></button>
          <div className="nav-dropdown__menu">
            {serviceLinks.map((link) => <Link href={link.href} key={link.label}>{link.label}</Link>)}
          </div>
        </div>
        {primaryLinks.slice(2).map((link) => <Link href={link.href} key={link.label}>{link.label}</Link>)}
      </nav>
      <button className="header-cta" type="button" onClick={() => setConsultationOpen(true)}>Book a consultation <span aria-hidden="true">↗</span></button>
      <button className={`menu-toggle${menuOpen ? " menu-toggle--open" : ""}`} type="button" aria-expanded={menuOpen} aria-controls="mobile-menu" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen((open) => !open)}><span /><span /></button>
      <nav className={`mobile-nav${menuOpen ? " mobile-nav--open" : ""}`} id="mobile-menu" aria-label="Mobile navigation">
        {primaryLinks.slice(0, 2).map((link, index) => <Link href={link.href} key={link.label} onClick={() => setMenuOpen(false)}><small>{String(index + 1).padStart(2, "0")}</small>{link.label}</Link>)}
        <div className="mobile-services">
          <span><small>03</small>Services</span>
          <div className="mobile-services__links">{serviceLinks.map((link) => <Link href={link.href} key={link.label} onClick={() => setMenuOpen(false)}>{link.label}</Link>)}</div>
        </div>
        {primaryLinks.slice(2).map((link, index) => <Link href={link.href} key={link.label} onClick={() => setMenuOpen(false)}><small>{String(index + 4).padStart(2, "0")}</small>{link.label}</Link>)}
      </nav>
      <ConsultationModal open={consultationOpen} onClose={() => setConsultationOpen(false)} />
    </header>
  );
}
