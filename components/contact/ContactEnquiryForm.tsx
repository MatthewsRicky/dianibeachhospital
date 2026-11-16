"use client";

import { useActionState, useEffect, useRef } from "react";
import { Send } from "lucide-react";

import { submitContact, type ContactFormState } from "@/app/actions/contact";

const initialState: ContactFormState = {
  success: false,
  message: "",
};

export default function ContactEnquiryForm() {
  const [state, formAction, pending] = useActionState(
    submitContact,
    initialState,
  );

  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
    }
  }, [state.success]);

  const inputClass =
    "mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition-colors placeholder:text-slate-400 focus:border-[var(--brand-periwinkle)] focus:ring-2 focus:ring-[var(--brand-periwinkle-light)]";

  const labelClass = "text-sm font-semibold text-[var(--brand-navy)]";

  function fieldError(field: string) {
    return state.errors?.[field]?.[0];
  }

  const errorClass = "mt-2 text-sm text-red-600";

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

      <form ref={formRef} action={formAction} className="space-y-6">
        {/* Honeypot field */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="contact-website">Website</label>
          <input
            id="contact-website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

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
              aria-invalid={!!fieldError("name")}
              className={inputClass}
            />
            {fieldError("name") && (
              <p className={errorClass}>{fieldError("name")}</p>
            )}
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
              aria-invalid={!!fieldError("email")}
              className={inputClass}
            />
            {fieldError("email") && (
              <p className={errorClass}>{fieldError("email")}</p>
            )}
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
              aria-invalid={!!fieldError("phone")}
              className={inputClass}
            />
            {fieldError("phone") && (
              <p className={errorClass}>{fieldError("phone")}</p>
            )}
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
              aria-invalid={!!fieldError("city")}
              className={inputClass}
            />
            {fieldError("city") && (
              <p className={errorClass}>{fieldError("city")}</p>
            )}
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
            <option value="">Select an enquiry type</option>
            <option value="general">General Enquiry</option>
            <option value="services">Services and Facilities</option>
            <option value="appointments">Appointments</option>
            <option value="branches">Branch Information</option>
            <option value="other">Other</option>
          </select>
          {fieldError("subject") && (
            <p className={errorClass}>{fieldError("subject")}</p>
          )}
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
            aria-invalid={!!fieldError("message")}
            className={`${inputClass} resize-y`}
          />
          {fieldError("message") && (
            <p className={errorClass}>{fieldError("message")}</p>
          )}
        </div>

        <div className="border-t border-slate-100 pt-6">
          <p className="mb-5 text-xs leading-5 text-slate-500">
            Please do not include confidential medical information or emergency
            medical requests in this form.
          </p>

          <button
            type="submit"
            disabled={pending}
            className="inline-flex w-full items-center justify-center gap-3 rounded-lg bg-[var(--brand-navy)] px-6 py-4 font-semibold text-white transition-colors hover:bg-[var(--brand-navy-dark)] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
          >
            {pending ? "Sending..." : "Send Enquiry"}
            <Send size={17} aria-hidden="true" />
          </button>

          {state.message && (
            <p
              role={state.success ? "status" : "alert"}
              className={`mt-4 rounded-lg p-4 text-sm leading-6 ${
                state.success
                  ? "bg-[var(--brand-navy-light)] text-[var(--brand-navy)]"
                  : "bg-red-50 text-red-700"
              }`}
            >
              {state.message}
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
