import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { PageHeader } from "@/components/PageHeader";
import { GalleryGrid } from "@/components/GalleryGrid";
import { BeforeAfter } from "@/components/BeforeAfter";
import { PHOTOS, TRANSFORMATIONS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Freshly groomed dogs from Pet Spa & Grooming in Colchester, Vermont — poodles, doodles, retrievers, terriers and more.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <div className="pt-16">
      <PageHeader
        eyebrow="Brag book"
        title="Fresh cuts & happy faces"
        lede="Photographed on the table at the salon in Colchester, Vermont. Tap any photo for a closer look."
      />

      <section className="py-14">
        <div className="mx-auto max-w-5xl px-6">
          <GalleryGrid photos={PHOTOS} />
        </div>
      </section>

      <section className="bg-sand/60 py-14">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal className="mb-10 text-center">
            <p className="font-hand text-2xl text-honey-deep">Before &amp; after</p>
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">
              Drag to see the difference
            </h2>
          </Reveal>
          <div className="mx-auto grid max-w-xl gap-8 sm:grid-cols-2">
            {TRANSFORMATIONS.map((t, i) => (
              <Reveal key={t.id} delay={i * 0.12}>
                <BeforeAfter before={t.before} after={t.after} label={t.label} note={t.note} />
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12 text-center">
            <p className="font-hand text-2xl text-plum-deep">Want yours on this wall?</p>
            <Link
              href="/book"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-honey px-8 py-3.5 text-sm font-extrabold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-honey-deep"
            >
              Book a spa day <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
