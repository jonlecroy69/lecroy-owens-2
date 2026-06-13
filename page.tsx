import Link from "next/link";
import { BUSINESS, SERVICES, LOCATIONS, TESTIMONIALS, WORK_PHOTOS } from "@/lib/constants";
import ServiceCard from "@/components/ServiceCard";
import { Phone, MapPin, Award } from "lucide-react";

export default function Home() {
  // Use the best real photos we have for hero + featured work
  const heroImage = "/images/work/image-d7352d30-f24f-4702-9307-99f41702a9af.jpg"; // nice deck

  return (
    <div>
      {/* HERO — Strong local keywords + immediate CTA */}
      <section className="relative flex min-h-[92vh] items-center justify-center overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff15_0.8px,transparent_1px)] bg-[length:4px_4px]" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />

        <div className="relative z-10 max-w-5xl px-6 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-sm backdrop-blur">
            <MapPin className="h-4 w-4" /> Spartanburg, SC &amp; Upstate South Carolina
          </div>

          <h1 className="mx-auto max-w-5xl text-balance text-6xl font-semibold tracking-[-0.04em] leading-none sm:text-7xl md:text-[80px]">
            LeCroy &amp; Owens<br />Handyman &amp; Remodeling.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-xl text-white/90">
            Decks, porches, siding, bathroom remodels, electrical &amp; full home improvements.<br className="hidden sm:block" />
            Serving Spartanburg and the Upstate for {BUSINESS.yearsExperience} years.
          </p>

          {/* Prominent logo mark in hero to center the brand */}
          <div className="mt-6 flex justify-center">
            <img 
              src="/images/logo-banner.png" 
              alt={BUSINESS.name} 
              className="h-20 md:h-28 w-auto opacity-95" 
            />
          </div>

          <p className="mt-3 text-[var(--logo-cream)] text-sm tracking-[2px] font-medium">
            QUALITY WORK. HONEST PRICES. BUILT TO LAST.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href={BUSINESS.phoneHref} className="cta-primary text-lg">
              <Phone className="h-5 w-5" /> Call {BUSINESS.phone}
            </a>
            <a href="#contact" className="cta-secondary text-lg border-white/30 text-white hover:bg-white/10">
              Get a Free Quote
            </a>
          </div>

          <p className="mt-6 text-sm text-white/70">
            Same-week availability for many repairs • Free estimates on larger projects
          </p>
        </div>

        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-xs tracking-[3px] text-white/60 md:block">
          SCROLL TO SEE OUR WORK
        </div>
      </section>

      {/* TRUST BAR — Clean, Apple/OpenAI minimal style */}
      <section className="border-b border-slate-800 py-6" style={{ background: 'var(--surface)' }}>
        <div className="max-w-6xl mx-auto px-4 flex flex-wrap justify-center gap-x-10 gap-y-3 text-sm">
          <div className="trust-item">
            <Award className="h-4 w-4" />
            <span>{BUSINESS.yearsExperience} Years Experience</span>
          </div>
          <div className="trust-item">
            <Phone className="h-4 w-4" />
            <a href={BUSINESS.phoneHref} className="hover:underline">{BUSINESS.phone}</a>
          </div>
          <div className="trust-item">
            <MapPin className="h-4 w-4" />
            <span>Spartanburg County + {BUSINESS.serviceRadius}</span>
          </div>
        </div>
      </section>

      {/* SERVICES — Clean, spacious Apple/OpenAI style */}
      <section id="services" className="section max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-20 md:py-24">
        <div className="max-w-2xl mb-14">
          <div className="uppercase tracking-[3px] text-xs font-medium text-[var(--logo-teal)] mb-3">What We Do Best</div>
          <h2 className="text-5xl font-semibold tracking-[-0.03em] leading-none">Handyman, carpentry &amp;<br />remodeling services.</h2>
          <p className="mt-4 text-lg text-[var(--text-muted)] max-w-md">
            From decks and porches to siding, flooring, electrical, and full home transformations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {SERVICES.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href="#contact" className="cta-primary">Request a Free Quote for Your Project</a>
        </div>
      </section>

      {/* AREAS WE SERVE — Clean, spacious Apple/OpenAI style */}
      <section id="areas" className="section border-y border-slate-800 py-20" style={{ background: 'var(--surface)' }}>
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <div className="uppercase tracking-[3px] text-xs font-medium text-[var(--logo-teal)] mb-3">Local to You</div>
              <h2 className="text-5xl font-semibold tracking-[-0.03em] leading-none">Serving Spartanburg<br />and the Upstate.</h2>
              <p className="mt-5 text-lg text-[var(--text-muted)] max-w-md">
                We proudly serve homeowners across Spartanburg County and a wide radius throughout the Upstate.
              </p>
            </div>

            <div className="text-[15px] text-[var(--text-muted)] space-y-6 pt-1">
              <div>
                <div className="font-medium text-[var(--text-primary)] mb-2">Areas we regularly work in</div>
                <div className="flex flex-wrap gap-2">
                  {LOCATIONS.slice(0, 10).map((loc) => (
                    <span key={loc} className="rounded-full border border-slate-700 px-3 py-1 text-sm">{loc}</span>
                  ))}
                  <span className="rounded-full border border-slate-700 px-3 py-1 text-sm">+ {BUSINESS.serviceRadius}</span>
                </div>
              </div>
              <div className="pt-2">
                Call <a href={BUSINESS.phoneHref} className="text-[var(--text-primary)] hover:underline">{BUSINESS.phone}</a> — we can usually be on site within a few days for estimates.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY / RECENT WORK TEASER */}
      <section id="gallery" className="section max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-20 md:py-24">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="text-[var(--logo-teal)] text-xs tracking-[3px] font-medium mb-2">REAL RESULTS</div>
            <h2 className="text-5xl font-semibold tracking-[-0.03em] leading-none">Recent Work</h2>
          </div>
          <Link href="/gallery" className="hidden sm:block text-sm font-semibold underline underline-offset-4">View full gallery →</Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {WORK_PHOTOS.slice(0, 6).map((photo, idx) => (
            <div key={idx} className="photo-card group relative aspect-[16/11] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photo.images[0].src}
                alt={photo.images[0].caption}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/60 p-4">
                <div className="text-[10px] tracking-[1.5px] text-[var(--logo-teal)] font-semibold mb-1">{photo.category}</div>
                <div className="text-white text-sm font-medium leading-tight line-clamp-2 drop-shadow">{photo.caption}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <Link href="/gallery" className="text-sm font-semibold underline underline-offset-4 text-[var(--logo-teal)]">See the full gallery of our work →</Link>
        </div>
      </section>

      {/* TESTIMONIALS — Minimal and confident, Apple/OpenAI style */}
      <section className="section border-y py-20" style={{ background: 'var(--surface)', borderColor: '#334155' }}>
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="max-w-2xl mb-12">
            <div className="text-[var(--logo-teal)] text-xs tracking-[3px] font-medium mb-3">HEAR FROM OUR CUSTOMERS</div>
            <h2 className="text-5xl font-semibold tracking-[-0.03em] leading-none">Homeowners across the Upstate trust us with their homes.</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="rounded-2xl border p-8 card">
                <p className="text-[17px] leading-tight text-[var(--text-primary)]">“{t.quote}”</p>
                <div className="mt-6 text-sm" style={{ color: 'var(--logo-cream)' }}>
                  — {t.name} <span className="text-[var(--text-muted)]">• {t.location}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-[var(--text-muted)] mt-8">Real reviews. We’ll swap in your actual customer feedback at the end.</p>
        </div>
      </section>

      {/* FINAL CTA + SIMPLE CONTACT FORM — Premium, minimal */}
      <section id="contact" className="section max-w-3xl mx-auto px-6 py-20 md:py-24 text-center">
        <h2 className="text-5xl font-semibold tracking-[-0.03em] leading-none">Ready to get started?</h2>
        <p className="mt-4 text-xl text-[var(--text-muted)]">Call us today or send a quick note. We’ll get back to you fast with a free, no-pressure estimate.</p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a href={BUSINESS.phoneHref} className="cta-primary text-lg">
            <Phone className="h-5 w-5" /> {BUSINESS.phone}
          </a>
          <a href="#contact-form" className="cta-secondary text-lg">Send Message</a>
        </div>

        {/* Mobile floating call button — high conversion for local service sites */}
        <a 
          href={BUSINESS.phoneHref} 
          className="fixed bottom-4 right-4 z-50 md:hidden flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-white shadow-lg active:scale-[0.985] text-sm font-semibold"
        >
          <Phone className="h-4 w-4" /> Call {BUSINESS.phone}
        </a>

        {/* Simple quote form (MVP). Wire to Formspree or your email service in next step. */}
        <form id="contact-form" className="mt-12 text-left mx-auto max-w-xl card border border-slate-700 rounded-3xl p-8 md:p-10" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1.5" htmlFor="name">Your Name</label>
              <input required type="text" id="name" name="name" className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900" placeholder="John Smith" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5" htmlFor="phone">Phone Number</label>
              <input required type="tel" id="phone" name="phone" className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900" placeholder="(864) 555-1234" />
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium mb-1.5" htmlFor="service">Project Type</label>
            <select id="service" name="service" className="w-full rounded-lg border border-slate-700 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--logo-teal)] bg-[#0f172a]">
              {SERVICES.map(s => (
                <option key={s.slug} value={s.title}>{s.title}</option>
              ))}
              <option value="Other / General Handyman">Other / General Handyman</option>
            </select>
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium mb-1.5" htmlFor="message">Tell us about your project</label>
            <textarea required id="message" name="message" rows={4} className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900" placeholder="I need a new back deck with stairs and railing, about 16x20..." />
          </div>

          <button type="submit" className="mt-6 w-full cta-primary text-base">Send My Request — We’ll Call You</button>
          <p className="text-[10px] text-center text-slate-500 mt-3">
            We typically respond the same day. Your info is private. <br />
            <span className="text-[var(--logo-teal)]">Tip: Replace the form action with your free Formspree endpoint for best results (see README).</span>
          </p>

          {/* TODO: Replace action="https://formspree.io/f/YOUR_FORM_ID" with your real Formspree (or other) endpoint. */}
        </form>

        <div className="mt-8 text-xs text-slate-500">
          LeCroy &amp; Owens Handyman &amp; Remodeling Co. • {BUSINESS.phone} • Serving Spartanburg, SC and Upstate South Carolina
        </div>
      </section>
    </div>
  );
}
