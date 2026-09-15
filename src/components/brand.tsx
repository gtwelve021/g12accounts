import Image from "next/image";
import Link from "next/link";

export function Brand({ light = false }: { light?: boolean }) {
  return <Link className="inline-flex w-max items-center" href="/" aria-label="G12 Accounts home"><Image className="block h-auto w-[116px]" src={light ? "/images/g12-logo-white.png" : "/images/g12-logo.png"} alt="G12 Accounts" width={120} height={59} priority /></Link>;
}
