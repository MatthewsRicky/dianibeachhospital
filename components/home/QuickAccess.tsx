import Link from "next/link";

const quickLinks = [
  {
    number: "01",
    title: "Book an Appointment",
    description: "Arrange a consultation with our healthcare team.",
    href: "/appointment-booking/",
    linkLabel: "Book now",
  },
  {
    number: "02",
    title: "Contact Us",
    description: "Get in touch with our team for enquiries and assistance.",
    href: "/contact-us/",
    linkLabel: "Get in touch",
  },
  {
    number: "03",
    title: "Health Packages",
    description:
      "Explore the health packages and services available at our hospital.",
    href: "/health-packages/",
    linkLabel: "Explore packages",
  },
];

export default function QuickAccess() {
  return (
    <section
      aria-label="Quick access"
      className="border-y border-slate-100 bg-slate-50"
    >
      <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-14">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {quickLinks.map((item) => (
            <Link
              key={item.number}
              href={item.href}
              className="group flex min-h-48 flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--brand-periwinkle)] hover:shadow-lg"
            >
              <div>
                <span className="text-xs font-semibold tracking-widest text-[var(--brand-navy)]">
                  {item.number}
                </span>

                <h2 className="mt-4 text-xl font-semibold text-[var(--brand-navy)]">
                  {item.title}
                </h2>

                <p className="mt-2 max-w-sm text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
              </div>

              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-navy)] transition-colors duration-300 group-hover:text-[var(--brand-periwinkle-dark)]">
                {item.linkLabel}
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
