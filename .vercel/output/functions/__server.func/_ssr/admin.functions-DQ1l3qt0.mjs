import { c as createServerRpc } from "./createServerRpc-D7q5OIuw.mjs";
import { c as createServerFn } from "./server-Ciq1nt-C.mjs";
import { r as requireSupabaseAuth } from "./auth-middleware-CCVBDlKQ.mjs";
import "../_libs/seroval.mjs";
import "../_libs/react.mjs";
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
const checkIsAdmin_createServerFn_handler = createServerRpc({
  id: "d7ab752d5c5280d2ee84a9875749b1cba0d95c7bbe892baa67e4f3368bfac36c",
  name: "checkIsAdmin",
  filename: "src/lib/admin.functions.ts"
}, (opts) => checkIsAdmin.__executeServer(opts));
const checkIsAdmin = createServerFn({
  method: "GET"
}).middleware([requireSupabaseAuth]).handler(checkIsAdmin_createServerFn_handler, async ({
  context
}) => {
  const {
    supabaseAdmin
  } = await import("./client.server-D5ro3rAQ.mjs");
  const db = supabaseAdmin;
  const {
    data
  } = await db.from("user_roles").select("role").eq("user_id", context.userId).eq("role", "admin").maybeSingle();
  return {
    isAdmin: Boolean(data)
  };
});
export {
  checkIsAdmin_createServerFn_handler
};
