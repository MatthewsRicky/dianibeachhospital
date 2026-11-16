import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="border-b border-slate-100 bg-white">
      <div className="container-site flex flex-wrap items-center gap-2 py-4 text-sm">
        <Link
          href="/"
          className="text-slate-500 transition-colors hover:text-[var(--brand-navy)]"
        >
          <Home size={15} aria-hidden="true" />
        </Link>

        {items.map((item, index) => (
          <div
            key={`${item.label}-${index}`}
            className="flex items-center gap-2"
          >
            <ChevronRight
              size={14}
              className="text-slate-400"
              aria-hidden="true"
            />

            {item.href ? (
              <Link
                href={item.href}
                className="text-slate-500 transition-colors hover:text-[var(--brand-navy)]"
              >
                {item.label}
              </Link>
            ) : (
              <span className="font-medium text-[var(--brand-navy)]">
                {item.label}
              </span>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
}