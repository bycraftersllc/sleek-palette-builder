import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as SiteLayout, a as Section } from "./site-shell-BzsjVe7w.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/lucide-react.mjs";
const SERVICES = ["Free quote", "No cost loan/refinance", "FHA, VA, Conventional loans", "1-0 and 2-0 buydown options"];
const MORTGAGE_OPTIONS = [{
  title: "CONVENTIONAL LOAN",
  subtitle: "(Backed by Fannie Mae / Freddie Mac)",
  bullets: ["Minimum 3–5% down payment (20% to avoid PMI)", "Credit Score: 620+ required (best rates at 740+)", "Ideal for strong credit and higher income buyers"]
}, {
  title: "FHA LOAN",
  subtitle: "(Flexible Government-Insured Approval)",
  bullets: ["3.5% min down payment with 580+ FICO (10% if 500–579)", "Credit Score: 500 minimum requirement", "Great for first-time or lower-credit buyers with flexible DTI"]
}, {
  title: "VA LOAN",
  subtitle: "(Eligible Veterans & Active-Duty)",
  bullets: ["0% Down Payment (No PMI & No Property Tax)", "Credit Score: Generally 580–620+ (lender-dependent)", "Lower rates and fees for military service members & spouses"]
}];
const TESTIMONIALS = [{
  name: "Client Name",
  img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
  text: "Engineer, entrepreneur, and social impact advocate in advising unit, and be eousuret kexqwaniur of snuwu ansi sawoin."
}, {
  name: "Client Name",
  img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
  text: "Engineer, entrepreneur, and social impact advocate in lwipikiring ent, ad be eousunet fxnqpania."
}, {
  name: "Client Name",
  img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80",
  text: "Engineer, entrepreneur, and social impact advocate in sliptoring ent, and be eousuret lxnpxuiur of enuno-eco exwaroic."
}];
function Page() {
  const handleSaveContact = () => {
    const vcardData = ["BEGIN:VCARD", "VERSION:3.0", "N:Agrawal;Prince;;;", "FN:Prince Agrawal", "ORG:YETI HOMES, LLC", "TITLE:Loan Officer & Mortgage", "TEL;TYPE=WORK,VOICE:+18176303361", "EMAIL;TYPE=WORK:Prince@yetihomesllc.com", "ADR;TYPE=WORK:;;222 W. Las Colinas Blvd. Suite 1650E;Irving;TX;75039;United States", "URL:https://www.princeagrawal.com", "END:VCARD"].join("\n");
    const blob = new Blob([vcardData], {
      type: "text/vcard;charset=utf-8;"
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "Prince_Agrawal_Loan_Officer.vcf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SiteLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { className: "py-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl md:text-4xl font-black uppercase tracking-tight text-foreground", children: "Loan Officer & Mortgage" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border rounded-lg bg-card p-6 text-center flex flex-col items-center justify-between min-h-[180px] shadow-sm hover:border-slate-400 transition-colors", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full overflow-hidden rounded-md border border-border shadow-sm bg-muted mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/loanofficer-business-card.png", alt: "Prince Agrawal Loan Officer Digital Business Card", className: "h-auto w-full object-contain" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-bold uppercase tracking-wide text-xs text-foreground", children: [
            "Digital Business Card",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "(Dotcard)"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: handleSaveContact, className: "mt-3 w-full rounded-md bg-slate-900 px-4 py-2 text-xs font-semibold text-white shadow transition-colors hover:bg-slate-800", children: "Save Contact" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border rounded-lg bg-card p-8 text-center flex flex-col items-center justify-between min-h-[180px] shadow-sm hover:border-slate-400 transition-colors", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center my-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-20 border-2 border-slate-700/30 rounded flex items-center justify-center mb-3 text-slate-800", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "📄" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-bold uppercase tracking-wide text-xs text-foreground", children: [
            "Attached Documents",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "(PDFs)"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "mt-3 w-full rounded-md border border-border bg-background px-4 py-2 text-xs font-semibold text-foreground shadow-sm transition-colors hover:bg-muted", children: "Download Resources" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-slate-900 text-white rounded-lg p-6 mb-12 max-w-4xl mx-auto shadow-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold uppercase text-center mb-6 tracking-wide", children: "Services (Loan & Refinance)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto", children: SERVICES.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm font-medium text-slate-200", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-400 font-bold", children: "•" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: s })
      ] }, s)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-12 max-w-5xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold uppercase text-center mb-2 text-foreground", children: "Mortgage Options Explained" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-xs text-muted-foreground mb-6", children: "Want to explore loan options and refinance? Find the loan type that best fits your profile." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: MORTGAGE_OPTIONS.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative border-2 border-slate-900 rounded-xl bg-card p-6 flex flex-col items-center text-center shadow-sm pt-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-3 bg-slate-900 text-white text-[10px] font-bold uppercase px-3 py-0.5 rounded-full tracking-wider", children: "Option" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-extrabold text-sm uppercase text-foreground", children: opt.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-4", children: opt.subtitle }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "text-xs space-y-1.5 text-left w-full pl-4 list-disc text-foreground/90", children: opt.bullets.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: b }, b)) })
      ] }, opt.title)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-slate-50 border border-border rounded-lg p-6 mb-12 max-w-5xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold uppercase text-center mb-6 text-foreground", children: "Financial Education Tools" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border bg-card p-4 rounded-md text-center flex flex-col justify-between shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-xs uppercase mb-1 text-foreground", children: "Market Tracker" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground mb-3", children: "US 10-Year Treasury Yield (CNBC)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-20 w-full border border-border rounded flex items-end p-2 bg-background mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "w-full h-full", viewBox: "0 0 100 40", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0,35 Q20,25 40,30 T80,10 T100,20", fill: "none", stroke: "currentColor", strokeWidth: "2", className: "text-slate-900" }) }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.cnbc.com/quotes/US10Y", target: "_blank", rel: "noopener noreferrer", className: "text-[11px] font-bold uppercase text-slate-900 hover:underline block", children: "US 10Y Treasury Yield" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border bg-card p-4 rounded-md text-center flex flex-col justify-between shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-xs uppercase mb-1 text-foreground", children: "DTI Guide" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground mb-2", children: "Debt-to-Income Calculation" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2.5 bg-muted/40 rounded text-[11px] text-muted-foreground text-left leading-relaxed", children: "DTI = Total monthly debt payments ÷ Gross monthly income. Measures how much of your income goes toward paying debts. Our lender processes DTI up to 50%." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.calculator.net/debt-ratio-calculator.html", target: "_blank", rel: "noopener noreferrer", className: "mt-4 text-[11px] font-bold uppercase text-slate-900 hover:underline block", children: "Calculate your DTI" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border bg-card p-4 rounded-md text-center flex flex-col justify-between shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-xs uppercase mb-1 text-foreground", children: "Amortization Guide" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground mb-2", children: "Schedule & Equity Breakdown" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2.5 bg-muted/40 rounded text-[11px] text-muted-foreground text-left leading-relaxed", children: "Amortization gradually pays off a loan through scheduled payments covering principal & interest. Early payments go mostly toward interest while building property equity." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.calculator.net/amortization-calculator.html", target: "_blank", rel: "noopener noreferrer", className: "mt-4 text-[11px] font-bold uppercase text-slate-900 hover:underline block", children: "Calculate your amortization" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-16 max-w-4xl mx-auto text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold uppercase mb-6 text-foreground", children: "Action Center" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col justify-between rounded-lg border border-border bg-card p-6 text-center shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-extrabold text-sm uppercase text-foreground", children: "Loan / Refinance Application" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs text-muted-foreground leading-relaxed", children: "Apply today using the link below to start your home loan or refinance. Fast approval, competitive rates, and expert guidance all in one place. Your journey to homeownership starts today." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://xpertrate.my1003app.com/", target: "_blank", rel: "noopener noreferrer", className: "mt-6 inline-block w-full rounded-md bg-slate-900 py-3.5 px-4 text-xs font-bold uppercase text-white shadow hover:bg-slate-800 transition-colors", children: "Apply Today" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col justify-between rounded-lg border border-border bg-card p-6 text-center shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-extrabold text-sm uppercase text-foreground", children: "Credit Run" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs text-muted-foreground leading-relaxed", children: "Click here to run your credit and move one step closer to approval." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://credit.advcredit.com/smartpay/SmartPay.aspx?uid=2bae30af-b30c-4c66-b5c6-f5b7909079a9", target: "_blank", rel: "noopener noreferrer", className: "mt-6 inline-block w-full rounded-md bg-slate-900 py-3.5 px-4 text-xs font-bold uppercase text-white shadow hover:bg-slate-800 transition-colors", children: "Run Your Credit" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold uppercase text-center mb-8 text-foreground", children: "Testimonials" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: TESTIMONIALS.map((item, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border rounded-lg bg-card p-4 shadow-sm text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: item.img, alt: item.name, className: "w-full h-full object-cover" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground leading-relaxed", children: [
          '"',
          item.text,
          '"'
        ] })
      ] }, idx)) })
    ] })
  ] }) });
}
export {
  Page as component
};
