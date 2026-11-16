import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About",
  description: "Raw material, shaped properly. Anvil. Ry. Labs.",
};

const nameParts = [
  {
    title: "Anvil",
    body: "Where raw material is shaped under pressure into something precise and lasting.",
  },
  {
    title: "-ry",
    body: "The old language of trades: joinery, masonry, pottery. The craft of making something well.",
  },
  {
    title: "Labs",
    body: "The method. We test, measure and refine until we are sure.",
  },
];

const principles = [
  { title: "Solve the real problem", body: "We ask before we build." },
  { title: "Build it to last", body: "Maintainable code, documented decisions." },
  { title: "No surprises", body: "Bad news early, with options." },
  { title: "Proof over promises", body: "Demos and metrics." },
  { title: "Leave it better", body: "Clean handover, never trapped." },
];

export default function AboutPage() {
  return (
    <div className="bg-workshop">
      <section className="mx-auto max-w-6xl px-5 pb-12 pt-16 text-center sm:px-8 sm:pt-24">
        <Reveal className="mx-auto max-w-3xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-heat">
            About
          </p>
          <h1 className="mt-4 font-display text-5xl font-semibold tracking-tight text-ink sm:text-6xl">
            Raw material, shaped properly.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-steel">
            An anvil gives the work something solid to be shaped against, until
            what leaves the forge is stronger than what went in.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-8">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-heat">
            The name
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Anvil. Ry. Labs.
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {nameParts.map((part, i) => (
            <Reveal key={part.title} delayMs={i * 70} className="border-t border-line pt-6">
              <h3 className="font-display text-2xl font-bold text-ink">{part.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-steel">{part.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-forge-plane py-20 text-ink">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 md:grid-cols-2">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-heat">
              Mission
            </p>
            <p className="mt-4 font-display text-2xl font-semibold leading-snug tracking-tight text-ink">
              To build digital products that work properly, are delivered without
              drama, and perform in the real world.
            </p>
          </Reveal>
          <Reveal delayMs={80}>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-heat">
              Vision
            </p>
            <p className="mt-4 font-display text-2xl font-semibold leading-snug tracking-tight text-ink">
              To be the agency clients return to, and recommend, because the work
              held up and the experience was calm.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-heat">
            Principles
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink">
            How we work.
          </h2>
        </Reveal>
        <div className="mt-10 divide-y divide-line border-y border-line">
          {principles.map((item, i) => (
            <Reveal key={item.title} delayMs={i * 40} className="grid gap-2 py-6 sm:grid-cols-[1fr_1fr]">
              <h3 className="font-display text-xl font-bold text-ink">{item.title}</h3>
              <p className="text-base text-steel">{item.body}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12">
          <Link
            href="/contact"
            className="btn-heat inline-flex rounded-md px-5 py-3 text-sm font-semibold text-white"
          >
            Talk to us
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
