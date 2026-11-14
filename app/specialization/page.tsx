import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Breadcrumbs from "@/components/shared/Breadcrumbs";
import ContentSection from "@/components/shared/ContentSection";
import PageCTA from "@/components/shared/PageCTA";
import SpecializationsHero from "@/components/specialities/SpecializationsHero";

export const metadata = {
  title: "Medical Specializations | Diani Beach Hospital",
  description:
    "Explore the medical specializations and clinical disciplines available at Diani Beach Hospital.",
};

const specializations = [
  {
    title: "Gastroenterology & Hepatology",
    slug: "gastroenterology-and-hepatology",
  },
  {
    title: "Orthopaedic & Trauma Surgery",
    slug: "orthopaedic-and-trauma-surgery",
  },
  {
    title: "Paediatrics & Neonatology",
    slug: "paediatrics-and-neonatology",
  },
  {
    title: "Obstetrics & Gynaecology",
    slug: "obstetrics-and-gynaecology",
  },
  {
    title: "Ear, Nose & Throat (ENT)",
    slug: "ear-nose-and-throat-ent",
  },
  {
    title: "Nephrology",
    slug: "nephrology",
  },
  {
    title: "Oncology (Cancer Treatment)",
    slug: "oncology-cancer-treatment",
  },
  {
    title: "Urology",
    slug: "urology",
  },
  {
    title: "Plastic & Reconstructive Surgery",
    slug: "plastic-and-reconstructive-surgery",
  },
  {
    title: "Dermatology",
    slug: "dermatology",
  },
  {
    title: "Neurosurgery & Neurology",
    slug: "neurosurgery-and-neurology",
  },
  {
    title: "Mental Health & Psychiatry",
    slug: "mental-health-and-psychiatry",
  },
  {
    title: "Rehabilitation Services",
    slug: "rehabilitation-services",
  },
  {
    title: "Pain Management",
    slug: "pain-management",
  },
];

export default function SpecializationPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <div className="container-site">
        <Breadcrumbs items={[{ label: "Specializations" }]} />
      </div>

      {/* Hero */}
      <SpecializationsHero />

      {/* Introduction */}
      <ContentSection
        eyebrow="Areas of Clinical Expertise"
        title="Specialist Care Across Different Medical Disciplines"
        description="Explore the range of medical specializations represented at Diani Beach Hospital."
      >
        <div className="max-w-3xl space-y-5 leading-8 text-slate-600">
          <p>
            Different health conditions require different areas of clinical
            expertise. Our specialization directory brings together the medical
            disciplines featured across the hospital's healthcare offering.
          </p>

          <p>
            Select a specialization to learn more about its area of focus and
            the information available to patients.
          </p>
        </div>
      </ContentSection>

      {/* Specialization Directory */}
      <ContentSection
        background="light"
        eyebrow="Explore the Directory"
        title="Our Medical Specializations"
        description="Browse the specializations and discover more about each area of care."
        id="specialization-directory"
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {specializations.map((specialization, index) => (
            <Link
              key={specialization.slug}
              href={`/specialization/${specialization.slug}/`}
              className="group flex min-h-28 items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--brand-navy)]/25 hover:shadow-md"
            >
              <div className="flex items-start gap-4">
                <span className="mt-0.5 text-xs font-semibold tracking-wider text-[var(--brand-gold-dark)]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="font-semibold leading-6 text-[var(--brand-navy)]">
                  {specialization.title}
                </h3>
              </div>

              <ArrowRight
                size={18}
                className="shrink-0 text-slate-400 transition-all group-hover:translate-x-1 group-hover:text-[var(--brand-navy)]"
                aria-hidden="true"
              />
            </Link>
          ))}
        </div>
      </ContentSection>

      {/* Closing CTA */}
      <PageCTA
        title="Looking for the Right Care?"
        description="Contact Diani Beach Hospital for further information about its medical specializations or to arrange an appointment."
      />
    </>
  );
}
