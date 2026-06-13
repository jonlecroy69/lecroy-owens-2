"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#000000] border-b border-[#111111]">
      <div className="max-w-7xl mx-auto pl-2 pr-4 sm:pl-3 sm:pr-6 lg:pl-4 lg:pr-8">
        <div className="flex h-28 md:h-32 items-center justify-between">
          <Link href="/" className="flex items-center gap-3 -ml-1 sm:-ml-2">
            <img 
              src="/images/logo.png" 
              alt={BUSINESS.name} 
              className="h-16 md:h-24 w-auto" 
            />
          </Link>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <Link href="/gallery" className="hover:text-white transition-colors">Work</Link>
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <Link href="/#contact" className="hover:text-white transition-colors">Get Quote</Link>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white transition-colors"
              style={{ background: 'var(--logo-red)' }}
            >
              <Phone className="h-4 w-4" />
              {BUSINESS.phone}
            </a>
            <Link
              href="#contact"
              className="hidden sm:inline-flex items-center rounded-full border px-4 py-2 text-sm font-semibold transition-colors hover:bg-[var(--logo-teal)] hover:text-black"
              style={{ borderColor: 'var(--logo-teal)', color: 'var(--logo-teal)' }}
            >
              Get Quote
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
