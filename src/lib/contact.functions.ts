import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1).max(120),
  email: z.string().email().max(200),
  phone: z.string().max(40).optional().nullable(),
  message: z.string().min(5).max(4000),
});

export const sendContactMessage = createServerFn({ method: "POST" })
  .inputValidator((d) => schema.parse(d))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const db = supabaseAdmin as any;
    const { error } = await db.from("contact_messages").insert({
      name: data.name,
      email: data.email,
      phone: data.phone ?? null,
      message: data.message,
    });
    if (error) throw new Error(error.message);
    return { ok: true };
  });
