import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, Section } from "@/components/site-shell";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Morgan Reed" },
      { name: "description", content: "Buying, selling, and financing — handled by one trusted partner. Stress-free real estate and lending in Central Texas." },
      { property: "og:title", content: "Services — Morgan Reed" },
      { property: "og:description", content: "Buying, selling, and financing — handled by one trusted partner." },
    ],
  }),
  component: Page,
});

const PILLARS = [
  {
    eyebrow: "Pillar 01",
    title: "Buying a home",
    img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&auto=format&fit=crop&q=80",
    body: "I'll help you tour smarter, write competitive offers, and (because I'm also your lender) line up financing that matches the deal — not the other way around. No more chasing two people for the same answer.",
  },
  {
    eyebrow: "Pillar 02",
    title: "Selling a home",
    img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&auto=format&fit=crop&q=80",
    body: "Pricing strategy backed by real comps. Staging guidance that respects how you live. A marketing plan with editorial photography, drone, and targeted reach so the right buyer sees your home in the first week — not the fourth.",
  },
  {
    eyebrow: "Pillar 03",
    title: "Financing it all",
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&auto=format&fit=crop&q=80",
    body: "Conventional, FHA, VA, jumbo, and second-home loans. Pre-approval in 24 hours, rates shopped across a real lender network, and zero surprises at the closing table. You'll always know exactly what the numbers mean.",
  },
];

function Page() {
  return (
    <SiteLayout>
      <Section>
        <div className="text-center max-w-2xl mx-auto">
          <p className="eyebrow">What I do</p>
          <h1 className="display-1 mt-4">Three pillars. One partner.</h1>
          <p className="mt-5 text-muted-foreground">
            Most clients juggle a separate realtor, lender, title, and inspector. I keep the first
            two aligned so the rest stays simple.
          </p>
        </div>
      </Section>

      {PILLARS.map((p, i) => (
        <section key={p.title} className={i % 2 === 1 ? "bg-muted border-y border-border" : ""}>
          <div className="mx-auto max-w-7xl px-5 md:px-8 py-16 md:py-24 grid gap-10 md:grid-cols-2 md:items-center">
            <div className={i % 2 === 1 ? "md:order-2" : ""}>
              <div className="aspect-[4/3] overflow-hidden rounded-md border border-border bg-muted">
                <img src={p.img} alt={p.title} className="photo-mono h-full w-full object-cover" loading="lazy" />
              </div>
            </div>
            <div className={i % 2 === 1 ? "md:order-1" : ""}>
              <p className="eyebrow">{p.eyebrow}</p>
              <h2 className="display-2 mt-3">{p.title}</h2>
              <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">{p.body}</p>
              <Link to="/contact" className="mt-8 inline-flex h-11 items-center rounded-md border border-foreground/30 px-5 text-sm font-medium text-foreground hover:bg-background">
                Learn More
              </Link>
            </div>
          </div>
        </section>
      ))}
    </SiteLayout>
  );
}
