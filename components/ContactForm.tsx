'use client';

import { useState } from 'react';
import { FORM_ENDPOINT } from '@/lib/constants';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        const data = await response.json();
        throw new Error(data.error || 'Something went wrong. Please try again or call us directly.');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Submission failed. Please call us at (864)606-4438.');
    }
  };

  if (status === 'success') {
    return (
      <div className="mt-12 text-center max-w-xl mx-auto p-10 rounded-3xl border border-[var(--logo-teal)] bg-[#0a0a0a]">
        <h3 className="text-2xl font-semibold text-[var(--logo-cream)]">Thank you!</h3>
        <p className="mt-3 text-[var(--text-muted)]">
          Your request has been sent. We’ll get back to you as soon as possible (usually the same day).
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-6 text-sm underline text-[var(--logo-teal)]"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-12 text-left mx-auto max-w-xl card border border-slate-700 rounded-3xl p-8 md:p-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1.5" htmlFor="name">Your Name</label>
          <input required type="text" id="name" name="name" className="w-full rounded-lg border border-slate-700 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--logo-teal)] bg-[#0f172a]" placeholder="John Smith" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1.5" htmlFor="phone">Phone Number</label>
          <input required type="tel" id="phone" name="phone" className="w-full rounded-lg border border-slate-700 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--logo-teal)] bg-[#0f172a]" placeholder="(864) 555-1234" />
        </div>
      </div>

      <div className="mt-4">
        <label className="block text-sm font-medium mb-1.5" htmlFor="service">Project Type</label>
        <select id="service" name="service" className="w-full rounded-lg border border-slate-700 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--logo-teal)] bg-[#0f172a]">
          <option value="Decks & Porches">Decks & Porches</option>
          <option value="Siding Installation & Repair">Siding Installation & Repair</option>
          <option value="Bathroom Remodeling">Bathroom Remodeling</option>
          <option value="Flooring">Flooring</option>
          <option value="Home Remodeling">Home Remodeling</option>
          <option value="Electrical Wiring & Repairs">Electrical Wiring & Repairs</option>
          <option value="Sheds & Outbuildings">Sheds & Outbuildings</option>
          <option value="General Handyman & Maintenance">General Handyman & Maintenance</option>
          <option value="Other / General Handyman">Other / General Handyman</option>
        </select>
      </div>

      <div className="mt-4">
        <label className="block text-sm font-medium mb-1.5" htmlFor="message">Tell us about your project</label>
        <textarea required id="message" name="message" rows={4} className="w-full rounded-lg border border-slate-700 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--logo-teal)] bg-[#0f172a]" placeholder="I need a new back deck with stairs and railing, about 16x20..." />
      </div>

      {/* Honeypot for spam bots */}
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

      <button 
        type="submit" 
        disabled={status === 'submitting'}
        className="mt-6 w-full cta-primary text-base disabled:opacity-70"
      >
        {status === 'submitting' ? 'Sending...' : 'Send My Request — We’ll Call You'}
      </button>

      {status === 'error' && (
        <p className="mt-3 text-sm text-red-400 text-center">{errorMessage}</p>
      )}

      <p className="text-[10px] text-center text-[var(--text-muted)] mt-3">
        We typically respond the same day. Your info is private.
      </p>
    </form>
  );
}
