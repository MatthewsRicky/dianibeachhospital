"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

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
    alt: "Diani Beach Hospital facilities",
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

  const showNext = () => {
    setActiveSlide((current) => (current + 1) % slides.length);
  };

  const showPrevious = () => {
    setActiveSlide((current) => (current - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    if (isPaused) return;

    const interval = window.setInterval(showNext, SLIDE_INTERVAL);

    return () => window.clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="bg-white">
      <div className="mx-auto grid min-h-[540px] max-w-7xl grid-cols-1 items-center gap-10 px-5 py-12 lg:grid-cols-2 lg:gap-14 lg:px-8 lg:py-16">
        {/* LEFT: Static content */}
        <div className="max-w-xl">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-[#006B63]">
            Welcome to Diani Beach Hospital
          </p>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-[#0b1464] sm:text-5xl xl:text-6xl">
            Professional Healthcare with a Personal Touch.
          </h1>

          <p className="mt-6 max-w-lg text-base leading-8 text-slate-600 md:text-lg">
            Committed to providing quality healthcare through professional
            service and a personal approach to patient care.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/appointment-booking/"
              className="rounded-md bg-brand-navy px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#00564F]"
            >
              Book an Appointment
            </Link>

            <Link
              href="/services/"
              className="rounded-md border border-[#0b1464]/20 px-6 py-4 text-sm font-semibold text-[#0b1464] transition-colors hover:border-[#006B63] hover:text-[#006B63]"
            >
              Explore Our Services
            </Link>
          </div>
        </div>

        {/* RIGHT: Image slideshow */}
        <div
          className="relative w-full"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              setIsPaused(false);
            }
          }}
        >
          <div className="relative aspect-[5/3] overflow-hidden rounded-xl bg-slate-100 sm:aspect-[16/9] lg:aspect-[16/10]">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                aria-hidden={index !== activeSlide}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  index === activeSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-fit"
                />
              </div>
            ))}

            {/* Image controls */}
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-[#0b1464]/75 to-transparent px-5 pb-5 pt-12">
              {/* Slide indicators */}
              <div className="flex items-center gap-2">
                {slides.map((slide, index) => (
                  <button
                    key={slide.id}
                    type="button"
                    aria-label={`Go to slide ${index + 1} of ${slides.length}`}
                    aria-current={index === activeSlide ? "true" : undefined}
                    onClick={() => setActiveSlide(index)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      index === activeSlide
                        ? "w-8 bg-white"
                        : "w-3 bg-white/50 hover:bg-white"
                    }`}
                  />
                ))}
              </div>

              {/* Previous / Next */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={showPrevious}
                  aria-label="Previous slide"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/60 text-white transition-colors hover:bg-white hover:text-[#0b1464]"
                >
                  ←
                </button>

                <button
                  type="button"
                  onClick={showNext}
                  aria-label="Next slide"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/60 text-white transition-colors hover:bg-white hover:text-[#0b1464]"
                >
                  →
                </button>
              </div>
            </div>
          </div>

          {/* Subtle image caption */}
          <p className="mt-3 text-right text-xs text-slate-400">
            Diani Beach Hospital
          </p>
        </div>
      </div>
    </section>
  );
}
