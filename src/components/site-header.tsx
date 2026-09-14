"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Brand } from "@/components/brand";

const links = [{href:"/#about",label:"About"},{href:"/#expertise",label:"Expertise"},{href:"/#approach",label:"Why G12"},{href:"/#insights",label:"Insights"}];

export function SiteHeader() {
  const [menuOpen,setMenuOpen]=useState(false); const [scrolled,setScrolled]=useState(false);
  useEffect(()=>{const onScroll=()=>setScrolled(window.scrollY>24); onScroll(); window.addEventListener("scroll",onScroll,{passive:true}); return()=>window.removeEventListener("scroll",onScroll)},[]);
  useEffect(()=>{document.body.style.overflow=menuOpen?"hidden":""; return()=>{document.body.style.overflow=""}},[menuOpen]);
  return <header className={`site-header${scrolled||menuOpen?" site-header--solid":""}`} id="top"><Brand/><nav className="desktop-nav" aria-label="Main navigation">{links.map(link=><Link href={link.href} key={link.label}>{link.label}</Link>)}</nav><Link className="header-cta" href="/contact-us/">Book a consultation <span aria-hidden="true">↗</span></Link><button className={`menu-toggle${menuOpen?" menu-toggle--open":""}`} type="button" aria-expanded={menuOpen} aria-controls="mobile-menu" aria-label={menuOpen?"Close menu":"Open menu"} onClick={()=>setMenuOpen(open=>!open)}><span/><span/></button><nav className={`mobile-nav${menuOpen?" mobile-nav--open":""}`} id="mobile-menu" aria-label="Mobile navigation">{links.map((link,index)=><Link href={link.href} key={link.label} onClick={()=>setMenuOpen(false)}><small>0{index+1}</small>{link.label}</Link>)}<Link href="/contact-us/" onClick={()=>setMenuOpen(false)}><small>05</small>Book a consultation</Link></nav></header>;
}
