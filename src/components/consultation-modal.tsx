"use client";

import { useEffect } from "react";
import { ContactForm } from "@/components/contact-form";

export function ConsultationModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) return null;
  return <div className="fixed inset-0 z-[100] grid place-items-center bg-[#020b1dc7] p-3 backdrop-blur-md sm:p-6" role="dialog" aria-modal="true" aria-labelledby="consultation-title" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
    <div className="grid max-h-[calc(100svh-24px)] w-full max-w-[980px] overflow-auto bg-[#eaf0fb] shadow-2xl md:max-h-[calc(100svh-48px)] md:grid-cols-[.55fr_1.12fr]">
      <aside className="flex min-h-[210px] items-center bg-g12-navy p-7 text-white md:min-h-[535px] md:p-[42px]"><div className="max-w-[255px]"><p className="eyebrow text-[#a9c0f8]"><span />Book a consultation</p><h2 id="consultation-title" className="mt-8 mb-3 text-[38px] leading-[.92] tracking-[-.055em] md:mt-16 md:mb-5 md:text-[58px]">Start a<br />conversation</h2><p className="mb-3 text-sm leading-6 text-[#b7c7e4] md:mb-7">Share a few details and our team will connect you with the right financial specialist.</p><a className="mr-[18px] mt-2 inline-block border-b border-white/50 pb-1 text-[13px] text-white md:mt-[15px] md:block" href="mailto:finance@g12.ae">finance@g12.ae</a><a className="mr-[18px] mt-2 inline-block border-b border-white/50 pb-1 text-[13px] text-white md:mt-[15px] md:block" href="tel:+97145706451">+971 4 570 6451</a></div></aside>
      <div className="relative p-7 pt-14 md:p-[38px_72px] md:pt-16"><button type="button" className="absolute top-3 right-5 border-0 bg-transparent text-[38px] leading-none font-light text-g12-navy" onClick={onClose} aria-label="Close consultation form">×</button><ContactForm variant="modal" /></div>
    </div>
  </div>;
}
