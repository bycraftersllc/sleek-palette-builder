import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, Section } from "@/components/site-shell";

const POSTS = [
  { tag: "Market", title: "Austin Q3 market read: where rates and inventory actually leave you.", date: "Sept 2026", img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=900&auto=format&fit=crop&q=80" },
  { tag: "How-To", title: "Six questions every first-time buyer should ask their lender (and the answers).", date: "Aug 2026", img: "https://images.unsplash.com/photo-1554224155-1696413565d3?w=900&auto=format&fit=crop&q=80" },
  { tag: "Neighborhood", title: "Spotlight: East Riverside — the under-the-radar pocket I keep recommending.", date: "Jul 2026", img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=900&auto=format&fit=crop&q=80" },
  { tag: "Behind the scenes", title: "What actually happens between an accepted offer and a closing table.", date: "Jun 2026", img: "https://images.unsplash.com/photo-1448630360428-65456885c650?w=900&auto=format&fit=crop&q=80" },
];

export const Route = createFileRoute("/articles")({
  head: () => ({
    meta: [
      { title: "Articles — Morgan Reed" },
      { name: "description", content: "Market trends, how-tos, neighborhood spotlights, and the inside view of buying and selling in Central Texas." },
      { property: "og:title", content: "Articles — Morgan Reed" },
      { property: "og:description", content: "Market trends, how-tos, and neighborhood spotlights." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <Section>
        <div className="text-center max-w-2xl mx-auto">
          <p className="eyebrow">Insights</p>
          <h1 className="display-1 mt-4">Articles & field notes.</h1>
          <p className="mt-5 text-muted-foreground">
            Short, useful reads on the local market, financing, and the parts of the process most agents won't bring up.
          </p>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((p) => (
            <article key={p.title} className="rounded-md border border-border bg-card overflow-hidden hover:shadow-md transition-shadow">
              <div className="aspect-[4/3] bg-muted overflow-hidden">
                <img src={p.img} alt="" className="photo-mono h-full w-full object-cover" loading="lazy" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span className="uppercase tracking-widest">{p.tag}</span>
                  <span>{p.date}</span>
                </div>
                <h2 className="mt-3 text-lg font-medium leading-snug">{p.title}</h2>
                <p className="mt-4 text-sm text-muted-foreground">Read article →</p>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </SiteLayout>
  );
}
