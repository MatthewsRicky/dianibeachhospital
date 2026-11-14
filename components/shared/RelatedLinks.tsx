import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export type RelatedLinkItem = {
  label: string;
  description?: string;
  href: string;
};

type RelatedLinksProps = {
  title?: string;
  links: RelatedLinkItem[];
};

export default function RelatedLinks({
  title = "Explore More",
  links,
}: RelatedLinksProps) {
  return (
    <section className="bg-slate-50">
      <div className="container-site section-padding">
        <h2 className="section-heading">{title}</h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group rounded-xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-[var(--brand-periwinkle)] hover:shadow-md"
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="font-semibold text-[var(--brand-navy)]">
                  {link.label}
                </h3>

                <ArrowUpRight
                  size={18}
                  className="shrink-0 text-slate-400 transition-colors group-hover:text-[var(--brand-navy)]"
                  aria-hidden="true"
                />
              </div>

              {link.description && (
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {link.description}
                </p>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
