import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  Clock3,
  MapPin,
  Navigation,
  Phone,
} from "lucide-react";

import Breadcrumbs from "@/components/shared/Breadcrumbs";
import ContentSection from "@/components/shared/ContentSection";
import PageCTA from "@/components/shared/PageCTA";
import { branches } from "@/data/branches";
import { getBranchBySlug } from "@/lib/branches";

type BranchPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return branches.map((branch) => ({
    slug: branch.slug,
  }));
}

export async function generateMetadata({
  params,
}: BranchPageProps): Promise<Metadata> {
  const { slug } = await params;
  const branch = getBranchBySlug(slug);

  if (!branch) {
    return {
      title: "Branch Not Found | Diani Beach Hospital",
    };
  }

  return {
    title: `${branch.name} Branch | Diani Beach Hospital`,
    description: `Find Diani Beach Hospital ${branch.name}, including its location, contact information, opening hours and available services.`,
  };
}

function BranchPageFallback() {
  return <div className="min-h-[60vh] animate-pulse bg-slate-50" />;
}

export default function BranchPage({ params }: BranchPageProps) {
  return (
    <Suspense fallback={<BranchPageFallback />}>
      <BranchPageContent params={params} />
    </Suspense>
  );
}

async function BranchPageContent({ params }: BranchPageProps) {
  const { slug } = await params;
  const branch = getBranchBySlug(slug);

  if (!branch) {
    notFound();
  }

  const otherBranches = branches.filter((item) => item.slug !== branch.slug);

  const fullAddress = `${branch.location}, ${branch.address}, Kenya`;

  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`;

  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(fullAddress)}&output=embed`;

  return (
    <>
      {/* Breadcrumbs */}
      <div className="container-site">
        <Breadcrumbs
          items={[
            { label: "Our Branches", href: "/branches/" },
            { label: branch.name },
          ]}
        />
      </div>

      {/* Branch Hero */}
      <section className="relative flex min-h-[380px] items-center overflow-hidden bg-[var(--brand-navy-dark)] sm:min-h-[440px] lg:min-h-[500px]">
        <Image
          src={branch.image}
          alt={branch.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[var(--brand-navy-dark)]/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-navy-dark)]/80 via-[var(--brand-navy-dark)]/40 to-transparent" />

        <div className="container-site relative z-10 py-20">
          <Link
            href="/branches/"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-white/80 transition-colors hover:text-[var(--brand-gold)]"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            All Branches
          </Link>

          <p className="section-eyebrow text-[var(--brand-gold)]">
            Diani Beach Hospital
          </p>

          <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            {branch.name}
            <span className="block text-[var(--brand-gold)]">Branch</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
            {branch.location}, {branch.address}
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="#branch-information"
              className="button-primary inline-flex items-center gap-2"
            >
              Explore This Branch
              <ArrowUpRight size={17} aria-hidden="true" />
            </Link>

            <Link
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button-secondary inline-flex items-center gap-2 border-white/40 text-white hover:border-white"
            >
              Get Directions
              <Navigation size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Branch Overview */}
      <ContentSection
        id="branch-information"
        eyebrow="About This Location"
        title={`Healthcare at Our ${branch.name} Branch`}
        description={branch.overview}
      >
        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <MapPin
              size={23}
              className="text-[var(--brand-gold-dark)]"
              aria-hidden="true"
            />
            <h3 className="mt-4 font-semibold text-[var(--brand-navy)]">
              Location
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              {branch.location}
            </p>
            <p className="mt-1 text-sm font-medium text-slate-500">
              {branch.address}
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <Phone
              size={23}
              className="text-[var(--brand-gold-dark)]"
              aria-hidden="true"
            />
            <h3 className="mt-4 font-semibold text-[var(--brand-navy)]">
              Contact
            </h3>
            <a
              href={`tel:${branch.phone.replace(/\s/g, "")}`}
              className="mt-2 inline-block text-sm font-medium text-slate-600 transition-colors hover:text-[var(--brand-periwinkle)]"
            >
              {branch.phone}
            </a>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <Clock3
              size={23}
              className="text-[var(--brand-gold-dark)]"
              aria-hidden="true"
            />
            <h3 className="mt-4 font-semibold text-[var(--brand-navy)]">
              Opening Hours
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              {branch.openingHours}
            </p>
          </div>
        </div>
      </ContentSection>

      {/* Branch Services */}
      <ContentSection
        background="light"
        eyebrow="Available Care"
        title={`Services at ${branch.name}`}
        description="Explore the services listed for this location. Please contact the branch directly to confirm service availability and appointment arrangements."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {branch.services.map((service, index) => (
            <div
              key={service}
              className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5 transition-colors hover:border-[var(--brand-periwinkle)]"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--brand-navy-light)] text-sm font-semibold text-[var(--brand-navy)]">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="text-sm font-semibold leading-6 text-slate-700">
                {service}
              </h3>
            </div>
          ))}
        </div>
      </ContentSection>

      {/* Location Map */}
      <ContentSection
        eyebrow="Find Us"
        title={`Visit Our ${branch.name} Branch`}
        description="Use the map below to locate this branch and plan your visit."
      >
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
            <iframe
              title={`${branch.name} branch location map`}
              src={mapUrl}
              width="100%"
              height="400"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block w-full"
              allowFullScreen
            />
          </div>

          <div>
            <MapPin
              size={26}
              className="text-[var(--brand-gold-dark)]"
              aria-hidden="true"
            />

            <h3 className="mt-4 text-2xl font-semibold text-[var(--brand-navy)]">
              {branch.name}
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              {branch.location}, {branch.address}
            </p>

            <div className="mt-8 flex flex-col gap-4">
              <Link
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="button-primary inline-flex w-fit items-center gap-2"
              >
                Get Directions
                <ArrowUpRight size={17} aria-hidden="true" />
              </Link>

              <a
                href={`tel:${branch.phone.replace(/\s/g, "")}`}
                className="inline-flex w-fit items-center gap-2 font-semibold text-[var(--brand-navy)] transition-colors hover:text-[var(--brand-periwinkle)]"
              >
                <Phone size={17} aria-hidden="true" />
                Call {branch.phone}
              </a>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* Other Branches */}
      <ContentSection
        background="light"
        eyebrow="More Locations"
        title="Explore Our Other Branches"
        description="Find another Diani Beach Hospital location across the region."
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {otherBranches.map((item) => (
            <Link
              key={item.slug}
              href={`/branches/${item.slug}/`}
              className="group flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white p-5 transition-all hover:-translate-y-1 hover:border-[var(--brand-periwinkle)] hover:shadow-md"
            >
              <div>
                <h3 className="font-semibold text-[var(--brand-navy)] transition-colors group-hover:text-[var(--brand-periwinkle)]">
                  {item.name}
                </h3>
                <p className="mt-1 text-sm text-slate-500">{item.address}</p>
              </div>

              <ArrowUpRight
                size={19}
                className="shrink-0 text-slate-400 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          ))}
        </div>
      </ContentSection>

      {/* Closing CTA */}
      <PageCTA
        title={`We're Here to Help at ${branch.name}`}
        description="For enquiries about services, appointments or visiting this branch, contact our team."
        buttonLabel="Contact Us"
        href="/contact-us/"
      />
    </>
  );
}
