import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { AuditTrigger } from "@/components/AuditTrigger";
import { ConsultationTrigger } from "@/components/ConsultationTrigger";
import { Faq } from "@/components/Faq";
import { ForgeBackdrop } from "@/components/ForgeBackdrop";
import { JsonLd } from "@/components/JsonLd";
import { ProcessStages } from "@/components/ProcessStages";
import { Reveal } from "@/components/Reveal";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import { faqPageJsonLd, homeFaqs } from "@/lib/faqs";
import { industryPages } from "@/lib/industries";

export const metadata: Metadata = {
  title: {
    absolute: "Anvilry Labs — Software, properly forged.",
  },
  description:
    "Custom software, websites, apps and SEO from Anvilry Labs. Fixed scope, named contact, free consultation and free written audit for new enquiries.",
  alternates: { canonical: "/" },
};

const audiences = [
  {
    n: "01",
    title: "Founders and startups",
    body: "Speed without a shaky foundation. Clear scope and room to grow.",
  },
  {
    n: "02",
    title: "Small and medium businesses",
    body: "Reliable sites, predictable pricing and being found online.",
  },
  {
    n: "03",
    title: "Established brands",
    body: "Quality, security and accountability with documented process.",
  },
  {
    n: "04",
    title: "International clients",
    body: "Trust at a distance: a clear update rhythm, everything in writing.",
  },
];

const services = [
  {
    line: "Bespoke",
    title: "Custom software",
    body: "Web apps and platforms shaped around how your business works.",
  },
  {
    line: "Bespoke",
    title: "Web development",
    body: "Fast, secure websites, designed and engineered from scratch.",
  },
  {
    line: "Bespoke",
    title: "App development",
    body: "iOS and Android apps, from idea to the stores.",
  },
  {
    line: "Accelerated",
    title: "Template-based builds",
    body: "A polished launch in weeks, tailored to your brand.",
  },
  {
    line: "Managed",
    title: "CMS-based builds",
    body: "Sites your team can run, with training and support.",
  },
  {
    line: "Managed",
    title: "Ecommerce stores",
    body: "Stores built for speed, conversion and easy management.",
  },
  {
    line: "Findability",
    title: "SEO",
    body: "Technical audits, on-page work and content strategy.",
  },
  {
    line: "Findability",
    title: "Reporting",
    body: "Monthly numbers in plain language, with next steps.",
  },
];

const problems = [
  {
    title: "Launches slip",
    body: "Dates agreed, then missed. We ship on the date we agree and show progress weekly.",
  },
  {
    title: "Sites nobody finds",
    body: "A good build with no search plan. SEO is part of ours from the first sprint.",
  },
  {
    title: "Locked in",
    body: "Agencies that hold the keys. We hand over code, assets and documentation.",
  },
];

const reasons = [
  {
    n: "01",
    title: "One team owns the build",
    body: "Scope, design, build and release in one place. No hand-offs.",
  },
  {
    n: "02",
    title: "Engineering rigor",
    body: "We prove it works before we say it works.",
  },
  {
    n: "03",
    title: "Built around outcomes",
    body: "Traffic, enquiries and reliability, not just pages.",
  },
  {
    n: "04",
    title: "Aligned to how you work",
    body: "Time-zone overlap and a rhythm agreed up front.",
  },
];

const stack = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Python",
  "PostgreSQL",
  "WordPress",
  "Shopify",
  "WooCommerce",
  "Webflow",
  "Laravel",
  "React Native",
  "Flutter",
  "Figma",
  "Tailwind CSS",
  "Stripe",
  "Vercel",
  "Cloudflare",
];


