import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, Section } from "@/components/site-shell";

const SERVICES = [
  "Free quote",
  "No cost loan/refinance",
  "FHA, VA, Conventional loans",
  "1-0 and 2-0 buydown options",
];

const MORTGAGE_OPTIONS = [
  {
    title: "CONVENTIONAL LOAN",
    subtitle: "(details: rouraira)",
    bullets: ["Details", "Details up", "Details rates"],
  },
  {
    title: "FHA LOAN",
    subtitle: "(flexible approval)",
    bullets: ["Approval", "FHA loan", "Flexible approval"],
  },
  {
    title: "VA LOAN",
    subtitle: "(eligible veterans)",
    bullets: ["Eligible rate", "Conventional loan", "Eligible veterans"],
  },
];

const TESTIMONIALS = [
  {
    name: "Client Name",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
    text: "Engineer, entrepreneur, and social impact advocate in advising unit, and be eousuret kexqwaniur of snuwu ansi sawoin.",
  },
  {
    name: "Client Name",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
    text: "Engineer, entrepreneur, and social impact advocate in lwipikiring ent, ad be eousunet fxnqpania.",
  },
  {
    name: "Client Name",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80",
    text: "Engineer, entrepreneur, and social impact advocate in sliptoring ent, and be eousuret lxnpxuiur of enuno-eco exwaroic.",
  },
];

export const Route = createFileRoute("/loanofficer")({
  head: () => ({
    meta: [
      { title: "Loan Officer & Mortgage — Prince Agrawal" },
      { name: "description", content: "Loan Officer and Mortgage services, financing options, and financial education tools." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <Section className="py-8">
        {/* Page Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-foreground">
            Loan Officer & Mortgage
          </h1>
        </div>

        {/* Top Cards: Dotcard & Attached Documents */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          <div className="border border-border rounded-lg bg-card p-8 text-center flex flex-col items-center justify-center min-h-[180px] shadow-sm hover:border-slate-400 transition-colors">
            <div className="w-16 h-16 border-2 border-slate-700/30 rounded flex items-center justify-center mb-3 text-slate-800">
              <span className="text-2xl">✉</span>
            </div>
            <p className="font-bold uppercase tracking-wide text-xs text-foreground">
              Digital Business Card<br />(Dotcard)
            </p>
          </div>

          <div className="border border-border rounded-lg bg-card p-8 text-center flex flex-col items-center justify-center min-h-[180px] shadow-sm hover:border-slate-400 transition-colors">
            <div className="w-16 h-20 border-2 border-slate-700/30 rounded flex items-center justify-center mb-3 text-slate-800">
              <span className="text-2xl">📄</span>
            </div>
            <p className="font-bold uppercase tracking-wide text-xs text-foreground">
              Attached Documents<br />(PDFs)
            </p>
          </div>
        </div>

        {/* Services (Loan & Refinance) Banner */}
        <div className="bg-slate-900 text-white rounded-lg p-6 mb-12 max-w-4xl mx-auto shadow-md">
          <h2 className="text-xl font-bold uppercase text-center mb-6 tracking-wide">
            Services (Loan & Refinance)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {SERVICES.map((s) => (
              <div key={s} className="flex items-center gap-2 text-sm font-medium text-slate-200">
                <span className="text-slate-400 font-bold">•</span>
                <span>{s}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Mortgage Options Explained Section */}
        <div className="mb-12 max-w-5xl mx-auto">
          <h2 className="text-xl font-bold uppercase text-center mb-6 text-foreground">
            Mortgage Options Explained
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {MORTGAGE_OPTIONS.map((opt) => (
              <div
                key={opt.title}
                className="relative border-2 border-slate-900 rounded-xl bg-card p-6 flex flex-col items-center text-center shadow-sm pt-8"
              >
                <span className="absolute -top-3 bg-slate-900 text-white text-[10px] font-bold uppercase px-3 py-0.5 rounded-full tracking-wider">
                  Feature
                </span>
                <h3 className="font-extrabold text-sm uppercase text-foreground">{opt.title}</h3>
                <p className="text-xs text-muted-foreground mb-4">{opt.subtitle}</p>
                <ul className="text-xs space-y-1.5 text-left w-full pl-4 list-disc text-foreground/90">
                  {opt.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Financial Education Tools */}
        <div className="bg-slate-50 border border-border rounded-lg p-6 mb-12 max-w-5xl mx-auto">
          <h2 className="text-xl font-bold uppercase text-center mb-6 text-foreground">
            Financial Education Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Tool 1 */}
            <div className="border border-border bg-card p-4 rounded-md text-center flex flex-col justify-between shadow-sm">
              <div>
                <p className="font-bold text-xs uppercase mb-1 text-foreground">Market Tracker</p>
                <p className="text-[11px] text-muted-foreground mb-3">US 10-Year Treasury Yield</p>
                <div className="h-20 w-full border border-border rounded flex items-end p-2 bg-background">
                  <svg className="w-full h-full" viewBox="0 0 100 40">
                    <path d="M0,35 Q20,25 40,30 T80,10 T100,20" fill="none" stroke="currentColor" strokeWidth="2" className="text-slate-900" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Tool 2 */}
            <div className="border border-border bg-card p-4 rounded-md text-center flex flex-col justify-between shadow-sm">
              <div>
                <p className="font-bold text-xs uppercase mb-1 text-foreground">DTI Guide</p>
                <p className="text-[11px] text-muted-foreground mb-3">Debt-to-Income calculation</p>
                <div className="p-3 bg-muted/40 rounded text-xs text-muted-foreground">
                  Debt-to-Income ratio guidance and bounds.
                </div>
              </div>
              <a href="#calculator" className="mt-4 text-[11px] font-bold uppercase text-slate-900 hover:underline block">
                [CALCULATOR.NET LINK]
              </a>
            </div>

            {/* Tool 3 */}
            <div className="border border-border bg-card p-4 rounded-md text-center flex flex-col justify-between shadow-sm">
              <div>
                <p className="font-bold text-xs uppercase mb-1 text-foreground">Amortization Guide</p>
                <p className="text-[11px] text-muted-foreground mb-3">Amortization card cost</p>
                <div className="p-3 bg-muted/40 rounded text-xs text-muted-foreground">
                  View payment schedules and interest breakdowns.
                </div>
              </div>
              <a href="#amortization" className="mt-4 text-[11px] font-bold uppercase text-slate-900 hover:underline block">
                [AMORTIZATION CALCULATOR LINK]
              </a>
            </div>
          </div>
        </div>

        {/* Action Center */}
        <div className="mb-16 max-w-4xl mx-auto text-center">
          <h2 className="text-xl font-bold uppercase mb-6 text-foreground">Action Center</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button className="bg-slate-900 text-white font-bold text-xs uppercase py-4 px-6 rounded-md hover:bg-slate-800 transition-colors shadow">
              [START LOAN / REFINANCE APPLICATION]
            </button>
            <button className="bg-slate-900 text-white font-bold text-xs uppercase py-4 px-6 rounded-md hover:bg-slate-800 transition-colors shadow">
              [RUN YOUR CREDIT]
            </button>
          </div>
        </div>

        {/* Testimonials */}
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-bold uppercase text-center mb-8 text-foreground">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((item, idx) => (
              <div key={idx} className="border border-border rounded-lg bg-card p-4 shadow-sm text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden bg-muted">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  "{item.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </SiteLayout>
  );
}