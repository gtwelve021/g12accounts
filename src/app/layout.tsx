import type { Metadata } from "next";
import { Geist_Mono, Montserrat } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { MotionSystem } from "@/components/motion-system";
import "./globals.css";
import "./editorial.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://g12accounts.ae"),
  title: {
    default: "Accounting, Tax & Audit Services UAE | G12 Accounts",
    template: "%s | G12 Accounts",
  },
  applicationName: "G12 Accounts",
  description: "Accounting, tax, audit and strategic advisory for businesses building their future in the UAE.",
  keywords: ["accounting services UAE", "corporate tax UAE", "audit services Dubai", "VAT services UAE", "financial advisory UAE"],
  authors: [{ name: "G12 Accounts", url: "https://g12accounts.ae" }],
  creator: "G12 Accounts",
  publisher: "G12 Accounts",
  category: "Financial Services",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: "/",
    siteName: "G12 Accounts",
    title: "Accounting, Tax & Audit Services UAE | G12 Accounts",
    description: "Accounting, tax, audit and strategic advisory for businesses building their future in the UAE.",
    images: [{ url: "/images/g12-future-hero.png", width: 2048, height: 768, alt: "G12 Accounts — financial clarity for UAE businesses" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Accounting, Tax & Audit Services UAE | G12 Accounts",
    description: "Accounting, tax, audit and strategic advisory for businesses building their future in the UAE.",
    images: ["/images/g12-future-hero.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  icons: {
    icon: [
      { url: "/images/icon.png", sizes: "32x32", type: "image/png" },
      { url: "/images/icon.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/images/icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full"><MotionSystem /><SiteHeader />{children}<SiteFooter /></body>
    </html>
  );
}
