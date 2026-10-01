import { Star } from "lucide-react";

export function Stars({ className = "", size = 14 }: { className?: string; size?: number }) {
  return (
    <span className={`inline-flex gap-0.5 ${className}`} aria-hidden="true">
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i} size={size} className="fill-current" strokeWidth={0} />
      ))}
    </span>
  );
}
