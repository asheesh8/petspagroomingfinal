import { MapPin, Phone } from "lucide-react";
import { BUSINESS } from "@/lib/site";

/** Persistent thumb-reach actions. The salon books by phone, so a call should
 *  never be more than one tap away on a phone. */
export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-plum-mist bg-cream/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md md:hidden">
      <a
        href={BUSINESS.phoneHref}
        className="flex items-center justify-center gap-2 bg-honey py-4 text-sm font-extrabold text-white"
      >
        <Phone className="h-4 w-4" />
        Call to book
      </a>
      <a
        href={BUSINESS.mapsUrl}
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-center gap-2 py-4 text-sm font-extrabold text-plum-deep"
      >
        <MapPin className="h-4 w-4" />
        Directions
      </a>
    </div>
  );
}
