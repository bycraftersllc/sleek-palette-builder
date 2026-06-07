import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { z } from "zod";

export type Listing = {
  id: string;
  title: string;
  address: string;
  city: string;
  state: string;
  zip: string | null;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  status: "for_sale" | "pending" | "just_sold";
  description: string | null;
  cover_image_url: string | null;
  gallery: string[];
  featured: boolean;
  created_at: string;
};

async function sb() {
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
  return supabaseAdmin as any;
}

export const listAllListings = createServerFn({ method: "GET" }).handler(async () => {
  const db = await sb();
  const { data, error } = await db.from("listings").select("*").order("created_at", { ascending: false });
  if (error) throw new Error(error.message);
  return (data ?? []) as Listing[];
});

export const listFeaturedListings = createServerFn({ method: "GET" }).handler(async () => {
  const db = await sb();
  const { data, error } = await db
    .from("listings")
    .select("*")
    .eq("featured", true)
    .order("created_at", { ascending: false })
    .limit(3);
  if (error) throw new Error(error.message);
  return (data ?? []) as Listing[];
});

export const getListing = createServerFn({ method: "GET" })
  .inputValidator((d) => z.object({ id: z.string().uuid() }).parse(d))
  .handler(async ({ data }) => {
    const db = await sb();
    const { data: row, error } = await db.from("listings").select("*").eq("id", data.id).maybeSingle();
    if (error) throw new Error(error.message);
    return (row ?? null) as Listing | null;
  });

const upsertSchema = z.object({
  id: z.string().uuid().optional(),
  title: z.string().min(1).max(200),
  address: z.string().min(1).max(200),
  city: z.string().min(1).max(100),
  state: z.string().min(1).max(50),
  zip: z.string().max(20).optional().nullable(),
  price: z.number().min(0),
  beds: z.number().int().min(0),
  baths: z.number().min(0),
  sqft: z.number().int().min(0),
  status: z.enum(["for_sale", "pending", "just_sold"]),
  description: z.string().max(5000).optional().nullable(),
  cover_image_url: z.string().url().optional().nullable(),
  gallery: z.array(z.string().url()).max(20).default([]),
  featured: z.boolean().default(false),
});

async function assertAdmin(userId: string) {
  const db = await sb();
  const { data } = await db.from("user_roles").select("role").eq("user_id", userId).eq("role", "admin").maybeSingle();
  if (!data) throw new Error("Forbidden");
  return db;
}

export const upsertListing = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d) => upsertSchema.parse(d))
  .handler(async ({ data, context }) => {
    const db = await assertAdmin(context.userId);
    if (data.id) {
      const { id, ...rest } = data;
      const { error } = await db.from("listings").update(rest).eq("id", id);
      if (error) throw new Error(error.message);
      return { ok: true, id };
    }
    const { id: _ignore, ...rest } = data;
    const { data: row, error } = await db.from("listings").insert(rest).select("id").single();
    if (error) throw new Error(error.message);
    return { ok: true, id: row.id as string };
  });

export const deleteListing = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d) => z.object({ id: z.string().uuid() }).parse(d))
  .handler(async ({ data, context }) => {
    const db = await assertAdmin(context.userId);
    const { error } = await db.from("listings").delete().eq("id", data.id);
    if (error) throw new Error(error.message);
    return { ok: true };
  });
