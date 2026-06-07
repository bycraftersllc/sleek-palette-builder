import { Link } from "@tanstack/react-router";
import type { Listing } from "@/lib/listings.functions";
import { BedDouble, Bath, Maximize2 } from "lucide-react";

const STATUS_LABEL: Record<Listing["status"], string> = {
  for_sale: "For Sale",
  pending: "Pending",
  just_sold: "Just Sold",
};

function formatPrice(n: number) {
  return n >= 1000 ? `$${Math.round(n).toLocaleString()}` : `$${n}`;
}

export function ListingCard({ listing: l }: { listing: Listing }) {
  return (
    <Link
      to="/listings/$id"
      params={{ id: l.id }}
      className="group block overflow-hidden rounded-md border border-border bg-card transition-shadow hover:shadow-md"
    >
      <div className="aspect-[4/3] w-full overflow-hidden bg-muted">
        {l.cover_image_url ? (
          <img
            src={l.cover_image_url}
            alt={l.title}
            className="photo-mono h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            loading="lazy"
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-muted to-accent" />
        )}
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between gap-3">
          <span className="inline-flex items-center rounded-sm border border-foreground/40 px-2 py-0.5 text-[10px] uppercase tracking-widest text-foreground">
            {STATUS_LABEL[l.status]}
          </span>
          <p className="text-lg font-medium tracking-tight">{formatPrice(l.price)}</p>
        </div>
        <h3 className="mt-3 text-base font-medium leading-snug">{l.title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          {l.address}, {l.city}, {l.state}
        </p>
        <div className="mt-4 flex gap-5 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1.5"><BedDouble className="h-4 w-4" />{l.beds} bd</span>
          <span className="inline-flex items-center gap-1.5"><Bath className="h-4 w-4" />{l.baths} ba</span>
          <span className="inline-flex items-center gap-1.5"><Maximize2 className="h-4 w-4" />{l.sqft.toLocaleString()} sqft</span>
        </div>
      </div>
    </Link>
  );
}
