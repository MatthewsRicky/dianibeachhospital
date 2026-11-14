"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    src: "/images/hero/MT1.jpg",
    alt: "Hospital theatre facilities",
  },
  {
    src: "/images/hero/NICU2.jpg",
    alt: "Neonatal intensive care facilities",
  },
];

export default function SpecializationsHero() {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    setActiveSlide((current) => (current + 1) % slides.length);
  };

  const previousSlide = () => {
    setActiveSlide((current) => (current - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = window.setInterval(nextSlide, 6000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="relative isolate overflow-hidden bg-[var(--brand-navy-dark)]">
      {/* Background slideshow */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              activeSlide === index ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden="true"
          >
            <Image
              src={slide.src}
              alt=""
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover"
            />
          </div>
        ))}

        <div className="absolute inset-0 bg-[var(--brand-navy-dark)]/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-navy-dark)]/90 via-[var(--brand-navy-dark)]/65 to-transparent" />
      </div>

      <div className="container-site relative flex min-h-[440px] items-center py-20 sm:min-h-[500px] lg:min-h-[540px]">
        <div className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--brand-gold)]">
            Clinical Expertise
          </span>

          <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Medical Specializations
            <span className="mt-2 block text-[var(--brand-gold)]">
              Focused on Your Health.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
            Explore the medical disciplines and areas of clinical expertise
            represented at Diani Beach Hospital, supporting patients with a
            range of healthcare needs.
          </p>

          <div className="mt-8">
            <Link
              href="#specialization-directory"
              className="inline-flex items-center gap-2 rounded-md bg-[var(--brand-gold)] px-6 py-3.5 text-sm font-semibold text-[var(--brand-navy-dark)] transition-colors hover:bg-white"
            >
              Explore Specializations
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>

      {/* Slideshow controls */}
      <div className="container-site absolute bottom-6 left-0 right-0 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.src}
              type="button"
              onClick={() => setActiveSlide(index)}
              aria-label={`Show hero image ${index + 1}`}
              aria-pressed={activeSlide === index}
              className={`h-2 rounded-full transition-all ${
                activeSlide === index
                  ? "w-8 bg-[var(--brand-gold)]"
                  : "w-2 bg-white/50 hover:bg-white"
              }`}
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={previousSlide}
            aria-label="Previous hero image"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white/15"
          >
            <ChevronLeft size={19} aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next hero image"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white/15"
          >
            <ChevronRight size={19} aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
