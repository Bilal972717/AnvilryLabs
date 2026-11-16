import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a project. Tell us what you are building. We reply within one working day.",
};

const points = [
  {
    title: "One working day",
    body: "We reply with a clear next step, not a sales script.",
  },
  {
    title: "Named contact",
    body: "One person owns the conversation from first reply onward.",
  },
  {
    title: "No hidden costs",
    body: "Scope and pricing stay in writing before anything is built.",
  },
];

export default function ContactPage() {
  return (
    <div className="relative overflow-hidden bg-workshop">
      <div className="pointer-events-none absolute -left-24 top-24 h-80 w-80 rounded-full bg-heat/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-10 h-96 w-96 rounded-full bg-brass/10 blur-3xl" />

      <section className="relative mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[0.95fr_1.15fr] lg:gap-14 lg:items-start">
        <Reveal className="lg:sticky lg:top-36">
          <div className="inline-flex items-center gap-2 rounded-full border border-line bg-panel-muted px-3 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-heat shadow-[0_0_10px_rgba(239,85,32,0.9)]" />
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brass">
              Contact
            </p>
          </div>

          <h1 className="mt-6 font-display text-5xl font-bold tracking-tight text-ink sm:text-6xl">
            Start a{" "}
            <span className="bg-gradient-to-r from-ink via-brass to-heat bg-clip-text text-transparent">
              project.
            </span>
          </h1>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-steel">
            Tell us what you are building. We’ll tell you exactly how we’d
            approach it — usually within one working day.
          </p>

          <a
            href="mailto:hello@anvilrylabs.com"
            className="mt-7 inline-flex items-center gap-3 rounded-lg border border-line bg-panel-muted px-4 py-3 font-mono text-sm text-ink transition hover:border-brass/40 hover:bg-mist"
          >
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-heat/15 text-[11px] font-semibold text-heat">
              @
            </span>
            hello@anvilrylabs.com
          </a>

          <div className="mt-10 space-y-4">
            {points.map((point) => (
              <div
                key={point.title}
                className="rounded-xl border border-line bg-panel-muted p-4"
              >
                <p className="font-display text-lg font-semibold text-ink">
                  {point.title}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-steel">
                  {point.body}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal
          delayMs={90}
          className="panel-shadow relative overflow-hidden rounded-2xl border border-line bg-panel"
        >
          <div className="absolute inset-x-0 top-0 h-px heat-bar" />
          <div className="pointer-events-none absolute -right-10 -top-16 h-40 w-40 rounded-full bg-heat/15 blur-3xl" />

          <div className="relative flex items-center justify-between border-b border-line px-6 py-4 sm:px-8">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt=""
                width={36}
                height={36}
                className="rounded-md"
              />
              <div>
                <p className="font-display text-sm font-semibold text-ink">
                  Anvilry Labs
                </p>
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-steel">
                  Enquiry desk
                </p>
              </div>
            </div>
            <span className="rounded-full border border-heat/30 bg-heat/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-heat">
              Reply in 1 day
            </span>
          </div>

          <div className="relative p-6 sm:p-8">
            <ContactForm />
          </div>
        </Reveal>
      </section>
    </div>
  );
}
