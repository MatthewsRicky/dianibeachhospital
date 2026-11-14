const values = [
  "Service",
  "Innovation",
  "Integrity",
  "Respect",
  "Putting patients first",
  "Patient safety and confidentiality",
];

export default function AboutValues() {
  return (
    <section className="bg-[var(--brand-navy-light)]">
      <div className="container-site section-padding">
        <div className="max-w-3xl">
          <p className="section-eyebrow">Our Purpose</p>
          <h2 className="section-heading mt-3">
            The Principles Behind Our Care
          </h2>
          <p className="section-description mt-4">
            Our approach to healthcare is guided by a commitment to quality,
            professionalism and respect for every patient.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* Mission */}
          <div className="rounded-xl border border-slate-200 bg-white p-8">
            <span className="text-sm font-semibold uppercase tracking-widest text-[var(--brand-periwinkle)]">
              Our Mission
            </span>

            <h3 className="mt-4 text-2xl font-bold text-[var(--brand-navy)]">
              Quality Healthcare, Personalised Care
            </h3>

            <p className="mt-4 leading-8 text-slate-600">
              To provide high-quality healthcare through the effective use of
              technology, skilled healthcare professionals and personalised
              patient care.
            </p>
          </div>

          {/* Vision */}
          <div className="rounded-xl border border-slate-200 bg-white p-8">
            <span className="text-sm font-semibold uppercase tracking-widest text-[var(--brand-gold-dark)]">
              Our Vision
            </span>

            <h3 className="mt-4 text-2xl font-bold text-[var(--brand-navy)]">
              A Benchmark for Healthcare Excellence
            </h3>

            <p className="mt-4 leading-8 text-slate-600">
              To become a benchmark for excellence and one of the leading
              private hospitals in East Africa.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mt-12">
          <div className="max-w-2xl">
            <h3 className="text-2xl font-bold text-[var(--brand-navy)]">
              Our Core Values
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              These principles guide how we serve our patients, work with one
              another and approach our responsibilities.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <div
                key={value}
                className="flex items-center gap-4 rounded-lg border border-slate-200 bg-white p-5"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--brand-periwinkle-light)] text-sm font-semibold text-[var(--brand-navy)]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="font-medium text-slate-700">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
