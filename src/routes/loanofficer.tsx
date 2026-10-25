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
    subtitle: "(Backed by Fannie Mae / Freddie Mac)",
    bullets: [
      "Minimum 3–5% down payment (20% to avoid PMI)",
      "Credit Score: 620+ required (best rates at 740+)",
      "Ideal for strong credit and higher income buyers",
    ],
  },
  {
    title: "FHA LOAN",
    subtitle: "(Flexible Government-Insured Approval)",
    bullets: [
      "3.5% min down payment with 580+ FICO (10% if 500–579)",
      "Credit Score: 500 minimum requirement",
      "Great for first-time or lower-credit buyers with flexible DTI",
    ],
  },
  {
    title: "VA LOAN",
    subtitle: "(Eligible Veterans & Active-Duty)",
    bullets: [
      "0% Down Payment (No PMI & No Property Tax)",
      "Credit Score: Generally 580–620+ (lender-dependent)",
      "Lower rates and fees for military service members & spouses",
    ],
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
  const handleSaveContact = () => {
    const vcardData = [
      "BEGIN:VCARD",
      "VERSION:3.0",
      "N:Agrawal;Prince;;;",
      "FN:Prince Agrawal",
      "ORG:YETI HOMES, LLC",
      "TITLE:Loan Officer & Mortgage",
      "TEL;TYPE=WORK,VOICE:+18176303361",
      "EMAIL;TYPE=WORK:Prince@yetihomesllc.com",
      "ADR;TYPE=WORK:;;222 W. Las Colinas Blvd. Suite 1650E;Irving;TX;75039;United States",
      "URL:https://www.princeagrawal.com",
      "END:VCARD",
    ].join("\n");

    const blob = new Blob([vcardData], { type: "text/vcard;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "Prince_Agrawal_Loan_Officer.vcf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

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
          <div className="border border-border rounded-lg bg-card p-6 text-center flex flex-col items-center justify-between min-h-[180px] shadow-sm hover:border-slate-400 transition-colors">
            <div className="w-full overflow-hidden rounded-md border border-border shadow-sm bg-muted mb-3">
              <img
                src="/loanofficer-business-card.png"
                alt="Prince Agrawal Loan Officer Digital Business Card"
                className="h-auto w-full object-contain"
              />
            </div>
            <div className="w-full">
              <p className="font-bold uppercase tracking-wide text-xs text-foreground">
                Digital Business Card<br />(Dotcard)
              </p>
              <button
                onClick={handleSaveContact}
                className="mt-3 w-full rounded-md bg-slate-900 px-4 py-2 text-xs font-semibold text-white shadow transition-colors hover:bg-slate-800"
              >
                Save Contact
              </button>
            </div>
          </div>

          <div className="border border-border rounded-lg bg-card p-8 text-center flex flex-col items-center justify-between min-h-[180px] shadow-sm hover:border-slate-400 transition-colors">
            <div className="flex flex-col items-center justify-center my-auto">
              <div className="w-16 h-20 border-2 border-slate-700/30 rounded flex items-center justify-center mb-3 text-slate-800">
                <span className="text-2xl">📄</span>
              </div>
              <p className="font-bold uppercase tracking-wide text-xs text-foreground">
                Attached Documents<br />(PDFs)
              </p>
            </div>
            <button className="mt-3 w-full rounded-md border border-border bg-background px-4 py-2 text-xs font-semibold text-foreground shadow-sm transition-colors hover:bg-muted">
              Download Resources
            </button>
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
          <h2 className="text-xl font-bold uppercase text-center mb-2 text-foreground">
            Mortgage Options Explained
          </h2>
          <p className="text-center text-xs text-muted-foreground mb-6">
            Want to explore loan options and refinance? Find the loan type that best fits your profile.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {MORTGAGE_OPTIONS.map((opt) => (
              <div
                key={opt.title}
                className="relative border-2 border-slate-900 rounded-xl bg-card p-6 flex flex-col items-center text-center shadow-sm pt-8"
              >
                <span className="absolute -top-3 bg-slate-900 text-white text-[10px] font-bold uppercase px-3 py-0.5 rounded-full tracking-wider">
                  Option
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
            {/* Tool 1: Market Tracker */}
            <div className="border border-border bg-card p-4 rounded-md text-center flex flex-col justify-between shadow-sm">
              <div>
                <p className="font-bold text-xs uppercase mb-1 text-foreground">Market Tracker</p>
                <p className="text-[11px] text-muted-foreground mb-3">US 10-Year Treasury Yield (CNBC)</p>
                <div className="h-20 w-full border border-border rounded flex items-end p-2 bg-background mb-3">
                  <svg className="w-full h-full" viewBox="0 0 100 40">
                    <path d="M0,35 Q20,25 40,30 T80,10 T100,20" fill="none" stroke="currentColor" strokeWidth="2" className="text-slate-900" />
                  </svg>
                </div>
              </div>
              <a
                href="https://www.cnbc.com/quotes/US10Y"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-bold uppercase text-slate-900 hover:underline block"
              >
                US 10Y Treasury Yield
              </a>
            </div>

            {/* Tool 2: DTI Guide & Calculator */}
            <div className="border border-border bg-card p-4 rounded-md text-center flex flex-col justify-between shadow-sm">
              <div>
                <p className="font-bold text-xs uppercase mb-1 text-foreground">DTI Guide</p>
                <p className="text-[11px] text-muted-foreground mb-2">Debt-to-Income Calculation</p>
                <div className="p-2.5 bg-muted/40 rounded text-[11px] text-muted-foreground text-left leading-relaxed">
                  DTI = Total monthly debt payments ÷ Gross monthly income. Measures how much of your income goes toward paying debts. Our lender processes DTI up to 50%.
                </div>
              </div>
              <a
                href="https://www.calculator.net/debt-ratio-calculator.html"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-[11px] font-bold uppercase text-slate-900 hover:underline block"
              >
                Calculate your DTI
              </a>
            </div>

            {/* Tool 3: Amortization Guide & Calculator */}
            <div className="border border-border bg-card p-4 rounded-md text-center flex flex-col justify-between shadow-sm">
              <div>
                <p className="font-bold text-xs uppercase mb-1 text-foreground">Amortization Guide</p>
                <p className="text-[11px] text-muted-foreground mb-2">Schedule & Equity Breakdown</p>
                <div className="p-2.5 bg-muted/40 rounded text-[11px] text-muted-foreground text-left leading-relaxed">
                  Amortization gradually pays off a loan through scheduled payments covering principal & interest. Early payments go mostly toward interest while building property equity.
                </div>
              </div>
              <a
                href="https://www.calculator.net/amortization-calculator.html"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-[11px] font-bold uppercase text-slate-900 hover:underline block"
              >
                Calculate your amortization
              </a>
            </div>
          </div>
        </div>

        {/* Action Center */}
        <div className="mb-16 max-w-4xl mx-auto text-center">
          <h2 className="text-xl font-bold uppercase mb-6 text-foreground">Action Center</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1: Loan / Refinance Application */}
            <div className="flex flex-col justify-between rounded-lg border border-border bg-card p-6 text-center shadow-sm">
              <div>
                <h3 className="font-extrabold text-sm uppercase text-foreground">
                  Loan / Refinance Application
                </h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  Apply today using the link below to start your home loan or refinance. Fast approval, competitive rates, and expert guidance all in one place. Your journey to homeownership starts today.
                </p>
              </div>
              <a
                href="https://xpertrate.my1003app.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block w-full rounded-md bg-slate-900 py-3.5 px-4 text-xs font-bold uppercase text-white shadow hover:bg-slate-800 transition-colors"
              >
                Apply Today
              </a>
            </div>

            {/* Card 2: Credit Run */}
            <div className="flex flex-col justify-between rounded-lg border border-border bg-card p-6 text-center shadow-sm">
              <div>
                <h3 className="font-extrabold text-sm uppercase text-foreground">
                  Credit Run
                </h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  Click here to run your credit and move one step closer to approval.
                </p>
              </div>
              <a
                href="https://credit.advcredit.com/smartpay/SmartPay.aspx?uid=2bae30af-b30c-4c66-b5c6-f5b7909079a9"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block w-full rounded-md bg-slate-900 py-3.5 px-4 text-xs font-bold uppercase text-white shadow hover:bg-slate-800 transition-colors"
              >
                Run Your Credit
              </a>
            </div>
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