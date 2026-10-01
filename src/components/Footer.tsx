import Link from "next/link";
import { MapPin, Clock, Heart, Phone, CreditCard } from "lucide-react";
import { BUSINESS, NAV, PAYMENT_METHODS, SERVICE_AREA } from "@/lib/site";
import { PawPrint } from "./PawPrint";
import { PoodleMark } from "./PoodleMark";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-plum-ink text-plum-mist">
      {/* faint oversized paw watermark */}
      <PawPrint className="absolute -right-10 -bottom-16 h-64 w-64 text-white/5" />
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-3">
          <div className="flex items-center gap-2.5">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-cream">
              <PoodleMark className="h-8 text-plum-deep" />
            </span>
            <p className="font-display text-lg font-semibold text-white">{BUSINESS.name}</p>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-plum-light">
            Dog grooming at its finest — a quiet, clean and intimate salon at {BUSINESS.neighborhood}
            , with over {BUSINESS.yearsCombined} years of combined experience.
          </p>
        </div>

        <div>
          <p className="mb-3 text-xs font-extrabold tracking-widest text-plum-light uppercase">
            Explore
          </p>
          <ul className="grid grid-cols-2 gap-2 text-sm lg:grid-cols-1">
            {[...NAV.filter((l) => l.href !== "/"), { href: "/book", label: "Book a visit" }].map(
              (l) => (
                <li key={l.href}>
                  <Link href={l.href} className="transition hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </div>

        <div>
          <p className="mb-3 text-xs font-extrabold tracking-widest text-plum-light uppercase">
            Visit
          </p>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-honey" />
              <a
                href={BUSINESS.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-white"
              >
                {BUSINESS.address}
                <br />
                {BUSINESS.city}, {BUSINESS.state} {BUSINESS.zip}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-honey" />
              <a href={BUSINESS.phoneHref} className="transition hover:text-white">
                {BUSINESS.phone}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-honey" />
              <span>{BUSINESS.hours}</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CreditCard className="mt-0.5 h-4 w-4 shrink-0 text-honey" />
              <span>{PAYMENT_METHODS.join(" · ")}</span>
            </li>
          </ul>
        </div>

        <div>
          <p className="mb-3 text-xs font-extrabold tracking-widest text-plum-light uppercase">
            Proudly serving
          </p>
          <p className="text-sm leading-relaxed text-plum-light">
            Chittenden County, including {SERVICE_AREA.slice(0, -1).join(", ")} &amp;{" "}
            {SERVICE_AREA.at(-1)}.
          </p>
          <a
            href={BUSINESS.phoneHref}
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-honey px-5 py-2.5 text-sm font-extrabold text-white transition hover:bg-honey-deep"
          >
            <Phone className="h-4 w-4" />
            Call to book
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-5 text-xs text-plum-light/80 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {BUSINESS.name} · {BUSINESS.city}, Vermont
          </p>
          <p className="flex items-center gap-1.5">
            Made with <Heart className="h-3.5 w-3.5 fill-honey text-honey" /> for the dogs of
            Chittenden County
          </p>
        </div>
      </div>
    </footer>
  );
}
