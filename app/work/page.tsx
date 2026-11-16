import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Work",
  description:
    "How we present proof: problem, approach, result and handover. Selected work available on a call.",
};

const format = [
  {
    title: "The problem",
    body: "What the client needed, in plain terms.",
  },
  {
    title: "The approach",
    body: "Decisions made and why.",
  },
  {
    title: "The result",
    body: "Measured outcomes: speed, traffic, conversions.",
  },
  {
    title: "The handover",
    body: "What the client owns and can run.",
  },
];

const signals = [
  {
    title: "Working demos every milestone",
    body: "You see progress you can click — not slide decks that age out.",
  },
  {
    title: "Written scope before production",
    body: "Timeline, risks and success measures agreed before a line of shippable code.",
  },
  {
    title: "You own the code",
    body: "Full handover of assets, documentation and access. No lock-in.",
  },
];

export default function WorkPage() {
  return (
    <div className="bg-workshop">
      <section className="mx-auto max-w-6xl px-5 pb-12 pt-16 sm:px-8 sm:pt-24">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-heat">
            Work
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl font-extrabold tracking-tight text-ink sm:text-6xl">
            Proof over promises.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-steel">
            Public case studies are in preparation. Until they ship, we share
            selected work on a call — same format every time: problem, approach,
            result, handover.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="btn-heat inline-flex rounded-md px-5 py-3 text-sm font-semibold text-white"
            >
              Ask for selected work
            </Link>
            <Link
              href="/process"
              className="btn-ghost inline-flex rounded-md px-5 py-3 text-sm font-semibold text-ink"
            >
              See how we work
            </Link>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          {signals.map((item, i) => (
            <Reveal
              key={item.title}
              delayMs={i * 70}
              className="flex min-h-52 flex-col justify-between border border-line bg-paper-elevated p-6"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-heat">
                What you get
              </p>
              <div>
                <h2 className="font-display text-2xl font-bold tracking-tight text-ink">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-steel">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-paper-elevated py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-heat">
              Format
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              How we tell it
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {format.map((item, i) => (
              <Reveal key={item.title} delayMs={i * 50}>
                <h3 className="font-display text-xl font-bold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm text-steel">{item.body}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12">
            <Link
              href="/contact"
              className="btn-heat inline-flex rounded-md px-5 py-3 text-sm font-semibold text-white"
            >
              Start a project
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
