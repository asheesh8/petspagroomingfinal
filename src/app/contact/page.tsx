import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, CreditCard, MapPin, Navigation, Phone } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { PageHeader } from "@/components/PageHeader";
import { PawPrint } from "@/components/PawPrint";
import { BUSINESS, DIRECTIONS_BLURB, PAYMENT_METHODS, SERVICE_AREA } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Directions",
  description: `Pet Spa & Grooming, ${BUSINESS.addressFull}. By appointment only — call ${BUSINESS.phone} to book.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="pt-16">
      <PageHeader
        eyebrow="Come say hi"
        title="Book by phone — we'd love to meet them"
        lede="To schedule an appointment, contact us by phone. We look forward to working with you!"
      >
        <a
          href={BUSINESS.phoneHref}
          className="mt-7 inline-flex items-center gap-2 rounded-full bg-honey px-8 py-4 text-base font-extrabold text-white shadow-lift transition hover:-translate-y-0.5 hover:bg-honey-deep"
        >
          <Phone className="h-5 w-5" /> Call {BUSINESS.phone}
        </a>
      </PageHeader>

      <section className="py-14">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <h2 className="font-display text-3xl font-semibold">Find the spa</h2>
            <ul className="mt-6 space-y-5 text-ink-soft">
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-honey-deep" />
                <span>
                  <strong className="block text-ink">{BUSINESS.address}</strong>
                  {BUSINESS.city}, {BUSINESS.state} {BUSINESS.zip} · {BUSINESS.neighborhood}
                  <br />
                  <a
                    href={BUSINESS.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-bold text-plum-deep underline-offset-4 hover:underline"
                  >
                    Open in Google Maps
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-1 h-5 w-5 shrink-0 text-honey-deep" />
                <a href={BUSINESS.phoneHref} className="font-bold text-ink hover:text-plum-deep">
                  {BUSINESS.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-1 h-5 w-5 shrink-0 text-honey-deep" />
                <span>{BUSINESS.hours}</span>
              </li>
              <li className="flex items-start gap-3">
                <CreditCard className="mt-1 h-5 w-5 shrink-0 text-honey-deep" />
                <span>
                  <strong className="block text-ink">Payment options</strong>
                  <span className="mt-2 flex flex-wrap gap-1.5">
                    {PAYMENT_METHODS.map((m) => (
                      <span
                        key={m}
                        className="rounded-full bg-plum-mist px-3 py-1 text-xs font-extrabold text-plum-deep"
                      >
                        {m}
                      </span>
                    ))}
                  </span>
                </span>
              </li>
            </ul>

            <div className="mt-8 rounded-3xl bg-sand/70 p-6">
              <p className="flex items-center gap-2 font-display text-lg font-semibold">
                <Navigation className="h-4 w-4 text-honey-deep" /> Finding us
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{DIRECTIONS_BLURB}</p>
            </div>

            <Link
              href="/book"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-plum-deep px-7 py-3.5 text-sm font-extrabold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-plum-ink"
            >
              Request an appointment <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <Reveal delay={0.15} className="lg:col-span-3">
            <div className="h-full overflow-hidden rounded-3xl shadow-soft">
              <iframe
                src={BUSINESS.mapsEmbed}
                title={`Map to ${BUSINESS.name}`}
                className="h-80 w-full border-0 sm:h-96 lg:h-full lg:min-h-[32rem]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-plum-ink py-16 text-white">
        <PawPrint className="absolute -top-8 -left-8 h-44 w-44 rotate-12 text-white/5" />
        <Reveal className="mx-auto max-w-4xl px-6 text-center">
          <p className="font-hand text-2xl text-honey">Service area</p>
          <p className="text-balance mt-3 font-display text-2xl leading-snug font-semibold sm:text-3xl">
            Proudly serving Chittenden County, including {SERVICE_AREA.slice(0, -1).join(", ")}{" "}
            &amp; {SERVICE_AREA.at(-1)}.
          </p>
        </Reveal>
      </section>
    </div>
  );
}
