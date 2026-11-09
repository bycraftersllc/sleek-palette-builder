import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as SiteLayout, a as Section } from "./site-shell-BzsjVe7w.mjs";
import { u as useServerFn } from "./useServerFn-DL2oePlL.mjs";
import { c as createSsrRpc } from "./router-BXI9m2-B.mjs";
import { c as createServerFn } from "./server-Ciq1nt-C.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import "../_libs/seroval.mjs";
import { P as Phone, b as Mail, c as MapPin, C as CircleCheck } from "../_libs/lucide-react.mjs";
import { o as objectType, s as stringType } from "../_libs/zod.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
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
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
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
import "./auth-middleware-CCVBDlKQ.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
const schema = objectType({
  name: stringType().min(1).max(120),
  email: stringType().email().max(200),
  phone: stringType().max(40).optional().nullable(),
  message: stringType().min(5).max(4e3)
});
const sendContactMessage = createServerFn({
  method: "POST"
}).inputValidator((d) => schema.parse(d)).handler(createSsrRpc("f4ab91175279d24fdd2724e2cfe526fe74336bbdfd18bfac38060247ff17403a"));
function Page() {
  const send = useServerFn(sendContactMessage);
  const [done, setDone] = reactExports.useState(false);
  const [loading, setLoading] = reactExports.useState(false);
  async function onSubmit(e) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setLoading(true);
    try {
      await send({
        data: {
          name: String(fd.get("name") ?? ""),
          email: String(fd.get("email") ?? ""),
          phone: fd.get("phone") || null,
          message: String(fd.get("message") ?? "")
        }
      });
      setDone(true);
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SiteLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-12 md:grid-cols-2 md:gap-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow", children: "Get in touch" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "display-1 mt-4", children: "Let's Talk." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-base md:text-lg text-muted-foreground leading-relaxed", children: "Tell me a little about what you're looking for. I read every message myself and reply within one business day — usually much sooner." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-8 space-y-2 text-sm text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "1. You send a message." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "2. I reply within 24 hours to schedule a 20-minute call." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "3. We make a plan that fits your timeline. No pressure, ever." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 space-y-3 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4 text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "(512) 555-0142" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4 text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "hello@princeagrawal.com" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4 text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "120 Market Street, Suite 410, Austin, TX" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: done ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-border bg-muted p-10 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-10 w-10 mx-auto text-foreground" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "display-2 mt-5", children: "Message sent." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "Thanks — I'll be in touch within one business day." })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit, className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Name", name: "name", required: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", name: "email", type: "email", required: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Phone (optional)", name: "phone", type: "tel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "What's on your mind?", name: "message", textarea: true, required: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", disabled: loading, className: "w-full md:w-auto inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-60", children: loading ? "Sending…" : "Send message" })
    ] }) })
  ] }) }) });
}
function Field({
  label,
  name,
  type = "text",
  textarea = false,
  required = false
}) {
  const common = "w-full rounded-md bg-muted border border-transparent px-4 py-3 text-base text-foreground placeholder:text-muted-foreground transition-colors focus:bg-background focus:border-foreground focus:outline-none";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-xs uppercase tracking-widest text-muted-foreground mb-2", children: label }),
    textarea ? /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { name, required, rows: 5, className: common }) : /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type, name, required, className: common })
  ] });
}
export {
  Page as component
};
