import type { Metadata } from "next";
import Image from "next/image";
import { Ear, Phone, Scissors, Sparkles } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { PageHeader } from "@/components/PageHeader";
import { PawPrint } from "@/components/PawPrint";
import { BUSINESS, TEAM, TEAM_INTRO, WHO_WE_ARE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description: `Meet the groomers behind Pet Spa & Grooming in Colchester, Vermont — over ${BUSINESS.yearsCombined} years of combined experience in a quiet, clean and intimate salon.`,
  alternates: { canonical: "/about" },
};

const VALUES = [
  {
    icon: Sparkles,
    title: "Quiet, clean & intimate",
    text: "A calm and relaxing atmosphere — not a noisy warehouse. Your furry companion will feel right at home.",
  },
  {
    icon: Ear,
    title: "Personalized attention",
    text: "We ask questions and genuinely listen, so the dog that walks out matches the picture in your head.",
  },
  {
    icon: Scissors,
    title: "Large and small canines",
    text: "From toy poodles to field goldens — experienced hands for every size, coat and temperament.",
  },
];

export default function AboutPage() {
  const owners = TEAM.filter((m) => m.role.startsWith("Co-owner"));
  const crew = TEAM.filter((m) => !m.role.startsWith("Co-owner"));

  return (
    <div className="pt-16">
      <PageHeader eyebrow="Our story" title="Meet our expert groomers" lede={TEAM_INTRO} />

      <section className="py-14">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
          <Reveal>
            <div className="relative mx-auto max-w-md">
              <div className="overflow-hidden rounded-3xl shadow-lift">
                <Image
                  src="/images/poodle-black-bows.webp"
                  alt="A black standard poodle with bows in its topknot"
                  width={520}
                  height={390}
                  sizes="(max-width: 1024px) 90vw, 448px"
                  className="w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -left-4 -rotate-2 rounded-2xl bg-plum-deep px-5 py-3 font-hand text-xl text-white shadow-lift">
                at {BUSINESS.neighborhood}, Colchester 🐾
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="font-hand text-2xl text-honey-deep">The salon</p>
            <h2 className="font-display text-3xl font-semibold">
              A quiet, clean and intimate pet spa
            </h2>
            <div className="mt-4 space-y-4 leading-relaxed text-ink-soft">
              {WHO_WE_ARE.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
              <p>
                Located at {BUSINESS.neighborhood} in {BUSINESS.city}, and grooming dogs from across
                Chittenden County for decades.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Team */}
      <section className="bg-sand/60 py-14">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="mb-10 text-center">
            <p className="font-hand text-2xl text-honey-deep">The team</p>
            <h2 className="text-balance font-display text-3xl font-semibold sm:text-4xl">
              {TEAM.slice(0, -1)
                .map((m) => m.name)
                .join(", ")}{" "}
              &amp; {TEAM.at(-1)?.name}
            </h2>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2">
            {owners.map((member, i) => (
              <Reveal key={member.name} delay={i * 0.1}>
                <article className="h-full rounded-3xl bg-white p-7 shadow-soft sm:p-8">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-honey/15 font-display text-2xl font-semibold text-honey-deep">
                      {member.name[0]}
                    </div>
                    <div>
                      <h3 className="font-display text-2xl font-semibold">{member.name}</h3>
                      <p className="text-xs font-extrabold tracking-wide text-plum uppercase">
                        {member.role}
                      </p>
                    </div>
                  </div>
                  <div className="mt-5 space-y-3 text-sm leading-relaxed text-ink-soft">
                    {member.bio.length > 0 ? (
                      member.bio.map((p) => <p key={p.slice(0, 24)}>{p}</p>)
                    ) : (
                      <p>
                        Co-owner and groomer at Pet Spa &amp; Grooming, working alongside{" "}
                        {owners[0].name} to keep every appointment calm, careful and unhurried.
                      </p>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {crew.map((member, i) => (
              <Reveal key={member.name} delay={i * 0.1}>
                <article className="flex h-full items-center gap-4 rounded-3xl bg-white p-6 shadow-soft">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-plum-mist font-display text-xl font-semibold text-plum-deep">
                    {member.name[0]}
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold">{member.name}</h3>
                    <p className="text-xs font-extrabold tracking-wide text-plum uppercase">
                      {member.role}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 sm:grid-cols-3">
            {VALUES.map((value, i) => (
              <Reveal key={value.title} delay={i * 0.1}>
                <div className="h-full rounded-3xl bg-white p-7 text-center shadow-soft">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-honey/15 text-honey-deep">
                    <value.icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-display text-xl font-semibold">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{value.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] bg-plum-deep px-8 py-12 text-center text-white shadow-lift sm:px-16">
              <PawPrint className="absolute -top-6 left-8 h-24 w-24 rotate-12 text-white/10" />
              <PawPrint className="absolute right-10 -bottom-8 h-28 w-28 -rotate-6 text-white/10" />
              <h2 className="text-balance mx-auto max-w-2xl font-display text-3xl font-semibold sm:text-4xl">
                Introduce your dog to some new and caring friends
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
