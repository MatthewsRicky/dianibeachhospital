import { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Breadcrumbs from "@/components/shared/Breadcrumbs";
import PageHero from "@/components/shared/PageHero";
import ContentSection from "@/components/shared/ContentSection";
import PageCTA from "@/components/shared/PageCTA";
import RelatedLinks from "@/components/shared/RelatedLinks";
import ServicePageHero from "@/components/services/ServicePageHero";

import { services, getServiceBySlug } from "@/lib/services";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found | Diani Beach Hospital",
    };
  }

  return {
    title: `${service.name} | Diani Beach Hospital`,
    description: service.introduction,
  };
}

function ServicePageFallback() {
  return (
    <main className="min-h-[60vh]">
      <div className="container-site py-20">
        <div className="h-8 w-48 animate-pulse rounded bg-slate-100" />
        <div className="mt-8 h-12 max-w-lg animate-pulse rounded bg-slate-100" />
        <div className="mt-4 h-5 max-w-2xl animate-pulse rounded bg-slate-100" />
      </div>
    </main>
  );
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  return (
    <Suspense fallback={<ServicePageFallback />}>
      <ServicePageContent params={params} />
    </Suspense>
  );
}

async function ServicePageContent({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const relatedServices = services
    .filter(
      (item) => item.group === service.group && item.slug !== service.slug,
    )
    .slice(0, 4);

  // Use the second section for the accordion when available.
  // For services with only one section, use that section.
  const accordionSectionIndex = service.sections.length > 1 ? 1 : 0;

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Services", href: "/services/" },
          { label: service.name },
        ]}
      />

      <ServicePageHero
        eyebrow="Our Healthcare Services"
        title={service.name}
        description={service.introduction}
        image={service.heroImage}
        imageAlt={`${service.name} at Diani Beach Hospital`}
      />

      {service.sections.map((section, index) => {
        const isAccordion = index === accordionSectionIndex;

        return (
          <ContentSection
            key={`${section.heading}-${index}`}
            eyebrow={service.name}
            title={section.heading}
            description={section.introduction}
            background={index % 2 === 0 ? "white" : "light"}
          >
            {isAccordion ? (
              <div className="mx-auto max-w-4xl divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 bg-white">
                {section.content.map((item, itemIndex) => (
                  <details
                    key={`${item.title}-${itemIndex}`}
                    className="group"
                    open={itemIndex === 0}
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-5 transition-colors hover:bg-[var(--brand-navy-light)] [&::-webkit-details-marker]:hidden">
                      <span className="font-semibold text-[var(--brand-navy)]">
                        {item.title}
                      </span>

                      <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[var(--brand-navy-light)] text-lg font-medium text-[var(--brand-navy)] transition-transform duration-200 group-open:rotate-45">
                        +
                      </span>
                    </summary>

                    <div className="px-6 pb-6 pr-16">
                      <p className="text-sm leading-7 text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </details>
                ))}
              </div>
            ) : (
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {section.content.map((item, itemIndex) => (
                  <article
                    key={`${item.title}-${itemIndex}`}
                    className="card h-full p-6"
                  >
                    <h3 className="mb-3 text-lg font-semibold text-[var(--brand-navy)]">
                      {item.title}
                    </h3>

                    <p className="text-sm leading-7 text-slate-600">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>
            )}
          </ContentSection>
        );
      })}

      {relatedServices.length > 0 && (
        <ContentSection
          eyebrow="Explore More"
          title="Related Healthcare Services"
          background="light"
        >
          <RelatedLinks
            title="Other services in this category"
            links={relatedServices.map((item) => ({
              label: item.name,
              description: item.introduction,
              href: `/services/${item.slug}/`,
            }))}
          />
        </ContentSection>
      )}

      <PageCTA
        title="Need Assistance With Your Healthcare?"
        description="Contact Diani Beach Hospital to enquire about our services or arrange an appointment."
      />
    </>
  );
}
