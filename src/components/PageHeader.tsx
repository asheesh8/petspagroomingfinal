import { Reveal } from "./Reveal";

/** The sand-colored title band that opens every inner page. */
export function PageHeader({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <section className="bg-sand/60 py-14">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <Reveal>
          <p className="font-hand text-2xl text-honey-deep">{eyebrow}</p>
          <h1 className="text-balance font-display text-4xl font-semibold sm:text-5xl">{title}</h1>
          {lede && <p className="text-balance mx-auto mt-4 max-w-2xl text-ink-soft">{lede}</p>}
          {children}
        </Reveal>
      </div>
    </section>
  );
}
