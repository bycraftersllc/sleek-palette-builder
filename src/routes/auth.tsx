import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { SiteLayout, Section } from "@/components/site-shell";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Sign in — Prince Agrawal" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Page,
});

function Page() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const email = String(fd.get("email") ?? "");
    const password = String(fd.get("password") ?? "");
    setLoading(true);
    try {
      if (mode === "signup") {
        const { error } = await supabase.auth.signUp({
          email, password,
          options: { emailRedirectTo: window.location.origin },
        });
        if (error) throw error;
        toast.success("Account created");
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
      }
      navigate({ to: "/admin/listings" });
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <SiteLayout>
      <Section>
        <div className="mx-auto max-w-md">
          <p className="eyebrow text-center">Admin</p>
          <h1 className="display-2 mt-3 text-center">{mode === "signin" ? "Sign in" : "Create account"}</h1>
          <p className="mt-3 text-center text-sm text-muted-foreground">
            Listing management area. Public visitors don't need an account.
          </p>
          <form onSubmit={onSubmit} className="mt-8 space-y-4">
            <Field label="Email" name="email" type="email" required />
            <Field label="Password" name="password" type="password" required />
            <button disabled={loading} className="w-full h-12 rounded-md bg-primary text-sm font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-60">
              {loading ? "…" : mode === "signin" ? "Sign in" : "Create account"}
            </button>
          </form>
          <p className="mt-5 text-center text-sm text-muted-foreground">
            {mode === "signin" ? "Need an account?" : "Already have one?"}{" "}
            <button onClick={() => setMode(mode === "signin" ? "signup" : "signin")} className="underline text-foreground">
              {mode === "signin" ? "Create one" : "Sign in"}
            </button>
          </p>
        </div>
      </Section>
    </SiteLayout>
  );
}

function Field({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">{label}</span>
      <input
        type={type} name={name} required={required}
        className="w-full rounded-md bg-muted border border-transparent px-4 py-3 text-base text-foreground focus:bg-background focus:border-foreground focus:outline-none"
      />
    </label>
  );
}
