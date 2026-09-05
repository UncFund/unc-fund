import type { Metadata } from "next";
import { Fredoka, Source_Sans_3, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const display = Fredoka({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-display" });
const body = Source_Sans_3({ subsets: ["latin"], weight: ["400", "600"], style: ["normal", "italic"], variable: "--font-body" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "600"], variable: "--font-mono" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://unc.fund";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Unc.Fund", template: "%s · Unc.Fund" },
  description: "Small checks. Big uncle energy. First checks into blockchain, AI, software and robotics founders. $500 to $9,999, decision in a week.",
  openGraph: {
    title: "Unc.Fund",
    description: "Small checks. Big uncle energy. First checks into frontier-tech founders.",
    url: siteUrl,
    siteName: "Unc.Fund",
    type: "website",
  },
  twitter: { card: "summary_large_image", site: "@uncfund", creator: "@uncfund" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
