import Image from "next/image";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  children?: React.ReactNode;
};

export default function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt = "",
  children,
}: PageHeroProps) {
  return (
    <section className="bg-[var(--brand-navy-light)]">
      <div className="container-site section-padding">
        {image ? (
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="max-w-2xl">
              {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}

              <h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight text-[var(--brand-navy)] sm:text-5xl">
                {title}
              </h1>

              {description && (
                <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
                  {description}
                </p>
              )}

              {children && <div className="mt-8">{children}</div>}
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-white">
              <Image
                src={image}
                alt={imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        ) : (
          <div className="max-w-3xl">
            {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}

            <h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight text-[var(--brand-navy)] sm:text-5xl">
              {title}
            </h1>

            {description && (
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                {description}
              </p>
            )}

            {children && <div className="mt-8">{children}</div>}
          </div>
        )}
      </div>
    </section>
  );
}
