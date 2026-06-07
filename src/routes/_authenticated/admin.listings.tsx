import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { SiteLayout, Section } from "@/components/site-shell";
import { listAllListings, upsertListing, deleteListing, type Listing } from "@/lib/listings.functions";
import { checkIsAdmin } from "@/lib/admin.functions";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Pencil, Trash2, Plus, LogOut, ImagePlus } from "lucide-react";

export const Route = createFileRoute("/_authenticated/admin/listings")({
  head: () => ({ meta: [{ title: "Admin · Listings" }, { name: "robots", content: "noindex" }] }),
  component: Page,
});

function Page() {
  const navigate = useNavigate();
  const qc = useQueryClient();
  const fetchListings = useServerFn(listAllListings);
  const fetchIsAdmin = useServerFn(checkIsAdmin);
  const remove = useServerFn(deleteListing);

  const admin = useQuery({ queryKey: ["is-admin"], queryFn: () => fetchIsAdmin() });
  const listings = useQuery({ queryKey: ["all-listings"], queryFn: () => fetchListings() });

  const [editing, setEditing] = useState<Listing | null>(null);
  const [creating, setCreating] = useState(false);

  const del = useMutation({
    mutationFn: (id: string) => remove({ data: { id } }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["all-listings"] });
      qc.invalidateQueries({ queryKey: ["featured-listings"] });
      toast.success("Listing deleted");
    },
    onError: (e: Error) => toast.error(e.message),
  });

  async function signOut() {
    await qc.cancelQueries();
    qc.clear();
    await supabase.auth.signOut();
    navigate({ to: "/auth", replace: true });
  }

  if (admin.isLoading) return <SiteLayout><Section><p>Checking access…</p></Section></SiteLayout>;
  if (!admin.data?.isAdmin) {
    return (
      <SiteLayout>
        <Section>
          <h1 className="display-2">Access required</h1>
          <p className="mt-3 text-muted-foreground max-w-lg">
            Your account isn't an admin yet. Ask the site owner to add your user id to the
            <code className="mx-1 rounded bg-muted px-1.5 py-0.5">user_roles</code> table
            with role <code className="mx-1 rounded bg-muted px-1.5 py-0.5">admin</code>.
          </p>
          <button onClick={signOut} className="mt-6 inline-flex h-11 items-center gap-2 rounded-md border border-border px-5 text-sm">
            <LogOut className="h-4 w-4" /> Sign out
          </button>
        </Section>
      </SiteLayout>
    );
  }

  return (
    <SiteLayout>
      <Section>
        <div className="flex flex-wrap justify-between items-end gap-4">
          <div>
            <p className="eyebrow">Admin</p>
            <h1 className="display-2 mt-2">Listings</h1>
          </div>
          <div className="flex gap-2">
            <button onClick={() => { setCreating(true); setEditing(null); }} className="inline-flex h-11 items-center gap-2 rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground">
              <Plus className="h-4 w-4" /> New listing
            </button>
            <button onClick={signOut} className="inline-flex h-11 items-center gap-2 rounded-md border border-border px-4 text-sm">
              <LogOut className="h-4 w-4" /> Sign out
            </button>
          </div>
        </div>

        <div className="mt-10 overflow-x-auto rounded-md border border-border">
          <table className="w-full text-sm">
            <thead className="bg-muted text-muted-foreground">
              <tr>
                <th className="text-left p-3">Title</th>
                <th className="text-left p-3">Status</th>
                <th className="text-left p-3">Price</th>
                <th className="text-left p-3">Featured</th>
                <th className="text-right p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {(listings.data ?? []).map((l) => (
                <tr key={l.id} className="border-t border-border">
                  <td className="p-3">{l.title} <span className="text-muted-foreground">— {l.city}</span></td>
                  <td className="p-3 capitalize">{l.status.replace("_", " ")}</td>
                  <td className="p-3">${Math.round(l.price).toLocaleString()}</td>
                  <td className="p-3">{l.featured ? "Yes" : "—"}</td>
                  <td className="p-3 text-right">
                    <button onClick={() => { setEditing(l); setCreating(false); }} className="inline-flex h-9 items-center gap-1 rounded-md border border-border px-3 text-xs mr-2">
                      <Pencil className="h-3.5 w-3.5" /> Edit
                    </button>
                    <button onClick={() => { if (confirm("Delete this listing?")) del.mutate(l.id); }} className="inline-flex h-9 items-center gap-1 rounded-md border border-border px-3 text-xs">
                      <Trash2 className="h-3.5 w-3.5" /> Delete
                    </button>
                  </td>
                </tr>
              ))}
              {(listings.data ?? []).length === 0 && (
                <tr><td colSpan={5} className="p-8 text-center text-muted-foreground">No listings yet.</td></tr>
              )}
            </tbody>
          </table>
        </div>

        {(creating || editing) && (
          <ListingForm
            initial={editing}
            onClose={() => { setEditing(null); setCreating(false); }}
            onSaved={() => {
              qc.invalidateQueries({ queryKey: ["all-listings"] });
              qc.invalidateQueries({ queryKey: ["featured-listings"] });
              setEditing(null); setCreating(false);
            }}
          />
        )}
      </Section>
    </SiteLayout>
  );
}

