import Link from "next/link";
import { AuditTrigger } from "@/components/AuditTrigger";
import { Faq } from "@/components/Faq";
import { ForgeBackdrop } from "@/components/ForgeBackdrop";
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
      <section className="relative overflow-hidden bg-paper">
        <ForgeBackdrop />
        <div className="relative mx-auto flex min-h-[calc(100svh-var(--site-header-h))] max-w-6xl items-center justify-center px-5 py-16 text-center sm:px-8">
          <div className="relative z-10 mx-auto max-w-3xl">
            <p className="animate-rise font-mono text-[11px] uppercase tracking-[0.24em] text-brass">
              Software, properly forged
            </p>

            <h1 className="animate-rise-delay-1 mt-5 font-display text-[clamp(3.25rem,9.5vw,7rem)] font-semibold leading-[0.88] tracking-[-0.035em] text-ink">
              Anvilry{" "}
              <span className="bg-gradient-to-br from-ink via-heat to-brass bg-clip-text text-transparent">
                Labs
              </span>
            </h1>

            <p className="animate-rise-delay-2 mx-auto mt-8 max-w-xl font-display text-[1.65rem] font-medium leading-snug text-ink-soft sm:text-3xl">
              We build software that holds up.
            </p>
            <p className="animate-rise-delay-2 mx-auto mt-4 max-w-lg text-base leading-relaxed text-steel sm:text-lg">
              Websites, apps and custom software built with a craftsperson’s care
              and an engineer’s rigor, then made easy to find.
            </p>

            <div className="animate-rise-delay-3 mt-10 flex flex-wrap items-center justify-center gap-3">
              <AuditTrigger className="btn-heat rounded-lg px-6 py-3.5 text-sm font-semibold text-white">
                Get my free audit
              </AuditTrigger>
              <Link
                href="/contact"
                className="btn-ghost rounded-lg px-6 py-3.5 text-sm font-semibold text-ink"
              >
                Start a project
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section className="relative overflow-hidden border-y border-line bg-forge-plane">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px heat-bar opacity-80" />
        <div className="pointer-events-none absolute -left-24 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-heat/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 top-0 h-48 w-48 rounded-full bg-brass/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <p className="text-center font-mono text-[11px] uppercase tracking-[0.2em] text-brass">
            Built into every engagement
          </p>
          <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4 sm:gap-8">
            {[
              ["6", "Stages", "Each with a visible output"],
              ["4", "Service lines", "One standard throughout"],
              ["1", "Named contact", "On every project"],
              ["0", "Hidden costs", "Changes quoted first"],
            ].map(([stat, title, label]) => (
              <div key={title} className="text-center">
                <dt className="font-display text-5xl font-bold tracking-tight text-ink sm:text-6xl">
                  <span className="bg-gradient-to-br from-ink via-ink to-heat bg-clip-text text-transparent">
                    {stat}
                  </span>
                </dt>
                <dd className="mt-3">
                  <p className="text-sm font-semibold text-ink">{title}</p>
                  <p className="mt-1 text-sm leading-snug text-steel">{label}</p>
                </dd>
                <div className="mx-auto mt-4 h-px w-10 bg-gradient-to-r from-transparent via-heat to-transparent" />
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Marquee */}
      <section
        className="relative overflow-hidden border-b border-line bg-paper-elevated py-5"
        aria-hidden="true"
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-paper-elevated to-transparent sm:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-paper-elevated to-transparent sm:w-28" />
        <div className="marquee-track flex w-max items-center gap-3 whitespace-nowrap px-4">
          {[...stack, ...stack].map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="inline-flex items-center gap-3 rounded-full border border-line bg-panel px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-soft shadow-[0_1px_0_rgba(16,19,26,0.03)]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-heat/80" />
              {item}
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
                className="surface-card group relative overflow-hidden rounded-2xl p-7 sm:p-8"
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-heat/0 blur-2xl transition duration-500 group-hover:bg-heat/20" />
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

            <Reveal delayMs={120} className="panel-shadow overflow-hidden rounded-2xl border border-line bg-panel/95 backdrop-blur-sm">
              <div className="flex items-center gap-2 border-b border-line bg-mist/60 px-4 py-3 font-mono text-[11px] text-steel">
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
                className="service-row rounded-xl border border-line bg-panel/90 px-5 py-6 shadow-[0_1px_0_rgba(16,19,26,0.03)] sm:px-6"
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
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_right,rgba(228,74,22,0.14),transparent_55%)]" />
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
            <AuditTrigger className="btn-heat rounded-lg px-6 py-3 text-sm font-semibold text-white">
              Get my free audit
            </AuditTrigger>
            <Link
              href="/contact"
              className="btn-ghost rounded-lg px-6 py-3 text-sm font-semibold text-ink"
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
                className="surface-card rounded-2xl p-6"
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
                className="rounded-full border border-line bg-panel px-4 py-2 text-sm text-ink-soft shadow-[0_1px_0_rgba(16,19,26,0.03)] transition hover:border-heat/35 hover:text-ink"
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
              <AuditTrigger className="btn-heat rounded-lg px-6 py-3.5 text-sm font-semibold text-white">
                Get my free audit
              </AuditTrigger>
              <Link
                href="/contact"
                className="btn-ghost rounded-lg px-6 py-3.5 text-sm font-semibold text-ink"
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
