import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Clock3,
  HeartHandshake,
  Microscope,
  ShieldCheck,
  Stethoscope,
  Users,
  UploadCloud,
} from "lucide-react";

import Breadcrumbs from "@/components/shared/Breadcrumbs";
import PageHero from "@/components/shared/PageHero";
import ContentSection from "@/components/shared/ContentSection";
import CareerApplicationForm from "@/components/careers/CareerApplicationForm";

export const metadata = {
  title: "Careers | Diani Beach Hospital",
  description:
    "Explore career opportunities at Diani Beach Hospital and learn more about joining our healthcare team in Diani, Kenya.",
};

const reasonsToJoin = [
  {
    icon: Award,
    title: "A Pioneer in Regional Healthcare",
    description:
      "Be part of a hospital with a long-standing presence in the region and more than two decades of healthcare experience.",
  },
  {
    icon: Users,
    title: "A Dedicated Professional Team",
    description:
      "Work alongside healthcare professionals recognised for their calibre, training and dedication to patient care.",
  },
  {
    icon: Stethoscope,
    title: "A Broad Range of Clinical Services",
    description:
      "Be part of an institution offering a diverse range of healthcare services, treatments and facilities.",
  },
  {
    icon: Clock3,
    title: "A Commitment to Continuous Care",
    description:
      "Contribute to a healthcare environment that provides round-the-clock medical attention.",
  },
  {
    icon: HeartHandshake,
    title: "A Supportive Care Environment",
    description:
      "Work with medical and non-medical teams whose combined efforts support the patient experience.",
  },
  {
    icon: ShieldCheck,
    title: "A Trusted Healthcare Institution",
    description:
      "Join a hospital serving a diverse community of local residents, visitors and corporate clients.",
  },
  {
    icon: Microscope,
    title: "Modern Medical Technology",
    description:
      "Be part of an institution that provides access to diagnostic and treatment technologies.",
  },
];

export default function CareersPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <div className="container-site">
        <Breadcrumbs items={[{ label: "Careers" }]} />
      </div>

      {/* Hero */}
      <PageHero
        eyebrow="Careers at Diani Beach Hospital"
        title="Build Your Career in Healthcare"
        description="Join a dedicated team committed to professional healthcare, compassionate service and making a difference in the lives of patients."
        image="/images/careers/4416-1-1024x576.jpg"
        imageAlt="Diani Beach Hospital healthcare environment"
      >
        <Link
          href="#join-our-team"
          className="button-primary inline-flex items-center gap-2"
        >
          Explore Opportunities
          <ArrowRight size={17} aria-hidden="true" />
        </Link>
      </PageHero>

      {/* Working at the Hospital */}
      <ContentSection
        eyebrow="Working at Diani Beach Hospital"
        title="Be Part of a Team That Makes a Difference"
        description="A professional healthcare environment built around expertise, dedication and personal attention."
      >
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-5 leading-8 text-slate-600">
            <p>
              Diani Beach Hospital is a premier healthcare facility located
              along the stunning coastline of Diani, Kenya. Committed to
              providing exceptional medical care, the hospital combines modern
              technology with a patient-centred approach.
            </p>

            <p>
              The dedicated team of healthcare professionals ensures that each
              patient receives personalised treatment in a serene and healing
              environment.
            </p>

            <p>
              Whether serving local residents or visitors to this beautiful
              coastal region, Diani Beach Hospital strives to meet healthcare
              needs with compassion and professional expertise.
            </p>
          </div>

          <div className="relative">
            <div className="relative aspect-[5/4] overflow-hidden rounded-2xl bg-slate-100">
              <Image
                src="/images/careers/2147822736-1-1024x683.jpg"
                alt="Healthcare professionals and hospital environment"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="absolute -bottom-5 -left-4 hidden rounded-xl bg-white p-5 shadow-lg sm:block">
              <p className="text-sm font-semibold text-[var(--brand-navy)]">
                Professional Healthcare
              </p>
              <p className="mt-1 text-sm text-slate-500">
                With a Personal Touch
              </p>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* Why Join */}
      <ContentSection
        background="light"
        eyebrow="Why Join Our Team?"
        title="Grow Alongside a Dedicated Healthcare Team"
        description="Discover what makes Diani Beach Hospital a distinctive place to build your career and contribute to healthcare in the region."
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasonsToJoin.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <article
                key={reason.title}
                className="card flex h-full flex-col p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--brand-navy-light)] text-[var(--brand-navy)]">
                  <Icon size={23} aria-hidden="true" />
                </div>

                <span className="mt-6 text-sm font-semibold tracking-wider text-[var(--brand-gold-dark)]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-2 text-lg font-semibold leading-7 text-[var(--brand-navy)]">
                  {reason.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {reason.description}
                </p>
              </article>
            );
          })}
        </div>
      </ContentSection>

      {/* Application */}
      <CareerApplicationForm />
    </>
  );
}
