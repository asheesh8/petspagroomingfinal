import type { Metadata } from "next";
import { Clock, CreditCard, MapPin, Phone } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { PageHeader } from "@/components/PageHeader";
import { BookingForm } from "@/components/BookingForm";
import { BUSINESS, PAYMENT_METHODS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book an Appointment",
  description: `Request a dog grooming appointment at Pet Spa & Grooming in Colchester, VT. By appointment only — call ${BUSINESS.phone}.`,
  alternates: { canonical: "/book" },
};

export default function BookPage() {
  return (
    <div className="pt-16">
      <PageHeader
        eyebrow="Let's get you scheduled"
        title="Book a spa day"
        lede="Tell us about your dog and we'll have everything ready for a quick call. We book by phone, so nothing is reserved until we speak with you."
      />

      <section className="py-14">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <BookingForm />
          </Reveal>
          <Reveal delay={0.15} className="space-y-6 lg:col-span-2">
            <div className="rounded-3xl bg-white p-7 shadow-soft">
              <h2 className="font-display text-xl font-semibold">Good to know</h2>
              <ul className="mt-4 space-y-4 text-sm leading-relaxed text-ink-soft">
                <li className="flex gap-3">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-honey-deep" />
                  <span>
                    <strong className="text-ink">Prefer to just call?</strong>{" "}
                    <a href={BUSINESS.phoneHref} className="underline-offset-4 hover:underline">
                      {BUSINESS.phone}
                    </a>
                  </span>
                </li>
                <li className="flex gap-3">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-honey-deep" />
                  <span>
                    <strong className="text-ink">Hours:</strong> {BUSINESS.hours}
                  </span>
                </li>
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-honey-deep" />
                  <span>
                    <strong className="text-ink">Where:</strong>{" "}
                    <a
                      href={BUSINESS.mapsUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="underline-offset-4 hover:underline"
                    >
                      {BUSINESS.addressFull}
                    </a>
                  </span>
                </li>
                <li className="flex gap-3">
                  <CreditCard className="mt-0.5 h-5 w-5 shrink-0 text-honey-deep" />
                  <span>
                    <strong className="text-ink">We accept:</strong> {PAYMENT_METHODS.join(", ")}
                  </span>
                </li>
              </ul>
            </div>
            <div className="rounded-3xl bg-plum-deep p-7 text-white shadow-soft">
              <p className="font-hand text-2xl text-honey">First visit? 🐾</p>
              <p className="mt-2 text-sm leading-relaxed text-plum-mist">
                Let us know if it&apos;s a first groom, a senior dog, or a pup who isn&apos;t sure
                about the dryer — and bring the picture you have in your head. We&apos;ll talk it
                through before anyone picks up the scissors.
              </p>
            </div>
            <div className="overflow-hidden rounded-3xl shadow-soft">
              <iframe
                src={BUSINESS.mapsEmbed}
                title={`Map to ${BUSINESS.name}`}
                className="h-56 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
