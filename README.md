# Pet Spa & Grooming

Website for [Pet Spa & Grooming](https://www.petspaandgrooming.com), a dog
grooming salon at Fort Ethan Allen in Colchester, Vermont.

This build combines two earlier projects:

- **Design, hero and components** come from the Tilly's Sit & Stay Spaw demo
  (`02-Recent-Projects/petspagrooming`, deployed at petspagrooming.vercel.app).
  That includes the looping video hero, the Fraunces/Nunito/Caveat type, the
  card and section system, the photo marquee, the testimonial carousel and the
  gallery lightbox. The palette is re-tinted from Tilly's slate blue to the
  plum of this client's poodle logo. The honey accent is unchanged.
- **Content** comes from the client build (`PetSpa&Grooming`, deployed at
  pet-spa-grooming.vercel.app): copy, services, team, real Google reviews,
  photos, the before/after sliders and the phone-first booking form. It's
  supplemented with what the old site and Google listing add: payment methods,
  the precise map pin and the Facebook page.

Next.js 16 (App Router) + Tailwind CSS 4. Every route is statically
prerendered. There is no database and no backend. The site's only conversion
is a phone call.

**Live:** https://petspagroomingfinal.vercel.app

## Pages

| Route | What it is |
|---|---|
| `/` | Video hero, promise cards, featured services, consultation, before/afters, photo marquee, review carousel, call-to-book band |
| `/services` | All 9 services, Greek yogurt shampoo, consultation |
| `/gallery` | Photo grid with keyboard-navigable lightbox, before/afters |
| `/about` | The salon, the team, values |
| `/reviews` | All 14 published Google reviews |
| `/contact` | Address, phone, hours, payment options, directions, map, service area |
| `/book` | Appointment request form that builds a summary for the booking call |

`/dog-grooming`, `/about-us` and `/contact-us` (old Duda URLs) and `/grooming`
(previous build) permanently redirect to their new pages (see
`next.config.ts`).

## Content

`src/lib/site.ts` is the single source of truth for business details,
services, team, photos and reviews. Edit that file, not the pages. Open
questions for the client are in [CLIENT-QUESTIONS.md](CLIENT-QUESTIONS.md).

## Local development

```bash
npm install
npm run dev
```

Production check:

```bash
npm run build && npm run lint
```

## Deployment

Vercel with zero config. The Next.js app is at the repository root, and no
environment variables are needed.
