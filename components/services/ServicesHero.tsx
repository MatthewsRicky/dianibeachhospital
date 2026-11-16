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
    <section className="relative isolate flex min-h-[440px] items-center overflow-hidden bg-[var(--brand-navy-dark)] sm:min-h-[500px] lg:min-h-[540px]">
      {/* Background slideshow */}
      {slides.map((slide, index) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            activeSlide === index ? "z-0 opacity-100" : "z-[-1] opacity-0"
          }`}
          aria-hidden={activeSlide !== index}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover"
          />
        </div>
      ))}

      {/* Overlays */}
      <div className="absolute inset-0 z-0 bg-[var(--brand-navy-dark)]/35" />

      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[var(--brand-navy-dark)]/75 via-[var(--brand-navy-dark)]/55 to-[var(--brand-navy-dark)]/30" />

      {/* Content */}
      <div className="container-site relative z-10 w-full py-20 sm:py-24 lg:py-28">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--brand-gold)]">
            Healthcare at Diani Beach Hospital
          </p>

          <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Healthcare Services Designed Around Your Needs
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
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

            <Link
              href="/contact-us/"
              className="inline-flex items-center justify-center rounded-lg border border-white/50 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Slideshow controls */}
        <div className="mt-10 flex max-w-3xl items-center justify-between">
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
                    ? "w-7 bg-[var(--brand-gold)]"
                    : "w-2 bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={previousSlide}
              aria-label="Previous image"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white/15"
            >
              <ChevronLeft size={19} aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next image"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white/15"
            >
              <ChevronRight size={19} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
