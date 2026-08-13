import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, Section } from "@/components/site-shell";

export const Route = createFileRoute("/newartofliving")({
  head: () => ({
    meta: [
      { title: "New Art of Living — Prince Agrawal" },
      { name: "description", content: "Engineer, entrepreneur, and social impact advocate. Exploring community, architecture, wealth, and living concepts." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <Section className="py-8">
        {/* Page Title */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-foreground">
            New Art of Living
          </h1>
        </div>

        {/* Top Hero Grid: Bio Text & Right Image */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 max-w-5xl mx-auto mb-16 items-center">
          <div className="md:col-span-7 space-y-4 text-sm text-foreground/90 leading-relaxed">
            <p className="font-semibold">
              Engineer, entrepreneur, and social impact advocate. Engineer, entrepreneur, and social impact advocate.
            </p>
            <p className="text-muted-foreground">
              Enlightening youth of odor mielris extractor.rv crerten leend cosea ss provoont commaniation learni nca oronaes ton and snariosale waed, and ont sorinecnires and mudaualial abrders inriueations.
            </p>
          </div>
          <div className="md:col-span-5">
            <div className="border-2 border-border bg-muted/30 rounded-lg aspect-[4/3] flex items-center justify-center shadow-sm overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop&q=80"
                alt="New Art of Living"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Main Content Grid: Contact, About, From Builder, Articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-16">
          {/* Left Column: Contact Form */}
          <div className="border border-border bg-card rounded-xl p-8 shadow-sm flex flex-col items-center">
            <div className="w-16 h-16 rounded-full border-2 border-slate-700/30 flex items-center justify-center mb-6 bg-slate-50">
              <span className="text-2xl">✉</span>
            </div>
            <h2 className="text-lg font-bold uppercase tracking-wider mb-6 text-foreground">
              Contact
            </h2>
            <form onSubmit={(e) => e.preventDefault()} className="w-full space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full rounded-md border border-input bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-md border border-input bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900"
                />
              </div>
              <div>
                <textarea
                  rows={4}
                  placeholder="Message"
                  className="w-full rounded-md border border-input bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-slate-900 text-white font-bold text-xs uppercase py-3 rounded-md hover:bg-slate-800 transition-colors shadow"
              >
                [SEND]
              </button>
            </form>
          </div>

          {/* Right Column: About, From Builder, Articles */}
          <div className="space-y-10">
            {/* About Block */}
            <div className="text-center">
              <div className="w-14 h-14 rounded-full border-2 border-slate-700/30 flex items-center justify-center mx-auto mb-3 bg-slate-50 text-xl font-bold">
                ?
              </div>
              <h2 className="text-md font-bold uppercase tracking-wider mb-2 text-foreground">
                About
              </h2>
              <p className="text-xs text-muted-foreground leading-relaxed max-w-sm mx-auto">
                Coustion content ecarut specific content - specific corterim on the ellx Coneatds, investmont eneixcitea mealth comer new dirten content for specific content.
              </p>
            </div>

            {/* From The Builder Block */}
            <div className="text-center pt-4 border-t border-border/60">
              <h2 className="text-md font-bold uppercase tracking-wider mb-4 text-foreground">
                From The Builder
              </h2>
              <div className="w-16 h-16 rounded-full border-2 border-slate-900 flex items-center justify-center mx-auto mb-3 text-slate-900 font-black text-xl">
                MB
              </div>
              <p className="text-xs text-muted-foreground font-medium">
                Builder info
              </p>
            </div>

            {/* Articles Block */}
            <div className="text-center pt-4 border-t border-border/60">
              <div className="w-14 h-14 rounded-full border-2 border-slate-700/30 flex items-center justify-center mx-auto mb-3 bg-slate-50 text-xl font-bold">
                ?
              </div>
              <h2 className="text-md font-bold uppercase tracking-wider mb-2 text-foreground">
                Articles
              </h2>
              <p className="text-xs text-muted-foreground leading-relaxed max-w-sm mx-auto">
                Question curtorv of wealth, investment, cash value topics menalring wealth, investment, cash value topics.
              </p>
            </div>
          </div>
        </div>

        {/* Custom Section Footer: Contact Info, Socials, Newsletter */}
        <div className="border-t border-border pt-8 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {/* Contact Details */}
            <div className="text-xs text-muted-foreground space-y-1">
              <p className="font-semibold text-foreground">817-630-3361</p>
              <p>prince@yetihomesllc.com</p>
              <p>pagrawal@xpertrate.com</p>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center gap-4 text-foreground font-bold text-lg">
              <a href="#" className="p-2 border border-border rounded hover:bg-slate-100 transition-colors">
                in
              </a>
              <a href="#" className="p-2 border border-border rounded hover:bg-slate-100 transition-colors">
                📷
              </a>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-2">
              <p className="text-xs font-bold uppercase tracking-wider text-foreground">Newsletter</p>
              <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
                <input
                  type="email"
                  placeholder="Signup our newsletter"
                  className="flex-1 rounded-md border border-input bg-background px-3 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-slate-900"
                />
                <button
                  type="submit"
                  className="bg-slate-900 text-white px-4 py-1.5 rounded-md text-xs font-bold hover:bg-slate-800 transition-colors"
                >
                  →
                </button>
              </form>
            </div>
          </div>
        </div>
      </Section>
    </SiteLayout>
  );
}