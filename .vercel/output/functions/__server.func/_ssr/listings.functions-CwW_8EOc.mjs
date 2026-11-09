import { c as createServerRpc } from "./createServerRpc-D7q5OIuw.mjs";
import { c as createServerFn } from "./server-Ciq1nt-C.mjs";
import { r as requireSupabaseAuth } from "./auth-middleware-CCVBDlKQ.mjs";
import "../_libs/seroval.mjs";
import "../_libs/react.mjs";
import { o as objectType, s as stringType, b as booleanType, a as arrayType, e as enumType, n as numberType } from "../_libs/zod.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:stream";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/supabase__supabase-js.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "tslib";
import "../_libs/supabase__functions-js.mjs";
async function sb() {
  const {
    supabaseAdmin
  } = await import("./client.server-D5ro3rAQ.mjs");
  return supabaseAdmin;
}
const listAllListings_createServerFn_handler = createServerRpc({
  id: "ae8c674a4c26bba8cb7fcdc0cdab443eb2960ae7901e083e3784e6a588abc7cd",
  name: "listAllListings",
  filename: "src/lib/listings.functions.ts"
}, (opts) => listAllListings.__executeServer(opts));
const listAllListings = createServerFn({
  method: "GET"
}).handler(listAllListings_createServerFn_handler, async () => {
  try {
    const db = await sb();
    const {
      data,
      error
    } = await db.from("listings").select("*").order("created_at", {
      ascending: false
    });
    if (error) return [];
    return data ?? [];
  } catch {
    return [];
  }
});
const listFeaturedListings_createServerFn_handler = createServerRpc({
  id: "edbd608d2b62470fcc8dc458ab16ac6c569f72ba3973b95c92288b3ae5d0db05",
  name: "listFeaturedListings",
  filename: "src/lib/listings.functions.ts"
}, (opts) => listFeaturedListings.__executeServer(opts));
const listFeaturedListings = createServerFn({
  method: "GET"
}).handler(listFeaturedListings_createServerFn_handler, async () => {
  try {
    const db = await sb();
    const {
      data,
      error
    } = await db.from("listings").select("*").eq("featured", true).order("created_at", {
      ascending: false
    }).limit(3);
    if (error) return [];
    return data ?? [];
  } catch {
    return [];
  }
});
const getListing_createServerFn_handler = createServerRpc({
  id: "3534642b2e7440be71e815e5e597a1650d0dfc52d9ceb96bbaad3e6a46f731ec",
  name: "getListing",
  filename: "src/lib/listings.functions.ts"
}, (opts) => getListing.__executeServer(opts));
const getListing = createServerFn({
  method: "GET"
}).inputValidator((d) => objectType({
  id: stringType().uuid()
}).parse(d)).handler(getListing_createServerFn_handler, async ({
  data
}) => {
  const db = await sb();
  const {
    data: row,
    error
  } = await db.from("listings").select("*").eq("id", data.id).maybeSingle();
  if (error) throw new Error(error.message);
  return row ?? null;
});
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
async function assertAdmin(userId) {
  const db = await sb();
  const {
    data
  } = await db.from("user_roles").select("role").eq("user_id", userId).eq("role", "admin").maybeSingle();
  if (!data) throw new Error("Forbidden");
  return db;
}
const upsertListing_createServerFn_handler = createServerRpc({
  id: "376df0fd8d5f5bd05d24046e603f537ff26e9af7289cc6cda7ea4a0b499177f0",
  name: "upsertListing",
  filename: "src/lib/listings.functions.ts"
}, (opts) => upsertListing.__executeServer(opts));
const upsertListing = createServerFn({
  method: "POST"
}).middleware([requireSupabaseAuth]).inputValidator((d) => upsertSchema.parse(d)).handler(upsertListing_createServerFn_handler, async ({
  data,
  context
}) => {
  const db = await assertAdmin(context.userId);
  if (data.id) {
    const {
      id,
      ...rest2
    } = data;
    const {
      error: error2
    } = await db.from("listings").update(rest2).eq("id", id);
    if (error2) throw new Error(error2.message);
    return {
      ok: true,
      id
    };
  }
  const {
    id: _ignore,
    ...rest
  } = data;
  const {
    data: row,
    error
  } = await db.from("listings").insert(rest).select("id").single();
  if (error) throw new Error(error.message);
  return {
    ok: true,
    id: row.id
  };
});
const deleteListing_createServerFn_handler = createServerRpc({
  id: "355748bb4fe1e0a54a381e93ab4522e771d97f4bef08293a6bcb103a57b5d2f2",
  name: "deleteListing",
  filename: "src/lib/listings.functions.ts"
}, (opts) => deleteListing.__executeServer(opts));
const deleteListing = createServerFn({
  method: "POST"
}).middleware([requireSupabaseAuth]).inputValidator((d) => objectType({
  id: stringType().uuid()
}).parse(d)).handler(deleteListing_createServerFn_handler, async ({
  data,
  context
}) => {
  const db = await assertAdmin(context.userId);
  const {
    error
  } = await db.from("listings").delete().eq("id", data.id);
  if (error) throw new Error(error.message);
  return {
    ok: true
  };
});
export {
  deleteListing_createServerFn_handler,
  getListing_createServerFn_handler,
  listAllListings_createServerFn_handler,
  listFeaturedListings_createServerFn_handler,
  upsertListing_createServerFn_handler
};
