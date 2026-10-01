"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { Photo } from "@/lib/site";

/** Responsive photo grid with a built-in lightbox (arrow keys + swipe-ish). */
export function GalleryGrid({ photos }: { photos: Photo[] }) {
  const [active, setActive] = useState<number | null>(null);

  const step = useCallback(
    (dir: 1 | -1) =>
      setActive((a) => (a === null ? a : (a + dir + photos.length) % photos.length)),
    [photos.length],
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, step]);

  return (
    <>
      <div className="columns-2 gap-4 sm:columns-3 [&>*]:mb-4">
        {photos.map((photo, i) => (
          <motion.button
            key={photo.src}
            onClick={() => setActive(i)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            className="group relative block w-full overflow-hidden rounded-2xl shadow-soft focus:outline-none focus-visible:ring-4 focus-visible:ring-honey/50"
            aria-label={`Open photo: ${photo.alt}`}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={photo.w}
              height={photo.h}
              sizes="(max-width: 640px) 50vw, 33vw"
              className="w-full object-cover transition duration-500 group-hover:scale-105"
            />
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active !== null && photos[active] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label="Photo viewer"
            className="fixed inset-0 z-[80] flex items-center justify-center bg-plum-ink/90 p-4 backdrop-blur-sm"
            onClick={() => setActive(null)}
          >
            <button
              className="absolute top-5 right-5 rounded-full bg-white/10 p-2.5 text-white transition hover:bg-white/25"
              aria-label="Close"
              onClick={() => setActive(null)}
            >
              <X className="h-6 w-6" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                step(-1);
              }}
              className="absolute left-3 rounded-full bg-white/10 p-2.5 text-white transition hover:bg-white/25 sm:left-6"
              aria-label="Previous photo"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <motion.figure
              key={active}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="max-h-[85vh] max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={photos[active].src}
                alt={photos[active].alt}
                width={photos[active].w}
                height={photos[active].h}
                sizes="(max-width: 896px) 92vw, 896px"
                className="max-h-[78vh] w-auto rounded-2xl object-contain shadow-lift"
              />
              <figcaption className="mt-3 text-center font-hand text-2xl text-white/90">
                {photos[active].alt}
              </figcaption>
            </motion.figure>
            <button
              onClick={(e) => {
                e.stopPropagation();
                step(1);
              }}
              className="absolute right-3 rounded-full bg-white/10 p-2.5 text-white transition hover:bg-white/25 sm:right-6"
              aria-label="Next photo"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
