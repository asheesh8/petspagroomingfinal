/**
 * The client's poodle mark. The only copy of it that exists is an 85x100 PNG
 * from the old site, so it was re-traced to vector (see client-assets/
 * trace-logo.py) and is painted here through a CSS mask, which lets it take
 * `currentColor` on both the cream and plum backgrounds.
 */
export function PoodleMark({ className = "" }: { className?: string }) {
  return (
    <span
      role="img"
      aria-label="Pet Spa & Grooming"
      className={className}
      style={{
        display: "block",
        aspectRatio: "85 / 100",
        backgroundColor: "currentColor",
        maskImage: "url(/poodle-mark.svg)",
        WebkitMaskImage: "url(/poodle-mark.svg)",
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
        maskPosition: "center",
        WebkitMaskPosition: "center",
        maskSize: "contain",
        WebkitMaskSize: "contain",
      }}
    />
  );
}
