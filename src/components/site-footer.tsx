import Link from "next/link";
import { Brand } from "@/components/brand";

export function SiteFooter() {
  return (
    <footer className="bg-primary px-6 pt-[68px] pb-7 text-white xl:px-[max(24px,calc((100vw-1240px)/2))]">
      <div className="grid items-center gap-6 max-[680px]:justify-items-start min-[681px]:grid-cols-3">
        <Brand light />
        <p className="max-w-[270px] justify-self-center text-center text-sm leading-[1.4] italic tracking-[.01em] text-white/50 max-[680px]:justify-self-start max-[680px]:text-left">Financial clarity for ambitious businesses across the UAE.</p>
        <Link className="justify-self-end text-[9px] uppercase tracking-[.12em] max-[680px]:justify-self-start" href="#top">Back to top <span aria-hidden="true">↑</span></Link>
      </div>
      <div className="mt-[50px] mb-[25px] h-px bg-white/15" />
      <div className="grid items-center gap-6 text-[9px] uppercase tracking-[.08em] text-white/45 max-[680px]:justify-items-start min-[681px]:grid-cols-2">
        <span>© 2026 G12 Accounts. All rights reserved.</span>
        <a className="justify-self-end max-[680px]:justify-self-start" href="https://g12.ae/" target="_blank" rel="noreferrer">A member of the <strong className="text-white">G12</strong> group ↗</a>
      </div>
    </footer>
  );
}
