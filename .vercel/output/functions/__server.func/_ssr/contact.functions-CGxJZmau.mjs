import { c as createServerRpc } from "./createServerRpc-D7q5OIuw.mjs";
import { c as createServerFn } from "./server-Ciq1nt-C.mjs";
import "../_libs/seroval.mjs";
import "../_libs/react.mjs";
import { o as objectType, s as stringType } from "../_libs/zod.mjs";
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
const schema = objectType({
  name: stringType().min(1).max(120),
  email: stringType().email().max(200),
  phone: stringType().max(40).optional().nullable(),
  message: stringType().min(5).max(4e3)
});
const sendContactMessage_createServerFn_handler = createServerRpc({
  id: "f4ab91175279d24fdd2724e2cfe526fe74336bbdfd18bfac38060247ff17403a",
  name: "sendContactMessage",
  filename: "src/lib/contact.functions.ts"
}, (opts) => sendContactMessage.__executeServer(opts));
const sendContactMessage = createServerFn({
  method: "POST"
}).inputValidator((d) => schema.parse(d)).handler(sendContactMessage_createServerFn_handler, async ({
  data
}) => {
  const {
    supabaseAdmin
  } = await import("./client.server-D5ro3rAQ.mjs");
  const db = supabaseAdmin;
  const {
    error
  } = await db.from("contact_messages").insert({
    name: data.name,
    email: data.email,
    phone: data.phone ?? null,
    message: data.message
  });
  if (error) throw new Error(error.message);
  return {
    ok: true
  };
});
export {
  sendContactMessage_createServerFn_handler
};
