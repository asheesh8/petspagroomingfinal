import type { Metadata } from "next";
import { ExternalLink, Phone, Quote } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { PageHeader } from "@/components/PageHeader";
import { Stars } from "@/components/Stars";
import { BUSINESS, REVIEWS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Reviews",
  description: `${BUSINESS.rating} stars across ${BUSINESS.reviewCount} Google reviews for Pet Spa & Grooming in Colchester, Vermont.`,
  alternates: { canonical: "/reviews" },
};

export default function ReviewsPage() {
  return (
    <div className="pt-16">
      <PageHeader
        eyebrow="Kind words"
        title={`${BUSINESS.rating} stars from ${BUSINESS.reviewCount} Google reviews`}
        lede="Every word below is a real, published Google review from a client of the salon."
      >
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <Stars className="text-honey" size={20} />
          <a
            href={BUSINESS.reviewsUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-white px-5 py-2.5 text-sm font-extrabold text-plum-deep shadow-soft transition hover:text-honey-deep"
          >
            See them on Google <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </PageHeader>

      <section className="py-14">
        <div className="mx-auto max-w-6xl columns-1 gap-6 px-6 md:columns-2 lg:columns-3 [&>*]:mb-6">
          {REVIEWS.map((review, i) => (
            <Reveal key={review.author} delay={(i % 3) * 0.08} className="break-inside-avoid">
              <figure className="rounded-3xl bg-white p-7 shadow-soft">
                <div className="flex items-center justify-between">
                  <Stars className="text-honey" size={15} />
                  <Quote className="h-5 w-5 text-plum-light" />
                </div>
                <blockquote className="mt-4 leading-relaxed text-ink">
                  “{review.quote}”{review.truncated ? " …" : ""}
                </blockquote>
                <figcaption className="mt-5 flex items-baseline justify-between gap-3 border-t border-plum-mist pt-4">
                  <span className="font-display font-semibold">{review.author}</span>
                  <span className="text-xs text-ink-soft">{review.when}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="rounded-[2rem] bg-plum-deep px-8 py-12 text-center text-white shadow-lift">
              <h2 className="font-display text-3xl font-semibold sm:text-4xl">
                Join them — call to book your dog in
              </h2>
              <a
                href={BUSINESS.phoneHref}
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-honey px-9 py-4 text-base font-extrabold text-white shadow-lift transition hover:-translate-y-0.5 hover:bg-honey-deep"
              >
                <Phone className="h-5 w-5" /> Call {BUSINESS.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
