import Link from "next/link";
import { SectionLabel } from "@/components/section-label";

export function ContactBand() {
  return <section className="relative grid min-h-[650px] place-items-center overflow-hidden bg-g12-navy px-6 py-[100px] text-center text-white"><div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_50%,#355ebe6e,transparent_25%),repeating-radial-gradient(ellipse_at_72%_50%,transparent_0_55px,#6f95ed24_56px_57px)]" aria-hidden="true" /><div className="relative z-10 max-w-[900px]"><div className="flex justify-center"><SectionLabel number="06" light>Start a conversation</SectionLabel></div><h2 className="mt-[50px] mb-7">Ready to move forward<br />with <em className="text-[#a9c0f8]">clarity?</em></h2><p className="mx-auto max-w-[560px] leading-[1.7] text-white/70">Tell us what your business is working toward. We’ll bring the right financial perspective.</p><div className="mt-[42px] flex items-center justify-center gap-10"><Link className="button button--primary" href="/contact-us/">Start a conversation <span>↗</span></Link><a className="font-serif text-2xl" href="tel:+97145706451">+971 4 570 6451</a></div></div></section>;
}
