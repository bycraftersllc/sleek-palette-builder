import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useSuspenseQuery, queryOptions } from "@tanstack/react-query";
import { SiteLayout, Section } from "@/components/site-shell";
import { getListing } from "@/lib/listings.functions";
import { BedDouble, Bath, Maximize2, ArrowLeft } from "lucide-react";

const opts = (id: string) => queryOptions({
  queryKey: ["listing", id],
  queryFn: () => getListing({ data: { id } }),
});

export const Route = createFileRoute("/listings/$id")({
  loader: async ({ params, context }) => {
    const data = await context.queryClient.ensureQueryData(opts(params.id));
    if (!data) throw notFound();
    return data;
  },
  head: ({ loaderData }) => ({
    meta: loaderData ? [
      { title: `${loaderData.title} — Morgan Reed` },
      { name: "description", content: `${loaderData.address}, ${loaderData.city}, ${loaderData.state}. ${loaderData.beds} bd · ${loaderData.baths} ba · ${loaderData.sqft.toLocaleString()} sqft.` },
      { property: "og:title", content: `${loaderData.title} — Morgan Reed` },
      { property: "og:description", content: `${loaderData.address}, ${loaderData.city}, ${loaderData.state}.` },
      ...(loaderData.cover_image_url ? [
        { property: "og:image", content: loaderData.cover_image_url },
        { name: "twitter:image", content: loaderData.cover_image_url },
      ] : []),
    ] : [],
  }),
  component: Page,
  errorComponent: ({ error }) => <SiteLayout><Section><p>{error.message}</p></Section></SiteLayout>,
  notFoundComponent: () => <SiteLayout><Section><p>Listing not found.</p></Section></SiteLayout>,
});

function Page() {
  const { id } = Route.useParams();
  const { data: l } = useSuspenseQuery(opts(id));
  if (!l) return null;
  return (
    <SiteLayout>
      <Section>
        <Link to="/listings" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> Back to listings
        </Link>
        <div className="mt-8 grid gap-10 lg:grid-cols-[2fr_1fr]">
          <div className="aspect-[4/3] overflow-hidden rounded-md border border-border bg-muted">
            {l.cover_image_url && <img src={l.cover_image_url} alt={l.title} className="photo-mono h-full w-full object-cover" />}
          </div>
          <div>
            <p className="eyebrow">{l.status.replace("_", " ")}</p>
            <h1 className="display-2 mt-3">{l.title}</h1>
            <p className="mt-2 text-muted-foreground">{l.address}, {l.city}, {l.state} {l.zip ?? ""}</p>
            <p className="mt-6 display-2">${Math.round(l.price).toLocaleString()}</p>
            <div className="mt-6 flex gap-6 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5"><BedDouble className="h-4 w-4" />{l.beds} bd</span>
              <span className="inline-flex items-center gap-1.5"><Bath className="h-4 w-4" />{l.baths} ba</span>
              <span className="inline-flex items-center gap-1.5"><Maximize2 className="h-4 w-4" />{l.sqft.toLocaleString()} sqft</span>
            </div>
            <p className="mt-8 text-foreground/80 leading-relaxed whitespace-pre-line">{l.description}</p>
            <Link to="/contact" className="mt-10 inline-flex h-12 items-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground hover:bg-primary/90">
              Schedule a tour
            </Link>
          </div>
        </div>
        {l.gallery.length > 0 && (
          <div className="mt-12 grid gap-3 md:grid-cols-3">
            {l.gallery.map((src, i) => (
              <div key={i} className="aspect-[4/3] overflow-hidden rounded-md border border-border bg-muted">
                <img src={src} alt={`${l.title} ${i + 1}`} className="photo-mono h-full w-full object-cover" loading="lazy" />
              </div>
            ))}
          </div>
        )}
      </Section>
    </SiteLayout>
  );
}
