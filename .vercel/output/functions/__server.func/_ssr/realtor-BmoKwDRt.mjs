import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as SiteLayout, a as Section } from "./site-shell-BzsjVe7w.mjs";
import { S as Sparkles, d as Megaphone, H as House, U as Users, e as ChartNoAxesColumnIncreasing, f as ClipboardList, g as Clock, h as ArrowRight } from "../_libs/lucide-react.mjs";
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
function Page() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(HeroDocs, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ServicesListingSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(RoadmapSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TestimonialsSection, {})
  ] });
}
function HeroDocs() {
  const handleSaveContact = () => {
    const vcardData = ["BEGIN:VCARD", "VERSION:3.0", "N:Agrawal;Prince;;;", "FN:Prince Agrawal", "ORG:YETI HOMES, LLC", "TITLE:Realtor®", "TEL;TYPE=WORK,VOICE:+18176303361", "EMAIL;TYPE=WORK:Prince@yetihomesllc.com", "ADR;TYPE=WORK:;;222 W. Las Colinas Blvd. Suite 1650E;Irving;TX;75039;United States", "URL:https://www.princeagrawal.com", "END:VCARD"].join("\n");
    const blob = new Blob([vcardData], {
      type: "text/vcard;charset=utf-8;"
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "Prince_Agrawal_Realtor.vcf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { className: "border-b border-border bg-background py-10 md:py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-center text-2xl font-black uppercase tracking-wider text-foreground md:text-3xl", children: "Realtor Services & Education" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 grid gap-8 md:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-between rounded-lg border-2 border-dashed border-border bg-card p-6 text-center shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full overflow-hidden rounded-md border border-border shadow-sm bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/realtor-business-card.png", alt: "Prince Agrawal Digital Business Card", className: "h-auto w-full object-contain" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-bold uppercase tracking-tight text-foreground", children: "Digital Business Card" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-0.5 text-xs text-muted-foreground", children: "(DOTCARD)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: handleSaveContact, className: "mt-3 w-full rounded-md bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow transition-colors hover:bg-primary/90", children: "Save Contact" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-between rounded-lg border-2 border-dashed border-border bg-card p-6 text-center shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full overflow-hidden rounded-md border border-border shadow-sm bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/contact-qr.png", alt: "Contact QR Code", className: "h-auto w-full object-contain" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-bold uppercase tracking-tight text-foreground", children: "Contact QR Code" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-0.5 text-xs text-muted-foreground", children: "(SCAN TO SAVE)" })
        ] })
      ] })
    ] })
  ] }) });
}
const LISTING_SERVICES = [{
  icon: Sparkles,
  title: "Professional staging"
}, {
  icon: Megaphone,
  title: "Digital marketing"
}, {
  icon: House,
  title: "Open Houses"
}, {
  icon: Users,
  title: "Quick leads"
}, {
  icon: ChartNoAxesColumnIncreasing,
  title: "Pricing strategy"
}, {
  icon: ClipboardList,
  title: "Marketing plan/analysis"
}, {
  icon: House,
  title: "Open Houses"
}, {
  icon: Clock,
  title: "Short-term rental experience & consultation."
}];
function ServicesListingSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { className: "border-b border-border bg-muted/20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-extrabold uppercase tracking-wider text-foreground md:text-2xl", children: "Services (Listing Service)" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3", children: LISTING_SERVICES.map((item, idx) => {
      const Icon = item.icon;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 rounded-md border border-border bg-card p-4 shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-9 w-9 shrink-0 items-center justify-center rounded bg-primary/10 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-foreground", children: item.title })
      ] }, idx);
    }) })
  ] });
}
const STEPS = [{
  step: "1",
  title: "Pre-approval"
}, {
  step: "2",
  title: "Loan Estimate"
}, {
  step: "3",
  title: "Contract"
}, {
  step: "4",
  title: "Inspection"
}, {
  step: "5",
  title: "Blue tape walk-through"
}, {
  step: "6",
  title: "Second blue tape walk-through"
}, {
  step: "7",
  title: "Closing Disclosure"
}, {
  step: "8",
  title: "Final Closing"
}, {
  step: "9",
  title: "Move-in!"
}];
function RoadmapSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { className: "border-b border-border bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-extrabold uppercase tracking-wider text-foreground md:text-2xl", children: "Educational Feature: Steps in Closing a Property" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs font-semibold uppercase text-muted-foreground", children: "Flow Roadmap" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 mx-auto max-w-4xl rounded-lg border border-border bg-muted/30 p-6 md:p-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4", children: STEPS.map((item, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative flex items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-full items-center justify-between rounded-md bg-primary px-4 py-3 text-primary-foreground shadow-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-bold", children: [
        item.step,
        ". ",
        item.title
      ] }),
      idx < STEPS.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5 opacity-60 hidden md:inline" })
    ] }) }, idx)) }) })
  ] });
}
const REALTOR_TESTIMONIALS = [{
  image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80",
  text: "Prince helped us list and position our home effectively. Communication was prompt and clear throughout the process."
}, {
  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=80",
  text: "Strategic guidance from staging to closing. The marketing plan delivered quality showings within the first week."
}, {
  image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80",
  text: "Having a representative who understands both the agent and lender side eliminated unnecessary delays."
}, {
  image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80",
  text: "Professional approach with real market analytics. Everything was well coordinated from start to finish."
}, {
  image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=80",
  text: "Clear expectations and seamless walkthrough execution. Highly recommend for residential transactions."
}, {
  image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=80",
  text: "Prompt responses and practical guidance on listing options. Very structured experience."
}];
function TestimonialsSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { className: "bg-muted/10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-extrabold uppercase tracking-wider text-foreground md:text-2xl", children: "Testimonials" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3", children: REALTOR_TESTIMONIALS.map((t, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col overflow-hidden rounded-md border border-border bg-card p-5 shadow-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/3] w-full overflow-hidden rounded bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: t.image, alt: `Testimonial client ${idx + 1}`, className: "h-full w-full object-cover" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4 text-xs italic text-muted-foreground leading-relaxed", children: [
        '"',
        t.text,
        '"'
      ] })
    ] }, idx)) })
  ] });
}
export {
  Page as component
};
