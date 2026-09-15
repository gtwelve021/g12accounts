export function SectionLabel({ number, children, light = false }: { number: string; children: React.ReactNode; light?: boolean }) {
  return <div className={`flex items-center gap-3.5 text-[9px] font-bold uppercase tracking-[.18em] ${light ? "text-white/65" : "text-[#536179]"}`}><span className="text-g12-blue">{number}</span>{children}<i className={`h-px w-[50px] ${light ? "bg-white/20" : "bg-[#ccd3df]"}`} aria-hidden="true" /></div>;
}
