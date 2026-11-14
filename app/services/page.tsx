import Link from "next/link";
import {
  Activity,
  ClipboardList,
  HeartPulse,
  Microscope,
  Stethoscope,
  Scan,
} from "lucide-react";

import Breadcrumbs from "@/components/shared/Breadcrumbs";
import ContentSection from "@/components/shared/ContentSection";
import PageCTA from "@/components/shared/PageCTA";
import ServicesHero from "@/components/services/ServicesHero";

export const metadata = {
  title: "Our Services | Diani Beach Hospital",
  description:
    "Explore the healthcare services and facilities available at Diani Beach Hospital, including inpatient care, diagnostic imaging, critical care and more.",
};

const serviceGroups = [
  {
    number: "01",
    title: "General & Patient Care",
    description:
      "Services supporting patients through routine consultations, hospital admission and everyday healthcare needs.",
    icon: Stethoscope,
    services: [
      { name: "Outpatient Services", slug: "outpatient-services" },
      { name: "Inpatient Services", slug: "inpatient-services" },
      { name: "Pharmacy", slug: "pharmacy" },
    ],
  },
  {
    number: "02",
    title: "Diagnostic & Imaging",
    description:
      "Laboratory investigations and medical imaging services that support clinical assessment and diagnosis.",
    icon: Scan,
    services: [
      { name: "Laboratory", slug: "laboratory" },
      { name: "MRI – Magnetic Resonance Imaging", slug: "mri" },
      { name: "CT Scan – Computed Tomography", slug: "ct-scan" },
      { name: "X-Ray – Radiography", slug: "x-ray" },
      { name: "Ultrasound – Sonography", slug: "ultrasound" },
      { name: "Echocardiography / ECG", slug: "echocardiography-ecg" },
    ],
  },
  {
    number: "03",
    title: "Critical & Specialised Facilities",
    description:
      "Hospital facilities and services supporting patients who require closer monitoring, specialised treatment or procedural care.",
    icon: HeartPulse,
    services: [
      { name: "Intensive Care Unit (ICU)", slug: "intensive-care-unit" },
      {
        name: "Neonatal Intensive Care Unit (NICU)",
        slug: "neonatal-intensive-care-unit",
      },
      { name: "High Dependency Unit (HDU)", slug: "high-dependency-unit" },
      { name: "Dialysis", slug: "dialysis" },
      { name: "Major & Minor Theatres", slug: "major-minor-theatres" },
    ],
  },
  {
    number: "04",
    title: "Allied & Support Services",
    description:
      "Additional services supporting patient wellbeing, rehabilitation, routine care and different stages of life.",
    icon: Activity,
    services: [
      { name: "Dental Services", slug: "dental-services" },
      {
        name: "Physiotherapy / Occupational Therapy",
        slug: "physiotherapy-occupational-therapy",
      },
      {
        name: "ANC / Child Welfare Clinics",
        slug: "anc-child-welfare-clinics",
      },
      { name: "Optical Services", slug: "optical-services" },
      { name: "Maternity Services", slug: "maternity-services" },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <div className="container-site">
        <Breadcrumbs items={[{ label: "Services" }]} />
      </div>

      {/* Hero */}
      <ServicesHero />

      {/* Introduction */}
      <ContentSection
        eyebrow="Our Healthcare Services"
        title="Care and Facilities for a Range of Healthcare Needs"
        description="Diani Beach Hospital offers a range of healthcare services, bringing together clinical care, diagnostic facilities and supporting services within one healthcare institution."
      >
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:gap-16">
          <div className="space-y-5 leading-8 text-slate-600">
            <p>
              From routine outpatient consultations and inpatient management to
              diagnostic investigations and specialised hospital facilities, our
              services support patients at different stages of their healthcare
              journey.
            </p>

            <p>
              Our approach is centred on professional expertise, appropriate
              medical technology and personal attention, with a commitment to
              quality and affordable healthcare.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl bg-[var(--brand-navy-light)] p-5">
              <ClipboardList
                size={25}
                className="text-[var(--brand-navy)]"
                aria-hidden="true"
              />
              <h3 className="mt-4 font-semibold text-[var(--brand-navy)]">
                Patient Care
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Services supporting everyday and hospital-based care.
              </p>
            </div>

            <div className="rounded-xl bg-[var(--brand-gold-light)] p-5">
              <Microscope
                size={25}
                className="text-[var(--brand-gold-dark)]"
                aria-hidden="true"
              />
              <h3 className="mt-4 font-semibold text-[var(--brand-navy)]">
                Diagnostics
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Investigations and imaging supporting clinical assessment.
              </p>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* Service Directory */}
      <ContentSection
        background="light"
        eyebrow="Explore Our Services"
        title="Healthcare Services Under One Roof"
        description="Explore the range of services and facilities available at Diani Beach Hospital."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          {serviceGroups.map((group) => {
            const Icon = group.icon;

            return (
              <article
                key={group.number}
                className="card flex flex-col p-6 sm:p-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--brand-navy-light)] text-[var(--brand-navy)]">
                    <Icon size={24} aria-hidden="true" />
                  </div>

                  <span className="text-sm font-semibold tracking-wider text-slate-400">
                    {group.number}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-semibold text-[var(--brand-navy)]">
                  {group.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {group.description}
                </p>

                <ul className="mt-6 grid gap-3 border-t border-slate-100 pt-5 sm:grid-cols-2">
                  {group.services.map((service) => (
                    <li key={service.slug}>
                      <Link
                        href={`/services/${service.slug}/`}
                        className="group flex h-16 items-center justify-start gap-3 text-sm leading-6 text-slate-700 transition-colors hover:text-[var(--brand-navy)] shadow-sm shadow-brand-gold/30  group-hover:border-[var(--brand-gold)] rounded-md px-1"
                      >
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand-gold)] transition-transform group-hover:scale-125"
                          aria-hidden="true"
                        />

                        <span className="border-b border-transparent transition-colors hover:scale-105">
                          {service.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </ContentSection>

      {/* Specializations Link */}
      <ContentSection>
        <div className="flex flex-col items-start justify-between gap-6 rounded-2xl bg-[var(--brand-navy-light)] p-7 sm:p-10 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <span className="section-eyebrow">Clinical Expertise</span>

            <h2 className="mt-3 text-2xl font-bold text-[var(--brand-navy)] sm:text-3xl">
              Explore Our Medical Specializations
            </h2>

            <p className="mt-3 leading-7 text-slate-600">
              Discover the clinical disciplines and areas of medical expertise
              represented across the hospital.
            </p>
          </div>

          <Link
            href="/specialization/"
            className="button-primary inline-flex shrink-0 items-center gap-2"
          >
            View Specializations
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </ContentSection>

      {/* Closing CTA */}
      <PageCTA
        title="Your Health Is Our Priority"
        description="For information about our healthcare services or to arrange a consultation, get in touch with Diani Beach Hospital."
      />
    </>
  );
}
