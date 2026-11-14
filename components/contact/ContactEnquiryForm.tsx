"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export default function ContactEnquiryForm() {
  const [statusMessage, setStatusMessage] = useState("");

  const inputClass =
    "mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition-colors placeholder:text-slate-400 focus:border-[var(--brand-periwinkle)] focus:ring-2 focus:ring-[var(--brand-periwinkle-light)]";

  const labelClass = "text-sm font-semibold text-[var(--brand-navy)]";

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatusMessage(
      "Your enquiry form is ready, but online submission has not yet been connected. Please contact the hospital directly for now.",
    );
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
      <div className="mb-8">
        <span className="section-eyebrow">Send Us a Message</span>

        <h2 className="mt-3 text-2xl font-bold text-[var(--brand-navy)] sm:text-3xl">
          How Can We Help You?
        </h2>

        <p className="mt-3 text-sm leading-7 text-slate-600">
          Have a question or need more information? Complete the form below and
          our team will be ready to assist.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="contact-name" className={labelClass}>
              Full Name *
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Your full name"
              required
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="contact-email" className={labelClass}>
              Email Address *
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              required
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="contact-phone" className={labelClass}>
              Contact Number *
            </label>
            <input
              id="contact-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="Your phone number"
              required
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="contact-city" className={labelClass}>
              City / Location
            </label>
            <input
              id="contact-city"
              name="city"
              type="text"
              autoComplete="address-level2"
              placeholder="Where are you contacting us from?"
              className={inputClass}
            />
          </div>
        </div>

        <div>
          <label htmlFor="contact-subject" className={labelClass}>
            Enquiry Subject
          </label>
          <select
            id="contact-subject"
            name="subject"
            defaultValue=""
            className={inputClass}
          >
            <option value="" disabled>
              Select an enquiry type
            </option>
            <option value="general">General Enquiry</option>
            <option value="services">Services and Facilities</option>
            <option value="appointments">Appointments</option>
            <option value="branches">Branch Information</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="contact-message" className={labelClass}>
            Your Message *
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            required
            placeholder="How can we assist you?"
            className={`${inputClass} resize-y`}
          />
        </div>

        <div className="border-t border-slate-100 pt-6">
          <p className="mb-5 text-xs leading-5 text-slate-500">
            Please do not include confidential medical information or emergency
            medical requests in this form.
          </p>

          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-3 rounded-lg bg-[var(--brand-navy)] px-6 py-4 font-semibold text-white transition-colors hover:bg-[var(--brand-navy-dark)] sm:w-auto"
          >
            Send Enquiry
            <Send size={17} aria-hidden="true" />
          </button>

          {statusMessage && (
            <p
              role="status"
              className="mt-4 rounded-lg bg-[var(--brand-gold-light)] p-4 text-sm leading-6 text-[var(--brand-navy)]"
            >
              {statusMessage}
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
