import type { Metadata } from "next";
import Link from "next/link";
import { AuditTrigger } from "@/components/AuditTrigger";
import { ProcessStages } from "@/components/ProcessStages";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Process",
  description: "Six stages. No surprises. A working demo at every milestone.",
};

const stages = [
  {
    n: "01",
    title: "Brief",
    body: "We listen, ask the awkward questions and agree the real goal.",
    see: "A written goal and success measures.",
    marks: ["Goal in writing", "Audience named", "Constraints mapped"],
  },
  {
    n: "02",
    title: "Blueprint",
    body: "Scope, timeline, architecture and a fixed point of contact, in writing.",
    see: "Scope document, timeline and named contact.",
    marks: ["Scope locked", "Timeline agreed", "One named contact"],
  },
  {
    n: "03",
    title: "Forge",
    body: "Building in short cycles with a working demo at every milestone.",
    see: "A live demo each milestone, not slide decks.",
    marks: ["Milestone demos", "Done · Next · Risks", "No silent weeks"],
  },
  {
    n: "04",
    title: "Proof",
    body: "Testing, performance, security and accessibility checks.",
    see: "A shared report with evidence.",
    marks: ["Speed measured", "Access checked", "SEO scored"],
  },
  {
    n: "05",
    title: "Launch",
    body: "Planned release, redirects, SEO checks and monitoring.",
    see: "A launch plan and live monitoring.",
    marks: ["Redirects mapped", "Metadata checked", "Monitoring live"],
  },
  {
    n: "06",
    title: "Care",
    body: "Handover, documentation, training and post-launch support.",
    see: "Documentation, training and a support window.",
    marks: ["Docs delivered", "Team trained", "You own the code"],
  },
];

const commitments = [
  "One named point of contact for every project",
  "A regular update rhythm, agreed up front",
  "Working demos at each milestone",
  "No hidden costs: changes are quoted before they are built",
  "Full documentation and ownership of code and assets at handover",
  "A defined post-launch support window",
];

export default function ProcessPage() {
  return (
    <div className="bg-workshop">
      {/* Hero: one composition */}
      <section className="relative overflow-hidden border-b border-line">
        <div className="pointer-events-none absolute inset-0 bg-forge-plane opacity-90" />
        <div className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-heat/8 blur-3xl" />
        <div className="pointer-events-none absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-brass/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-5 pb-14 pt-16 text-center sm:px-8 sm:pb-20 sm:pt-24">
          <Reveal className="mx-auto max-w-3xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-brass">
              Process
            </p>
            <h1 className="mt-5 font-display text-[clamp(2.75rem,8vw,5.5rem)] font-medium leading-[0.95] tracking-[-0.03em] text-ink">
              Six stages.{" "}
              <span className="bg-gradient-to-r from-ink via-brass to-heat bg-clip-text text-transparent">
                No surprises.
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-steel sm:text-xl">
              The process is part of the brand. A working demo at every
              milestone — not a leap of faith.
            </p>
          </Reveal>

          <Reveal delayMs={120} className="mx-auto mt-12 max-w-4xl text-left sm:mt-14">
            <ProcessStages />
          </Reveal>
        </div>
      </section>

      {/* Forge path */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-steel">
            The forge path
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            What happens in each stage.
          </h2>
          <p className="mt-4 max-w-xl text-base text-steel sm:text-lg">
            Every stage ends with something you can hold: a document, a demo or
            a live system.
          </p>
        </Reveal>

        <ol className="relative mt-14 space-y-0">
          <div
            aria-hidden="true"
            className="absolute left-[1.15rem] top-3 bottom-3 w-px bg-gradient-to-b from-heat via-brass/40 to-white/10 sm:left-[1.35rem]"
          />

          {stages.map((stage, i) => (
            <Reveal key={stage.n} delayMs={Math.min(i * 40, 160)}>
              <li className="relative grid gap-6 py-10 pl-12 sm:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] sm:gap-10 sm:pl-16 lg:gap-16">
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-10 flex h-9 w-9 items-center justify-center rounded-full border border-line bg-panel font-mono text-[11px] text-ink sm:h-11 sm:w-11 sm:text-xs"
                >
                  {stage.n}
                </span>

                <div>
                  <h3 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                    {stage.title}
                  </h3>
                  <p className="mt-3 max-w-md text-base leading-relaxed text-steel">
                    {stage.body}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {stage.marks.map((mark) => (
                      <li
                        key={mark}
                        className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.08em] text-ink-soft"
                      >
                        <span className="text-heat-deep" aria-hidden="true">
                          ▸
                        </span>
                        {mark}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative border-l border-line pl-5 sm:border-l-0 sm:border-t-0 sm:pl-0 sm:pt-1">
                  <div className="absolute inset-x-0 top-0 h-px heat-bar opacity-60 sm:left-0 sm:right-auto sm:top-0 sm:h-full sm:w-px" />
                  <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-brass">
                    What you see
                  </p>
                  <p className="mt-3 font-display text-xl font-semibold leading-snug text-ink sm:text-2xl">
                    {stage.see}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* Commitments */}
      <section className="relative overflow-hidden border-y border-line bg-forge py-20 text-ink sm:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_80%_0%,rgba(207,127,72,0.18),transparent_55%)]" />
        <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-steel">
              Our commitments
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-4xl">
              What we hold ourselves to.
            </h2>
          </Reveal>

          <ul className="mt-12 grid gap-x-12 gap-y-0 sm:grid-cols-2">
            {commitments.map((item, i) => (
              <Reveal key={item} delayMs={i * 40}>
                <li className="flex gap-4 border-t border-line py-5">
                  <span
                    className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-heat/5 text-xs text-heat-deep"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  <span className="text-base leading-relaxed text-ink-soft">
                    {item}
                  </span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Close */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-steel">
            Next step
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            Ready to start at Brief?
          </h2>
          <p className="mt-4 max-w-lg text-lg text-steel">
            Tell us what you’re building, or claim a free audit of what you
            already have.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="btn-heat inline-flex rounded-md px-5 py-3.5 text-sm font-semibold text-ink"
            >
              Start a project
            </Link>
            <AuditTrigger className="btn-ghost inline-flex rounded-md px-5 py-3.5 text-sm font-semibold text-ink">
              Get my free audit
            </AuditTrigger>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
