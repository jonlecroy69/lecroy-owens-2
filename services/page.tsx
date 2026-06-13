import Link from "next/link";
import { SERVICES, BUSINESS } from "@/lib/constants";

export default function ServicesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-semibold tracking-tighter">Services — Handyman, Decks, Siding &amp; Remodeling in Spartanburg SC</h1>
      <p className="mt-3 text-lg text-slate-600 max-w-2xl">
        Professional work for homeowners across Spartanburg County and the Upstate. One reliable team for almost everything your house needs.
      </p>

      <div className="mt-10 grid gap-6">
        {SERVICES.map((service) => (
          <div key={service.slug} id={service.slug} className="rounded-2xl border p-6 md:p-8">
            <h2 className="text-2xl font-semibold tracking-tight">{service.title}</h2>
            <p className="mt-2 text-slate-700">{service.longDesc}</p>

            <div className="mt-4 text-sm">
              <span className="font-medium">Popular for:</span>{" "}
              {service.keywords.slice(0, 3).join(" • ")}
            </div>

            <Link href="/#contact" className="mt-4 inline-block text-sm font-semibold underline">Get a quote for this project →</Link>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-xl bg-slate-50 p-6 text-sm">
        Don’t see exactly what you need? We handle a huge variety of maintenance and improvement work. Call {BUSINESS.phone} and tell us what’s going on — chances are we can help or point you in the right direction.
      </div>
    </div>
  );
}
