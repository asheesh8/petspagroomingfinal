import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Droplets, Phone } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { PageHeader } from "@/components/PageHeader";
import { PawPrint } from "@/components/PawPrint";
import {
  BUSINESS,
  CONSULTATION_COPY,
  GREEK_YOGURT_COPY,
  SERVICES,
  SERVICES_LEDE,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Dog Grooming Services",
  description:
    "Specialized dog grooming in Colchester, Vermont — salon bath, tearless blueberry facial, hydro massage, deep conditioning, Greek yogurt shampoo, pawdicure and handmade bandanas & bows.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <div className="pt-16">
      <PageHeader
        eyebrow="The spa menu"
        title="Specialized grooming, customized to your dog"
        lede={SERVICES_LEDE}
      />

      <section className="py-14">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 sm:grid-cols-2">
          {SERVICES.map((service, i) => (
            <Reveal key={service.slug} delay={(i % 2) * 0.1}>
              <article
                id={service.slug}
                className="group flex h-full scroll-mt-24 flex-col overflow-hidden rounded-3xl bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-lift sm:flex-row"
              >
                <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden sm:aspect-auto sm:w-44">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, 176px"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex flex-wrap-reverse items-start justify-between gap-x-3 gap-y-2">
                    <h2 className="font-display text-xl font-semibold">{service.name}</h2>
                    <span className="shrink-0 rounded-full bg-plum-mist px-3 py-1 text-[11px] font-extrabold tracking-wide text-plum-deep uppercase">
                      {service.tag}
                    </span>
                  </div>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-ink-soft">
                    {service.blurb}
                  </p>
                  <Link
                    href="/book"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-extrabold text-honey-deep transition group-hover:gap-2.5"
                  >
                    Ask about this <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Greek yogurt shampoo */}
      <section className="relative overflow-hidden bg-plum-ink py-16 text-white">
        <PawPrint className="absolute -top-10 -right-10 h-52 w-52 -rotate-12 text-white/5" />
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 lg:grid-cols-2">
          <Reveal>
            <div className="group relative mx-auto max-w-md overflow-hidden rounded-3xl shadow-lift">
              <Image
                src="/images/honey-plaid-bandana.webp"
                alt="Honey, a cream dog with a soft, fluffy coat in a plaid bandana"
                width={1538}
                height={2048}
                sizes="(max-width: 1024px) 90vw, 448px"
                className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <span className="absolute top-4 right-4 rounded-full bg-honey px-3.5 py-1.5 text-xs font-extrabold tracking-wide text-white uppercase">
                Premium shampoo
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="inline-flex items-center gap-2 rounded-full bg-honey/15 px-4 py-1.5 font-hand text-xl text-honey">
              <Droplets className="h-4 w-4" /> Our signature
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold sm:text-4xl">
              Greek Yogurt Shampoo
            </h2>
            <p className="mt-5 leading-relaxed text-plum-light">{GREEK_YOGURT_COPY}</p>
          </Reveal>
        </div>
      </section>

      {/* Consultation */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <p className="font-hand text-2xl text-honey-deep">The consultation</p>
            <h2 className="text-balance font-display text-3xl font-semibold sm:text-4xl">
              You already have a picture in your head
            </h2>
            <p className="mt-5 leading-relaxed text-ink-soft">{CONSULTATION_COPY}</p>
            <p className="mt-6 text-ink-soft">
              Every dog is different — call us and we&apos;ll talk through exactly what yours needs.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={BUSINESS.phoneHref}
                className="inline-flex items-center gap-2 rounded-full bg-honey px-8 py-3.5 text-sm font-extrabold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-honey-deep"
              >
                <Phone className="h-4 w-4" /> Call {BUSINESS.phone}
              </a>
              <Link
                href="/book"
                className="inline-flex items-center gap-2 rounded-full border-2 border-plum-mist px-7 py-3 text-sm font-extrabold text-plum-deep transition hover:border-plum"
              >
                Request an appointment <PawPrint className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
