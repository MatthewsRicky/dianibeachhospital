"use client";

import { useState, type FormEvent, type ChangeEvent } from "react";
import { FileUp, Send, CheckCircle2 } from "lucide-react";

export default function CareerApplicationForm() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    setFileError("");
    setSelectedFile(null);
    setStatusMessage("");

    if (!file) return;

    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    const allowedExtensions = [".pdf", ".doc", ".docx"];
    const extension = file.name.slice(file.name.lastIndexOf(".")).toLowerCase();

    if (
      !allowedTypes.includes(file.type) &&
      !allowedExtensions.includes(extension)
    ) {
      setFileError("Please upload your CV as a PDF, DOC or DOCX file.");
      event.target.value = "";
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setFileError("Your CV must be smaller than 5 MB.");
      event.target.value = "";
      return;
    }

    setSelectedFile(file);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatusMessage(
      "The application form is ready, but online submission has not yet been connected. Please connect the hospital's recruitment endpoint before accepting applications.",
    );
  }

  const inputClass =
    "mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition-colors placeholder:text-slate-400 focus:border-[var(--brand-periwinkle)] focus:ring-2 focus:ring-[var(--brand-periwinkle-light)]";

  const labelClass = "text-sm font-semibold text-[var(--brand-navy)]";

  return (
    <section id="career-application" className="section-padding">
      <div className="container-site">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          {/* Introduction */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <span className="section-eyebrow">Join Our Team</span>

            <h2 className="mt-3 text-3xl font-bold leading-tight text-[var(--brand-navy)] sm:text-4xl">
              Take the Next Step in Your Career
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              We welcome applications from individuals who share our commitment
              to professional healthcare and quality patient care. Complete the
              form and attach your CV to express your interest in joining Diani
              Beach Hospital.
            </p>

            <div className="mt-8 rounded-xl bg-[var(--brand-navy-light)] p-6">
              <FileUp
                size={27}
                className="text-[var(--brand-navy)]"
                aria-hidden="true"
              />

              <h3 className="mt-4 font-semibold text-[var(--brand-navy)]">
                Prepare Your CV
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Please have an up-to-date CV ready before completing the
                application. Accepted formats are PDF, DOC and DOCX, up to 5 MB.
              </p>
            </div>
          </div>

          {/* Application Form */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-[var(--brand-navy)]">
                Career Application
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Complete the details below. Fields marked with an asterisk are
                required.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="applicant-name" className={labelClass}>
                    Full Name *
                  </label>
                  <input
                    id="applicant-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Enter your full name"
                    required
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="applicant-email" className={labelClass}>
                    Email Address *
                  </label>
                  <input
                    id="applicant-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    required
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="applicant-phone" className={labelClass}>
                    Phone Number *
                  </label>
                  <input
                    id="applicant-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="Enter your phone number"
                    required
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="applicant-position" className={labelClass}>
                    Position Applying For *
                  </label>
                  <input
                    id="applicant-position"
                    name="position"
                    type="text"
                    placeholder="Enter position or area of interest"
                    required
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="applicant-message" className={labelClass}>
                  Cover Letter / Introduction
                </label>
                <textarea
                  id="applicant-message"
                  name="message"
                  rows={5}
                  placeholder="Tell us briefly about yourself, your experience and why you would like to join our team..."
                  className={`${inputClass} resize-y`}
                />
              </div>

              {/* CV Upload */}
              <div>
                <label htmlFor="applicant-cv" className={labelClass}>
                  Upload Your CV *
                </label>

                <label
                  htmlFor="applicant-cv"
                  className="mt-2 flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 px-5 py-8 text-center transition-colors hover:border-[var(--brand-periwinkle)] hover:bg-[var(--brand-navy-light)]"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[var(--brand-navy)] shadow-sm">
                    <FileUp size={23} aria-hidden="true" />
                  </span>

                  <span className="mt-4 text-sm font-semibold text-[var(--brand-navy)]">
                    {selectedFile
                      ? "Choose a different file"
                      : "Click to upload your CV"}
                  </span>

                  <span className="mt-2 text-xs text-slate-500">
                    PDF, DOC or DOCX · Maximum file size 5 MB
                  </span>

                  <input
                    id="applicant-cv"
                    name="cv"
                    type="file"
                    accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    required
                    onChange={handleFileChange}
                    className="sr-only"
                  />
                </label>

                {selectedFile && (
                  <p className="mt-3 flex items-center gap-2 text-sm text-[var(--brand-navy)]">
                    <CheckCircle2
                      size={17}
                      className="shrink-0 text-green-600"
                      aria-hidden="true"
                    />
                    <span className="break-all">{selectedFile.name}</span>
                  </p>
                )}

                {fileError && (
                  <p role="alert" className="mt-3 text-sm text-red-600">
                    {fileError}
                  </p>
                )}
              </div>

              <div className="border-t border-slate-100 pt-6">
                <p className="mb-5 text-xs leading-5 text-slate-500">
                  By submitting this application, you confirm that the
                  information provided is accurate and that your CV is submitted
                  for recruitment consideration.
                </p>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-3 rounded-lg bg-[var(--brand-navy)] px-6 py-4 font-semibold text-white transition-colors hover:bg-[var(--brand-navy-dark)] sm:w-auto"
                >
                  Submit Application
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
        </div>
      </div>
    </section>
  );
}
