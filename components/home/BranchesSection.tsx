import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { branches } from "@/data/branches";

export default function BranchesSection() {
  return (
    <section
      aria-labelledby="branches-heading"
      className="bg-slate-50 py-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Section heading */}
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-[var(--brand-periwinkle-dark)]">
              Our Locations
            </span>

            <h2
              id="branches-heading"
              className="mt-3 text-3xl font-bold leading-tight text-[var(--brand-navy)] sm:text-4xl"
            >
              Healthcare Within Your Reach.
            </h2>

            <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
              Find a Diani Beach Hospital branch near you. Our network of
              locations serves communities across the South Coast region.
            </p>
          </div>

          <Link
            href="/branches/"
            className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-[var(--brand-navy)] transition-colors hover:text-[var(--brand-periwinkle-dark)]"
          >
            View all branches
            <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>

        {/* Branch cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {branches.map((branch) => {
            const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              `${branch.name}, ${branch.address}, Kenya`,
            )}`;

            return (
              <article
                key={branch.id}
                className="group flex min-h-56 flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--brand-periwinkle)] hover:shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--brand-periwinkle-light)] text-[var(--brand-navy)]">
                      <MapPin size={21} strokeWidth={1.7} aria-hidden="true" />
                    </span>

                    <span className="text-xs font-semibold tracking-widest text-slate-400">
                      {branch.id.toUpperCase()}
                    </span>
                  </div>

                  <h3 className="mt-5 text-xl font-semibold text-[var(--brand-navy)]">
                    {branch.name}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {branch.address}
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    {branch.postalCode}
                  </p>
                </div>

                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Get directions to Diani Beach Hospital, ${branch.name}`}
                  className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-[var(--brand-navy)] transition-colors hover:text-[var(--brand-periwinkle-dark)]"
                >
                  Get directions
                  <ArrowUpRight
                    size={16}
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
