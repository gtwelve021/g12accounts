import Link from "next/link";

export function Brand({ light = false }: { light?: boolean }) {
  return <Link className={`brand${light ? " brand--light" : ""}`} href="/" aria-label="G12 Accounts home"><svg className="brand__mark" viewBox="0 0 44 44" aria-hidden="true"><path d="M7 10h13v7h-6v13h13v-6h-7v-7h15v20H7z"/><path d="M24 7h13v7H24z"/></svg><span className="brand__copy"><strong>G12</strong><span>Accounts</span><small>A G12 Group Company</small></span></Link>;
}
