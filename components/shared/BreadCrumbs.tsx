import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol className="flex flex-wrap items-center gap-2 text-sm">
        <li>
          <Link
            href="/"
            aria-label="Home"
            className="text-slate-500 transition-colors hover:text-[var(--brand-navy)]"
          >
            <Home size={15} aria-hidden="true" />
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li
              key={`${item.label}-${index}`}
              className="flex items-center gap-2"
            >
              <ChevronRight
                size={14}
                className="shrink-0 text-slate-400"
                aria-hidden="true"
              />

              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="text-slate-500 transition-colors hover:text-[var(--brand-navy)]"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  aria-current={isLast ? "page" : undefined}
                  className={
                    isLast
                      ? "font-medium text-[var(--brand-navy)]"
                      : "text-slate-500"
                  }
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
