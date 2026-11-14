import Link from "next/link";
import { ArrowRight } from "lucide-react";

type PageCTAProps = {
  title: string;
  description: string;
  buttonLabel?: string;
  href?: string;
};

export default function PageCTA({
  title,
  description,
  buttonLabel = "Book an Appointment",
  href = "/appointment-booking/",
}: PageCTAProps) {
  return (
    <section className="bg-[var(--brand-navy)]">
      <div className="container-site flex flex-col gap-8 py-14 sm:py-16 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            {title}
          </h2>

          <p className="mt-4 leading-7 text-white/75">{description}</p>
        </div>

        <Link
          href={href}
          className="inline-flex w-fit shrink-0 items-center gap-3 rounded-md bg-[var(--brand-gold)] px-6 py-3.5 text-sm font-semibold text-[var(--brand-navy)] transition-colors hover:bg-white"
        >
          {buttonLabel}
          <ArrowRight size={17} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
