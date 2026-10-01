/**
 * Single source of truth for everything the site says.
 *
 * All copy here is either lifted from petspaandgrooming.com (the client's
 * original Duda site) or is a light rewrite of it. All reviews are real,
 * published Google reviews. Anything the client still needs to confirm is
 * marked CONFIRM: and collected in ../../CLIENT-QUESTIONS.md.
 */

export const BUSINESS = {
  name: "Pet Spa & Grooming",
  tagline: "Dog grooming at its finest",
  phone: "(802) 655-2922",
  phoneHref: "tel:+18026552922",
  address: "142 Hegeman Ave",
  city: "Colchester",
  state: "VT",
  zip: "05446",
  addressFull: "142 Hegeman Ave, Colchester, VT 05446",
  neighborhood: "Fort Ethan Allen",
  hours: "By appointment only",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Pet+Spa+%26+Grooming+142+Hegeman+Ave+Colchester+VT+05446",
  mapsEmbed:
    "https://www.google.com/maps?q=142+Hegeman+Ave,+Colchester,+VT+05446&output=embed",
  reviewsUrl:
    "https://www.google.com/search?q=Pet+Spa+%26+Grooming+Colchester+VT+reviews",
  facebookUrl: "https://www.facebook.com/Pet-Spa-Grooming-117987558242302",
  /** From the Google Maps listing pin. */
  geo: { lat: 44.5076031, lng: -73.1484285 },
  rating: 4.8,
  reviewCount: 50,
  /**
   * CONFIRM: the original site claims "over 40 years" in three places and
   * "over 50 years" in two others. We lead with the conservative number.
   */
  yearsCombined: 40,
} as const;

/** From the payment icons on the original contact page. */
export const PAYMENT_METHODS = ["Visa", "MasterCard", "Discover", "Debit", "Cash", "Check"] as const;

export const SERVICE_AREA = [
  "Burlington",
  "Colchester",
  "South Burlington",
  "Essex",
  "Williston",
  "Winooski",
] as const;

/** Verbatim from the original contact page. */
export const DIRECTIONS_BLURB =
  "Located in the Burlington area at Fort Ethan Allen, just off Route 15, between St. Michael's College and the Champlain Valley Fairgrounds — within a 15–20 minute drive from Burlington, South Burlington, Shelburne, Williston, Essex Junction, Westford, Colchester and Winooski.";

/* ------------------------------------------------------------ services --- */

/** Service list from the original "Dog Grooming" page. Photos are real salon
 *  clients; they illustrate the menu rather than document each service. */
export type Service = {
  slug: string;
  name: string;
  blurb: string;
  tag: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
};

