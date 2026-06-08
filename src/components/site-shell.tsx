import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/listings", label: "Listings" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/articles", label: "Articles" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-5 md:px-8">
        <Link to="/" className="font-display text-lg tracking-tight">
          Prince Agrawal<span className="text-muted-foreground"> · Realty + Lending</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className={cn(
                "text-sm text-foreground/70 transition-colors hover:text-foreground",
                pathname === n.to && "text-foreground font-medium"
              )}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden lg:inline-flex h-10 items-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
        >
          Let's Talk
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex lg:hidden h-11 w-11 items-center justify-center rounded-md border border-border"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="mx-auto flex max-w-7xl flex-col px-5 py-3">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="py-3 text-base text-foreground border-b border-border last:border-b-0"
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-3 inline-flex h-12 items-center justify-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground"
            >
              Let's Talk
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted">
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-12 grid gap-8 md:grid-cols-3">
        <div>
          <p className="font-display text-xl">Prince Agrawal</p>
          <p className="mt-2 text-sm text-muted-foreground max-w-xs">
            Licensed Realtor & Loan Officer. Helping you buy, sell, and finance — with one trusted partner from start to close.
          </p>
        </div>
        <div className="text-sm">
          <p className="eyebrow mb-3">Visit</p>
          <p className="text-foreground/80">120 Market Street, Suite 410</p>
          <p className="text-foreground/80">Austin, TX 78701</p>
        </div>
        <div className="text-sm">
          <p className="eyebrow mb-3">Reach out</p>
          <p className="text-foreground/80">(512) 555-0142</p>
          <p className="text-foreground/80">hello@morganreed.co</p>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-5 flex flex-col md:flex-row justify-between gap-2 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Prince Agrawal. All rights reserved.</p>
          <p>Equal Housing Opportunity · NMLS #1234567</p>
        </div>
      </div>
    </footer>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}

export function Section({
  children,
  className,
  muted = false,
  id,
}: {
  children: ReactNode;
  className?: string;
  muted?: boolean;
  id?: string;
}) {
  return (
    <section id={id} className={cn(muted && "bg-muted", className)}>
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-16 md:py-24">{children}</div>
    </section>
  );
}
