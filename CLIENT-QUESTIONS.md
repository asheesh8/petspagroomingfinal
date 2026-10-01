# Questions for the client before launch

Everything on the site comes from the client's original site
(petspaandgrooming.com), published Google reviews, or the Google Business
listing. These are the places where those sources contradict each other or
run out. None of them were guessed at.

## Resolved since the last build

- **Payment options.** The old contact page shows its "Payment Options" as
  icons, not text, which is why the previous build saw an empty heading. The
  icons are **Visa, MasterCard, Discover, Debit, Cash and Check**. They now
  appear on the Contact page, the Book page, the footer and in the structured
  data. Ask the client to confirm the list is still current.
- **Map pin.** The previous build's structured data put the salon about 2 km
  off. It now uses the coordinates of the Google Maps pin.

## 1. Is it 40 years or 50 years of combined experience?

The original site says both:

- **"Over 40 years of combined experience"** on the home page and the About page
- **"over 50 years of combined expertise"** in the home page "Who We Are" block

The site leads with **40**, the conservative number. Once the real figure is
confirmed, it's a one-line change (`yearsCombined` in `src/lib/site.ts`).

## 2. Do you still groom cats?

- The original About page says *"Keep your dog **or cat** looking sharp"*
- The headline, navigation and service page are all **dog**-only
- One Google reviewer wrote *"Not accepting cats… you should remove it from
  services you offer"*
- Third-party directories (Seven Days, Vetster) still list "dogs and cats"

**The site is dog-only.** If they do still take cats, it's easy to add back.

## 3. Team roles and bios

Confirmed team: **Jennifer, Melinda, Alberta, Myah and Ashley**. Only
Jennifer has a published bio. Please send:

- A short bio for Melinda (reviewers call her "Mindy")
- Short bios for Alberta, Myah and Ashley
- The correct roles for Myah and Ashley
- Ideally a photo of each groomer

## 4. Sheila

The old home page still says the salon is run by "two stylists, Sheila and
Jennifer", and Vetster lists Sheila as a co-owner. The About page, recent
reviews and the confirmed team list don't mention her. The site doesn't name
her. Please confirm, and if she has retired, the old home page copy and
directory listings should be updated.

## 5. Where should booking requests go?

The `/book` form currently turns the request into a summary the customer can
read out on the phone or copy. Nothing is sent anywhere, because the business
has no published email address. To have requests arrive on their own, we need
an email address for the salon or a form endpoint (Formspree, Resend, etc.).

## 6. Hours

The site still shows only **"By appointment only"**. Google shows "Add hours".
The Seven Days directory lists **11am–9pm daily**, which looks wrong and
should be fixed at the source. Even rough phone hours would help.

## 7. Hero video

The home page hero uses the looping grooming clip from the template. It's
generic footage, not this salon. A 10–15 second phone clip of a groom at the
salon would be a big upgrade. Put it at `public/hero-groom.mp4` (and `.webm`)
and regenerate the poster and last frame.

## 8. Photography

The original photos max out around 640px, so the layout avoids showing them
any larger. A dozen recent iPhone photos of finished grooms would let the
gallery and service cards open up.

## 9. Google Business Profile

The listing shows "Own this business?" and has no hours. Claiming it and
adding hours, photos and the new website link is the most valuable hour of
work available here, separate from the site itself.
