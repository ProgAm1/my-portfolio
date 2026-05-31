import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";
import ScrollProgress from "@/components/scroll-progress";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  // ── Base URL (Next.js resolves all relative image/URL metadata against this) ──
  metadataBase: new URL("https://ammarbabaset.dev"),

  // ── Title ──
  title: {
    default: "Ammar Babasit | Software Engineering Portfolio",
    template: "%s | Ammar Babasit",
  },

  // ── Description & Keywords ──
  description:
    "Software Engineering student showcasing full-stack, computer vision, and bioinformatics projects.",
  keywords: [
    "Ammar Babaset",
    "Ammar Babasit",
    "software engineering",
    "portfolio",
    "full-stack developer",
    "Next.js",
    "React",
    "computer vision",
    "bioinformatics",
    "web development",
  ],

  // ── Canonical URL ──
  alternates: {
    canonical: "https://ammarbabaset.dev",
  },

  // ── Open Graph (WhatsApp, LinkedIn, Discord, Facebook, iMessage) ──
  openGraph: {
    type: "website",
    url: "https://ammarbabaset.dev",
    siteName: "Ammar Babasit Portfolio",
    title: "Ammar Babasit | Software Engineering Portfolio",
    description:
      "Software Engineering student showcasing full-stack, computer vision, and bioinformatics projects.",
  },

  // ── Twitter / X Card ──
  twitter: {
    card: "summary_large_image",
    title: "Ammar Babasit | Software Engineering Portfolio",
    description:
      "Software Engineering student showcasing full-stack, computer vision, and bioinformatics projects.",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark scroll-smooth ${geistSans.variable} ${geistMono.variable}`}>
      <body
        className={`font-sans antialiased bg-[#0a0a0f] text-white selection:bg-violet-500/30 overflow-x-hidden`}
      >
        <ScrollProgress />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
