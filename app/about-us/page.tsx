import Image from "next/image";
import Link from "next/link";

import Breadcrumbs from "@/components/shared/Breadcrumbs";
import PageHero from "@/components/shared/PageHero";
import ContentSection from "@/components/shared/ContentSection";
import PageCTA from "@/components/shared/PageCTA";
import AboutValues from "@/components/about/AboutValues";

export const metadata = {
  title: "About Us | Diani Beach Hospital",
  description:
    "Discover the history, mission, vision and commitment to quality healthcare at Diani Beach Hospital.",
};

const milestones = [
  {
    year: "2004",
    title: "Establishment of the High Dependency Unit",
    description:
      "The hospital inaugurated a High Dependency Unit for the management of critically ill patients, equipped with life-saving equipment including a defibrillator and ventilator.",
  },
  {
    year: "2005",
    title: "Laboratory Upgrading and Hospital Expansion",
    description:
      "Investment in laboratory equipment, including biochemistry analysers, ELISA and automated blood cell counters, accompanied an expansion of the hospital to increase its bed capacity.",
  },
];

const services = [
  "Routine consultations",
  "In-patient management",
  "Dental services",
  "Physiotherapy",
  "Laboratory services",
  "Diagnostic imaging",
  "Pharmacy",
  "Dialysis",
  "Intensive care",
  "Wellness clinics",
  "Aesthetic medicine",
];

const values = [
  {
    title: "Service",
    description:
      "To anticipate and meet the needs of our patients, co-workers and medical colleagues.",
  },
  {
    title: "Innovation",
    description:
      "We are open to developments and embrace technological and scientific advances.",
  },
  {
    title: "Respect",
    description:
      "We respect people from all walks of life within the framework of our services.",
  },
  {
    title: "Putting Patients First",
    description:
      "We ensure that the very best is offered to every patient, every single day.",
  },
];

