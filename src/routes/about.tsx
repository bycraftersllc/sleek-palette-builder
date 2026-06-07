import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, Section } from "@/components/site-shell";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Morgan Reed" },
      { name: "description", content: "Engineer, entrepreneur, and social-impact advocate dedicated to creating innovative solutions that empower communities." },
      { property: "og:title", content: "About — Morgan Reed" },
      { property: "og:description", content: "Engineer, entrepreneur, and social-impact advocate." },
    ],
  }),
  component: Page,
});

const HERO = "https://static.wixstatic.com/media/11062b_77378fc0da68439ebd8fd24a2f51e50cf000.jpg/v1/fill/w_1905,h_435,al_c,q_85/11062b_77378fc0da68439ebd8fd24a2f51e50cf000.jpg";
const PORTRAIT = "https://static.wixstatic.com/media/4bba53_db78d09177824b3aaf6d631edacd027d~mv2.png/v1/fill/w_428,h_691,al_c,lg_1,q_85/4bba53_db78d09177824b3aaf6d631edacd027d~mv2.png";

const MOMENTS = [
  {
    img: "https://static.wixstatic.com/media/4bba53_122e0ab1793a4be08b4c47fa3248d30c~mv2.jpg/v1/fill/w_583,h_521,al_c,q_80/4bba53_122e0ab1793a4be08b4c47fa3248d30c~mv2.jpg",
    title: "2024 AFS Youth Assembly Conference Delegate",
    body: "Representing Nepal and Yeti Foundation at the United Nations during the celebration of International Youth Day 2024 co-organized by The Youth Assembly. The platform fosters youth empowerment, peace, and security through Global Citizenship.",
    link: "https://www.credly.com/badges/071a1e5d-c1ea-44d2-bcc5-c6d89fad32cc/linked_in_profile",
  },
  {
    img: "https://static.wixstatic.com/media/4bba53_aed5fff717254257ae310166b07718bb~mv2.jpg/v1/fill/w_583,h_507,al_c,q_80/4bba53_aed5fff717254257ae310166b07718bb~mv2.jpg",
    title: "The International Congress of Youth Voices",
    body: "A global network of empowered youth voices that strive to take action for the world we wish to see — ICYV.",
    link: "https://kitchensisters.org/present/youth-on-fire-the-international-congress-of-youth-voices/",
  },
  {
    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=900&auto=format&fit=crop&q=80",
    title: "Asian Science Camp 2016",
    body: "The Asian Science Camp aims at enlightening scientifically talented youth through discussion and dialogue with top scholars from around the world, and promoting international friendship and cooperation among the best young students of the next generation in Asia, Australia, and Oceania.",
    link: "https://xicalevelsociety.blogspot.com/2016/09/looking-back-at-asian-science-camp-2016.html",
  },
];

function Page() {
  return (
    <SiteLayout>
      {/* Hero banner */}
      <section className="border-b border-border">
        <div className="aspect-[16/6] md:aspect-[16/4] w-full overflow-hidden bg-muted">
          <img src={HERO} alt="" className="photo-mono h-full w-full object-cover" />
        </div>
      </section>

      {/* Representation strip */}
      <Section muted>
        <div className="text-center max-w-3xl mx-auto">
          <p className="eyebrow">Representation of Nepal on the Global Stage</p>
          <div className="mt-6 grid gap-3 md:grid-cols-3 text-sm md:text-base text-foreground/80">
            <p>2024 AFS Youth Assembly Conference Delegate</p>
            <p>The International Congress of Youth Voices</p>
            <p>Asian Science Camp 2016</p>
          </div>
        </div>
      </Section>

      {/* About me intro */}
      <Section>
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="eyebrow">About Me.</p>
            <h1 className="display-1 mt-4">Hi — I'm Morgan.</h1>
            <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
              Engineer, entrepreneur, and social-impact advocate dedicated to creating
              innovative solutions that empower communities and help people achieve their
              goals.
            </p>
            <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
              When I'm not in the office, you'll find me on a long trail run, working on a
              community housing initiative, or quietly rewriting a contract until every
              clause makes sense to a first-time buyer.
            </p>
            <Link to="/contact" className="mt-8 inline-flex h-11 items-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground hover:bg-primary/90">
              Get in touch
            </Link>
          </div>
          <div className="aspect-[3/4] w-full max-w-md mx-auto overflow-hidden rounded-md border border-border bg-muted">
            <img src={PORTRAIT} alt="Portrait" className="photo-mono h-full w-full object-cover" />
          </div>
        </div>
      </Section>

      {/* Moments */}
      <Section muted>
        <p className="eyebrow text-center">Moments</p>
        <h2 className="display-2 mt-3 text-center">A few things I've been a part of.</h2>
        <div className="mt-12 grid gap-10 md:gap-12">
          {MOMENTS.map((m, i) => (
            <article key={m.title} className="grid gap-8 md:grid-cols-2 md:items-center">
              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                <div className="aspect-[4/3] overflow-hidden rounded-md border border-border bg-background">
                  <img src={m.img} alt={m.title} className="photo-mono h-full w-full object-cover" loading="lazy" />
                </div>
              </div>
              <div className={i % 2 === 1 ? "md:order-1" : ""}>
                <h3 className="display-2 text-2xl md:text-3xl">{m.title}</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">{m.body}</p>
                <a href={m.link} target="_blank" rel="noreferrer" className="mt-5 inline-flex text-sm underline underline-offset-4 text-foreground hover:text-foreground/70">
                  Read More →
                </a>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </SiteLayout>
  );
}
