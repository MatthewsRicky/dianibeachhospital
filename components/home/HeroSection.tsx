"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    image: "/images/hero/Years-Of-Excelence-in-Health-care.png",
    alt: "Diani Beach Hospital",
  },
  {
    id: 2,
    image: "/images/hero/ICU.png",
    alt: "Intensive Care Unit at Diani Beach Hospital",
  },
  {
    id: 3,
    image: "/images/hero/MRI.png",
    alt: "MRI facilities at Diani Beach Hospital",
  },
  {
    id: 4,
    image: "/images/hero/Major-Theatre.png",
    alt: "Hospital theatre facilities",
  },
  {
    id: 5,
    image: "/images/hero/NICU.png",
    alt: "Neonatal Intensive Care Unit",
  },
  {
    id: 6,
    image: "/images/hero/Inpatient.png",
    alt: "Diani Beach Hospital inpatient facilities",
  },
  {
    id: 7,
    image: "/images/hero/dianobeachhospital.png",
    alt: "Healthcare facilities at Diani Beach Hospital",
  },
];

const SLIDE_INTERVAL = 6000;

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = () => {
    setActiveSlide((current) => (current + 1) % slides.length);
  };

  const previousSlide = () => {
    setActiveSlide((current) => (current - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    if (isPaused) return;

    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, SLIDE_INTERVAL);

    return () => window.clearInterval(interval);
  }, [isPaused]);

  return (
    <section
      className="relative isolate overflow-hidden bg-[var(--brand-navy-dark)]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setIsPaused(false);
        }
      }}
    >
      {/* Background slideshow */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              activeSlide === index ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden="true"
          >
            <Image
              src={slide.image}
              alt=""
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover"
            />
          </div>
        ))}

        {/* Brand overlays */}
        <div className="absolute inset-0 bg-[var(--brand-navy-dark)]/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-navy-dark)]/45 via-[var(--brand-navy-dark)]/35 to-[var(--brand-navy-dark)]/25" />
      </div>

      {/* Hero content */}
      <div className="container-site relative flex min-h-[440px] items-center py-20 sm:min-h-[500px] lg:min-h-[540px]">
        <div className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--brand-gold)]">
            Welcome to Diani Beach Hospital
          </span>

          <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Professional Healthcare
            <span className="mt-2 block text-[var(--brand-gold)]">
              with a Personal Touch.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
            Committed to providing quality healthcare through professional
            service and a personal approach to patient care.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/appointment-booking/"
              className="inline-flex items-center gap-2 rounded-md bg-[var(--brand-gold)] px-6 py-3.5 text-sm font-semibold text-[var(--brand-navy-dark)] transition-colors hover:bg-white"
            >
              Book an Appointment
              <ArrowRight size={17} aria-hidden="true" />
            </Link>

            <Link
              href="/services/"
              className="inline-flex items-center gap-2 rounded-md border border-white/50 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-[var(--brand-gold)] hover:bg-white/10 hover:text-[var(--brand-gold)]"
            >
              Explore Our Services
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
              key={slide.id}
              type="button"
              onClick={() => setActiveSlide(index)}
              aria-label={`Show hero image ${index + 1} of ${slides.length}`}
              aria-pressed={activeSlide === index}
              className={`h-2 rounded-full transition-all duration-300 ${
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