export default function AboutUsPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <div className="container-site">
        <Breadcrumbs items={[{ label: "About Us" }]} />
      </div>

      {/* Introduction */}
      <PageHero
        eyebrow="Who We Are"
        title="About Diani Beach Hospital"
        description="Professional Healthcare with a Personal Touch. A commitment to quality and affordable healthcare through professional expertise, advanced technology and personalised patient care."
      />

      {/* History */}
      <ContentSection
        eyebrow="Our History"
        title="A Hospital Built Around a Community's Needs"
        description="Established in 1997, Diani Beach Hospital began with a simple recognition of the need for accessible hospital care in the Diani region."
      >
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.65fr] lg:gap-16">
          <div className="space-y-5 leading-8 text-slate-600">
            <p>
              Diani Beach Hospital was established in 1997 by Dr. K. S. Rekhi.
              Dr. Rekhi began his medical practice in Diani through a clinic and
              soon recognised the urgent need for a hospital in the region.
            </p>

            <p>
              Before the hospital was established, patients often had to travel
              approximately 35 kilometres to Mombasa for medical needs that
              could not be met by the existing facilities.
            </p>

            <p>
              From its humble beginnings with just eight beds, the hospital has
              grown into a major private healthcare institution serving the
              South Coast of Kenya. Its development reflects a continuing
              commitment to quality healthcare, professional expertise and
              attention to patient needs.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <div className="rounded-lg bg-[var(--brand-navy-light)] px-5 py-4">
                <span className="block text-3xl font-bold text-[var(--brand-navy)]">
                  1997
                </span>
                <span className="mt-1 block text-sm font-medium text-slate-600">
                  Established in Diani
                </span>
              </div>

              <div className="rounded-lg bg-[var(--brand-gold-light)] px-5 py-4">
                <span className="block text-3xl font-bold text-[var(--brand-navy)]">
                  8
                </span>
                <span className="mt-1 block text-sm font-medium text-slate-600">
                  Original bed capacity
                </span>
              </div>
            </div>
          </div>

          {/* Small historical portrait */}
          <div className="flex justify-center lg:justify-end">
            <figure className="w-full max-w-[220px] rounded-xl bg-[var(--brand-navy-light)] p-5 sm:max-w-[240px] sm:p-6">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/images/about/DSC0025711.png"
                  alt="Dr. K. S. Rekhi, founder of Diani Beach Hospital"
                  fill
                  sizes="(max-width: 640px) 180px, 220px"
                  className="object-cover"
                />
              </div>

              <figcaption className="mt-4 text-center text-sm leading-6 text-slate-600">
                Dr. K. S. Rekhi
                <span className="block text-xs text-slate-500">
                  Founder, Diani Beach Hospital
                </span>
              </figcaption>
            </figure>
          </div>
        </div>
      </ContentSection>

      {/* Hospital Today */}
      <ContentSection
        background="light"
        eyebrow="Our Hospital Today"
        title="Growing to Serve the Region"
        description="From its humble beginnings, Diani Beach Hospital has grown steadily, embracing technological innovation while continuing to serve patients from all walks of life."
      >
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-5 leading-8 text-slate-600">
            <p>
              Today, the hospital serves a diverse patient community, including
              tourists, local residents, corporate patients and people from less
              privileged sectors of society. Its aim is to provide an
              international standard of care to everyone.
            </p>

            <p>
              Alongside its main hospital in Diani, the hospital has developed a
              satellite clinic network serving communities in Likoni, Ukunda and
              Kwale.
            </p>

            <p>
              The hospital's growth has been supported by investment in medical
              technology, facilities and the people who contribute to the
              delivery of patient care.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              {["Likoni", "Ukunda", "Kwale"].map((location) => (
                <span
                  key={location}
                  className="rounded-full border border-[var(--brand-navy)]/15 bg-white px-4 py-2 text-sm font-medium text-[var(--brand-navy)]"
                >
                  {location}
                </span>
              ))}
            </div>
          </div>

          <figure>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-[var(--brand-navy-light)]">
              <Image
                src="/images/about/AMB3-scaled.jpg"
                alt="Diani Beach Hospital ambulance"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain"
              />
            </div>

            <figcaption className="mt-3 text-sm text-slate-500">
              Diani Beach Hospital ambulance.
            </figcaption>
          </figure>
        </div>

        <div className="mt-12 grid gap-6 border-t border-slate-200 pt-10 sm:grid-cols-2">
          <div>
            <span className="text-sm font-medium uppercase tracking-wider text-[var(--brand-gold-dark)]">
              Our commitment
            </span>
            <h3 className="mt-2 text-xl font-semibold text-[var(--brand-navy)]">
              Quality and Affordable Healthcare
            </h3>
            <p className="mt-3 leading-7 text-slate-600">
              We place importance on delivering quality healthcare that remains
              accessible to the communities and individuals we serve.
            </p>
          </div>

          <div>
            <span className="text-sm font-medium uppercase tracking-wider text-[var(--brand-gold-dark)]">
              Our approach
            </span>
            <h3 className="mt-2 text-xl font-semibold text-[var(--brand-navy)]">
              Professional Care, Personal Attention
            </h3>
            <p className="mt-3 leading-7 text-slate-600">
              Clinical expertise, experienced staff and the thoughtful use of
              medical technology support our approach to patient care.
            </p>
          </div>
        </div>
      </ContentSection>

      {/* What Makes Us Different */}
      <ContentSection
        eyebrow="Our Approach"
        title="What Makes Us Different"
        description="Quality healthcare involves more than medical treatment. It is reflected in the expertise of our people, the technology we use and the attention given to every aspect of the patient experience."
      >
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold text-[var(--brand-navy)]">
              Quality of Care
            </h3>
            <p className="mt-3 leading-7 text-slate-600">
              We place quality and affordable healthcare at the centre of our
              approach, with a focus on promoting wellness, relieving suffering
              and restoring health.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[var(--brand-navy)]">
              Efficient, Skilled Staff
            </h3>
            <p className="mt-3 leading-7 text-slate-600">
              The knowledge, experience and efficiency of our healthcare
              professionals and support staff contribute to the quality of the
              patient experience.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[var(--brand-navy)]">
              Technological Expertise
            </h3>
            <p className="mt-3 leading-7 text-slate-600">
              We embrace technological and scientific advances, applying medical
              technology and experience to support healthcare delivery.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[var(--brand-navy)]">
              Attention to Detail
            </h3>
            <p className="mt-3 leading-7 text-slate-600">
              From the hospital environment and patient reception to waiting
              times and ongoing attention, we recognise the importance of every
              detail in patient management.
            </p>
          </div>
        </div>
      </ContentSection>

      {/* Services Overview */}
      <ContentSection
        background="light"
        eyebrow="What We Offer"
        title="A Range of Healthcare Services"
        description="From routine consultations to specialised facilities, Diani Beach Hospital offers a range of services to support different healthcare needs."
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service}
              className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-4"
            >
              <span
                className="h-2 w-2 shrink-0 rounded-full bg-[var(--brand-gold)]"
                aria-hidden="true"
              />
              <span className="text-sm font-medium text-slate-700">
                {service}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Link
            href="/services/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-navy)] transition-colors hover:text-[var(--brand-periwinkle)]"
          >
            Explore our services
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </ContentSection>

      {/* Milestones */}
      <ContentSection
        eyebrow="Our Journey"
        title="Milestones in Our Development"
        description="A history of continued investment in facilities, technology and the hospital's capacity to serve its patients."
      >
        <div className="relative space-y-10 border-l border-[var(--brand-navy)]/20 pl-7 sm:pl-10">
          {milestones.map((milestone) => (
            <article key={milestone.year} className="relative">
              <span
                className="absolute -left-[34px] top-1 h-3 w-3 rounded-full border-2 border-white bg-[var(--brand-gold)] ring-1 ring-[var(--brand-navy)]/20 sm:-left-[47px]"
                aria-hidden="true"
              />

              <span className="text-sm font-bold tracking-wider text-[var(--brand-gold-dark)]">
                {milestone.year}
              </span>

              <h3 className="mt-2 text-xl font-semibold text-[var(--brand-navy)]">
                {milestone.title}
              </h3>

              <p className="mt-3 max-w-3xl leading-7 text-slate-600">
                {milestone.description}
              </p>
            </article>
          ))}
        </div>
      </ContentSection>

      {/* Mission, Vision and Values */}
      <AboutValues />

      {/* Closing CTA */}
      <PageCTA
        title="Your Healthcare Matters to Us"
        description="Get in touch with Diani Beach Hospital to learn more about our services or arrange an appointment."
      />
    </>
  );
}
