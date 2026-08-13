import { createFileRoute, Link } from "@tanstack/react-router";
import { useSuspenseQuery, queryOptions } from "@tanstack/react-query";
import { SiteLayout, Section } from "@/components/site-shell";
import { listFeaturedListings } from "@/lib/listings.functions";
import { Globe, Award, Sparkles, Send } from "lucide-react";

const featuredOpts = queryOptions({
  queryKey: ["featured-listings"],
  queryFn: () => listFeaturedListings(),
});

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Prince Agrawal — Realtor & Loan Officer" },
      {
        name: "description",
        content:
          "Serving with Purpose. Leading with Integrity. Realtor & Loan Officer.",
      },
      {
        property: "og:title",
        content: "Prince Agrawal — Realtor & Loan Officer",
      },
      {
        property: "og:description",
        content: "Serving with Purpose. Leading with Integrity.",
      },
    ],
  }),
  loader: ({ context }) => context.queryClient.ensureQueryData(featuredOpts),
  component: Page,
  errorComponent: ({ error }) => (
    <SiteLayout>
      <Section>
        <p>{error.message}</p>
      </Section>
    </SiteLayout>
  ),
  notFoundComponent: () => (
    <SiteLayout>
      <Section>
        <p>Not found.</p>
      </Section>
    </SiteLayout>
  ),
});

function Page() {
  return (
    <SiteLayout>
      <Hero />
      <GlobalImpact />
      <Accomplishments />
      <FooterSection />
    </SiteLayout>
  );
}

function Hero() {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-5 py-8 md:px-8 md:py-12">
        {/* Architectural / Hero Banner Image */}
        <div className="aspect-[16/6] w-full overflow-hidden rounded-md border border-border bg-muted">
          <img
            src="https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1600&auto=format&fit=crop&q=80"
            alt="Architectural structure"
            className="h-full w-full object-cover"
            loading="eager"
          />
        </div>

        {/* Hero Copy */}
        <div className="mt-8 text-center">
          <h1 className="text-2xl font-extrabold uppercase tracking-tight text-foreground md:text-4xl">
            Serving with Purpose. Leading with Integrity.
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground md:text-base">
            Engineer, entrepreneur, and social impact advocate. Practical solutions and strategic implementations.
          </p>

          {/* Action Callouts */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/realtor"
              className="inline-flex h-11 items-center rounded-md bg-primary px-6 text-xs font-semibold uppercase tracking-wider text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              [Explore Real Estate Services]
            </Link>
            <Link
              to="/loan-officer"
              className="inline-flex h-11 items-center rounded-md bg-primary px-6 text-xs font-semibold uppercase tracking-wider text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              [Explore Loan & Refinance Options]
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

const GLOBAL_ITEMS = [
  {
    icon: Globe,
    title: "2024 AFS YOUTH ASSEMBLY CONFERENCE DELEGATE",
    subtitle: "UN representative, UN representation",
    badgeLink: "[CREDLY BADGE LINK]",
  },
  {
    icon: Award,
    title: "THE INTERNATIONAL CONGRESS OF YOUTH VOICES (ICYV)",
    subtitle: "global network",
    badgeLink: "",
  },
  {
    icon: Sparkles,
    title: "ASIAN SCIENCE CAMP 2016",
    subtitle: "Enlightening youth knowledge",
    badgeLink: "[OYAGP AMBASSADOR LINK]",
  },
];

function GlobalImpact() {
  return (
    <Section className="border-b border-border bg-muted/30">
      <div className="text-center">
        <h2 className="text-xl font-extrabold uppercase tracking-wider text-foreground md:text-2xl">
          Global Impact & Accomplishments
        </h2>
      </div>

      <div className="mt-10 grid gap-8 md:grid-cols-3">
        {GLOBAL_ITEMS.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-6 rounded-md border border-border bg-card shadow-sm"
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Icon className="h-8 w-8" />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-tight text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-xs text-muted-foreground">
                {item.subtitle}
              </p>
              {item.badgeLink && (
                <span className="mt-4 text-[11px] font-semibold text-primary underline cursor-pointer">
                  {item.badgeLink}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </Section>
  );
}

const ACCOMPLISHMENT_CARDS = [
  {
    image:
      "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=600&auto=format&fit=crop&q=80",
    title: "2024 AFS YOUTH ASSEMBLY CONFERENCE DELEGATE",
    subtitle: "UN representation",
    badgeLink: "[CREDLY BADGE LINK]",
  },
  {
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&auto=format&fit=crop&q=80",
    title: "THE INTERNATIONAL CONGRESS OF YOUTH VOICES (ICYV)",
    subtitle: "global network",
    badgeLink: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&auto=format&fit=crop&q=80",
    title: "ASIAN SCIENCE CAMP 2016",
    subtitle: "enlightening youth knowledge",
    badgeLink: "[OYAGP AMBASSADOR LINK]",
  },
];

function Accomplishments() {
  return (
    <Section>
      <div className="text-center">
        <h2 className="text-xl font-extrabold uppercase tracking-wider text-foreground md:text-2xl">
          Accomplishments
        </h2>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {ACCOMPLISHMENT_CARDS.map((card, idx) => (
          <div
            key={idx}
            className="overflow-hidden rounded-md border border-border bg-card shadow-sm transition-all hover:shadow-md"
          >
            <div className="aspect-[4/3] w-full overflow-hidden bg-muted">
              <img
                src={card.image}
                alt={card.title}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-5 text-center">
              <h3 className="text-xs font-bold uppercase text-foreground">
                {card.title}
              </h3>
              <p className="mt-1 text-xs text-muted-foreground">
                {card.subtitle}
              </p>
              {card.badgeLink && (
                <p className="mt-3 text-[11px] font-semibold text-primary underline cursor-pointer">
                  {card.badgeLink}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function FooterSection() {
  return (
    <footer className="border-t border-border bg-muted/40 py-8">
      <div className="mx-auto max-w-7xl px-5 md:px-8 grid gap-6 md:grid-cols-3 md:items-center">
        {/* Contact Info */}
        <div className="space-y-1 text-xs text-muted-foreground">
          <p className="font-semibold text-foreground">817-630-3361</p>
          <p>prince@yetihomesllc.com</p>
          <p>pagrawal@xpertrate.com</p>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-start md:justify-center gap-4">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded border border-border bg-background p-2 text-foreground hover:bg-accent"
            aria-label="LinkedIn"
          >
            <svg
              className="h-4 w-4 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
            </svg>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded border border-border bg-background p-2 text-foreground hover:bg-accent"
            aria-label="Instagram"
          >
            <svg
              className="h-4 w-4 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
        </div>

        {/* Newsletter Box */}
        <div className="space-y-2">
          <p className="text-xs font-bold uppercase tracking-wider text-foreground">
            NEWSLETTER
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Signup our newsletter"
              className="w-full rounded-l-md border border-r-0 border-border bg-background px-3 py-2 text-xs focus:outline-none"
            />
            <button
              className="flex items-center justify-center rounded-r-md bg-primary px-3 text-primary-foreground hover:bg-primary/90"
              aria-label="Submit newsletter"
            >
              <Send className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}