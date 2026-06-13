import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { BUSINESS, SITE_URL } from "@/lib/constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${BUSINESS.name} | Handyman, Decks & Remodeling in Spartanburg SC`,
    template: `%s | ${BUSINESS.shortName} — Spartanburg, SC`,
  },
  description: BUSINESS.description + " Serving Spartanburg, Greer, Greenville, Boiling Springs and the Upstate of South Carolina.",
  keywords: [
    "handyman Spartanburg SC",
    "handyman near me",
    "deck builder Spartanburg",
    "porch builder Spartanburg",
    "siding repair near me",
    "carpenter Spartanburg SC",
    "bathroom remodel Spartanburg",
    "electrical repair Spartanburg",
    "home remodeling Spartanburg SC",
    "flooring installation Upstate SC",
  ],
  authors: [{ name: BUSINESS.name }],
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    title: `${BUSINESS.name} | Local Handyman & Remodeling Experts`,
    description: "Decks, porches, siding, bathroom remodels, electrical, and full home improvements. Serving Spartanburg and Upstate SC.",
    images: [{ url: "/images/work/image-d7352d30-f24f-4702-9307-99f41702a9af.jpg" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        <JsonLd />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
