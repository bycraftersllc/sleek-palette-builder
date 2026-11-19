import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { e as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { a as useQueryClient, b as useQuery, c as useMutation } from "../_libs/tanstack__react-query.mjs";
import { u as useServerFn } from "./useServerFn-DL2oePlL.mjs";
import { S as SiteLayout, a as Section } from "./site-shell-BzsjVe7w.mjs";
import { u as upsertListing, d as deleteListing, c as createSsrRpc, l as listAllListings } from "./router-BXI9m2-B.mjs";
import { c as createServerFn } from "./server-Ciq1nt-C.mjs";
import { r as requireSupabaseAuth } from "./auth-middleware-CCVBDlKQ.mjs";
import { s as supabase } from "./client-aa1TxwEX.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import "../_libs/seroval.mjs";
import { L as LogOut, m as Plus, n as Pencil, T as Trash2, I as ImagePlus } from "../_libs/lucide-react.mjs";
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
import "../_libs/tanstack__query-core.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/zod.mjs";
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
const checkIsAdmin = createServerFn({
  method: "GET"
}).middleware([requireSupabaseAuth]).handler(createSsrRpc("d7ab752d5c5280d2ee84a9875749b1cba0d95c7bbe892baa67e4f3368bfac36c"));
function Page() {
  const navigate = useNavigate();
  const qc = useQueryClient();
  const fetchListings = useServerFn(listAllListings);
  const fetchIsAdmin = useServerFn(checkIsAdmin);
  const remove = useServerFn(deleteListing);
  const admin = useQuery({
    queryKey: ["is-admin"],
    queryFn: () => fetchIsAdmin()
  });
  const listings = useQuery({
    queryKey: ["all-listings"],
    queryFn: () => fetchListings()
  });
  const [editing, setEditing] = reactExports.useState(null);
  const [creating, setCreating] = reactExports.useState(false);
  const del = useMutation({
    mutationFn: (id) => remove({
      data: {
        id
      }
    }),
    onSuccess: () => {
      qc.invalidateQueries({
        queryKey: ["all-listings"]
      });
      qc.invalidateQueries({
        queryKey: ["featured-listings"]
      });
      toast.success("Listing deleted");
    },
    onError: (e) => toast.error(e.message)
  });
  async function signOut() {
    await qc.cancelQueries();
    qc.clear();
    await supabase.auth.signOut();
    navigate({
      to: "/auth",
      replace: true
    });
  }
  if (admin.isLoading) return /* @__PURE__ */ jsxRuntimeExports.jsx(SiteLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Checking access…" }) }) });
  if (!admin.data?.isAdmin) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(SiteLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "display-2", children: "Access required" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 text-muted-foreground max-w-lg", children: [
        "Your account isn't an admin yet. Ask the site owner to add your user id to the",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "mx-1 rounded bg-muted px-1.5 py-0.5", children: "user_roles" }),
        " table with role",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "mx-1 rounded bg-muted px-1.5 py-0.5", children: "admin" }),
        "."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: signOut, className: "mt-6 inline-flex h-11 items-center gap-2 rounded-md border border-border px-5 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "h-4 w-4" }),
        " Sign out"
      ] })
    ] }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SiteLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap justify-between items-end gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow", children: "Admin" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "display-2 mt-2", children: "Listings" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => {
          setCreating(true);
          setEditing(null);
        }, className: "inline-flex h-11 items-center gap-2 rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }),
          " New listing"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: signOut, className: "inline-flex h-11 items-center gap-2 rounded-md border border-border px-4 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "h-4 w-4" }),
          " Sign out"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 overflow-x-auto rounded-md border border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-muted text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left p-3", children: "Title" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left p-3", children: "Status" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left p-3", children: "Price" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left p-3", children: "Featured" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right p-3", children: "Actions" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
        (listings.data ?? []).map((l) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-t border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "p-3", children: [
            l.title,
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
              "— ",
              l.city
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 capitalize", children: l.status.replace("_", " ") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "p-3", children: [
            "$",
            Math.round(l.price).toLocaleString()
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3", children: l.featured ? "Yes" : "—" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "p-3 text-right", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => {
              setEditing(l);
              setCreating(false);
            }, className: "inline-flex h-9 items-center gap-1 rounded-md border border-border px-3 text-xs mr-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "h-3.5 w-3.5" }),
              " Edit"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => {
              if (confirm("Delete this listing?")) del.mutate(l.id);
            }, className: "inline-flex h-9 items-center gap-1 rounded-md border border-border px-3 text-xs", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-3.5 w-3.5" }),
              " Delete"
            ] })
          ] })
        ] }, l.id)),
        (listings.data ?? []).length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: 5, className: "p-8 text-center text-muted-foreground", children: "No listings yet." }) })
      ] })
    ] }) }),
    (creating || editing) && /* @__PURE__ */ jsxRuntimeExports.jsx(ListingForm, { initial: editing, onClose: () => {
      setEditing(null);
      setCreating(false);
    }, onSaved: () => {
      qc.invalidateQueries({
        queryKey: ["all-listings"]
      });
      qc.invalidateQueries({
        queryKey: ["featured-listings"]
      });
      setEditing(null);
      setCreating(false);
    } })
  ] }) });
}
function ListingForm({
  initial,
  onClose,
  onSaved
}) {
  const save = useServerFn(upsertListing);
  const [uploading, setUploading] = reactExports.useState(false);
  const [cover, setCover] = reactExports.useState(initial?.cover_image_url ?? "");
  const [loading, setLoading] = reactExports.useState(false);
  async function uploadCover(file) {
    setUploading(true);
    try {
      const ext = file.name.split(".").pop() || "jpg";
      const path = `${crypto.randomUUID()}.${ext}`;
      const {
        error
      } = await supabase.storage.from("listing-images").upload(path, file, {
        upsert: false
      });
      if (error) throw error;
      const {
        data
      } = supabase.storage.from("listing-images").getPublicUrl(path);
      setCover(data.publicUrl);
      toast.success("Image uploaded");
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Upload failed");
    } finally {
      setUploading(false);
    }
  }
  async function onSubmit(e) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setLoading(true);
    try {
      await save({
        data: {
          id: initial?.id,
          title: String(fd.get("title")),
          address: String(fd.get("address")),
          city: String(fd.get("city")),
          state: String(fd.get("state")),
          zip: fd.get("zip") || null,
          price: Number(fd.get("price") || 0),
          beds: Number(fd.get("beds") || 0),
          baths: Number(fd.get("baths") || 0),
          sqft: Number(fd.get("sqft") || 0),
          status: fd.get("status"),
          description: fd.get("description") || null,
          cover_image_url: cover || null,
          gallery: initial?.gallery ?? [],
          featured: fd.get("featured") === "on"
        }
      });
      toast.success("Saved");
      onSaved();
    } catch (e2) {
      toast.error(e2 instanceof Error ? e2.message : "Save failed");
    } finally {
      setLoading(false);
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 bg-black/40 flex items-end md:items-center justify-center p-0 md:p-6 overflow-y-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-background w-full md:max-w-2xl rounded-t-2xl md:rounded-md border border-border max-h-[92vh] overflow-y-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit, className: "p-6 md:p-8 space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "display-2 text-2xl", children: initial ? "Edit listing" : "New listing" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: onClose, className: "text-sm text-muted-foreground hover:text-foreground", children: "Close" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FormField, { label: "Title", name: "title", defaultValue: initial?.title, required: true }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FormField, { label: "Address", name: "address", defaultValue: initial?.address, required: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FormField, { label: "City", name: "city", defaultValue: initial?.city, required: true })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FormField, { label: "State", name: "state", defaultValue: initial?.state, required: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FormField, { label: "Zip", name: "zip", defaultValue: initial?.zip ?? "" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FormField, { label: "Price", name: "price", type: "number", defaultValue: initial?.price ?? 0, required: true })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FormField, { label: "Beds", name: "beds", type: "number", defaultValue: initial?.beds ?? 0 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FormField, { label: "Baths", name: "baths", type: "number", step: "0.5", defaultValue: initial?.baths ?? 0 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FormField, { label: "Sqft", name: "sqft", type: "number", defaultValue: initial?.sqft ?? 0 })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-xs uppercase tracking-widest text-muted-foreground mb-2", children: "Status" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { name: "status", defaultValue: initial?.status ?? "for_sale", className: "w-full rounded-md bg-muted border border-transparent px-4 py-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "for_sale", children: "For Sale" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "pending", children: "Pending" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "just_sold", children: "Just Sold" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-xs uppercase tracking-widest text-muted-foreground mb-2", children: "Description" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { name: "description", defaultValue: initial?.description ?? "", rows: 4, className: "w-full rounded-md bg-muted border border-transparent px-4 py-3" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-xs uppercase tracking-widest text-muted-foreground mb-2", children: "Cover image" }),
      cover && /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: cover, alt: "", className: "mb-3 aspect-[4/3] w-full max-w-xs object-cover rounded-md border border-border" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "inline-flex items-center gap-2 cursor-pointer rounded-md border border-border px-4 py-2 text-sm hover:bg-muted", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ImagePlus, { className: "h-4 w-4" }),
        uploading ? "Uploading…" : cover ? "Replace image" : "Upload image",
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "file", accept: "image/*", className: "hidden", onChange: (e) => {
          const f = e.target.files?.[0];
          if (f) uploadCover(f);
        } })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "inline-flex items-center gap-3 text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", name: "featured", defaultChecked: initial?.featured ?? false, className: "h-4 w-4" }),
      "Show on homepage as featured"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-2 pt-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: onClose, className: "h-11 px-5 rounded-md border border-border text-sm", children: "Cancel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { disabled: loading, className: "h-11 px-6 rounded-md bg-primary text-sm font-medium text-primary-foreground disabled:opacity-60", children: loading ? "Saving…" : "Save listing" })
    ] })
  ] }) }) });
}
function FormField({
  label,
  name,
  type = "text",
  defaultValue,
  required,
  step
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-xs uppercase tracking-widest text-muted-foreground mb-2", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { name, type, step, required, defaultValue, className: "w-full rounded-md bg-muted border border-transparent px-4 py-3 text-base focus:bg-background focus:border-foreground focus:outline-none" })
  ] });
}
export {
  Page as component
};
