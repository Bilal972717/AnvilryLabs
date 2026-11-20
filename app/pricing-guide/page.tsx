import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Reveal } from "@/components/Reveal";
import { ServiceCta } from "@/components/ServiceCta";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pricing guide",
  description:
    "How Anvilry Labs prices websites and software: fixed scope, written quotes, and what moves cost — without hidden fees.",
  alternates: { canonical: "/pricing-guide" },
  openGraph: {
    title: "Website & software pricing guide · Anvilry Labs",
    description:
      "What drives cost, how fixed quotes work, and which service line fits your timeline and budget.",
    url: absoluteUrl("/pricing-guide"),
  },
};

const levers = [
  {
    title: "Scope and uniqueness",
    body: "Unique workflows and custom UI cost more than tailored templates. That is the main split between Bespoke and Accelerated.",
  },
  {
    title: "Integrations",
    body: "CRM, payments, bookings, membership and data migrations add engineering time — and should be listed in Blueprint.",
  },
  {
    title: "Content readiness",
    body: "Missing copy, assets or decisions stretch calendars. Ready content keeps Accelerated launches in weeks.",
  },
  {
    title: "Care after launch",
    body: "Hosting, updates, monitoring and SEO retainers are optional and quoted separately from the build.",
  },
];

const tracks = [
  {
    title: "Accelerated Builds",
    body: "Fastest path to a polished marketing site. Smaller investment, shorter timeline, template foundation tailored to your brand.",
    href: "/services/accelerated-builds",
  },
  {
    title: "Managed Platforms & CMS",
    body: "Editor-friendly sites with training. Build cost plus optional monthly care for hosting and updates.",
    href: "/services/managed-platforms",
  },
  {
    title: "Bespoke Builds",
    body: "Custom websites, apps and software. Higher investment, scoped to your process, with milestone demos and full ownership.",
    href: "/services/bespoke-builds",
  },
  {
    title: "Findability",
    body: "Audits, project SEO or retainers. Priced to the pages and outcomes in scope — start with a free written audit.",
    href: "/services/findability",
  },
];

export default function PricingGuidePage() {
  return (
    <div className="bg-workshop">
      <section className="mx-auto max-w-6xl px-5 pb-10 pt-16 sm:px-8 sm:pt-24">
        <Reveal>
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Pricing guide" },
            ]}
          />
          <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.08em] text-steel">
            Pricing guide
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-medium tracking-tight text-ink sm:text-6xl">
            Clear pricing. No hidden costs.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-steel">
            We quote fixed scope in writing before production. Changes are
            priced before they are built. Exact figures depend on your brief —
            this guide explains what moves the number and which track fits.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl space-y-16 px-5 pb-24 sm:px-8">
        <Reveal className="border-t border-line pt-10">
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink">
            What moves the cost
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {levers.map((item) => (
              <div
                key={item.title}
                className="border border-line bg-paper-elevated p-5"
              >
                <h3 className="font-display text-xl font-bold tracking-tight text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-steel">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="border-t border-line pt-10">
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink">
            Service tracks
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {tracks.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="border border-line bg-paper-elevated p-5 transition hover:border-heat/35 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-heat"
              >
                <h3 className="font-display text-xl font-bold tracking-tight text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-steel">
                  {item.body}
                </p>
                <p className="mt-4 text-sm font-semibold text-brass">
                  View service →
                </p>
              </Link>
            ))}
          </div>
        </Reveal>

        <Reveal className="border-t border-line pt-10">
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink">
            How a quote works
          </h2>
          <ol className="mt-6 space-y-4">
            {[
              "Share goals, constraints and must-have integrations.",
              "We produce a Blueprint: scope, timeline, risks and named contact.",
              "You get a fixed quote for that scope — changes quoted separately.",
              "Build starts only after written agreement.",
            ].map((step, index) => (
              <li key={step} className="flex gap-4 text-base text-steel">
                <span className="font-mono text-[11px] text-heat-deep">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
          <p className="mt-6 max-w-2xl text-sm text-steel">
            For a number tied to your project, book a consultation or start from
            the{" "}
            <Link
              href="/journal/what-a-website-really-costs"
              className="font-semibold text-brass underline decoration-heat/60 underline-offset-4 hover:text-ink"
            >
              website cost guide
            </Link>
            .
          </p>
        </Reveal>

        <Reveal>
          <ServiceCta
            title="Get a quote for your brief"
            body="Book a free consultation — we will map the right service line and tell you what drives cost for your scope."
          />
        </Reveal>
      </section>
    </div>
  );
}
