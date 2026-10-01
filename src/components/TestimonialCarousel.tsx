"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Quote } from "lucide-react";
import type { Review } from "@/lib/site";
import { PawPrint } from "./PawPrint";
import { Stars } from "./Stars";

export function TestimonialCarousel({ reviews }: { reviews: Review[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % reviews.length), 7000);
    return () => clearInterval(id);
  }, [paused, reviews.length]);

  const r = reviews[index];

  return (
    <div
      className="relative mx-auto max-w-2xl text-center"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <Quote className="mx-auto mb-4 h-8 w-8 text-honey" />
      <div className="relative min-h-64 sm:min-h-48" aria-live="polite">
        <AnimatePresence mode="wait">
          <motion.figure
            key={index}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.45 }}
          >
            <blockquote className="font-display text-xl leading-relaxed text-ink sm:text-2xl">
              “{r.quote}”{r.truncated ? " …" : ""}
            </blockquote>
            <figcaption className="mt-4 flex flex-col items-center gap-1.5">
              <Stars className="text-honey" size={14} />
              <span className="font-hand text-xl text-plum-deep">
                — {r.author} <span className="text-base text-ink-soft/70">· {r.when} on Google</span>
              </span>
            </figcaption>
          </motion.figure>
        </AnimatePresence>
      </div>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
        {reviews.map((review, i) => (
          <button
            key={review.author}
            onClick={() => setIndex(i)}
            aria-label={`Show review from ${review.author}`}
            aria-current={i === index}
            className="p-1"
          >
            <PawPrint
              className={`h-5 w-5 transition ${
                i === index ? "scale-110 text-honey" : "text-plum-light hover:text-plum"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
