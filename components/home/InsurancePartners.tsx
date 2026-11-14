"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { insuranceSlides } from "@/data/insurance-partners";

const SLIDE_INTERVAL = 6000;

export default function InsurancePartners() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const currentSlide = insuranceSlides[activeSlide];

  const showPrevious = () => {
    setActiveSlide(
      (current) =>
        (current - 1 + insuranceSlides.length) % insuranceSlides.length,
    );
  };

  const showNext = () => {
    setActiveSlide((current) => (current + 1) % insuranceSlides.length);
  };

  useEffect(() => {
    if (isPaused || insuranceSlides.length < 2) return;

    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % insuranceSlides.length);
    }, SLIDE_INTERVAL);

    return () => window.clearInterval(interval);
  }, [isPaused]);

  if (!currentSlide) return null;

  return (
    <section className="section-padding-lg overflow-hidden bg-slate-50">
      <div className="container-site">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="section-eyebrow">
            Local & Global Insurance Partners
          </span>

          <h2 className="section-heading mt-3">
            Supporting Your Healthcare Journey.
          </h2>

          <p className="section-description mx-auto mt-4">
            We work with insurance partners to help patients access healthcare
            services at Diani Beach Hospital.
          </p>
        </div>

        <div
          className="mx-auto max-w-5xl"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              setIsPaused(false);
            }
          }}
        >
          <div className="relative flex min-h-48 items-center justify-center rounded-2xl border border-slate-200 bg-white px-8 py-10 shadow-sm sm:min-h-64 sm:px-14 sm:py-14">
            <div className="relative h-36 w-full sm:h-48">
              <Image
                key={currentSlide.id}
                src={currentSlide.image}
                alt={currentSlide.alt}
                fill
                priority={activeSlide === 0}
                sizes="(max-width: 768px) 90vw, 800px"
                className="object-contain"
              />
            </div>

            <button
              type="button"
              onClick={showPrevious}
              aria-label="Previous insurance partner image"
              className="absolute left-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-[var(--brand-navy)] shadow-sm transition-colors hover:bg-[var(--brand-periwinkle-light)] sm:left-4"
            >
              <ArrowLeft size={18} />
            </button>

            <button
              type="button"
              onClick={showNext}
              aria-label="Next insurance partner image"
              className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-[var(--brand-navy)] shadow-sm transition-colors hover:bg-[var(--brand-periwinkle-light)] sm:right-4"
            >
              <ArrowRight size={18} />
            </button>
          </div>

          <div className="mt-6 flex items-center justify-center gap-3">
            {insuranceSlides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => setActiveSlide(index)}
                aria-label={`Show insurance partner image ${index + 1}`}
                aria-current={activeSlide === index ? "true" : undefined}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  activeSlide === index
                    ? "w-8 bg-[var(--brand-navy)]"
                    : "w-2.5 bg-slate-300 hover:bg-[var(--brand-periwinkle)]"
                }`}
              />
            ))}
          </div>

          <p className="mt-3 text-center text-xs text-slate-400">
            {String(activeSlide + 1).padStart(2, "0")} /{" "}
            {String(insuranceSlides.length).padStart(2, "0")}
          </p>
        </div>
      </div>
    </section>
  );
}
