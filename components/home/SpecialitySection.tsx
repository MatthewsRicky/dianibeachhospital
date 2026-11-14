import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { specialities } from "@/data/specialities";

export default function SpecialitySection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-site">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="section-eyebrow">Our Speciality Centres</span>

            <h2 className="section-heading mt-3">
              Specialist Care. Personal Attention.
            </h2>

            <p className="section-description mt-4">
              Explore our specialist centres and discover the dedicated care
              available at Diani Beach Hospital.
            </p>
          </div>

          <Link
            href="/specialization/"
            className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-[var(--brand-navy)] transition-colors hover:text-[var(--brand-periwinkle-dark)]"
          >
            View all specialities
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {specialities.map((speciality) => (
            <Link
              key={speciality.title}
              href={speciality.href}
              className="group overflow-hidden rounded-xl border border-[var(--color-border)] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[var(--brand-periwinkle)] hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <Image
                  src={speciality.image}
                  alt={speciality.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-[var(--brand-navy)]">
                  {speciality.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {speciality.description}
                </p>

                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-navy)]">
                  Learn more
                  <ArrowRight
                    size={16}
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
