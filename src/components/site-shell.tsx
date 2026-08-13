import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "HOME" },
  { to: "/realtor", label: "REALTOR" },
  { to: "/loanofficer", label: "LOAN OFFICER" },
  { to: "/newartofliving", label: "NEW ART OF LIVING" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto max-w-7xl px-5 py-3 md:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Title */}
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded border-2 border-primary bg-primary/10 text-primary font-bold text-xl tracking-tighter">
              P
            </div>
            <div>
              <h1 className="text-base md:text-lg font-black uppercase tracking-tight text-foreground leading-none">
                Prince Agrawal - Realtor & Loan Officer
              </h1>
              <p className="mt-1 text-[10px] md:text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Serving with Purpose. Leading with Integrity.
              </p>
            </div>
          </Link>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex lg:hidden h-10 w-10 items-center justify-center rounded-md border border-border"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Navigation Bar Links (Desktop) */}
        <nav className="hidden lg:flex items-center justify-center gap-8 mt-3 pt-2 border-t border-border/50 text-xs font-bold uppercase tracking-wider">
          {NAV.map((n) => {
            const isActive = pathname === n.to;
            return (
              <Link
                key={n.to}
                to={n.to}
                className={cn(
                  "py-1 transition-colors hover:text-primary relative",
                  isActive
                    ? "text-primary font-extrabold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-primary"
                    : "text-foreground/80"
                )}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Mobile Menu Dropdown */}
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="mx-auto flex max-w-7xl flex-col px-5 py-3 text-xs font-bold uppercase tracking-wider">
            {NAV.map((n) => {
              const isActive = pathname === n.to;
              return (
                <Link
                  key={n.to}
                  to={n.to}
                  className={cn(
                    "py-3 border-b border-border/60 last:border-b-0",
                    isActive ? "text-primary font-extrabold" : "text-foreground/80"
                  )}
                >
                  {n.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted/20">
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Prince Agrawal. All rights reserved.</p>
        <p>Serving with Purpose. Leading with Integrity.</p>
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
    <section id={id} className={cn(muted && "bg-muted/40", className)}>
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-10 md:py-16">{children}</div>
    </section>
  );
}