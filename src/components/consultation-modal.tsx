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
  return <div className="consultation-modal" role="dialog" aria-modal="true" aria-labelledby="consultation-title" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
    <div className="consultation-modal__panel">
      <aside className="consultation-modal__intro"><div><p className="eyebrow"><span />Book a consultation</p><h2 id="consultation-title">Start a<br />conversation</h2><p>Share a few details and our team will connect you with the right financial specialist.</p><a href="mailto:finance@g12.ae">finance@g12.ae</a><a href="tel:+97145706451">+971 4 570 6451</a></div></aside>
      <div className="consultation-modal__form"><button type="button" className="consultation-modal__close" onClick={onClose} aria-label="Close consultation form">×</button><ContactForm variant="modal" /></div>
    </div>
  </div>;
}
