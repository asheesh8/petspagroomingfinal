export function PawPrint({
  className = "",
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style} aria-hidden>
      <ellipse cx="7.2" cy="8.6" rx="2" ry="2.7" transform="rotate(-18 7.2 8.6)" />
      <ellipse cx="12" cy="6.8" rx="2" ry="2.8" />
      <ellipse cx="16.8" cy="8.6" rx="2" ry="2.7" transform="rotate(18 16.8 8.6)" />
      <path d="M12 11.2c-2.9 0-5.4 2.2-5.4 4.7 0 1.6 1.2 2.6 2.7 2.6 1 0 1.8-.4 2.7-.4s1.7.4 2.7.4c1.5 0 2.7-1 2.7-2.6 0-2.5-2.5-4.7-5.4-4.7Z" />
    </svg>
  );
}

/** A loose diagonal trail of paw prints for section backgrounds. */
export function PawTrail({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none select-none ${className}`} aria-hidden>
      {[0, 1, 2, 3].map((i) => (
        <PawPrint
          key={i}
          className={`absolute h-7 w-7 ${i % 2 ? "rotate-[24deg]" : "-rotate-[12deg]"}`}
          style={{ left: `${i * 34}px`, top: `${i * 30}px` }}
        />
      ))}
    </div>
  );
}