export const SERVICES: Service[] = [
  {
    slug: "salon-bath",
    name: "Salon Bath",
    blurb:
      "A warm, unhurried wash in a quiet room — the start of every full groom, and a service on its own.",
    tag: "Every full groom",
    image: "/images/golden-retriever-table.webp",
    imageAlt: "A golden retriever freshly bathed and blown out on the grooming table",
    featured: true,
  },
  {
    slug: "blueberry-facial",
    name: "Tearless Blueberry Facial",
    blurb:
      "Whitens and brightens around the eyes and muzzle without a single sting. Tearless, always.",
    tag: "Tearless",
    image: "/images/poodle-apricot-front.webp",
    imageAlt: "An apricot poodle with a clean, bright face and rounded topknot",
    featured: true,
  },
  {
    slug: "hydro-massage",
    name: "Hydro Massage",
    blurb:
      "Warm water worked down to the skin — it loosens the coat, lifts the dirt and puts most dogs to sleep.",
    tag: "Relaxing",
    image: "/images/cocker-spaniel-black.webp",
    imageAlt: "A black cocker spaniel with a glossy coat after a classic cocker trim",
    featured: true,
  },
  {
    slug: "deep-conditioning",
    name: "Deep-Conditioning Treatment",
    blurb:
      "For coats that have gone dry, brittle or dull. Left in long enough to actually do something.",
    tag: "Dry coats",
    image: "/images/aussie-brown-white.webp",
    imageAlt: "A red and white australian shepherd sitting on the grooming table",
  },
  {
    slug: "premium-shampoo",
    name: "Premium Shampoo",
    blurb:
      "Including our Greek yogurt formula — chosen for the coat in front of us, not the one on the label.",
    tag: "Greek yogurt",
    image: "/images/honey-plaid-bandana.webp",
    imageAlt: "Honey, a cream dog with a soft, fluffy coat in a plaid bandana",
  },
  {
    slug: "anal-sacs",
    name: "Express Anal Sacs",
    blurb: "Part of a thorough groom. Handled quickly, cleanly and without fuss.",
    tag: "Thorough groom",
    image: "/images/schnauzer-red-bandana.webp",
    imageAlt: "A schnauzer in a red bandana after a breed trim",
  },
  {
    slug: "clean-ears",
    name: "Clean Ears",
    blurb: "Checked and cleaned every visit — the thing owners most often miss.",
    tag: "Every visit",
    image: "/images/yorkie-blue-bandana.webp",
    imageAlt: "A yorkshire terrier in a blue polka-dot bandana",
  },
  {
    slug: "pawdicure",
    name: "Pawdicure",
    blurb:
      "Nails trimmed, pads tidied, feet shaped. Patient hands for dogs who would rather not.",
    tag: "Nails & feet",
    image: "/images/shih-tzu-brown-bandana.webp",
    imageAlt: "A shih tzu in a polka-dot bandana with its tongue out",
  },
  {
    slug: "bandanas-bows",
    name: "Handmade Bandanas & Bows",
    blurb:
      "Custom and hand-made, cut to fit your dog. The part everyone photographs.",
    tag: "Handmade",
    image: "/images/toy-poodle-orange-bandana.webp",
    imageAlt: "An apricot toy poodle in a handmade orange bandana",
    featured: true,
  },
];

/** Verbatim from the original "Dog Grooming" page. */
export const GREEK_YOGURT_COPY =
  "Greek Yogurt Shampoo gently cleans, repairs and nourishes the skin and coat. Greek Yogurt feeds protein to hair follicles allowing water to penetrate deep into the strengthened root, restoring proper moisture. The result is the perfect balance of strength and moisture, exactly what the coat needs to be at its best.";

/** Verbatim from the original "Dog Grooming" page. */
export const CONSULTATION_COPY =
  "Although clients may not know exactly what to ask for in terms of dog grooming, they all have a mental image of the end result. Our talented and experienced stylists have the ability to bring out those expectations by asking questions and taking the time to genuinely listen to their customers' interests.";

/** Lede from the original "Dog Grooming" page. */
export const SERVICES_LEDE =
  "Pamper your favorite pet with dog grooming from our salon in Colchester, Vermont. We offer specialized services that will have your pal looking better than ever.";

/** Adapted from the original home page; the team reference is kept count-neutral. */
export const WHO_WE_ARE = [
  "Give your dog the personalized attention he or she deserves with pet grooming from Pet Spa & Grooming in Colchester, Vermont. For a precise pet grooming experience from a talented team with decades of combined expertise in dog grooming — come to Pet Spa & Grooming.",
  "Our quiet, clean, and intimate pet spa provides a calm and relaxing atmosphere for you and your pet. Your furry companion will feel right at home with us.",
];

/* ---------------------------------------------------------------- team --- */

/** From the original "About Us" page. */
export const TEAM_INTRO =
  "Keep your dog looking sharp and spiffy with services from Pet Spa & Grooming. Our talented stylists have decades of combined expertise in dog grooming.";

export type TeamMember = {
  name: string;
  role: string;
  bio: string[];
};

/**
 * CONFIRM: the original site only publishes Jennifer's biography. Everyone
 * else is kept deliberately brief rather than inventing details.
 */
