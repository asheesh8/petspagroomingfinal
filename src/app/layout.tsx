import type { Metadata } from "next";
import { Fraunces, Nunito, Caveat } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MobileCallBar } from "@/components/MobileCallBar";
import { BUSINESS, PAYMENT_METHODS, SERVICE_AREA } from "@/lib/site";
import "./globals.css";

const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces" });

const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito" });

const caveat = Caveat({ subsets: ["latin"], variable: "--font-caveat" });

const SITE_URL = "https://petspaandgrooming.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${BUSINESS.name} — Dog Grooming in Colchester, VT`,
    template: `%s · ${BUSINESS.name}`,
  },
  description: `Over ${BUSINESS.yearsCombined} years of combined experience. ${BUSINESS.name} is a quiet, clean and intimate dog grooming salon at ${BUSINESS.neighborhood} in Colchester, Vermont. Call ${BUSINESS.phone}.`,
  keywords: [
    "dog grooming Colchester VT",
    "pet grooming Burlington Vermont",
    "dog groomer Chittenden County",
    "Fort Ethan Allen dog grooming",
  ],
  openGraph: {
    type: "website",
    siteName: BUSINESS.name,
    url: SITE_URL,
    title: `${BUSINESS.name} — Dog Grooming in Colchester, VT`,
    description: `A quiet, clean and intimate dog grooming salon at ${BUSINESS.neighborhood}. Over ${BUSINESS.yearsCombined} years of combined experience.`,
    images: [{ url: "/images/golden-dog-pink-floral-bandana.webp", width: 2048, height: 1536 }],
  },
  alternates: { canonical: "/" },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
};

/** LocalBusiness structured data — this is a search-driven business, so the
 *  NAP details and rating need to be machine-readable. */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "PetGroomer",
  name: BUSINESS.name,
  url: SITE_URL,
  telephone: BUSINESS.phone,
  image: `${SITE_URL}/images/golden-dog-pink-floral-bandana.webp`,
  address: {
    "@type": "PostalAddress",
    streetAddress: BUSINESS.address,
    addressLocality: BUSINESS.city,
    addressRegion: BUSINESS.state,
    postalCode: BUSINESS.zip,
    addressCountry: "US",
  },
  geo: { "@type": "GeoCoordinates", latitude: BUSINESS.geo.lat, longitude: BUSINESS.geo.lng },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: BUSINESS.rating,
    reviewCount: BUSINESS.reviewCount,
  },
  paymentAccepted: PAYMENT_METHODS.join(", "),
  areaServed: SERVICE_AREA.map((name) => ({ "@type": "City", name })),
  sameAs: [BUSINESS.facebookUrl],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${fraunces.variable} ${nunito.variable} ${caveat.variable}`}>
      <body className="grain flex min-h-dvh flex-col pb-[3.4rem] antialiased md:pb-0">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-cream focus:px-5 focus:py-3 focus:font-bold focus:text-plum-ink"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="grow">
          {children}
        </main>
        <Footer />
        <MobileCallBar />
      </body>
    </html>
  );
}
