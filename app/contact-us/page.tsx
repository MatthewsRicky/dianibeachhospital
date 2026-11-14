import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Clock3,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import Breadcrumbs from "@/components/shared/Breadcrumbs";
import PageHero from "@/components/shared/PageHero";
import ContentSection from "@/components/shared/ContentSection";
import ContactEnquiryForm from "@/components/contact/ContactEnquiryForm";

export const metadata = {
  title: "Contact Us | Diani Beach Hospital",
  description:
    "Contact Diani Beach Hospital in Diani, Kenya. Find our main hospital location, telephone numbers, email address and branch locations.",
};

const branches = [
  {
    name: "Shika Adabu",
    slug: "shika-adabu",
    address: "Likoni–Ukunda Road, near Likoni Fire Station, Likoni – 80110",
    phone: "+254 722 991 991",
  },
  {
    name: "Likoni",
    slug: "likoni",
    address: "Likoni–Ukunda Road, near Oilcom Petrol Station, Likoni – 80110",
    phone: "+254 725 081 334",
  },
  {
    name: "Kwale",
    slug: "kwale",
    address: "Behind Equity, Kinango Road, Kwale – 80403",
    phone: "+254 791 579 665",
  },
  {
    name: "Ukunda",
    slug: "ukunda",
    address:
      "Matuga Plaza, next to Equity Bank, Diani Beach Road, Ukunda – 80400",
    phone: "+254 790 929 980",
  },
  {
    name: "Mtongwe",
    slug: "mtongwe",
    address:
      "Mtongwe–Kenya Navy Road, next to Dongo Kundu SEZ, Mtongwe – 80111",
    phone: "+254 725 277 277",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <div className="container-site">
        <Breadcrumbs items={[{ label: "Contact Us" }]} />
      </div>

      {/* Hero */}
      <PageHero
        eyebrow="Get in Touch"
        title="We're Here When You Need Us"
        description="Whether you have a question about our services, need assistance or would like to make an enquiry, the Diani Beach Hospital team is ready to help."
        image="/images/hero/Years-Of-Excelence-in-Health-care.-750x375-5.png"
        imageAlt="Diani Beach Hospital"
      >
        <Link
          href="#contact-details"
          className="button-primary inline-flex items-center gap-2"
        >
          Contact Our Team
          <ArrowRight size={17} aria-hidden="true" />
        </Link>
      </PageHero>

      {/* Main Contact Information and Form */}
      <ContentSection
        id="contact-details"
        eyebrow="Contact Information"
        title="Let's Start a Conversation"
        description="Reach our team through the contact details below or send us a message using the enquiry form."
      >
        <div className="grid items-start gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-12">
          {/* Contact Details */}
          <div className="space-y-5">
            <div className="rounded-2xl bg-[var(--brand-navy)] p-7 text-white sm:p-8">
              <span className="text-sm font-semibold tracking-wide text-[var(--brand-gold)]">
                DIANI BEACH HOSPITAL
              </span>

              <h3 className="mt-4 text-2xl font-bold">Main Hospital Contact</h3>

              <div className="mt-7 space-y-6">
                <div className="flex items-start gap-4">
                  <Phone
                    size={20}
                    className="mt-1 shrink-0 text-[var(--brand-gold)]"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-sm text-white/65">Main Hotline</p>
                    <a
                      href="tel:+254700999999"
                      className="mt-1 block font-semibold transition-colors hover:text-[var(--brand-gold)]"
                    >
                      +254 700 999 999
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail
                    size={20}
                    className="mt-1 shrink-0 text-[var(--brand-gold)]"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-sm text-white/65">Email Address</p>
                    <a
                      href="mailto:contact@dbh.co.ke"
                      className="mt-1 block font-semibold transition-colors hover:text-[var(--brand-gold)]"
                    >
                      contact@dbh.co.ke
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin
                    size={20}
                    className="mt-1 shrink-0 text-[var(--brand-gold)]"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-sm text-white/65">Postal Address</p>
                    <p className="mt-1 font-medium leading-7">
                      Box 5074,
                      <br />
                      Diani Beach, Ukunda,
                      <br />
                      Kenya – 80401
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-white/15 pt-6">
                <p className="flex items-center gap-2 text-sm text-white/75">
                  <Clock3
                    size={16}
                    className="text-[var(--brand-gold)]"
                    aria-hidden="true"
                  />
                  Contact our team for assistance.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="font-semibold text-[var(--brand-navy)]">
                Need to speak to someone?
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Call our main hospital hotline for general enquiries.
              </p>

              <a
                href="tel:+254700999999"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-navy)] hover:text-[var(--brand-periwinkle)]"
              >
                Call +254 700 999 999
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Enquiry Form */}
          <ContactEnquiryForm />
        </div>
      </ContentSection>

      {/* Main Hospital Map */}
      <ContentSection
        background="light"
        eyebrow="Find Us"
        title="Visit Diani Beach Hospital"
        description="Find our main hospital location in Diani Beach, Ukunda, Kenya."
      >
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="relative h-[350px] w-full sm:h-[430px]">
            <iframe
              title="Diani Beach Hospital location map"
              src="https://www.google.com/maps?q=Box+5074,+Diani+Beach,+Ukunda,+Kenya,+80401&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <div className="flex flex-col justify-between gap-4 p-5 sm:flex-row sm:items-center sm:px-7">
            <div>
              <h3 className="font-semibold text-[var(--brand-navy)]">
                Diani Beach Hospital
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                Box 5074, Diani Beach, Ukunda, Kenya – 80401
              </p>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Box+5074%2C+Diani+Beach%2C+Ukunda%2C+Kenya%2C+80401"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-[var(--brand-navy)] transition-colors hover:text-[var(--brand-periwinkle)]"
            >
              Get Directions
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
        </div>
      </ContentSection>

      {/* Branch Locations */}
      <ContentSection
        eyebrow="Our Locations"
        title="Find a Branch Near You"
        description="Diani Beach Hospital has branch locations serving communities across the region. Contact the relevant branch for location-specific enquiries."
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {branches.map((branch, index) => (
            <article
              key={branch.slug}
              className="card flex h-full flex-col p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--brand-navy-light)] text-[var(--brand-navy)]">
                  <MapPin size={21} aria-hidden="true" />
                </div>

                <span className="text-sm font-semibold tracking-wider text-slate-400">
                  0{index + 1}
                </span>
              </div>

              <h3 className="mt-5 text-xl font-semibold text-[var(--brand-navy)]">
                {branch.name}
              </h3>

              <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
                {branch.address}
              </p>

              <div className="mt-5 border-t border-slate-100 pt-5">
                <a
                  href={`tel:${branch.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-[var(--brand-navy)]"
                >
                  <Phone
                    size={15}
                    className="text-[var(--brand-gold-dark)]"
                    aria-hidden="true"
                  />
                  {branch.phone}
                </a>

                <Link
                  href={`/branches/${branch.slug}/`}
                  className="mt-5 flex items-center justify-between text-sm font-semibold text-[var(--brand-navy)] transition-colors hover:text-[var(--brand-periwinkle)]"
                >
                  View Branch Details
                  <ArrowUpRight size={17} aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </ContentSection>
    </>
  );
}
