export function PageHero({ index, label, title, description }: { index: string; label: string; title: React.ReactNode; description: string }) {
  return (
    <section className="relative flex min-h-[570px] items-center overflow-hidden bg-[linear-gradient(125deg,#06142d_0%,#0b285b_62%,#163f84_100%)] px-6 pt-[135px] pb-[90px] text-white min-[521px]:min-h-[600px] min-[801px]:min-h-[650px] min-[801px]:px-[max(24px,calc((100vw-1240px)/2))] min-[801px]:pt-[170px]">
      <div className="absolute top-[12%] right-[4%] size-[520px] rounded-full bg-[radial-gradient(circle_at_30%_30%,#789bf0,#234aa7_48%,transparent_71%)] opacity-[.28] blur-[5px]" aria-hidden="true" />
      <span className="absolute right-[3%] bottom-[-5%] text-[clamp(170px,26vw,390px)] leading-[.8] font-bold tracking-[-.1em] text-white/[.04]" aria-hidden="true">G12</span>
      <div className="relative z-10 max-w-[950px]">
        <div className="flex items-center gap-[13px] text-[10px] font-semibold uppercase tracking-[.2em]"><span className="h-px w-[30px] bg-g12-gold" />{index} / {label}</div>
        <h1 className="mt-8 mb-[27px] text-[clamp(52px,12vw,78px)] leading-[.91] font-medium tracking-[-.06em] min-[801px]:text-[clamp(62px,7.3vw,108px)] [&_em]:text-[#a9c0f8]">{title}</h1>
        <p className="m-0 max-w-[650px] text-[15px] leading-[1.75] text-white/70 min-[521px]:text-[17px]">{description}</p>
      </div>
      <span className="absolute right-[25px] bottom-[45px] text-[8px] uppercase tracking-[.22em] [writing-mode:vertical-rl] max-[520px]:hidden">{label} / {index}</span>
    </section>
  );
}
