import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, Section } from "@/components/site-shell";
import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { sendContactMessage } from "@/lib/contact.functions";
import { Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Morgan Reed" },
      { name: "description", content: "Get in touch with Morgan Reed for a 20-minute, no-pressure conversation about your next home or loan." },
      { property: "og:title", content: "Contact — Morgan Reed" },
      { property: "og:description", content: "Get in touch for a 20-minute, no-pressure conversation about your next home or loan." },
    ],
  }),
  component: Page,
});

function Page() {
  const send = useServerFn(sendContactMessage);
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setLoading(true);
    try {
      await send({
        data: {
          name: String(fd.get("name") ?? ""),
          email: String(fd.get("email") ?? ""),
          phone: (fd.get("phone") as string) || null,
          message: String(fd.get("message") ?? ""),
        },
      });
      setDone(true);
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <SiteLayout>
      <Section>
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <p className="eyebrow">Get in touch</p>
            <h1 className="display-1 mt-4">Let's Talk.</h1>
            <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
              Tell me a little about what you're looking for. I read every message myself
              and reply within one business day — usually much sooner.
            </p>
            <ul className="mt-8 space-y-2 text-sm text-muted-foreground">
              <li>1. You send a message.</li>
              <li>2. I reply within 24 hours to schedule a 20-minute call.</li>
              <li>3. We make a plan that fits your timeline. No pressure, ever.</li>
            </ul>
            <div className="mt-10 space-y-3 text-sm">
              <p className="flex items-center gap-3"><Phone className="h-4 w-4 text-muted-foreground" /><span>(512) 555-0142</span></p>
              <p className="flex items-center gap-3"><Mail className="h-4 w-4 text-muted-foreground" /><span>hello@morganreed.co</span></p>
              <p className="flex items-center gap-3"><MapPin className="h-4 w-4 text-muted-foreground" /><span>120 Market Street, Suite 410, Austin, TX</span></p>
            </div>
          </div>

          <div>
            {done ? (
              <div className="rounded-md border border-border bg-muted p-10 text-center">
                <CheckCircle2 className="h-10 w-10 mx-auto text-foreground" />
                <h2 className="display-2 mt-5">Message sent.</h2>
                <p className="mt-3 text-muted-foreground">
                  Thanks — I'll be in touch within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4">
                <Field label="Name" name="name" required />
                <Field label="Email" name="email" type="email" required />
                <Field label="Phone (optional)" name="phone" type="tel" />
                <Field label="What's on your mind?" name="message" textarea required />
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full md:w-auto inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-60"
                >
                  {loading ? "Sending…" : "Send message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </Section>
    </SiteLayout>
  );
}

function Field({
  label, name, type = "text", textarea = false, required = false,
}: { label: string; name: string; type?: string; textarea?: boolean; required?: boolean }) {
  const common =
    "w-full rounded-md bg-muted border border-transparent px-4 py-3 text-base text-foreground placeholder:text-muted-foreground transition-colors focus:bg-background focus:border-foreground focus:outline-none";
  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">{label}</span>
      {textarea ? (
        <textarea name={name} required={required} rows={5} className={common} />
      ) : (
        <input type={type} name={name} required={required} className={common} />
      )}
    </label>
  );
}
