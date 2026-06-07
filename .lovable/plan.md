
# Personal Brand Site — Realtor & Loan Officer

A 7-page, fully responsive marketing site in a strict gray & white palette, with Supabase powering a small backend so you can add/edit/delete featured listings yourself.

## Heads-up on the About page

The Wix link you shared (`princeagrawal8118.wixsite.com/.../about`) is a personal bio for an engineer / social-impact advocate from Nepal — not real-estate content. I'll port its layout and copy faithfully (intro, three "Representation on Global Stage" cards: AFS Youth Assembly, International Congress of Youth Voices, Asian Science Camp 2016, plus the hero portrait + supporting photos pulled from the Wix page). If that's a brand mismatch with the realtor positioning, tell me and I'll write a realtor/loan-officer bio instead.

## Backend: Supabase

I'll enable Supabase (Lovable's managed Supabase integration — same Postgres, Auth, Storage, RLS you'd get from Supabase directly; no separate account needed). Access pattern follows the TanStack Start rules: `createServerFn` for app-internal reads/writes, `requireSupabaseAuth` middleware for admin mutations, admin client only inside `.handler()` bodies.

### Schema (one migration)

- `listings` — id, title, address, city, state, zip, price (numeric), beds, baths, sqft, status enum (`for_sale` | `pending` | `just_sold`), description, cover_image_url, gallery (text[]), featured (bool), created_at.
- `contact_messages` — id, name, email, phone, message, created_at.
- `app_role` enum (`admin`, `user`) + `user_roles` table + `has_role()` security-definer function (roles never stored on profiles, per platform rules).
- Storage bucket `listing-images` — public read, admin write.

### RLS

- `listings`: public SELECT; INSERT/UPDATE/DELETE only if `has_role(auth.uid(), 'admin')`.
- `contact_messages`: public INSERT; SELECT admin-only.
- `user_roles`: authenticated SELECT own row; admin-only writes.
- Explicit `GRANT`s on every new table per platform rules.

### Admin flow

- `/auth` — email + password sign-in (email confirmation off so you can get in fast).
- `_authenticated/admin/listings` — gated route under the integration-managed `_authenticated` layout. Table view with create / edit drawer (form + image upload to the bucket) and delete confirm.
- I'll include a one-line SQL snippet so you can promote your first signup to `admin`.

## Design system

- Palette tokens in `src/styles.css` (oklch):
  - `--background` #FFFFFF, `--muted` #F7F7F7, `--border` slate gray, `--foreground` #222222, `--primary` #222222 with white text. No pure black.
- Typography: serif display (Fraunces) + clean grotesk (Inter Tight) loaded via `<link>` in `__root.tsx`, sizes with `clamp()` so headlines never break on mobile.
- Surfaces: 1px gray borders, soft shadows on cards, subtle texture on section dividers, generous whitespace.
- Mobile-first: every grid collapses to one column; nav becomes a sheet hamburger; tap targets ≥44px; testimonials swipeable on mobile; form buttons full-width.
- Restrained motion: section fade/slide on enter, card hover lift.
- Imagery: neutral grayscale placeholders (you can swap later).

## Pages & routes

```
/                       Home
/listings               Featured Listings (DB-driven grid)
/listings/$id           Listing detail
/services               Buying, Selling, Financing pillars
/testimonials           Masonry desktop / swipe carousel mobile
/contact                Split layout + form (writes to DB)
/about                  Ported from the Wix page you linked
/articles               Blog feed (static placeholders)
/auth                   Sign in
/_authenticated/admin/listings   Admin CRUD
```

Public nav: Home · Listings · Services · About · Testimonials · Articles · Contact.

## Per-page layouts & copy (highlights)

Each page gets the [Layout & Responsive Rules] + [Website Copy] split from your brief.

- **Home** — Split hero (headline + CTA / desaturated lifestyle image, stacks on mobile), 4-stat trust bar (2×2 on mobile), 3-pillar services teaser, live "Featured Listings" strip pulled from Supabase, testimonial slice, CTA band.
- **Listings** — 3/2/1 responsive grid, status badge, price, beds/baths/sqft, hover gray overlay, filter chips (All / For Sale / Just Sold). Loader uses `ensureQueryData` + `useSuspenseQuery`.
- **Services** — 3 alternating image/text rows on desktop; on mobile, image always above text. Pillars: Buying, Selling, Financing (your loan-officer differentiator). Gray outline "Learn More" buttons.
- **Testimonials** — Masonry desktop, swipe carousel mobile, charcoal stars, light shadow cards.
- **Contact** — Split layout; form posts to `contact_messages` via `createServerFn`; success state inline; full-width button on mobile.
- **About** — Hero banner photo + "About Me." intro from the Wix page, then three "Representation on Global Stage" cards (AFS Youth Assembly, ICYV, Asian Science Camp 2016) with the Wix images. (Replace with realtor bio if you prefer — see note at top.)
- **Articles** — 4 placeholder post cards (market trend, how-to, neighborhood spotlight, behind-the-scenes), 3-col desktop / 1-col mobile, hairline gray borders.

## SEO

Per-route `head()` with unique title/description/og tags. Listing detail uses its cover image as `og:image`. No `og:image` on `__root.tsx`.

## Out of scope (say the word and I'll add)

- Real MLS / IDX feed (paid integration — using manual DB instead).
- Email notifications on new contact messages (Resend later).
- Articles in the DB (static for now).
- Custom photography (using neutral / Wix-sourced placeholders).

Approve and I'll build it end-to-end.
