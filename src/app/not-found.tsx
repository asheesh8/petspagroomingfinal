import Link from "next/link";
import { PawPrint } from "@/components/PawPrint";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center pt-16">
      <div className="px-6 text-center">
        <div className="mx-auto mb-6 flex justify-center gap-2 text-plum">
          {[0, 1, 2].map((i) => (
            <PawPrint key={i} className={`h-8 w-8 ${i % 2 ? "rotate-12" : "-rotate-12"}`} />
          ))}
        </div>
        <h1 className="font-display text-4xl font-semibold">This page ran off leash</h1>
        <p className="mx-auto mt-3 max-w-md text-ink-soft">
          We looked everywhere — under the tub, behind the treat jar. It&apos;s just not here.
        </p>
        <Link
          href="/"
          className="mt-7 inline-block rounded-full bg-honey px-8 py-3.5 text-sm font-extrabold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-honey-deep"
        >
          Back to the spa
        </Link>
      </div>
    </div>
  );
}
