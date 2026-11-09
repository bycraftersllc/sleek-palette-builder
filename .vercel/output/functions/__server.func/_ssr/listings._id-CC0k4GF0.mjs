import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { R as Route$1, o as opts } from "./router-BXI9m2-B.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { u as useSuspenseQuery } from "../_libs/tanstack__react-query.mjs";
import { S as SiteLayout, a as Section } from "./site-shell-BzsjVe7w.mjs";
import "../_libs/sonner.mjs";
import "../_libs/seroval.mjs";
import { j as ArrowLeft, B as BedDouble, k as Bath, l as Maximize2 } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "./client-aa1TxwEX.mjs";
import "../_libs/supabase__supabase-js.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "tslib";
import "../_libs/supabase__functions-js.mjs";
import "./server-Ciq1nt-C.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "./auth-middleware-CCVBDlKQ.mjs";
import "../_libs/zod.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
function Page() {
  const {
    id
  } = Route$1.useParams();
  const {
    data: l
  } = useSuspenseQuery(opts(id));
  if (!l) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SiteLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/listings", className: "inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
      " Back to listings"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 grid gap-10 lg:grid-cols-[2fr_1fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/3] overflow-hidden rounded-md border border-border bg-muted", children: l.cover_image_url && /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: l.cover_image_url, alt: l.title, className: "photo-mono h-full w-full object-cover" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow", children: l.status.replace("_", " ") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "display-2 mt-3", children: l.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-muted-foreground", children: [
          l.address,
          ", ",
          l.city,
          ", ",
          l.state,
          " ",
          l.zip ?? ""
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-6 display-2", children: [
          "$",
          Math.round(l.price).toLocaleString()
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex gap-6 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(BedDouble, { className: "h-4 w-4" }),
            l.beds,
            " bd"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Bath, { className: "h-4 w-4" }),
            l.baths,
            " ba"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Maximize2, { className: "h-4 w-4" }),
            l.sqft.toLocaleString(),
            " sqft"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-foreground/80 leading-relaxed whitespace-pre-line", children: l.description }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "mt-10 inline-flex h-12 items-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground hover:bg-primary/90", children: "Schedule a tour" })
      ] })
    ] }),
    l.gallery.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-3 md:grid-cols-3", children: l.gallery.map((src, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/3] overflow-hidden rounded-md border border-border bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src, alt: `${l.title} ${i + 1}`, className: "photo-mono h-full w-full object-cover", loading: "lazy" }) }, i)) })
  ] }) });
}
export {
  Page as component
};
