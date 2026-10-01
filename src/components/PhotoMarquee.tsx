import Image from "next/image";
import type { Photo } from "@/lib/site";

/** Slow auto-scrolling film strip of gallery photos (pauses on hover). */
export function PhotoMarquee({ photos }: { photos: Photo[] }) {
  const strip = [...photos, ...photos]; // doubled for a seamless -50% loop
  return (
    <div className="group relative overflow-hidden">
      <div className="animate-marquee flex w-max gap-4 py-2 group-hover:[animation-play-state:paused]">
        {strip.map((photo, i) => (
          <div
            key={`${photo.src}-${i}`}
            aria-hidden={i >= photos.length}
            className={`relative h-44 w-56 shrink-0 overflow-hidden rounded-2xl shadow-soft sm:h-52 sm:w-64 ${
              i % 2 ? "rotate-[1.2deg]" : "-rotate-[1.2deg]"
            }`}
          >
            <Image
              src={photo.src}
              alt={i >= photos.length ? "" : photo.alt}
              fill
              sizes="256px"
              className="object-cover"
            />
          </div>
        ))}
      </div>
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-cream to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-cream to-transparent" />
    </div>
  );
}
