import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/ui/SmoothScroll";
import CustomCursor from "@/components/ui/CustomCursor";
import ScrollProgress from "@/components/ui/ScrollProgress";
import Loader from "@/components/ui/Loader";
import Navbar from "@/components/ui/Navbar";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://4knottskreativ.com"),
  title: {
    default: "4 Knotts Kreativ — Project Presentations",
    template: "%s · 4 Knotts Kreativ",
  },
  description:
    "A curated presentation of selected work by 4 Knotts Kreativ — full-screen project showcases with live mockups.",
  keywords: ["4 Knotts Kreativ", "presentations", "case studies", "project showcase"],
  authors: [{ name: "4 Knotts Kreativ" }],
  openGraph: {
    type: "website",
    title: "4 Knotts Kreativ — Project Presentations",
    description:
      "Full-screen project presentations from 4 Knotts Kreativ.",
    siteName: "4 Knotts Kreativ",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "4 Knotts Kreativ — Project Presentations",
    description: "Full-screen project presentations from 4 Knotts Kreativ.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
    >
      <body className="font-sans bg-ink text-snow antialiased selection:bg-violet/40">
        <Loader />
        <CustomCursor />
        <ScrollProgress />
        <SmoothScroll>
          <Navbar />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
