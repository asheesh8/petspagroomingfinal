"use client";

import Image from "next/image";
import { useId, useState } from "react";
import { MoveHorizontal } from "lucide-react";

type Panel = { src: string; w: number; h: number };

/** Drag-to-compare. The control is a real range input stretched over the
 *  image, so pointer, touch and keyboard all work without extra handling. */
export function BeforeAfter({
  before,
  after,
  label,
  note,
}: {
  before: Panel;
  after: Panel;
  label: string;
  note: string;
}) {
  const [value, setValue] = useState(50);
  const id = useId();

  return (
    <figure className="group">
      <div className="relative overflow-hidden rounded-3xl bg-plum-mist shadow-soft transition group-hover:shadow-lift">
        <div className="relative" style={{ aspectRatio: `${before.w} / ${before.h}` }}>
          {/* after = the full-width base layer */}
          <Image
            src={after.src}
            alt={`${label} after grooming`}
            fill
            sizes="(max-width: 640px) 90vw, 320px"
            className="object-cover"
          />

          {/* before = clipped from the left by the slider */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}
          >
            <Image
              src={before.src}
              alt={`${label} before grooming`}
              fill
              sizes="(max-width: 640px) 90vw, 320px"
              className="object-cover"
            />
          </div>

          {/* seam + handle */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 w-0.5 bg-white/90"
            style={{ left: `${value}%`, transform: "translateX(-50%)" }}
          >
            <span className="absolute top-1/2 left-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-honey text-white shadow-lift">
              <MoveHorizontal className="h-5 w-5" />
            </span>
          </div>

          <span className="pointer-events-none absolute bottom-3 left-3 rounded-full bg-plum-ink/70 px-3 py-1 text-[11px] font-extrabold tracking-wide text-white uppercase backdrop-blur-sm">
            Before
          </span>
          <span className="pointer-events-none absolute right-3 bottom-3 rounded-full bg-plum-ink/70 px-3 py-1 text-[11px] font-extrabold tracking-wide text-white uppercase backdrop-blur-sm">
            After
          </span>

          <label htmlFor={id} className="sr-only">
            Compare {label} before and after grooming
          </label>
          <input
            id={id}
            type="range"
            min={0}
            max={100}
            step={0.5}
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
            className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
          />
        </div>
      </div>

      <figcaption className="mt-4 text-center">
        <span className="block font-display text-lg font-semibold">{label}</span>
        <span className="mt-1 block text-sm leading-snug text-ink-soft">{note}</span>
      </figcaption>
    </figure>
  );
}
