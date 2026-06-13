import { BUSINESS } from "@/lib/constants";

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-semibold tracking-tighter">About LeCroy &amp; Owens Handyman &amp; Remodeling Co.</h1>

      <div className="prose prose-slate mt-8 max-w-none text-[15px] leading-relaxed">
        <p>
          We are a local, family-oriented handyman and remodeling company based in Spartanburg, South Carolina.
          With {BUSINESS.yearsExperience} years of combined experience and a crew offering a wide variety of skills,
          we take pride in doing high-quality work that homeowners can count on — whether it’s a new deck for family
          gatherings, fresh siding that protects your house, hundreds of decks built, full home remodels from kitchens
          to additions, or a complete bathroom or home remodel.
        </p>

        <h2>Why Homeowners Choose Us</h2>
        <ul>
          <li><strong>Local &amp; Responsive</strong> — We live and work in the Upstate. We show up when we say we will.</li>
          <li><strong>Quality First</strong> — Proper prep, the right materials, and attention to the details that matter.</li>
          <li><strong>Clear Communication</strong> — You’ll always know what’s happening and what it will cost.</li>
        </ul>

        <h2>Our Promise</h2>
        <p>
          We treat every home like it’s our own. From small handyman repairs to major remodeling projects,
          we deliver craftsmanship that improves your home and your peace of mind.
        </p>

        <p className="text-sm text-slate-500 mt-10">
          Serving Spartanburg County and communities across the Upstate of South Carolina within a 50–100 mile radius.
        </p>
      </div>

      <div className="mt-12 rounded-2xl border border-[var(--logo-teal)] bg-[#0a0a0a] p-6 text-sm">
        <div className="font-semibold text-[var(--logo-cream)] mb-1">Ready to talk about your project?</div>
        <a href={`tel:${BUSINESS.phone.replace(/-/g, "")}`} className="text-[var(--logo-teal)] underline font-medium">{BUSINESS.phone}</a>
        {" "}or <a href="/#contact" className="text-[var(--logo-teal)] underline font-medium">request a free quote online</a>.
      </div>
    </div>
  );
}
