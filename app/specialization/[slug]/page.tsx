import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

import { specializations } from "@/data/specializations";
import { getSpecializationBySlug } from "@/lib/specializations";
import SpecializationPageHero from "@/components/specialities/SpecializationPageHero";

import Breadcrumbs from "@/components/shared/Breadcrumbs";
import PageHero from "@/components/shared/PageHero";
import ContentSection from "@/components/shared/ContentSection";
import PageCTA from "@/components/shared/PageCTA";

type SpecializationPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return specializations.map((specialization) => ({
    slug: specialization.slug,
  }));
}

export async function generateMetadata({
  params,
}: SpecializationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const specialization = getSpecializationBySlug(slug);

  if (!specialization) {
    return {
      title: "Specialization Not Found | Diani Beach Hospital",
    };
  }

  return {
    title: `${specialization.name} | Diani Beach Hospital`,
    description: specialization.introduction,
  };
}

function SpecializationPageFallback() {
  return (
    <main className="min-h-screen">
      <div className="container-site py-24">
        <div className="h-8 w-64 animate-pulse rounded bg-slate-100" />
        <div className="mt-6 h-40 animate-pulse rounded-xl bg-slate-100" />
      </div>
    </main>
  );
}

export default function SpecializationPage({
  params,
}: SpecializationPageProps) {
  return (
    <Suspense fallback={<SpecializationPageFallback />}>
      <SpecializationPageContent params={params} />
    </Suspense>
  );
}

async function SpecializationPageContent({ params }: SpecializationPageProps) {
  const { slug } = await params;
  const specialization = getSpecializationBySlug(slug);

  if (!specialization) {
    notFound();
  }

  return (
    <main>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Specializations", href: "/specialization/" },
          { label: specialization.name },
        ]}
      />

      <SpecializationPageHero
        eyebrow="Medical Specialization"
        title={specialization.name}
        description={specialization.introduction}
        image={specialization.heroImage}
        imageAlt={`${specialization.name} at Diani Beach Hospital`}
      />

      <ContentSection
        eyebrow="Our Approach"
        title={`Explore ${specialization.name}`}
        description="Learn more about the services, areas of care, and patient information associated with this specialization."
        background="light"
      >
        <div className="mx-auto max-w-5xl space-y-4">
          {specialization.sections.map((section, index) => (
            <details
              key={`${section.heading}-${index}`}
              open={index === 0}
              className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow open:shadow-md"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-5 sm:px-8">
                <span className="flex items-center gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--brand-navy-light)] text-sm font-semibold text-[var(--brand-navy)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-base font-semibold text-slate-900 sm:text-lg">
                    {section.heading}
                  </span>
                </span>

                <ChevronDown
                  size={20}
                  className="shrink-0 text-[var(--brand-navy)] transition-transform duration-300 group-open:rotate-180"
                />
              </summary>

              <div className="border-t border-slate-100 px-6 pb-7 pt-6 sm:px-8">
                {section.introduction && (
                  <p className="mb-6 max-w-4xl text-sm leading-7 text-slate-600 sm:text-base">
                    {section.introduction}
                  </p>
                )}

                {section.content.length > 0 && (
                  <div className="grid gap-4 sm:grid-cols-2">
                    {section.content.map((item, itemIndex) => (
                      <article
                        key={`${item.title}-${itemIndex}`}
                        className="rounded-lg border border-slate-100 bg-slate-50/70 p-5"
                      >
                        <h3 className="mb-2 text-base font-semibold text-slate-900">
                          {item.title}
                        </h3>

                        <p className="text-sm leading-7 text-slate-600">
                          {item.description}
                        </p>
                      </article>
                    ))}
                  </div>
                )}
              </div>
            </details>
          ))}
        </div>
      </ContentSection>

      <ContentSection background="white">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <h2 className="text-xl font-semibold text-slate-900">
                Explore Our Other Specializations
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Discover other areas of medical care available in our
                specialization directory.
              </p>
            </div>

            <Link
              href="/specialization/"
              className="inline-flex shrink-0 items-center justify-center rounded-lg border border-[var(--brand-navy)] px-5 py-3 text-sm font-semibold text-[var(--brand-navy)] transition-colors hover:bg-[var(--brand-navy)] hover:text-white"
            >
              View All Specializations
            </Link>
          </div>
        </div>
      </ContentSection>

      <PageCTA
        title="Need Help With Your Healthcare?"
        description="Contact Diani Beach Hospital to learn more about our services or to arrange an appointment."
      />
    </main>
  );
}
