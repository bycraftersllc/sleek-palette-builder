import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, Section } from "@/components/site-shell";
import {
  Sparkles,
  Megaphone,
  Home,
  Users,
  BarChart,
  ClipboardList,
  Clock,
  ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/realtor")({
  head: () => ({
    meta: [
      { title: "Realtor Services & Education — Prince Agrawal" },
      {
        name: "description",
        content:
          "Professional listing services, educational guides, and step-by-step roadmaps for buying and selling property.",
      },
      {
        property: "og:title",
        content: "Realtor Services & Education — Prince Agrawal",
      },
      {
        property: "og:description",
        content:
          "Professional listing services, educational guides, and step-by-step roadmaps for buying and selling property.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <HeroDocs />
      <ServicesListingSection />
      <RoadmapSection />
      <TestimonialsSection />
    </SiteLayout>
  );
}

{/* Section 1: Business Card & Contact QR Code */}
function HeroDocs() {
  // Function to generate and download the vCard (.vcf) file
  const handleSaveContact = () => {
    const vcardData = [
      "BEGIN:VCARD",
      "VERSION:3.0",
      "N:Agrawal;Prince;;;",
      "FN:Prince Agrawal",
      "ORG:YETI HOMES, LLC",
      "TITLE:Realtor®",
      "TEL;TYPE=WORK,VOICE:+18176303361",
      "EMAIL;TYPE=WORK:Prince@yetihomesllc.com",
      "ADR;TYPE=WORK:;;222 W. Las Colinas Blvd. Suite 1650E;Irving;TX;75039;United States",
      "URL:https://www.princeagrawal.com",
      "END:VCARD",
    ].join("\n");

    const blob = new Blob([vcardData], { type: "text/vcard;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "Prince_Agrawal_Realtor.vcf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <Section className="border-b border-border bg-background py-10 md:py-16">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-center text-2xl font-black uppercase tracking-wider text-foreground md:text-3xl">
          Realtor Services & Education
        </h1>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {/* Digital Business Card (DOTCARD) with Image Preview */}
          <div className="flex flex-col items-center justify-between rounded-lg border-2 border-dashed border-border bg-card p-6 text-center shadow-sm">
            <div className="w-full overflow-hidden rounded-md border border-border shadow-sm bg-muted">
              <img
                src="/realtor-business-card.png" 
                alt="Prince Agrawal Digital Business Card"
                className="h-auto w-full object-contain"
              />
            </div>
            <div className="mt-4 w-full">
              <h2 className="text-sm font-bold uppercase tracking-tight text-foreground">
                Digital Business Card
              </h2>
              <p className="mt-0.5 text-xs text-muted-foreground">(DOTCARD)</p>
              <button
                onClick={handleSaveContact}
                className="mt-3 w-full rounded-md bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow transition-colors hover:bg-primary/90"
              >
                Save Contact
              </button>
            </div>
          </div>

          {/* Contact QR Code Preview (No Button) */}
          <div className="flex flex-col items-center justify-between rounded-lg border-2 border-dashed border-border bg-card p-6 text-center shadow-sm">
            <div className="w-full overflow-hidden rounded-md border border-border shadow-sm bg-muted">
              <img
                src="/contact-qr.png"
                alt="Contact QR Code"
                className="h-auto w-full object-contain"
              />
            </div>
            <div className="mt-4 w-full">
              <h2 className="text-sm font-bold uppercase tracking-tight text-foreground">
                Contact QR Code
              </h2>
              <p className="mt-0.5 text-xs text-muted-foreground">(SCAN TO SAVE)</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

const LISTING_SERVICES = [
  { icon: Sparkles, title: "Professional staging" },
  { icon: Megaphone, title: "Digital marketing" },
  { icon: Home, title: "Open Houses" },
  { icon: Users, title: "Quick leads" },
  { icon: BarChart, title: "Pricing strategy" },
  { icon: ClipboardList, title: "Marketing plan/analysis" },
  { icon: Home, title: "Open Houses" },
  { icon: Clock, title: "Short-term rental experience & consultation." },
];

{/* Section 2: Services (Listing Service) */}
function ServicesListingSection() {
  return (
    <Section className="border-b border-border bg-muted/20">
      <div className="text-center">
        <h2 className="text-xl font-extrabold uppercase tracking-wider text-foreground md:text-2xl">
          Services (Listing Service)
        </h2>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {LISTING_SERVICES.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="flex items-center gap-3 rounded-md border border-border bg-card p-4 shadow-sm"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded bg-primary/10 text-primary">
                <Icon className="h-4 w-4" />
              </div>
              <span className="text-xs font-medium text-foreground">
                {item.title}
              </span>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

const STEPS = [
  { step: "1", title: "Pre-approval" },
  { step: "2", title: "Loan Estimate" },
  { step: "3", title: "Contract" },
  { step: "4", title: "Inspection" },
  { step: "5", title: "Blue tape walk-through" },
  { step: "6", title: "Second blue tape walk-through" },
  { step: "7", title: "Closing Disclosure" },
  { step: "8", title: "Final Closing" },
  { step: "9", title: "Move-in!" },
];

{/* Section 3: Educational Feature & Steps Roadmap */}
function RoadmapSection() {
  return (
    <Section className="border-b border-border bg-background">
      <div className="text-center">
        <h2 className="text-xl font-extrabold uppercase tracking-wider text-foreground md:text-2xl">
          Educational Feature: Steps in Closing a Property
        </h2>
        <p className="mt-2 text-xs font-semibold uppercase text-muted-foreground">
          Flow Roadmap
        </p>
      </div>

      <div className="mt-10 mx-auto max-w-4xl rounded-lg border border-border bg-muted/30 p-6 md:p-10">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          {STEPS.map((item, idx) => (
            <div key={idx} className="relative flex items-center">
              <div className="flex w-full items-center justify-between rounded-md bg-primary px-4 py-3 text-primary-foreground shadow-sm">
                <span className="text-xs font-bold">
                  {item.step}. {item.title}
                </span>
                {idx < STEPS.length - 1 && (
                  <ArrowRight className="h-3.5 w-3.5 opacity-60 hidden md:inline" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

const REALTOR_TESTIMONIALS = [
  {
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80",
    text: "Prince helped us list and position our home effectively. Communication was prompt and clear throughout the process.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=80",
    text: "Strategic guidance from staging to closing. The marketing plan delivered quality showings within the first week.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80",
    text: "Having a representative who understands both the agent and lender side eliminated unnecessary delays.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80",
    text: "Professional approach with real market analytics. Everything was well coordinated from start to finish.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=80",
    text: "Clear expectations and seamless walkthrough execution. Highly recommend for residential transactions.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=80",
    text: "Prompt responses and practical guidance on listing options. Very structured experience.",
  },
];

{/* Section 4: Testimonials Grid */}
function TestimonialsSection() {
  return (
    <Section className="bg-muted/10">
      <div className="text-center">
        <h2 className="text-xl font-extrabold uppercase tracking-wider text-foreground md:text-2xl">
          Testimonials
        </h2>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {REALTOR_TESTIMONIALS.map((t, idx) => (
          <div
            key={idx}
            className="flex flex-col overflow-hidden rounded-md border border-border bg-card p-5 shadow-sm"
          >
            <div className="aspect-[4/3] w-full overflow-hidden rounded bg-muted">
              <img
                src={t.image}
                alt={`Testimonial client ${idx + 1}`}
                className="h-full w-full object-cover"
              />
            </div>
            <p className="mt-4 text-xs italic text-muted-foreground leading-relaxed">
              "{t.text}"
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}