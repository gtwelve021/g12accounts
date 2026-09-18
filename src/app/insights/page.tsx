import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Journal } from "@/components/editorial";
import { ContactBand } from "@/components/contact-band";
export const metadata: Metadata = { title: "Insights", description: "Practical perspectives on accounting, tax, audit and business growth in the UAE.", alternates: { canonical: "/insights/" } };
export default function InsightsPage() { return <main><PageHero index="04" label="The journal" title={<>A different<br /><em>perspective.</em></>} description="Practical thinking for leaders making better financial and business decisions." /><Journal all /><ContactBand /></main>; }
