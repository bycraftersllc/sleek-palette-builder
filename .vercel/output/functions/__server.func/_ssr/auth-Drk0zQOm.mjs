import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { e as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { S as SiteLayout, a as Section } from "./site-shell-BzsjVe7w.mjs";
import { s as supabase } from "./client-aa1TxwEX.mjs";
import { t as toast } from "../_libs/sonner.mjs";
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
import "../_libs/supabase__supabase-js.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "tslib";
import "../_libs/supabase__functions-js.mjs";
function Page() {
  const navigate = useNavigate();
  const [mode, setMode] = reactExports.useState("signin");
  const [loading, setLoading] = reactExports.useState(false);
  async function onSubmit(e) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const email = String(fd.get("email") ?? "");
    const password = String(fd.get("password") ?? "");
    setLoading(true);
    try {
      if (mode === "signup") {
        const {
          error
        } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: window.location.origin
          }
        });
        if (error) throw error;
        toast.success("Account created");
      } else {
        const {
          error
        } = await supabase.auth.signInWithPassword({
          email,
          password
        });
        if (error) throw error;
      }
      navigate({
        to: "/admin/listings"
      });
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Failed");
    } finally {
      setLoading(false);
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SiteLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-md", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow text-center", children: "Admin" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "display-2 mt-3 text-center", children: mode === "signin" ? "Sign in" : "Create account" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-center text-sm text-muted-foreground", children: "Listing management area. Public visitors don't need an account." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit, className: "mt-8 space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", name: "email", type: "email", required: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Password", name: "password", type: "password", required: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { disabled: loading, className: "w-full h-12 rounded-md bg-primary text-sm font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-60", children: loading ? "…" : mode === "signin" ? "Sign in" : "Create account" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-5 text-center text-sm text-muted-foreground", children: [
      mode === "signin" ? "Need an account?" : "Already have one?",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setMode(mode === "signin" ? "signup" : "signin"), className: "underline text-foreground", children: mode === "signin" ? "Create one" : "Sign in" })
    ] })
  ] }) }) });
}
function Field({
  label,
  name,
  type = "text",
  required = false
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-xs uppercase tracking-widest text-muted-foreground mb-2", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type, name, required, className: "w-full rounded-md bg-muted border border-transparent px-4 py-3 text-base text-foreground focus:bg-background focus:border-foreground focus:outline-none" })
  ] });
}
export {
  Page as component
};
