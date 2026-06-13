import Link from "next/link";
import { SERVICES, BUSINESS } from "@/lib/constants";

export default function ServicesPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 py-16">
      <div className="max-w-3xl">
        <h1 className="text-5xl font-semibold tracking-[-0.03em] leading-none">Services</h1>
        <p className="mt-4 text-lg text-[var(--text-muted)]">
          Professional work for homeowners across Spartanburg County and the Upstate. One reliable team for almost everything your house needs.
        </p>
      </div>

      <div className="mt-12 grid gap-6">
        {SERVICES.map((service) => (
          <div key={service.slug} id={service.slug} className="rounded-2xl border border-slate-800 p-8 card">
            <h2 className="text-2xl font-semibold tracking-tight">{service.title}</h2>
            <p className="mt-3 text-[17px] leading-relaxed text-[var(--text-muted)]">{service.longDesc}</p>

            <div className="mt-4 text-sm">
              <span className="font-medium text-[var(--text-primary)]">Popular for:</span>{" "}
              {service.keywords.slice(0, 3).join(" • ")}
            </div>

            <Link href="/#contact" className="mt-5 inline-block text-sm font-semibold text-[var(--logo-teal)] hover:underline">
              Get a quote for this project →
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-2xl border border-slate-800 p-6 text-sm card">
        Don’t see exactly what you need? We handle a huge variety of maintenance and improvement work. Call {BUSINESS.phone} and tell us what’s going on — chances are we can help or point you in the right direction.
      </div>
    </div>
  );
}
