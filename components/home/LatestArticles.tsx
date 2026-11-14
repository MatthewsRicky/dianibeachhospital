import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { articles } from "@/data/articles";

export default function LatestArticles() {
  return (
    <section className="section-padding bg-white">
      <div className="container-site">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="section-eyebrow">Health & Wellness</span>

            <h2 className="section-heading mt-3">
              Insights for Better Health.
            </h2>

            <p className="section-description mt-4">
              Explore helpful information, health insights and updates from
              Diani Beach Hospital.
            </p>
          </div>

          <Link
            href="/blog/"
            className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-[var(--brand-navy)] transition-colors hover:text-[var(--brand-periwinkle-dark)]"
          >
            View all articles
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
          {articles.map((article) => (
            <article key={article.title} className="group">
              <Link
                href={article.href}
                className="block overflow-hidden rounded-xl bg-slate-100"
                aria-label={`Read ${article.title}`}
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={article.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </Link>

              <div className="pt-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-[var(--brand-periwinkle-dark)]">
                  {article.category}
                </span>

                <h3 className="mt-3 text-xl font-semibold leading-snug text-[var(--brand-navy)] transition-colors group-hover:text-[var(--brand-periwinkle-dark)]">
                  <Link href={article.href}>{article.title}</Link>
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {article.excerpt}
                </p>

                <Link
                  href={article.href}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-navy)]"
                >
                  Read article
                  <ArrowRight
                    size={16}
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
