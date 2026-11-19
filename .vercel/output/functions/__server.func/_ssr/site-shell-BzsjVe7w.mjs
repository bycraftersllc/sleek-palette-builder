import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { d as useRouterState, L as Link } from "../_libs/tanstack__react-router.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { X, M as Menu } from "../_libs/lucide-react.mjs";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const NAV = [
  { to: "/", label: "HOME" },
  { to: "/realtor", label: "REALTOR" },
  { to: "/loanofficer", label: "LOAN OFFICER" },
  { to: "/newartofliving", label: "NEW ART OF LIVING" }
];
function SiteHeader() {
  const [open, setOpen] = reactExports.useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  reactExports.useEffect(() => {
    setOpen(false);
  }, [pathname]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-5 py-3 md:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded border-2 border-primary bg-primary/10 text-primary font-bold text-xl tracking-tighter", children: "P" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-base md:text-lg font-black uppercase tracking-tight text-foreground leading-none", children: "Prince Agrawal - Realtor & Loan Officer" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[10px] md:text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Serving with Purpose. Leading with Integrity." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setOpen((v) => !v),
            className: "inline-flex lg:hidden h-10 w-10 items-center justify-center rounded-md border border-border",
            "aria-label": "Toggle menu",
            children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-5 w-5" })
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden lg:flex items-center justify-center gap-8 mt-3 pt-2 border-t border-border/50 text-xs font-bold uppercase tracking-wider", children: NAV.map((n) => {
        const isActive = pathname === n.to;
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: n.to,
            className: cn(
              "py-1 transition-colors hover:text-primary relative",
              isActive ? "text-primary font-extrabold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-primary" : "text-foreground/80"
            ),
            children: n.label
          },
          n.to
        );
      }) })
    ] }),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:hidden border-t border-border bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "mx-auto flex max-w-7xl flex-col px-5 py-3 text-xs font-bold uppercase tracking-wider", children: NAV.map((n) => {
      const isActive = pathname === n.to;
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: n.to,
          className: cn(
            "py-3 border-b border-border/60 last:border-b-0",
            isActive ? "text-primary font-extrabold" : "text-foreground/80"
          ),
          children: n.label
        },
        n.to
      );
    }) }) })
  ] });
}
function SiteFooter() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "border-t border-border bg-muted/20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-5 md:px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-muted-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " Prince Agrawal. All rights reserved."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Serving with Purpose. Leading with Integrity." })
  ] }) });
}
function SiteLayout({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-screen flex-col bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1", children }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
function Section({
  children,
  className,
  muted = false,
  id
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id, className: cn(muted && "bg-muted/40", className), children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-5 md:px-8 py-10 md:py-16", children }) });
}
export {
  SiteLayout as S,
  Section as a,
  cn as c
};
