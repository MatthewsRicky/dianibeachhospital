import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";

import Breadcrumbs from "@/components/shared/Breadcrumbs";
import PageHero from "@/components/shared/PageHero";
import ContentSection from "@/components/shared/ContentSection";
import PageCTA from "@/components/shared/PageCTA";

export const metadata = {
  title: "Our Branches | Diani Beach Hospital",
  description:
    "Find Diani Beach Hospital branches across the South Coast, including their locations and contact information.",
};

const branches = [
  {
    name: "Shika Adabu",
    slug: "shika-adabu",
    location: "Likoni–Ukunda Road, near Likoni Fire Station",
    address: "Likoni – 80110",
    image: "/images/branches/Untitled-design-27.png",
    imageAlt: "Diani Beach Hospital Shika Adabu branch",
  },
  {
    name: "Likoni",
    slug: "likoni",
    location: "Likoni–Ukunda Road, near Oilcom Petrol Station",
    address: "Likoni – 80110",
    image: "/images/branches/Untitled-design-25.png",
    imageAlt: "Diani Beach Hospital Likoni branch",
  },
  {
    name: "Kwale",
    slug: "kwale",
    location: "Behind Equity, Kinango Road",
    address: "Kwale – 80403",
    image: "/images/branches/DBHosp-Night-Extrs.-HiRes-171.jpg",
    imageAlt: "Diani Beach Hospital Kwale branch",
  },
  {
    name: "Ukunda",
    slug: "ukunda",
    location: "Matuga Plaza, next to Equity Bank, Diani Beach Road",
    address: "Ukunda – 80400",
    image: "/images/branches/Untitled-design-28.png",
    imageAlt: "Diani Beach Hospital Ukunda branch",
  },
  {
    name: "Mtongwe",
    slug: "mtongwe",
    location: "Mtongwe–Kenya Navy Road, next to Dongo Kundu SEZ",
    address: "Mtongwe – 80111",
    image: "/images/branches/Untitled-design-26.png",
    imageAlt: "Diani Beach Hospital Mtongwe branch",
  },
];

export default function BranchesPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <div className="container-site">
        <Breadcrumbs items={[{ label: "Our Branches" }]} />
      </div>

      {/* Hero */}
      <PageHero
        eyebrow="Our Locations"
        title="Healthcare Within Reach Across the South Coast"
        description="Discover Diani Beach Hospital's branch locations and find the healthcare support closest to you."
      >
        <Link
          href="#branch-directory"
          className="button-primary inline-flex items-center gap-2"
        >
          Explore Our Branches
          <ArrowUpRight size={17} aria-hidden="true" />
        </Link>
      </PageHero>

      {/* Branch Directory */}
      <ContentSection
        id="branch-directory"
        background="light"
        eyebrow="Find a Location"
        title="Our Hospital Branches"
        description="Explore our branch locations across the region. Select a location to find out more about the branch."
      >
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {branches.map((branch) => (
            <Link
              key={branch.slug}
              href={`/branches/${branch.slug}/`}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[var(--brand-periwinkle)] hover:shadow-lg"
            >
              {/* Branch Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <Image
                  src={branch.image}
                  alt={branch.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-fill transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Branch Information */}
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold text-[var(--brand-navy)] transition-colors group-hover:text-[var(--brand-periwinkle)]">
                    {branch.name}
                  </h3>

                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--brand-navy-light)] text-[var(--brand-navy)] transition-colors group-hover:bg-[var(--brand-navy)] group-hover:text-white">
                    <ArrowUpRight size={17} aria-hidden="true" />
                  </span>
                </div>

                <div className="mt-5 flex items-start gap-3">
                  <MapPin
                    size={18}
                    className="mt-1 shrink-0 text-[var(--brand-gold-dark)]"
                    aria-hidden="true"
                  />

                  <div>
                    <p className="text-sm leading-6 text-slate-600">
                      {branch.location}
                    </p>
                    <p className="mt-1 text-sm font-medium text-slate-500">
                      {branch.address}
                    </p>
                  </div>
                </div>

                <div className="mt-auto pt-6">
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-navy)]">
                    Explore Branch
                    <span
                      className="transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </ContentSection>

      {/* Closing CTA */}
      <PageCTA
        title="We're Here to Help"
        description="For enquiries about our locations or the services available at a particular branch, get in touch with our team."
        buttonLabel="Contact Us"
        href="/contact-us/"
      />
    </>
  );
}
