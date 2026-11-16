import Link from "next/link";
import { AuditTrigger } from "@/components/AuditTrigger";
import { Faq } from "@/components/Faq";
import { ForgeBackdrop } from "@/components/ForgeBackdrop";
import { HeroForgePanel } from "@/components/HeroForgePanel";
import { ProcessStages } from "@/components/ProcessStages";
import { Reveal } from "@/components/Reveal";

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

const industries = [
  "Ecommerce and retail",
  "Service businesses",
  "Agencies",
  "Health and wellness",
  "SaaS and startups",
  "Professional services",
  "Hospitality",
  "Education",
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-workshop">
        <ForgeBackdrop />
        <div className="relative mx-auto grid min-h-[calc(100svh-var(--site-header-h))] max-w-6xl items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="relative z-10 max-w-2xl">
            <div className="animate-rise inline-flex items-center gap-3 rounded-full border border-line bg-panel-muted px-3 py-1.5 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-heat shadow-[0_0_12px_rgba(239,85,32,0.9)]" />
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-brass">
                Software and digital growth agency
              </p>
            </div>

            <h1 className="animate-rise-delay-1 mt-7 font-display text-[clamp(3rem,9vw,6.75rem)] font-bold leading-[0.9] tracking-[-0.03em] text-ink">
              Anvilry{" "}
              <span className="bg-gradient-to-r from-ink via-brass to-heat bg-clip-text text-transparent">
                Labs
              </span>
            </h1>

            <p className="animate-rise-delay-2 mt-7 max-w-xl font-display text-2xl font-medium leading-snug text-ink-soft sm:text-3xl">
              We build software that holds up.
            </p>
            <p className="animate-rise-delay-2 mt-4 max-w-lg text-base leading-relaxed text-steel sm:text-lg">
              Websites, apps and custom software built with a craftsperson’s care
              and an engineer’s rigor, then made easy to find.
            </p>

            <div className="animate-rise-delay-3 mt-10 flex flex-wrap items-center gap-3">
              <AuditTrigger className="btn-heat rounded-md px-5 py-3.5 text-sm font-semibold text-white">
                Get my free audit
              </AuditTrigger>
              <Link
                href="/contact"
                className="btn-ghost rounded-md px-5 py-3.5 text-sm font-semibold text-ink"
              >
                Start a project
              </Link>
            </div>
          </div>

          <div className="animate-rise-delay-3 relative z-10 hidden lg:block">
            <HeroForgePanel />
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section className="relative border-y border-line bg-paper-elevated">
        <div className="absolute inset-x-0 top-0 h-px heat-bar opacity-60" />
        <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 py-12 sm:grid-cols-4 sm:px-8 sm:py-14">
          {[
            ["6", "Stages, each with a visible output"],
            ["4", "Service lines, one standard"],
            ["1", "Named contact on every project"],
            ["0", "Hidden costs. Changes quoted first"],
          ].map(([stat, label]) => (
            <div key={label} className="relative pl-4">
              <span className="absolute left-0 top-1 h-10 w-px bg-gradient-to-b from-heat to-transparent" />
              <dt className="font-display text-5xl font-bold tracking-tight text-ink sm:text-6xl">
                {stat}
              </dt>
              <dd className="mt-2 text-sm leading-snug text-steel">{label}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Marquee */}
      <section
        className="overflow-hidden border-b border-line bg-forge py-4"
        aria-hidden="true"
      >
        <div className="marquee-track flex w-max gap-10 whitespace-nowrap font-mono text-xs uppercase tracking-[0.22em] text-steel">
          {[...stack, ...stack].map((item, i) => (
            <span key={`${item}-${i}`} className="flex items-center gap-10">
              {item}
              <span className="text-heat">/</span>
            </span>
          ))}
        </div>
      </section>

      {/* Who we help */}
      <section className="relative overflow-hidden bg-workshop py-20 sm:py-28">
        <div className="pointer-events-none absolute -left-20 top-20 h-72 w-72 rounded-full bg-heat/10 blur-3xl" />
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-heat">
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
                className="group relative overflow-hidden rounded-2xl border border-line bg-panel p-7 shadow-[0_10px_30px_rgba(20,22,28,0.04)] transition hover:border-heat/40 hover:shadow-[0_14px_36px_rgba(20,22,28,0.08)] dark:bg-panel-muted dark:shadow-none dark:hover:bg-mist dark:hover:shadow-none sm:p-8"
              >
                <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-heat/0 transition group-hover:bg-heat/15" />
                <p className="font-mono text-[11px] text-brass">{item.n}</p>
                <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-steel">{item.body}</p>
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
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-heat">
                Craft you can see
              </p>
              <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
                Design and engineering, side by side.
              </h2>
              <p className="mt-4 max-w-md text-base text-steel">
                Real interface work, built on a grid, tested on every screen.
              </p>
            </Reveal>

            <Reveal delayMs={120} className="panel-shadow overflow-hidden rounded-2xl border border-line bg-panel">
              <div className="flex items-center gap-2 border-b border-line px-4 py-3 font-mono text-[11px] text-steel">
                <span className="h-2.5 w-2.5 rounded-full bg-heat/90" />
                <span className="h-2.5 w-2.5 rounded-full bg-brass/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-steel/40" />
                <span className="ml-2 text-brass">build.ts</span>
              </div>
              <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-7 text-ink-soft sm:p-8 sm:text-sm">
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
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-heat">
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
                className="service-row rounded-xl border border-line bg-panel px-5 py-6 dark:bg-panel-muted sm:px-6"
              >
                <div className="grid items-baseline gap-3 sm:grid-cols-[7.5rem_1fr_1.15fr]">
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-brass">
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
        <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-heat/15 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-heat">
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

      {/* Free audit */}
      <section className="relative overflow-hidden border-y border-line bg-paper-elevated py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_right,rgba(239,85,32,0.16),transparent_55%)]" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-heat">
              Free audit
            </p>
            <h2 className="mt-3 max-w-xl font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Find out what is holding your site back.
            </h2>
            <p className="mt-3 max-w-lg text-base text-steel">
              A short, written review of your site’s speed, SEO and structure,
              with the highest-impact fixes first. No obligation.
            </p>
          </Reveal>
          <Reveal delayMs={80} className="flex flex-wrap gap-3">
            <AuditTrigger className="btn-heat rounded-md px-5 py-3 text-sm font-semibold text-white">
              Get my free audit
            </AuditTrigger>
            <Link
              href="/contact"
              className="btn-ghost rounded-md px-5 py-3 text-sm font-semibold text-ink"
            >
              Book a discovery call
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Problems */}
      <section className="bg-workshop py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-heat">
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
                className="rounded-2xl border border-line bg-panel p-6 shadow-[0_10px_30px_rgba(20,22,28,0.04)] dark:bg-gradient-to-b dark:from-panel-muted dark:to-transparent dark:shadow-none"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-heat">
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
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-heat">
              Industries
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
              Industries we work in.
            </h2>
          </Reveal>
          <Reveal delayMs={80} className="mt-8 flex flex-wrap gap-2">
            {industries.map((item) => (
              <span
                key={item}
                className="rounded-md border border-line bg-panel px-3.5 py-2 text-sm text-ink-soft shadow-[0_1px_0_rgba(20,22,28,0.04)] transition hover:border-brass/40 hover:text-ink dark:bg-panel-muted dark:shadow-none"
              >
                {item}
              </span>
            ))}
          </Reveal>

          <Reveal className="mt-20">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-heat">
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
                className="rounded-2xl border border-line bg-forge/60 p-6"
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

      {/* FAQ */}
      <section className="bg-workshop py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-heat">
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
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-heat">
              Software, properly forged.
            </p>
            <h2 className="mx-auto mt-5 max-w-3xl font-display text-4xl font-bold tracking-tight text-ink sm:text-6xl">
              Tell us what you’re building.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base text-steel">
              We’ll tell you exactly how we’d approach it.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <AuditTrigger className="btn-heat rounded-md px-5 py-3.5 text-sm font-semibold text-white">
                Get my free audit
              </AuditTrigger>
              <Link
                href="/contact"
                className="btn-ghost rounded-md px-5 py-3.5 text-sm font-semibold text-ink"
              >
                Start a project
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
