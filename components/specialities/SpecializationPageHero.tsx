import Image from "next/image";
import type { ReactNode } from "react";

type SpecializationPageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  children?: ReactNode;
};

export default function SpecializationPageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt = "",
  children,
}: SpecializationPageHeroProps) {
  return (
    <section className="relative isolate flex min-h-[420px] items-center overflow-hidden bg-[var(--brand-navy-dark)] sm:min-h-[460px] lg:min-h-[500px]">
      {image && (
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      )}

      {/* Image overlays */}
      <div className="absolute inset-0 -z-0 bg-[var(--brand-navy-dark)]/35" />

      <div className="absolute inset-0 -z-0 bg-gradient-to-r from-[var(--brand-navy-dark)]/95 via-[var(--brand-navy-dark)]/75 to-[var(--brand-navy-dark)]/30" />

      <div className="container-site relative z-10 w-full py-20 sm:py-24 lg:py-28">
        <div className="max-w-3xl">
          {eyebrow && (
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--brand-gold)]">
              {eyebrow}
            </p>
          )}

          <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>

          {description && (
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
              {description}
            </p>
          )}

          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>
    </section>
  );
}