function ListingForm({ initial, onClose, onSaved }: { initial: Listing | null; onClose: () => void; onSaved: () => void }) {
  const save = useServerFn(upsertListing);
  const [uploading, setUploading] = useState(false);
  const [cover, setCover] = useState(initial?.cover_image_url ?? "");
  const [loading, setLoading] = useState(false);

  async function uploadCover(file: File) {
    setUploading(true);
    try {
      const ext = file.name.split(".").pop() || "jpg";
      const path = `${crypto.randomUUID()}.${ext}`;
      const { error } = await supabase.storage.from("listing-images").upload(path, file, { upsert: false });
      if (error) throw error;
      const { data } = supabase.storage.from("listing-images").getPublicUrl(path);
      setCover(data.publicUrl);
      toast.success("Image uploaded");
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Upload failed");
    } finally {
      setUploading(false);
    }
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
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
          zip: (fd.get("zip") as string) || null,
          price: Number(fd.get("price") || 0),
          beds: Number(fd.get("beds") || 0),
          baths: Number(fd.get("baths") || 0),
          sqft: Number(fd.get("sqft") || 0),
          status: fd.get("status") as "for_sale" | "pending" | "just_sold",
          description: (fd.get("description") as string) || null,
          cover_image_url: cover || null,
          gallery: initial?.gallery ?? [],
          featured: fd.get("featured") === "on",
        },
      });
      toast.success("Saved");
      onSaved();
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Save failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-end md:items-center justify-center p-0 md:p-6 overflow-y-auto">
      <div className="bg-background w-full md:max-w-2xl rounded-t-2xl md:rounded-md border border-border max-h-[92vh] overflow-y-auto">
        <form onSubmit={onSubmit} className="p-6 md:p-8 space-y-4">
          <div className="flex justify-between items-center mb-2">
            <h2 className="display-2 text-2xl">{initial ? "Edit listing" : "New listing"}</h2>
            <button type="button" onClick={onClose} className="text-sm text-muted-foreground hover:text-foreground">Close</button>
          </div>
          <FormField label="Title" name="title" defaultValue={initial?.title} required />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField label="Address" name="address" defaultValue={initial?.address} required />
            <FormField label="City" name="city" defaultValue={initial?.city} required />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <FormField label="State" name="state" defaultValue={initial?.state} required />
            <FormField label="Zip" name="zip" defaultValue={initial?.zip ?? ""} />
            <FormField label="Price" name="price" type="number" defaultValue={initial?.price ?? 0} required />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <FormField label="Beds" name="beds" type="number" defaultValue={initial?.beds ?? 0} />
            <FormField label="Baths" name="baths" type="number" step="0.5" defaultValue={initial?.baths ?? 0} />
            <FormField label="Sqft" name="sqft" type="number" defaultValue={initial?.sqft ?? 0} />
          </div>
          <label className="block">
            <span className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">Status</span>
            <select name="status" defaultValue={initial?.status ?? "for_sale"} className="w-full rounded-md bg-muted border border-transparent px-4 py-3">
              <option value="for_sale">For Sale</option>
              <option value="pending">Pending</option>
              <option value="just_sold">Just Sold</option>
            </select>
          </label>
          <label className="block">
            <span className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">Description</span>
            <textarea name="description" defaultValue={initial?.description ?? ""} rows={4} className="w-full rounded-md bg-muted border border-transparent px-4 py-3" />
          </label>

          <div>
            <span className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">Cover image</span>
            {cover && <img src={cover} alt="" className="mb-3 aspect-[4/3] w-full max-w-xs object-cover rounded-md border border-border" />}
            <label className="inline-flex items-center gap-2 cursor-pointer rounded-md border border-border px-4 py-2 text-sm hover:bg-muted">
              <ImagePlus className="h-4 w-4" />
              {uploading ? "Uploading…" : cover ? "Replace image" : "Upload image"}
              <input type="file" accept="image/*" className="hidden" onChange={(e) => { const f = e.target.files?.[0]; if (f) uploadCover(f); }} />
            </label>
          </div>

          <label className="inline-flex items-center gap-3 text-sm">
            <input type="checkbox" name="featured" defaultChecked={initial?.featured ?? false} className="h-4 w-4" />
            Show on homepage as featured
          </label>

          <div className="flex justify-end gap-2 pt-2">
            <button type="button" onClick={onClose} className="h-11 px-5 rounded-md border border-border text-sm">Cancel</button>
            <button disabled={loading} className="h-11 px-6 rounded-md bg-primary text-sm font-medium text-primary-foreground disabled:opacity-60">
              {loading ? "Saving…" : "Save listing"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function FormField({ label, name, type = "text", defaultValue, required, step }: { label: string; name: string; type?: string; defaultValue?: string | number; required?: boolean; step?: string }) {
  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">{label}</span>
      <input
        name={name} type={type} step={step} required={required} defaultValue={defaultValue as any}
        className="w-full rounded-md bg-muted border border-transparent px-4 py-3 text-base focus:bg-background focus:border-foreground focus:outline-none"
      />
    </label>
  );
}
