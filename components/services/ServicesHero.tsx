"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    src: "/images/hero/ICU1.jpg",
    alt: "Intensive care unit at Diani Beach Hospital",
  },
  {
    src: "/images/hero/MRI-4.jpg",
    alt: "MRI imaging facilities at Diani Beach Hospital",
  },
  {
    src: "/images/hero/NICU2.jpg",
    alt: "Neonatal intensive care facilities",
  },
  {
    src: "/images/hero/MT1.jpg",
    alt: "Medical facilities at Diani Beach Hospital",
  },
];

export default function ServicesHero() {
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
    <section className="bg-[var(--brand-navy-light)]">
      <div className="container-site grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-2 lg:gap-16 lg:py-20">
        {/* Hero content */}
        <div className="max-w-xl">
          <span className="section-eyebrow">
            Healthcare at Diani Beach Hospital
          </span>

          <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-[var(--brand-navy)] sm:text-5xl">
            Healthcare Services Designed Around Your Needs
          </h1>

          <p className="mt-6 max-w-lg text-base leading-8 text-slate-600 sm:text-lg">
            From everyday consultations and diagnostic services to specialised
            hospital facilities, we are committed to supporting your healthcare
            needs with professional care and personal attention.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/appointment-booking/"
              className="button-primary inline-flex items-center gap-2"
            >
              Book an Appointment
              <ArrowRight size={17} aria-hidden="true" />
            </Link>

            <Link href="/contact-us/" className="button-secondary">
              Contact Us
            </Link>
          </div>
        </div>

        {/* Image slideshow */}
        <div className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-white shadow-sm">
            {slides.map((slide, index) => (
              <div
                key={slide.src}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  activeSlide === index ? "z-10 opacity-100" : "z-0 opacity-0"
                }`}
                aria-hidden={activeSlide !== index}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain"
                />
              </div>
            ))}
          </div>

          {/* Slideshow controls */}
          <div className="mt-5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              {slides.map((slide, index) => (
                <button
                  key={slide.src}
                  type="button"
                  onClick={() => setActiveSlide(index)}
                  aria-label={`Show image ${index + 1}`}
                  aria-current={activeSlide === index ? "true" : undefined}
                  className={`h-2 rounded-full transition-all ${
                    activeSlide === index
                      ? "w-7 bg-[var(--brand-navy)]"
                      : "w-2 bg-[var(--brand-navy)]/25 hover:bg-[var(--brand-navy)]/50"
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={previousSlide}
                aria-label="Previous image"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--brand-navy)]/15 text-[var(--brand-navy)] transition-colors hover:bg-white"
              >
                <ChevronLeft size={19} aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next image"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--brand-navy)]/15 text-[var(--brand-navy)] transition-colors hover:bg-white"
              >
                <ChevronRight size={19} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
