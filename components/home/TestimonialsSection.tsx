import { Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-site">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="section-eyebrow">Patient Experiences</span>

          <h2 className="section-heading mt-3">
            Care That Leaves a Lasting Impression.
          </h2>

          <p className="section-description mx-auto mt-4">
            Hear from people who have experienced the care, attention and
            hospitality of Diani Beach Hospital.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <article
              key={`${testimonial.author}-${index}`}
              className="flex flex-col rounded-xl border border-[var(--color-border)] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--brand-periwinkle)] hover:shadow-md"
            >
              <div
                className="mb-5 flex items-center gap-1"
                aria-label={`${testimonial.rating} out of 5 stars`}
              >
                {Array.from({ length: testimonial.rating }, (_, starIndex) => (
                  <Star
                    key={starIndex}
                    size={17}
                    fill="var(--brand-gold)"
                    stroke="var(--brand-gold-dark)"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                ))}
              </div>

              <blockquote className="flex-1 text-sm leading-7 text-slate-600">
                “{testimonial.quote}”
              </blockquote>

              <div className="mt-6 border-t border-[var(--color-border)] pt-4">
                <p className="font-semibold text-[var(--brand-navy)]">
                  {testimonial.author}
                </p>
                <p className="mt-1 text-xs text-slate-400">
                  Patient testimonial
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
