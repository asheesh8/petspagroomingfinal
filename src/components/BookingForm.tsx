"use client";

import { useMemo, useRef, useState } from "react";
import { motion } from "motion/react";
import { Bath, Check, Copy, Phone, Scissors, Send, Sparkles } from "lucide-react";
import { BUSINESS, BOOKING_SERVICES, COAT_TYPES, TIME_WINDOWS } from "@/lib/site";
import { PawPrint } from "./PawPrint";

const FLAGS = [
  { id: "first", label: "First groom" },
  { id: "senior", label: "Senior dog" },
  { id: "nervous", label: "Nervous about grooming" },
  { id: "matted", label: "Coat is matted" },
] as const;

const ICONS = { scissors: Scissors, bath: Bath, sparkles: Sparkles } as const;

type ServiceId = (typeof BOOKING_SERVICES)[number]["id"];

/**
 * An appointment *request*, not a booking — the salon confirms everything by
 * phone ("by appointment only").
 *
 * There is no backend and no published email address for the business, so on
 * submit the form assembles the request into a summary the customer can read
 * out or copy, rather than posting it somewhere it would be silently lost. See
 * CLIENT-QUESTIONS.md for wiring it to a real inbox.
 */
export function BookingForm() {
  const [service, setService] = useState<ServiceId>(BOOKING_SERVICES[0].id);
  const [flags, setFlags] = useState<string[]>([]);
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);
  const [data, setData] = useState<Record<string, string>>({});
  const topRef = useRef<HTMLDivElement>(null);

  const toggleFlag = (id: string) =>
    setFlags((v) => (v.includes(id) ? v.filter((f) => f !== id) : [...v, id]));

  const summary = useMemo(() => {
    const svc = BOOKING_SERVICES.find((s) => s.id === service);
    const lines = [
      `Appointment request — ${svc?.name ?? ""}`,
      "",
      `Owner:    ${data.owner || "—"}`,
      `Phone:    ${data.phone || "—"}`,
      data.email ? `Email:    ${data.email}` : "",
      "",
      `Dog:      ${data.pet || "—"}`,
      `Breed:    ${data.breed || "—"}`,
      `Coat:     ${data.coat || "—"}`,
      "",
      `Preferred: ${data.date || "—"}${data.window ? ` · ${data.window}` : ""}`,
      flags.length
        ? `Notes:    ${flags.map((f) => FLAGS.find((x) => x.id === f)?.label).join(", ")}`
        : "",
      data.notes ? `\n${data.notes}` : "",
    ];
    return lines.filter((l) => l !== "").join("\n");
  }, [service, data, flags]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setData(Object.fromEntries([...fd.entries()].map(([k, v]) => [k, String(v)])));
    setSent(true);
    requestAnimationFrame(() =>
      topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }),
    );
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(summary);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div ref={topRef} className="scroll-mt-24">
      {sent ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          className="rounded-3xl bg-white p-7 shadow-soft sm:p-10"
        >
          <div className="flex items-center gap-4">
            <motion.div
              initial={{ rotate: -12, scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 220, damping: 14, delay: 0.1 }}
              className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-honey/15"
            >
              <PawPrint className="h-7 w-7 text-honey-deep" />
            </motion.div>
            <div>
              <h3 className="font-display text-2xl font-semibold text-ink">
                One call and you&apos;re booked
              </h3>
              <p className="text-sm text-ink-soft">
                Nothing is reserved until the salon confirms it with you.
              </p>
            </div>
          </div>

          <p className="mt-6 leading-relaxed text-ink-soft">
            We book by phone, so here are your details — give us a call and read them out, or
            copy them across.
          </p>

          <pre className="mt-5 overflow-x-auto rounded-2xl bg-sand/70 p-5 font-sans text-sm leading-relaxed whitespace-pre-wrap text-ink">
            {summary}
          </pre>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center gap-2 rounded-full bg-honey px-6 py-3.5 text-sm font-extrabold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-honey-deep"
            >
              <Phone className="h-4 w-4" />
              Call {BUSINESS.phone}
            </a>
            <button
              type="button"
              onClick={copy}
              className="inline-flex items-center gap-2 rounded-full border-2 border-plum-mist px-6 py-3 text-sm font-extrabold text-plum-deep transition hover:border-plum"
            >
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              {copied ? "Copied" : "Copy details"}
            </button>
            <button
              type="button"
              onClick={() => setSent(false)}
              className="px-3 py-3 text-sm font-bold text-ink-soft underline underline-offset-4 transition hover:text-plum-deep"
            >
              Edit
            </button>
          </div>
        </motion.div>
      ) : (
        <form onSubmit={onSubmit} className="space-y-5 rounded-3xl bg-white p-6 shadow-soft sm:p-8">
          <fieldset>
            <legend className="field-label">What does your dog need?</legend>
            <div className="grid gap-3 sm:grid-cols-3">
              {BOOKING_SERVICES.map((s) => {
                const Icon = ICONS[s.icon];
                const on = service === s.id;
                return (
                  <label
                    key={s.id}
                    className={`flex cursor-pointer items-center gap-3 rounded-xl border-2 px-4 py-3 transition has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-honey/50 ${
                      on
                        ? "border-honey bg-honey/10 text-honey-deep"
                        : "border-plum-mist text-ink-soft hover:border-plum"
                    }`}
                  >
                    <input
                      type="radio"
                      name="service"
                      value={s.name}
                      checked={on}
                      onChange={() => setService(s.id)}
                      className="sr-only"
                    />
                    <Icon className="h-5 w-5 shrink-0" />
                    <span className="leading-tight">
                      <span className="block text-sm font-bold">{s.name}</span>
                      <span className="block text-xs opacity-75">{s.blurb}</span>
                    </span>
                  </label>
                );
              })}
            </div>
          </fieldset>

          <div className="grid gap-5 sm:grid-cols-3">
            <Field label="Your name *" name="owner" required autoComplete="name" />
            <Field
              label="Phone *"
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              placeholder="(802) 555-0123"
            />
            <Field
              label="Email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
            />
          </div>

          <div className="grid gap-5 sm:grid-cols-3">
            <Field label="Dog's name *" name="pet" required placeholder="Mozzie" />
            <Field label="Breed / size" name="breed" placeholder="Goldendoodle, 55 lb" />
            <Select label="Coat" name="coat" options={COAT_TYPES} />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="field-label" htmlFor="date">
                Preferred date
              </label>
              <input id="date" name="date" type="date" className="field" />
            </div>
            <Select label="Preferred time" name="window" options={TIME_WINDOWS} />
          </div>

          <fieldset>
            <legend className="field-label">Anything we should know?</legend>
            <div className="flex flex-wrap gap-2">
              {FLAGS.map((f) => {
                const on = flags.includes(f.id);
                return (
                  <button
                    key={f.id}
                    type="button"
                    onClick={() => toggleFlag(f.id)}
                    aria-pressed={on}
                    className={`rounded-full border-2 px-4 py-2 text-sm font-bold transition ${
                      on
                        ? "border-plum-deep bg-plum-deep text-white"
                        : "border-plum-mist text-ink-soft hover:border-plum"
                    }`}
                  >
                    {f.label}
                  </button>
                );
              })}
            </div>
          </fieldset>

          <div>
            <label className="field-label" htmlFor="notes">
              Care notes
            </label>
            <textarea
              id="notes"
              name="notes"
              rows={3}
              className="field resize-none"
              placeholder="Allergies, the cut you have in mind, how they feel about the dryer…"
            />
          </div>

          <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
            <button
              type="submit"
              className="flex items-center justify-center gap-2 rounded-xl bg-honey px-6 py-4 text-base font-extrabold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-honey-deep hover:shadow-lift"
            >
              <Send className="h-5 w-5" />
              Review my request
            </button>
            <a
              href={BUSINESS.phoneHref}
              className="flex items-center justify-center gap-2 rounded-xl border-2 border-plum-mist px-6 py-4 text-base font-extrabold text-plum-deep transition hover:border-plum"
            >
              <Phone className="h-5 w-5" />
              Call instead
            </a>
          </div>
          <p className="text-center text-xs text-ink-soft/70">
            We confirm every appointment personally by phone — nothing is booked until you speak
            with us.
          </p>
        </form>
      )}
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label className="field-label" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="field"
      />
    </div>
  );
}

function Select({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: readonly string[];
}) {
  return (
    <div>
      <label className="field-label" htmlFor={name}>
        {label}
      </label>
      <select id={name} name={name} defaultValue="" className="field">
        <option value="">Not sure</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
