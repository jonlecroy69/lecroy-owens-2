import { BUSINESS, LOCATIONS } from "@/lib/constants";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-10">
          {/* Brand + NAP */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <img src="/images/logo.png" alt={BUSINESS.name} className="h-12 md:h-16 w-auto" />
            </div>
            <div className="font-semibold text-white text-base tracking-tight mb-1">
              {BUSINESS.name}
            </div>
            <p className="text-sm text-slate-400 mb-4 max-w-xs">
              {BUSINESS.tagline}
            </p>
            <div className="space-y-1 text-sm">
              <a href={BUSINESS.phoneHref} className="block hover:text-white transition-colors">
                {BUSINESS.phone}
              </a>
              <a href={`mailto:${BUSINESS.email}`} className="block hover:text-white transition-colors">
                {BUSINESS.email}
              </a>
              <div>Spartanburg, South Carolina</div>
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <div className="font-semibold text-white mb-3">Areas We Serve</div>
            <div className="text-sm grid grid-cols-2 gap-x-3 gap-y-1">
              {LOCATIONS.slice(0, 12).map((loc) => (
                <div key={loc} className="hover:text-white transition-colors">{loc}</div>
              ))}
              <div className="col-span-2 mt-1 text-xs text-slate-500">
                + surrounding communities within {BUSINESS.serviceRadius}
              </div>
            </div>
          </div>

          {/* Quick Links + Legal */}
          <div>
            <div className="font-semibold text-white mb-3">Quick Links</div>
            <div className="space-y-1 text-sm">
              <Link href="#services" className="block hover:text-white transition-colors">Services</Link>
              <Link href="#gallery" className="block hover:text-white transition-colors">Our Work</Link>
              <Link href="#about" className="block hover:text-white transition-colors">About Us</Link>
              <Link href="#contact" className="block hover:text-white transition-colors">Request a Quote</Link>
            </div>

            <div className="mt-8 text-xs text-slate-500">
              © {currentYear} {BUSINESS.name}. All rights reserved.<br />
              Serving homeowners across the Upstate of South Carolina.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