export const TEAM: TeamMember[] = [
  {
    name: "Jennifer",
    role: "Co-owner & Groomer",
    bio: [
      "Co-owner Jennifer has more than twelve years of experience in professional dog grooming for large and small canines. Before that, she gained two years of experience in pure dog bathing.",
      "Co-owning and working at Pet Spa & Grooming has fulfilled a dream Jennifer has had for many years. She has always enjoyed working with animals, and she truly has a heart for horses. Currently, she owns two horses and is highly skilled in training and grooming them. In addition to horses, Jennifer is the proud owner of five dogs and two cats.",
    ],
  },
  {
    name: "Melinda",
    role: "Co-owner & Groomer",
    // CONFIRM: no published bio for Melinda (clients know her as Mindy).
    bio: [],
  },
  { name: "Alberta", role: "Groomer", bio: [] },
  // CONFIRM: roles for Myah and Ashley.
  { name: "Myah", role: "Team Member", bio: [] },
  { name: "Ashley", role: "Team Member", bio: [] },
];

/* ------------------------------------------------------------- gallery --- */

export type Photo = {
  src: string;
  alt: string;
  w: number;
  h: number;
};

export const PHOTOS: Photo[] = [
  { src: "/images/golden-retriever-table.webp", alt: "A golden retriever freshly groomed and blown out", w: 640, h: 523 },
  { src: "/images/toy-poodle-orange-bandana.webp", alt: "An apricot toy poodle in a handmade orange bandana", w: 325, h: 535 },
  { src: "/images/shih-tzu-brown-bandana.webp", alt: "A shih tzu in a polka-dot bandana with its tongue out", w: 640, h: 424 },
  { src: "/images/yorkie-blue-bandana.webp", alt: "A yorkshire terrier in a blue polka-dot bandana", w: 640, h: 424 },
  { src: "/images/poodle-black-bows.webp", alt: "A black standard poodle with bows in its topknot", w: 520, h: 390 },
  { src: "/images/schnauzer-red-bandana.webp", alt: "A schnauzer in a red bandana after a breed trim", w: 640, h: 424 },
  { src: "/images/aussie-brown-white.webp", alt: "A red and white australian shepherd sitting on the grooming table", w: 480, h: 640 },
  { src: "/images/poodle-apricot-front.webp", alt: "An apricot poodle with a rounded topknot, facing the camera", w: 480, h: 640 },
  { src: "/images/cocker-spaniel-black.webp", alt: "A black cocker spaniel in a classic cocker trim", w: 640, h: 521 },
  { src: "/images/yorkie-plaid-bandana.webp", alt: "A yorkshire terrier in a plaid handmade bandana", w: 310, h: 298 },
  { src: "/images/golden-dog-pink-floral-bandana.webp", alt: "A freshly groomed golden-colored dog wearing a pink floral bandana", w: 2048, h: 1536 },
  { src: "/images/honey-plaid-bandana.webp", alt: "Honey, a cream dog wearing a plaid bandana after her groom", w: 1538, h: 2048 },
];

export const TRANSFORMATIONS = [
  {
    id: "poodle",
    label: "Apricot poodle",
    before: { src: "/images/transform-poodle-before.webp", w: 299, h: 609 },
    after: { src: "/images/transform-poodle-after.webp", w: 297, h: 609 },
    note: "Grown-out curls taken back to a clean, rounded trim.",
  },
  {
    id: "terrier",
    label: "White terrier mix",
    before: { src: "/images/transform-terrier-before.webp", w: 299, h: 612 },
    after: { src: "/images/transform-terrier-after.webp", w: 300, h: 612 },
    note: "Shaggy and overgrown, back to a tidy face and a handmade bandana.",
  },
] as const;

/* ------------------------------------------------------------- reviews --- */

/**
 * Real Google reviews. `when` is kept as the relative label Google displayed
 * when they were collected rather than converted to a date.
 */
export type Review = {
  quote: string;
  author: string;
  when: string;
  truncated?: boolean;
};

