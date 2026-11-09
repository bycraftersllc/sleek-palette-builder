import { b as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider, q as queryOptions } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { V as notFound, W as redirect } from "../_libs/tanstack__router-core.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { s as supabase } from "./client-aa1TxwEX.mjs";
import { T as Toaster$1 } from "../_libs/sonner.mjs";
import { c as createServerFn, T as TSS_SERVER_FUNCTION, g as getServerFnById } from "./server-Ciq1nt-C.mjs";
import { r as requireSupabaseAuth } from "./auth-middleware-CCVBDlKQ.mjs";
import { o as objectType, s as stringType, b as booleanType, a as arrayType, e as enumType, n as numberType } from "../_libs/zod.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "../_libs/supabase__supabase-js.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "tslib";
import "../_libs/supabase__functions-js.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
const appCss = "/assets/styles-BGsFil5X.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
const Toaster = ({ ...props }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Toaster$1,
    {
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    }
  );
};
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "display-2 mt-3", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex h-11 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "display-2", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: "Something went wrong on our end. Try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex h-11 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-6 text-sm font-medium text-foreground hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$b = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Prince Agrawal — Realtor & Loan Officer" },
      {
        name: "description",
        content: "Curated homes and stress-free financing. A modern realtor and loan officer helping you buy, sell, and finance with confidence."
      },
      { property: "og:title", content: "Prince Agrawal — Realtor & Loan Officer" },
      {
        property: "og:description",
        content: "Curated homes and stress-free financing. A modern realtor and loan officer helping you buy, sell, and finance with confidence."
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Prince Agrawal — Realtor & Loan Officer" },
      {
        name: "twitter:description",
        content: "Curated homes and stress-free financing. A modern realtor and loan officer helping you buy, sell, and finance with confidence."
      },
      {
        property: "og:image",
        content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/18615b7c-ae53-4a90-afe4-0595f19321f4/id-preview-0b4908be--9aa9369a-d8a3-436a-a45a-96957e6116eb.lovable.app-1780953860654.png"
      },
      {
        name: "twitter:image",
        content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/18615b7c-ae53-4a90-afe4-0595f19321f4/id-preview-0b4908be--9aa9369a-d8a3-436a-a45a-96957e6116eb.lovable.app-1780953860654.png"
      }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500;9..144,600&family=Inter+Tight:wght@300;400;500;600;700&display=swap"
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$b.useRouteContext();
  const router2 = useRouter();
  reactExports.useEffect(() => {
    const {
      data: { subscription }
    } = supabase.auth.onAuthStateChange((event) => {
      if (event !== "SIGNED_IN" && event !== "SIGNED_OUT" && event !== "USER_UPDATED") return;
      router2.invalidate();
      if (event !== "SIGNED_OUT") queryClient.invalidateQueries();
    });
    return () => subscription.unsubscribe();
  }, [router2, queryClient]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(QueryClientProvider, { client: queryClient, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, {})
  ] });
}
var createSsrRpc = (functionId) => {
  const url = "/_serverFn/" + functionId;
  const serverFnMeta = { id: functionId };
  const fn = async (...args) => {
    return (await getServerFnById(functionId))(...args);
  };
  return Object.assign(fn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
const listAllListings = createServerFn({
  method: "GET"
}).handler(createSsrRpc("ae8c674a4c26bba8cb7fcdc0cdab443eb2960ae7901e083e3784e6a588abc7cd"));
const listFeaturedListings = createServerFn({
  method: "GET"
}).handler(createSsrRpc("edbd608d2b62470fcc8dc458ab16ac6c569f72ba3973b95c92288b3ae5d0db05"));
const getListing = createServerFn({
  method: "GET"
}).inputValidator((d) => objectType({
  id: stringType().uuid()
}).parse(d)).handler(createSsrRpc("3534642b2e7440be71e815e5e597a1650d0dfc52d9ceb96bbaad3e6a46f731ec"));
const upsertSchema = objectType({
  id: stringType().uuid().optional(),
  title: stringType().min(1).max(200),
  address: stringType().min(1).max(200),
  city: stringType().min(1).max(100),
  state: stringType().min(1).max(50),
  zip: stringType().max(20).optional().nullable(),
  price: numberType().min(0),
  beds: numberType().int().min(0),
  baths: numberType().min(0),
  sqft: numberType().int().min(0),
  status: enumType(["for_sale", "pending", "just_sold"]),
  description: stringType().max(5e3).optional().nullable(),
  cover_image_url: stringType().url().optional().nullable(),
  gallery: arrayType(stringType().url()).max(20).default([]),
  featured: booleanType().default(false)
});
const upsertListing = createServerFn({
  method: "POST"
}).middleware([requireSupabaseAuth]).inputValidator((d) => upsertSchema.parse(d)).handler(createSsrRpc("376df0fd8d5f5bd05d24046e603f537ff26e9af7289cc6cda7ea4a0b499177f0"));
const deleteListing = createServerFn({
  method: "POST"
}).middleware([requireSupabaseAuth]).inputValidator((d) => objectType({
  id: stringType().uuid()
}).parse(d)).handler(createSsrRpc("355748bb4fe1e0a54a381e93ab4522e771d97f4bef08293a6bcb103a57b5d2f2"));
const $$splitNotFoundComponentImporter$1 = () => import("./index-EAldfdtV.mjs");
const $$splitErrorComponentImporter$1 = () => import("./index-CvMUC1ou.mjs");
const $$splitComponentImporter$a = () => import("./index-DMq3dqvM.mjs");
const featuredOpts = queryOptions({
  queryKey: ["featured-listings"],
  queryFn: () => listFeaturedListings()
});
const Route$a = createFileRoute()({
  head: () => ({
    meta: [{
      title: "Prince Agrawal — Realtor & Loan Officer"
    }, {
      name: "description",
      content: "Serving with Purpose. Leading with Integrity. Realtor & Loan Officer."
    }, {
      property: "og:title",
      content: "Prince Agrawal — Realtor & Loan Officer"
    }, {
      property: "og:description",
      content: "Serving with Purpose. Leading with Integrity."
    }]
  }),
  loader: ({
    context
  }) => context.queryClient.ensureQueryData(featuredOpts),
  component: lazyRouteComponent($$splitComponentImporter$a, "component"),
  errorComponent: lazyRouteComponent($$splitErrorComponentImporter$1, "errorComponent"),
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter$1, "notFoundComponent")
});
const $$splitComponentImporter$9 = () => import("./route-BFsOu0JM.mjs");
const Route$9 = createFileRoute()({
  ssr: false,
  beforeLoad: async () => {
    const {
      data,
      error
    } = await supabase.auth.getUser();
    if (error || !data.user) throw redirect({
      to: "/auth"
    });
    return {
      user: data.user
    };
  },
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./about-CHstXkdS.mjs");
const Route$8 = createFileRoute()({
  head: () => ({
    meta: [{
      title: "About — Prince Agrawal"
    }, {
      name: "description",
      content: "Engineer, entrepreneur, and social-impact advocate dedicated to creating innovative solutions that empower communities."
    }, {
      property: "og:title",
      content: "About — Prince Agrawal"
    }, {
      property: "og:description",
      content: "Engineer, entrepreneur, and social-impact advocate."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./auth-Drk0zQOm.mjs");
const Route$7 = createFileRoute()({
  head: () => ({
    meta: [{
      title: "Sign in — Prince Agrawal"
    }, {
      name: "robots",
      content: "noindex"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./contact-B4y-Y_qo.mjs");
const Route$6 = createFileRoute()({
  head: () => ({
    meta: [{
      title: "Contact — Prince Agrawal"
    }, {
      name: "description",
      content: "Get in touch with Prince Agrawal for a 20-minute, no-pressure conversation about your next home or loan."
    }, {
      property: "og:title",
      content: "Contact — Prince Agrawal"
    }, {
      property: "og:description",
      content: "Get in touch for a 20-minute, no-pressure conversation about your next home or loan."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./loanofficer-BzD-nHPT.mjs");
const Route$5 = createFileRoute()({
  head: () => ({
    meta: [{
      title: "Loan Officer & Mortgage — Prince Agrawal"
    }, {
      name: "description",
      content: "Loan Officer and Mortgage services, financing options, and financial education tools."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./newartofliving-DnWPviTF.mjs");
const Route$4 = createFileRoute()({
  head: () => ({
    meta: [{
      title: "New Art of Living — Prince Agrawal"
    }, {
      name: "description",
      content: "Engineer, entrepreneur, and social impact advocate. Exploring community, architecture, wealth, and living concepts."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./realtor-BmoKwDRt.mjs");
const Route$3 = createFileRoute()({
  head: () => ({
    meta: [{
      title: "Realtor Services & Education — Prince Agrawal"
    }, {
      name: "description",
      content: "Professional listing services, educational guides, and step-by-step roadmaps for buying and selling property."
    }, {
      property: "og:title",
      content: "Realtor Services & Education — Prince Agrawal"
    }, {
      property: "og:description",
      content: "Professional listing services, educational guides, and step-by-step roadmaps for buying and selling property."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./testimonials-CXflYxUr.mjs");
const Route$2 = createFileRoute()({
  head: () => ({
    meta: [{
      title: "Testimonials — Prince Agrawal"
    }, {
      name: "description",
      content: "Real stories from buyers, sellers, and refinance clients across Central Texas."
    }, {
      property: "og:title",
      content: "Testimonials — Prince Agrawal"
    }, {
      property: "og:description",
      content: "Real stories from buyers, sellers, and refinance clients."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const opts = (id) => queryOptions({
  queryKey: ["listing", id],
  queryFn: () => getListing({
    data: {
      id
    }
  })
});
const $$splitNotFoundComponentImporter = () => import("./listings._id-CeQRoq5w.mjs");
const $$splitErrorComponentImporter = () => import("./listings._id-CvMUC1ou.mjs");
const $$splitComponentImporter$1 = () => import("./listings._id-CC0k4GF0.mjs");
const Route$1 = createFileRoute()({
  loader: async ({
    params,
    context
  }) => {
    const data = await context.queryClient.ensureQueryData(opts(params.id));
    if (!data) throw notFound();
    return data;
  },
  head: ({
    loaderData
  }) => ({
    meta: loaderData ? [{
      title: `${loaderData.title} — Prince Agrawal`
    }, {
      name: "description",
      content: `${loaderData.address}, ${loaderData.city}, ${loaderData.state}. ${loaderData.beds} bd · ${loaderData.baths} ba · ${loaderData.sqft.toLocaleString()} sqft.`
    }, {
      property: "og:title",
      content: `${loaderData.title} — Prince Agrawal`
    }, {
      property: "og:description",
      content: `${loaderData.address}, ${loaderData.city}, ${loaderData.state}.`
    }, ...loaderData.cover_image_url ? [{
      property: "og:image",
      content: loaderData.cover_image_url
    }, {
      name: "twitter:image",
      content: loaderData.cover_image_url
    }] : []] : []
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component"),
  errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent"),
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent")
});
const $$splitComponentImporter = () => import("./admin.listings-B4SKEiVY.mjs");
const Route = createFileRoute()({
  head: () => ({
    meta: [{
      title: "Admin · Listings"
    }, {
      name: "robots",
      content: "noindex"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const IndexRoute = Route$a.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$b
});
const AuthenticatedRouteRoute = Route$9.update({
  id: "/_authenticated",
  getParentRoute: () => Route$b
});
const AboutRoute = Route$8.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$b
});
const AuthRoute = Route$7.update({
  id: "/auth",
  path: "/auth",
  getParentRoute: () => Route$b
});
const ContactRoute = Route$6.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$b
});
const LoanofficerRoute = Route$5.update({
  id: "/loanofficer",
  path: "/loanofficer",
  getParentRoute: () => Route$b
});
const NewartoflivingRoute = Route$4.update({
  id: "/newartofliving",
  path: "/newartofliving",
  getParentRoute: () => Route$b
});
const RealtorRoute = Route$3.update({
  id: "/realtor",
  path: "/realtor",
  getParentRoute: () => Route$b
});
const TestimonialsRoute = Route$2.update({
  id: "/testimonials",
  path: "/testimonials",
  getParentRoute: () => Route$b
});
const ListingsIdRoute = Route$1.update({
  id: "/listings/$id",
  path: "/listings/$id",
  getParentRoute: () => Route$b
});
const AuthenticatedAdminListingsRoute = Route.update({
  id: "/admin/listings",
  path: "/admin/listings",
  getParentRoute: () => AuthenticatedRouteRoute
});
const AuthenticatedRouteRouteChildren = {
  AuthenticatedAdminListingsRoute
};
const AuthenticatedRouteRouteWithChildren = AuthenticatedRouteRoute._addFileChildren(AuthenticatedRouteRouteChildren);
const rootRouteChildren = {
  IndexRoute,
  AuthenticatedRouteRoute: AuthenticatedRouteRouteWithChildren,
  AboutRoute,
  AuthRoute,
  ContactRoute,
  LoanofficerRoute,
  NewartoflivingRoute,
  RealtorRoute,
  TestimonialsRoute,
  ListingsIdRoute
};
const routeTree = Route$b._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Route$1 as R,
  createSsrRpc as c,
  deleteListing as d,
  listAllListings as l,
  opts as o,
  router as r,
  upsertListing as u
};