export default function Home() {
  return (
    <>
      <JsonLd data={faqPageJsonLd(homeFaqs)} />
      <Script
        src="https://www.googletagmanager.com/gtm.js?id=G-TC4CR073C0"
        strategy="afterInteractive"
      />
      <Script id="gtm-datalayer" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-TC4CR073C0');
        `}
      </Script>
      <Script
        src="https://www.googletagmanager.com/gtm.js?id=GTM-KRQ2SS42"
        strategy="afterInteractive"
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-paper">
        <ForgeBackdrop />
        <div className="relative mx-auto flex min-h-[calc(100svh-var(--site-header-h))] max-w-6xl items-end px-5 pb-16 pt-20 sm:items-center sm:px-8 sm:pb-24 sm:pt-16">
          <div className="relative z-10 max-w-xl lg:max-w-2xl">
            <div className="animate-rise flex items-center gap-3">
              <span className="h-px w-8 bg-heat sm:w-10" aria-hidden="true" />
              <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-heat-deep">
                Software, properly forged
              </p>
            </div>

            <h1 className="animate-rise-delay-1 mt-6 font-display text-[clamp(3.75rem,11vw,7.75rem)] font-medium leading-[0.84] tracking-[-0.045em] text-ink">
              Anvilry
              <span className="block">Labs</span>
            </h1>

            <p className="animate-rise-delay-2 mt-7 max-w-md text-lg leading-relaxed text-ink-soft sm:mt-8 sm:text-xl">
              Software that holds up — then made easy to find.
            </p>

            <div className="animate-rise-delay-3 mt-9 flex flex-wrap items-center gap-3 sm:mt-11">
              <ConsultationTrigger className="btn-heat rounded-lg px-7 py-3.5 text-sm font-semibold text-ink">
                Book a free consultation
              </ConsultationTrigger>
              <AuditTrigger className="btn-ghost rounded-lg px-7 py-3.5 text-sm font-semibold text-ink">
                Get my free audit
              </AuditTrigger>
            </div>
          </div>
        </div>
      </section>

      {/* Commitments + stack */}
      <section className="relative overflow-hidden border-y border-line bg-[#101a2e] text-[#f6f2ea]">
        <div className="heat-bar absolute inset-x-0 top-0 h-px" />
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
          <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#cf7f48]">
            Built into every engagement
          </p>

          <dl className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-0">
            {[
              ["6", "Stages", "Each with a visible output"],
              ["4", "Service lines", "One standard throughout"],
              ["1", "Named contact", "On every project"],
              ["0", "Hidden costs", "Changes quoted first"],
            ].map(([stat, title, label], i) => (
              <div
                key={title}
                className={`sm:px-6 ${i > 0 ? "sm:border-l sm:border-white/10" : "sm:pl-0"}`}
              >
                <dt className="font-display text-5xl font-medium tracking-tight text-[#f6f2ea] sm:text-6xl">
                  {stat}
                </dt>
                <dd className="mt-3">
                  <p className="text-sm font-semibold text-[#f6f2ea]">{title}</p>
                  <p className="mt-1 text-sm leading-snug text-[#f6f2ea]/60">
                    {label}
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div
          className="relative overflow-hidden border-t border-white/10 py-4"
          aria-hidden="true"
        >
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#101a2e] to-transparent sm:w-24" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#101a2e] to-transparent sm:w-24" />
          <div className="marquee-track flex w-max items-center gap-8 whitespace-nowrap px-6">
            {[...stack, ...stack].map((item, i) => (
              <span
                key={`${item}-${i}`}
                className="inline-flex items-center gap-8 font-mono text-[11px] uppercase tracking-[0.08em] text-[#f6f2ea]/55"
              >
                {item}
                <span className="h-1 w-1 rounded-full bg-[#cf7f48]/70" />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Who we help */}
      <section className="relative overflow-hidden bg-workshop py-20 sm:py-28">
        <div className="pointer-events-none absolute -left-20 top-20 h-72 w-72 rounded-full bg-heat/5 blur-3xl" />
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-steel">
              Who we help
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
              Built for people who want it done properly.
            </h2>
            <p className="mt-4 max-w-xl text-base text-steel">
              The identity never changes. Only the emphasis does.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {audiences.map((item, i) => (
              <Reveal
                key={item.n}
                delayMs={i * 70}
                className="surface-card group relative overflow-hidden rounded-2xl p-7 sm:p-8"
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-heat/0 blur-2xl transition duration-500 group-hover:bg-heat/8" />
                <p className="relative font-mono text-[11px] text-brass">{item.n}</p>
                <h3 className="relative mt-3 font-display text-2xl font-bold tracking-tight text-ink">
                  {item.title}
                </h3>
                <p className="relative mt-3 text-base leading-relaxed text-steel">{item.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Craft */}
      <section className="relative overflow-hidden bg-forge-plane py-20 sm:py-28">
        <div className="noise-overlay absolute inset-0" />
        <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid items-end gap-10 lg:grid-cols-[1fr_1.1fr]">
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-steel">
                Craft you can see
              </p>
              <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
                Design and engineering, side by side.
              </h2>
              <p className="mt-4 max-w-md text-base text-steel">
                Real interface work, built on a grid, tested on every screen.
              </p>
            </Reveal>

            <Reveal delayMs={120} className="panel-shadow overflow-hidden rounded-2xl border border-line bg-[#1a2740]">
              <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3 font-mono text-[11px] text-[#f6f2ea]/60">
                <span className="h-2.5 w-2.5 rounded-full bg-heat" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#f6f2ea]/35" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#f6f2ea]/20" />
                <span className="ml-2 text-[#f6f2ea]/70">build.ts</span>
              </div>
              <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-7 text-[#f6f2ea]/85 sm:p-8 sm:text-sm">
                <code>{`const brief = await listen();
const plan = blueprint(brief);
const site = forge(plan, { demo: true });
await proof(site); // tests pass
launch(site).thenCare();`}</code>
              </pre>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-workshop py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-steel">
                  Services
                </p>
                <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
                  What we build.
                </h2>
                <p className="mt-4 max-w-xl text-base text-steel">
                  Four service lines, one standard. We describe the work by the outcome.
                </p>
              </div>
              <Link
                href="/services"
                className="text-sm font-semibold text-brass underline decoration-heat/50 underline-offset-4 hover:text-ink hover:decoration-heat"
              >
                Full service detail →
              </Link>
            </div>
          </Reveal>

          <div className="mt-12 space-y-2">
            {services.map((item, i) => (
              <Reveal
                key={item.title}
                delayMs={i * 35}
                className="service-row rounded-xl border border-line bg-panel/90 px-5 py-6 shadow-[0_1px_0_rgba(16,19,26,0.03)] sm:px-6"
              >
                <div className="grid items-baseline gap-3 sm:grid-cols-[7.5rem_1fr_1.15fr]">
                  <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-brass">
                    {item.line}
                  </p>
                  <h3 className="font-display text-2xl font-bold tracking-tight text-ink">
                    {item.title}
                  </h3>
                  <p className="text-base leading-relaxed text-steel">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="relative overflow-hidden bg-forge py-20 sm:py-28">
        <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-heat/5 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-steel">
              Process reel
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
              Watch a project take shape.
            </h2>
            <p className="mt-4 max-w-xl text-base text-steel">
              Six stages. A working demo at every milestone.
            </p>
          </Reveal>
          <Reveal delayMs={100} className="mt-10">
            <ProcessStages />
          </Reveal>
          <div className="mt-8">
            <Link
              href="/process"
              className="text-sm font-semibold text-brass underline decoration-heat/60 underline-offset-4 hover:text-ink"
            >
              See the full process →
            </Link>
          </div>
        </div>
      </section>

      {/* Free consultation + audit */}
      <section className="relative overflow-hidden border-y border-line bg-paper-elevated py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_right,rgba(207,127,72,0.14),transparent_55%)]" />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-steel">
              Free consultation
            </p>
            <h2 className="mt-3 max-w-xl font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Talk through what you’re building.
            </h2>
            <p className="mt-3 max-w-lg text-base text-steel">
              A short discovery call covering goals, approach and fit — with
              clear next steps in writing. No obligation.
            </p>
            <div className="mt-6">
              <ConsultationTrigger className="btn-heat rounded-lg px-6 py-3 text-sm font-semibold text-ink">
                Book a free consultation
              </ConsultationTrigger>
            </div>
          </Reveal>
          <Reveal delayMs={80}>
            <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-steel">
              Free audit
            </p>
            <h2 className="mt-3 max-w-xl font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Find out what is holding your site back.
            </h2>
            <p className="mt-3 max-w-lg text-base text-steel">
              A short, written review of your site’s speed, SEO and structure,
              with the highest-impact fixes first. No obligation.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <AuditTrigger className="btn-ghost rounded-lg px-6 py-3 text-sm font-semibold text-ink">
                Get my free audit
              </AuditTrigger>
              <Link
                href="/free-audit"
                className="text-sm font-semibold text-brass underline decoration-heat/60 underline-offset-4 hover:text-ink"
              >
                How the audit works →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Problems */}
      <section className="bg-workshop py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-steel">
              Problems we solve
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
              The problems behind the brief.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {problems.map((item, i) => (
              <Reveal
                key={item.title}
                delayMs={i * 80}
                className="surface-card rounded-2xl p-6"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-steel">
                  Problem
                </p>
                <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-steel">{item.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Industries + why */}
      <section className="bg-paper-elevated py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-steel">
              Industries
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
              Industries we work in.
            </h2>
          </Reveal>
          <Reveal delayMs={80} className="mt-8 flex flex-wrap gap-2">
            {industryPages.map((item) => (
              <Link
                key={item.slug}
                href={`/industries/${item.slug}`}
                className="rounded-full border border-line bg-panel px-4 py-2 text-sm text-ink-soft shadow-[0_1px_0_rgba(16,19,26,0.03)] transition hover:border-heat/35 hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-heat"
              >
                {item.title}
              </Link>
            ))}
            <Link
              href="/industries"
              className="rounded-full border border-heat/40 bg-heat/10 px-4 py-2 text-sm font-semibold text-heat-deep transition hover:border-heat hover:bg-heat/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-heat"
            >
              All industries →
            </Link>
          </Reveal>

          <Reveal className="mt-20">
            <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-steel">
              Why Anvilry Labs
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
              One team, end to end.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {reasons.map((item, i) => (
              <Reveal
                key={item.n}
                delayMs={i * 60}
                className="surface-card rounded-2xl bg-forge/40 p-6"
              >
                <p className="font-mono text-[11px] text-brass">{item.n}</p>
                <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-base text-steel">{item.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative overflow-hidden border-y border-line bg-[#101a2e] py-20 text-[#f6f2ea] sm:py-28">
        <div className="heat-bar absolute inset-x-0 top-0 h-px" />
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#cf7f48]">
              Client words
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-4xl font-medium tracking-tight text-[#f6f2ea] sm:text-5xl">
              Glad they chose us.
            </h2>
            <p className="mt-4 max-w-xl text-base text-[#f6f2ea]/60">
              Real projects. Plain feedback. The same standard every time.
            </p>
          </Reveal>

          <TestimonialsCarousel />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-workshop py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-steel">
              FAQ
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
              Questions, answered.
            </h2>
          </Reveal>
          <Reveal delayMs={80} className="mt-10">
            <Faq />
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-forge-plane py-24 sm:py-32">
        <div className="noise-overlay absolute inset-0" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 heat-bar opacity-90" />
        <div className="relative mx-auto max-w-6xl px-5 text-center sm:px-8">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-steel">
              Software, properly forged.
            </p>
            <h2 className="mx-auto mt-5 max-w-3xl font-display text-4xl font-bold tracking-tight text-ink sm:text-6xl">
              Tell us what you’re building.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base text-steel">
              We’ll tell you exactly how we’d approach it.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <ConsultationTrigger className="btn-heat rounded-lg px-6 py-3.5 text-sm font-semibold text-ink">
                Book a free consultation
              </ConsultationTrigger>
              <AuditTrigger className="btn-ghost rounded-lg px-6 py-3.5 text-sm font-semibold text-ink">
                Get my free audit
              </AuditTrigger>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
