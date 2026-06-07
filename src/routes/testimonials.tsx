import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, Section } from "@/components/site-shell";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const ITEMS = [
  {
    name: "Avery & Daniel",
    role: "First-time buyers · East Austin",
    body: "We'd been outbid four times before we met Morgan. She walked us through a creative escalation clause, prepped the pre-approval letter the same afternoon, and we had keys eleven days later. The fact that she handled BOTH the offer and the loan meant we never had to translate between two people. Communication was unreal — two emails a day, every day. We'd send anyone we love her way.",
  },
  {
    name: "The Ortiz Family",
    role: "Move-up sellers · Cedar Park",
    body: "Selling a home with three kids under seven sounded impossible. Morgan built us a staging plan we could actually live with, brought in a photographer who made our place look like an Airbnb cover shoot, and we had four offers by the end of the first weekend. We closed $32k over asking and she even helped us finance the new place. Genuinely felt like we hired a friend, not a vendor.",
  },
  {
    name: "Priya Shah",
    role: "Refinance · South Lamar",
    body: "I called Morgan after my last lender ghosted me three weeks into a refi. She had a new pre-approval in my inbox by Tuesday and we closed in 18 days. She broke down every line of the loan estimate so I actually understood what I was paying for, and pointed out two fees I could push back on. I will not work with anyone else for the rest of my life.",
  },
] as const;

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials — Morgan Reed" },
      { name: "description", content: "Real stories from buyers, sellers, and refinance clients across Central Texas." },
      { property: "og:title", content: "Testimonials — Morgan Reed" },
      { property: "og:description", content: "Real stories from buyers, sellers, and refinance clients." },
    ],
  }),
  component: Page,
});

function Stars() {
  return (
    <div className="flex gap-1 text-foreground">
      {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
    </div>
  );
}

function Card({ t }: { t: (typeof ITEMS)[number] }) {
  return (
    <div className="rounded-md border border-border bg-card p-7 shadow-[0_1px_0_rgba(0,0,0,0.03),0_8px_24px_-12px_rgba(0,0,0,0.08)] h-full flex flex-col">
      <Stars />
      <p className="mt-5 text-foreground/90 leading-relaxed">"{t.body}"</p>
      <div className="mt-6 pt-6 border-t border-border">
        <p className="font-medium">{t.name}</p>
        <p className="text-xs text-muted-foreground mt-0.5">{t.role}</p>
      </div>
    </div>
  );
}

function Page() {
  return (
    <SiteLayout>
      <Section>
        <div className="text-center max-w-2xl mx-auto">
          <p className="eyebrow">Client stories</p>
          <h1 className="display-1 mt-4">Word of mouth pays my mortgage.</h1>
          <p className="mt-5 text-muted-foreground">A few clients who took time to write something kind.</p>
        </div>

        {/* Desktop: 3-col masonry-ish */}
        <div className="mt-16 hidden md:grid gap-6 md:grid-cols-3">
          {ITEMS.map((t) => <Card key={t.name} t={t} />)}
        </div>

        {/* Mobile: swipe carousel */}
        <div className="mt-12 md:hidden">
          <Carousel opts={{ align: "start" }}>
            <CarouselContent>
              {ITEMS.map((t) => (
                <CarouselItem key={t.name} className="basis-[88%]">
                  <Card t={t} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <p className="mt-4 text-center text-xs text-muted-foreground">Swipe to read more →</p>
        </div>
      </Section>
    </SiteLayout>
  );
}
