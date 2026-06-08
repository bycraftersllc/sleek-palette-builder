import { createFileRoute } from "@tanstack/react-router";
import { useSuspenseQuery, queryOptions } from "@tanstack/react-query";
import { useState } from "react";
import { SiteLayout, Section } from "@/components/site-shell";
import { listAllListings, type Listing } from "@/lib/listings.functions";
import { ListingCard } from "@/components/listing-card";
import { cn } from "@/lib/utils";

const opts = queryOptions({
  queryKey: ["all-listings"],
  queryFn: () => listAllListings(),
});

export const Route = createFileRoute("/listings/")({
  head: () => ({
    meta: [
      { title: "Featured Listings — Prince Agrawal" },
      { name: "description", content: "Currently active homes for sale, pending, and recently sold in Austin and Central Texas." },
      { property: "og:title", content: "Featured Listings — Prince Agrawal" },
      { property: "og:description", content: "Currently active homes for sale, pending, and recently sold." },
    ],
  }),
  loader: ({ context }) => context.queryClient.ensureQueryData(opts),
  component: Page,
  errorComponent: ({ error }) => <SiteLayout><Section><p>{error.message}</p></Section></SiteLayout>,
  notFoundComponent: () => <SiteLayout><Section><p>Not found.</p></Section></SiteLayout>,
});

const FILTERS = [
  { v: "all", l: "All" },
  { v: "for_sale", l: "For Sale" },
  { v: "pending", l: "Pending" },
  { v: "just_sold", l: "Just Sold" },
] as const;

function Page() {
  const { data: listings } = useSuspenseQuery(opts);
  const [f, setF] = useState<typeof FILTERS[number]["v"]>("all");
  const visible = f === "all" ? listings : listings.filter((l: Listing) => l.status === f);

  return (
    <SiteLayout>
      <Section>
        <div className="text-center max-w-2xl mx-auto">
          <p className="eyebrow">Featured listings</p>
          <h1 className="display-1 mt-4">Curating the best spaces in the city.</h1>
          <p className="mt-5 text-muted-foreground">
            A short, hand-picked list — homes I'd recommend to my own family.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {FILTERS.map((opt) => (
            <button
              key={opt.v}
              onClick={() => setF(opt.v)}
              className={cn(
                "h-10 px-5 rounded-md border text-sm transition-colors",
                f === opt.v
                  ? "border-foreground bg-foreground text-background"
                  : "border-border bg-background text-muted-foreground hover:text-foreground"
              )}
            >
              {opt.l}
            </button>
          ))}
        </div>

        <div className="mt-12">
          {visible.length === 0 ? (
            <div className="rounded-md border border-dashed border-border p-16 text-center text-muted-foreground">
              No listings to show right now. Check back soon.
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {visible.map((l) => <ListingCard key={l.id} listing={l} />)}
            </div>
          )}
        </div>
      </Section>
    </SiteLayout>
  );
}
