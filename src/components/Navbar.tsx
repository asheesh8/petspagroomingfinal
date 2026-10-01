"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X, CalendarHeart, Phone } from "lucide-react";
import { BUSINESS, NAV } from "@/lib/site";
import { PoodleMark } from "./PoodleMark";

export function Navbar() {
  const pathname = usePathname();
  // Only the home page has a full-bleed hero to sit on top of.
  const solid = pathname !== "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openedAt, setOpenedAt] = useState(pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the route changes.
  if (open && openedAt !== pathname) {
    setOpen(false);
    setOpenedAt(pathname);
  }

  const filled = solid || scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        filled ? "bg-cream/90 shadow-soft backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5" aria-label={`${BUSINESS.name} home`}>
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cream ring-2 ring-white/60">
            <PoodleMark className="h-7 text-plum-deep" />
          </span>
          <span
            className={`font-display text-lg font-semibold tracking-tight transition-colors ${
              filled ? "text-ink" : "text-white"
            }`}
          >
            Pet Spa <span className="font-hand text-xl font-medium opacity-80">&amp; Grooming</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {NAV.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`rounded-full px-3.5 py-2 text-sm font-bold transition-colors ${
                  filled
                    ? active
                      ? "bg-plum-mist text-plum-ink"
                      : "text-ink-soft hover:bg-sand hover:text-ink"
                    : active
                      ? "bg-white/20 text-white"
                      : "text-white/85 hover:bg-white/15 hover:text-white"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
          <a
            href={BUSINESS.phoneHref}
            aria-label={`Call ${BUSINESS.phone}`}
            className={`ml-1 rounded-full p-2.5 transition ${
              filled ? "text-plum-deep hover:bg-plum-mist" : "text-white hover:bg-white/15"
            }`}
          >
            <Phone className="h-4 w-4" />
          </a>
          <Link
            href="/book"
            className="ml-1 inline-flex items-center gap-2 rounded-full bg-honey px-5 py-2.5 text-sm font-extrabold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-honey-deep hover:shadow-lift"
          >
            <CalendarHeart className="h-4 w-4" />
            Book a visit
          </Link>
        </div>

        <button
          className={`rounded-full p-2 transition lg:hidden ${filled ? "text-ink" : "text-white"}`}
          onClick={() => {
            setOpen((v) => !v);
            setOpenedAt(pathname);
          }}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden border-t border-plum-mist/60 bg-cream/95 backdrop-blur-md lg:hidden"
          >
            <div className="space-y-1 px-4 py-4">
              {NAV.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`block rounded-xl px-4 py-3 text-base font-bold ${
                    pathname === l.href ? "bg-plum-mist text-plum-ink" : "text-ink-soft"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
              <div className="grid grid-cols-2 gap-2 pt-2">
                <a
                  href={BUSINESS.phoneHref}
                  className="flex items-center justify-center gap-2 rounded-xl border-2 border-plum-mist px-4 py-3.5 text-base font-extrabold text-plum-deep"
                >
                  <Phone className="h-5 w-5" />
                  Call us
                </a>
                <Link
                  href="/book"
                  className="flex items-center justify-center gap-2 rounded-xl bg-honey px-4 py-3.5 text-base font-extrabold text-white"
                >
                  <CalendarHeart className="h-5 w-5" />
                  Book
                </Link>
              </div>
              <p className="pt-3 text-center text-xs text-ink-soft/70">{BUSINESS.addressFull}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
