import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, ChevronDown, Ear, Phone, Sparkles, Star } from "lucide-react";
import { HeroVideo } from "@/components/HeroVideo";
import { Reveal } from "@/components/Reveal";
import { PhotoMarquee } from "@/components/PhotoMarquee";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { BeforeAfter } from "@/components/BeforeAfter";
import { PawPrint } from "@/components/PawPrint";
import {
  BUSINESS,
  CONSULTATION_COPY,
  DIRECTIONS_BLURB,
  PHOTOS,
  REVIEWS,
  SERVICES,
  TRANSFORMATIONS,
} from "@/lib/site";

export default function HomePage() {
  const featured = SERVICES.filter((s) => s.featured);

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative -mb-px flex min-h-[100svh] items-center justify-center overflow-hidden">
        <HeroVideo />
        <div className="relative z-10 mx-auto max-w-3xl px-6 pt-16 text-center text-white">
          <Reveal>
            <p className="font-hand text-2xl text-honey [text-shadow:0_1px_14px_rgb(0_0_0/0.45)] sm:text-3xl">
              {BUSINESS.neighborhood} · Colchester, VT
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <h1 className="text-balance mt-3 font-display text-5xl leading-[1.05] font-semibold sm:text-7xl">
              Dog grooming at its finest
            </h1>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="text-balance mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/85">
              Over {BUSINESS.yearsCombined} years of combined experience in a quiet, clean and
              intimate salon. Your dog gets the whole room — and our whole attention.
            </p>
          </Reveal>
          <Reveal delay={0.45}>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={BUSINESS.phoneHref}
                className="inline-flex items-center gap-2 rounded-full bg-honey px-8 py-4 text-base font-extrabold text-white shadow-lift transition hover:-translate-y-0.5 hover:bg-honey-deep"
              >
                <Phone className="h-5 w-5" />
                Call {BUSINESS.phone}
              </a>
              <Link
                href="/book"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 px-8 py-[14px] text-base font-extrabold text-white backdrop-blur-sm transition hover:border-white hover:bg-white/10"
              >
                Request an appointment
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.6}>
            <a
              href={BUSINESS.reviewsUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm text-white/80 transition hover:text-white"
            >
              <span className="inline-flex gap-0.5 text-honey" aria-hidden>
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-current" strokeWidth={0} />
                ))}
              </span>
              <strong className="font-extrabold text-white">{BUSINESS.rating}</strong>
              <span>· {BUSINESS.reviewCount} Google reviews</span>
              <span>
                <span className="text-white/50">·</span> {BUSINESS.hours}
              </span>
            </a>
          </Reveal>
        </div>
        <a
          href="#promise"
          aria-label="Scroll to learn more"
          className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-white/70 transition hover:text-white"
        >
          <ChevronDown className="animate-float h-8 w-8" />
        </a>
      </section>

      {/* ── Promise strip ────────────────────────────────────── */}
      <section id="promise" className="relative scroll-mt-16 bg-cream">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="grid gap-8 text-center sm:grid-cols-3">
            {[
              {
                icon: Sparkles,
                title: "Quiet, clean & intimate",
                text: "A calm and relaxing atmosphere for you and your pet. Your furry companion will feel right at home with us.",
              },
              {
                icon: Award,
                title: `${BUSINESS.yearsCombined}+ years combined`,
                text: "A talented team of stylists with decades of combined expertise in dog grooming — large and small canines alike.",
              },
              {
                icon: Ear,
                title: "We listen first",
                text: "You already have a picture of the end result. We ask questions and genuinely listen until we can see it too.",
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 0.12}>
                <div className="group h-full rounded-3xl bg-white p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-plum-mist text-plum-deep transition group-hover:bg-honey/15 group-hover:text-honey-deep">
                    <item.icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-display text-xl font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured services ────────────────────────────────── */}
      <section className="bg-sand/60 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="font-hand text-2xl text-honey-deep">The spa menu</p>
                <h2 className="font-display text-3xl font-semibold sm:text-4xl">
                  Specific, customized grooming
                </h2>
              </div>
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 rounded-full bg-white px-5 py-2.5 text-sm font-extrabold text-plum-deep shadow-soft transition hover:text-honey-deep"
              >
                All {SERVICES.length} services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((service, i) => (
              <Reveal key={service.slug} delay={i * 0.1}>
                <Link
                  href={`/services#${service.slug}`}
                  className="group block h-full overflow-hidden rounded-3xl bg-white shadow-soft transition hover:-translate-y-1.5 hover:shadow-lift"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-lg font-semibold">{service.name}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{service.blurb}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Philosophy ───────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-plum-ink py-20 text-white">
        <PawPrint className="absolute -top-10 -left-10 h-52 w-52 rotate-12 text-white/5" />
        <PawPrint className="absolute -right-8 bottom-0 h-40 w-40 -rotate-12 text-white/5" />
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
          <Reveal>
            <div className="relative mx-auto max-w-md">
              <div className="overflow-hidden rounded-3xl shadow-lift">
                <Image
                  src="/images/golden-dog-pink-floral-bandana.webp"
                  alt="A freshly groomed golden-colored dog wearing a pink floral bandana"
                  width={2048}
                  height={1536}
                  sizes="(max-width: 1024px) 90vw, 448px"
                  className="w-full object-cover"
                />
              </div>
              <div className="absolute -right-4 -bottom-5 rotate-2 rounded-2xl bg-honey px-5 py-3 font-hand text-xl text-white shadow-lift sm:text-2xl">
                handmade bandanas &amp; bows 🐾
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="font-hand text-2xl text-honey">How it works</p>
            <h2 className="text-balance mt-2 font-display text-3xl leading-tight font-semibold sm:text-4xl">
              “Every client has a mental image of the end result.”
            </h2>
            <p className="mt-5 leading-relaxed text-plum-light">{CONSULTATION_COPY}</p>
            <p className="mt-4 leading-relaxed text-plum-light">
              Every groom is built around the dog in front of us — their coat, their age, and how
              they feel about the whole business.
            </p>
            <Link
              href="/about"
              className="mt-7 inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-6 py-3 text-sm font-extrabold transition hover:border-honey hover:text-honey"
            >
              Meet the groomers <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── Before & after ───────────────────────────────────── */}
      <section className="bg-sand/60 py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <p className="font-hand text-2xl text-honey-deep">Before &amp; after</p>
            <h2 className="text-balance font-display text-3xl font-semibold sm:text-4xl">
              Drag to see the difference
            </h2>
            <p className="mt-4 max-w-md leading-relaxed text-ink-soft">
              Real dogs, real appointments — photographed on the table at the salon. Grab the
              handle and pull.
            </p>
          </Reveal>
          <div className="mx-auto grid w-full max-w-xl gap-8 sm:grid-cols-2">
            {TRANSFORMATIONS.map((t, i) => (
              <Reveal key={t.id} delay={i * 0.12}>
                <BeforeAfter before={t.before} after={t.after} label={t.label} note={t.note} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery marquee ──────────────────────────────────── */}
      <section className="bg-cream py-16">
        <Reveal className="mx-auto mb-8 max-w-6xl px-6 text-center">
          <p className="font-hand text-2xl text-honey-deep">Fresh off the table</p>
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            The good boys &amp; girls club
          </h2>
        </Reveal>
        <PhotoMarquee photos={PHOTOS} />
        <Reveal className="mt-8 text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 rounded-full bg-plum-deep px-7 py-3.5 text-sm font-extrabold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-plum-ink"
          >
            Visit the full gallery <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </section>

      {/* ── Testimonials ─────────────────────────────────────── */}
      <section className="bg-sand/60 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="mb-8 text-center">
            <p className="font-hand text-2xl text-honey-deep">What people say</p>
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">
              {BUSINESS.rating} stars from {BUSINESS.reviewCount} Google reviews
            </h2>
          </Reveal>
          <TestimonialCarousel reviews={REVIEWS.slice(0, 8)} />
          <Reveal className="mt-8 text-center">
            <Link
              href="/reviews"
              className="inline-flex items-center gap-1.5 rounded-full bg-white px-5 py-2.5 text-sm font-extrabold text-plum-deep shadow-soft transition hover:text-honey-deep"
            >
              Read all reviews <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── CTA band ─────────────────────────────────────────── */}
      <section className="bg-cream py-16">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] bg-plum-deep px-8 py-12 text-center text-white shadow-lift sm:px-16">
              <PawPrint className="absolute -top-6 left-8 h-24 w-24 rotate-12 text-white/10" />
              <PawPrint className="absolute right-10 -bottom-8 h-28 w-28 -rotate-6 text-white/10" />
              <h2 className="text-balance font-display text-3xl font-semibold sm:text-4xl">
                Ready for a spa day?
              </h2>
              <p className="text-balance mx-auto mt-3 max-w-xl text-plum-mist">
                To schedule an appointment, give us a call — we look forward to working with you!{" "}
                {BUSINESS.hours}.
              </p>
              <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href={BUSINESS.phoneHref}
                  className="inline-flex items-center gap-2 rounded-full bg-honey px-9 py-4 text-base font-extrabold text-white shadow-lift transition hover:-translate-y-0.5 hover:bg-honey-deep"
                >
                  <Phone className="h-5 w-5" /> Call {BUSINESS.phone}
                </a>
                <Link
                  href="/book"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-8 py-[14px] text-base font-extrabold transition hover:border-white hover:bg-white/10"
                >
                  Request an appointment <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
              <p className="text-balance mx-auto mt-6 max-w-2xl text-sm text-plum-light">
                {BUSINESS.addressFull} · {DIRECTIONS_BLURB.split(" — ")[0]}.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