export const REVIEWS: Review[] = [
  {
    quote:
      "Mindy is phenomenal. She handles my Goldendoodle with love and care. Mozzie goes in looking pretty shaggy and always comes out looking beautiful. I'm so appreciative to have someone who is understanding of my dog's needs and goes above and beyond.",
    author: "Tami St Marie",
    when: "2 weeks ago",
  },
  {
    quote:
      "Been taking my two Field Golden Retrievers to Alberta here for many years now. I can't recommend a group of people more than this bunch. They are gentle, they love animals, and they truly care deeply about the product they put out. I wouldn't trust my pooches with anyone else or any other company.",
    author: "Stephen Coggio",
    when: "2 months ago",
  },
  {
    quote:
      "We've used Pet Spa grooming for years and I couldn't be happier with the experience. Mindy and her staff are friendly, patient and clearly love dogs. My pup comes out looking adorable with the softest hair ever. I recommend her to anyone looking for caring professional grooming services.",
    author: "Ash K",
    when: "2 weeks ago",
  },
  {
    quote:
      "Alberta has been grooming our Golden Retriever Cooper and she does an awesome job and he looks so good. We get a lot of compliments from people how beautiful he looks. Cooper loves her & she is so gentle & cares about him so much. Highly recommended.",
    author: "Rhonda Leggett Lozell",
    when: "8 months ago",
  },
  {
    quote:
      "Mindy and her team are fantastic! They take such great care of my Goldendoodle, and she always leaves looking gorgeous and perfectly coiffed (and smelling wonderful!). The team there is always friendly.",
    author: "Jennifer Dulin",
    when: "a year ago",
    truncated: true,
  },
  {
    quote:
      "The Best! Jennifer and her team are kind, caring, and thoughtful. Thank you very much for taking care of our baby. Would highly recommend to others!!!",
    author: "Chris O'Grady",
    when: "a year ago",
  },
  {
    quote:
      "THE BEST! Yes they get all the normal review accolades but you can't convey how nice, thoughtful and truly caring they are of my best friend!",
    author: "Tyler Pashby",
    when: "a year ago",
  },
  {
    quote:
      "Mindy is amazing, always happy when I leave. All the employees are so friendly. Highly recommend.",
    author: "Holly Willard",
    when: "11 months ago",
  },
  {
    quote:
      "Jen did an excellent job grooming my Golden Retriever! I am very pleased with how everything turned out and will definitely be going back when my dog is due for another haircut. Thank you so much Jen! Haddie looks great!",
    author: "Charles Keating",
    when: "7 years ago",
  },
  {
    quote:
      "The people are very nice. My dog seemed happy, and she looked well groomed.",
    author: "Kris Chalke",
    when: "2 months ago",
  },
  {
    quote:
      "Jen does an amazing job grooming Daisy. She truly loves what she does and it shows. Highly recommend!!",
    author: "Jen Daudelin",
    when: "3 years ago",
  },
  {
    quote: "Repeat customer and always impressed. 5-stars for beautiful cut, nails and happy dog after!",
    author: "Hope Dorsey",
    when: "3 years ago",
  },
  {
    quote: "Jen did a great job, Ezra looks fantastic and was well taken care of.",
    author: "M Cregan",
    when: "9 months ago",
  },
  {
    quote: "They are great with my dog! We love them!",
    author: "Jane Stru",
    when: "2 years ago",
  },
];

/* ------------------------------------------------------------- booking --- */

/** The three things you can actually ask for. The salon is grooming-only —
 *  no boarding, no daycare. */
export const BOOKING_SERVICES = [
  { id: "full", name: "Full groom", blurb: "Bath, cut, nails, ears", icon: "scissors" },
  { id: "bath", name: "Bath & brush", blurb: "Wash, dry, brush-out", icon: "bath" },
  { id: "tidy", name: "Nails & tidy", blurb: "Quick visit", icon: "sparkles" },
] as const;

export const COAT_TYPES = [
  "Short / smooth",
  "Curly or wooly",
  "Double coat",
  "Long / silky",
  "Overgrown or matted",
] as const;

export const TIME_WINDOWS = ["Morning", "Midday", "Afternoon"] as const;

/* ----------------------------------------------------------- navigation --- */

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
] as const;
