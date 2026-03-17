import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Ammar Babaset — Software Engineering Student",
  description:
    "Portfolio of Ammar Babaset, a software engineering student building clean, performant web applications and exploring full-stack development.",
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
      </body>
    </html>
  );
}
