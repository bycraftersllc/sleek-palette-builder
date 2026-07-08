import { createFileRoute, Link } from "@tanstack/react-router";
import { useSuspenseQuery, queryOptions } from "@tanstack/react-query";
import { SiteLayout, Section } from "@/components/site-shell";
import { listFeaturedListings, type Listing } from "@/lib/listings.functions";
import { ArrowRight, Home, KeyRound, Banknote, Star } from "lucide-react";
import { ListingCard } from "@/components/listing-card";

const featuredOpts = queryOptions({
  queryKey: ["featured-listings"],
  queryFn: () => listFeaturedListings(),
});

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Prince Agrawal — Realtor & Loan Officer in Austin, TX" },
      { name: "description", content: "Buy, sell, and finance with one trusted partner. Curated listings and stress-free lending in Austin and Central Texas." },
      { property: "og:title", content: "Prince Agrawal — Realtor & Loan Officer" },
      { property: "og:description", content: "Curated listings and stress-free lending in Central Texas." },
    ],
  }),
  loader: ({ context }) => context.queryClient.ensureQueryData(featuredOpts),
  component: Page,
  errorComponent: ({ error }) => <SiteLayout><Section><p>{error.message}</p></Section></SiteLayout>,
  notFoundComponent: () => <SiteLayout><Section><p>Not found.</p></Section></SiteLayout>,
});

function Page() {
  const { data: featured } = useSuspenseQuery(featuredOpts);
  return (
    <SiteLayout>
      <Hero />
      <TrustBar />
      <ServicesTeaser />
      <Featured featured={featured} />
      <TestimonialStrip />
      <Cta />
    </SiteLayout>
  );
}

function Hero() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:px-8 py-12 md:py-24 md:grid-cols-2 md:items-center">
        <div className="order-2 md:order-1">
          <p className="eyebrow">Realtor + Loan Officer · Austin, TX</p>
          <h1 className="display-1 mt-4">
            A home you love. <br />
            <span className="text-muted-foreground">Financing you understand.</span>
          </h1>
          <p className="mt-6 max-w-lg text-base md:text-lg text-muted-foreground">
            Most clients juggle a separate agent and lender. I do both — so your timeline,
            terms, and paperwork stay in sync from first showing to keys in hand.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="inline-flex h-12 items-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground hover:bg-primary/90">
              Let's Talk <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link to="/listings" className="inline-flex h-12 items-center rounded-md border border-foreground/30 bg-transparent px-6 text-sm font-medium text-foreground hover:bg-muted">
              Browse Listings
            </Link>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <div className="aspect-[4/5] w-full overflow-hidden rounded-md border border-border bg-muted">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&auto=format&fit=crop&q=80"
              alt="A modern home exterior in the late afternoon light"
              className="photo-mono h-full w-full object-cover"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const STATS = [
  { v: "14+", l: "Years in real estate & lending" },
  { v: "320", l: "Families served" },
  { v: "4.9★", l: "Average client rating" },
  { v: "$210M", l: "Closed sales volume" },
];

function TrustBar() {
  return (
    <section className="border-b border-border bg-muted">
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
        {STATS.map((s) => (
          <div key={s.l} className="text-center md:text-left">
            <p className="display-2">{s.v}</p>
            <p className="mt-1 text-xs md:text-sm text-muted-foreground">{s.l}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const PILLARS = [
  { icon: Home, title: "Buying", body: "Curated tours, sharp negotiation, and an aligned lender on day one." },
  { icon: KeyRound, title: "Selling", body: "Pricing strategy, staging guidance, and a marketing plan that lands offers fast." },
  { icon: Banknote, title: "Financing", body: "Conventional, FHA, VA, and jumbo. Pre-approval in 24 hours, no surprises at closing." },
];

function ServicesTeaser() {
  return (
    <Section>
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
        <div>
          <p className="eyebrow">What I do</p>
          <h2 className="display-2 mt-3">One partner. Two licenses. Zero hand-offs.</h2>
        </div>
        <Link to="/services" className="text-sm underline underline-offset-4 text-muted-foreground hover:text-foreground">
          See all services →
        </Link>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {PILLARS.map(({ icon: Icon, title, body }) => (
          <div key={title} className="rounded-md border border-border bg-card p-7 hover:shadow-sm transition-shadow">
            <Icon className="h-6 w-6 text-foreground" />
            <h3 className="mt-5 text-xl">{title}</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Featured({ featured }: { featured: Listing[] }) {
  return (
    <Section muted>
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
        <div>
          <p className="eyebrow">Featured listings</p>
          <h2 className="display-2 mt-3">Currently on the market</h2>
        </div>
        <Link to="/listings" className="text-sm underline underline-offset-4 text-muted-foreground hover:text-foreground">
          View all listings →
        </Link>
      </div>
      {featured.length === 0 ? (
        <div className="rounded-md border border-dashed border-border bg-background p-10 text-center text-muted-foreground">
          New listings landing soon. Check back, or{" "}
          <Link to="/contact" className="underline">tell me what you're looking for</Link>.
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-3">
          {featured.map((l) => <ListingCard key={l.id} listing={l} />)}
        </div>
      )}
    </Section>
  );
}

function TestimonialStrip() {
  return (
    <Section>
      <div className="mx-auto max-w-3xl text-center">
        <div className="flex justify-center gap-1 text-foreground">
          {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
        </div>
        <p className="display-2 mt-6">
          “Prince handled the loan AND the offer. Two emails a day, never an unanswered question. We closed in 23 days.”
        </p>
        <p className="mt-6 eyebrow">Avery & Daniel · First-time buyers</p>
        <Link to="/testimonials" className="mt-8 inline-block text-sm underline underline-offset-4 text-muted-foreground hover:text-foreground">
          Read more stories →
        </Link>
      </div>
    </Section>
  );
}

function Cta() {
  return (
    <section className="border-t border-border bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-16 md:py-20 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <h2 className="display-2 text-background">Ready to start the conversation?</h2>
          <p className="mt-3 text-background/70 max-w-xl">No-pressure 20-minute call. Bring questions about a neighborhood, a rate quote, or a listing on Zillow you can't stop thinking about.</p>
        </div>
        <Link to="/contact" className="inline-flex h-12 items-center rounded-md bg-background px-6 text-sm font-medium text-foreground hover:bg-background/90">
          Book a call <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
