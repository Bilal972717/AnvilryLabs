import type { Metadata } from "next";
import { AnvilMark } from "@/components/AnvilMark";
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
      <div className="pointer-events-none absolute -left-24 top-24 h-80 w-80 rounded-full bg-heat/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-10 h-96 w-96 rounded-full bg-brass/10 blur-3xl" />

      <section className="relative mx-auto max-w-6xl px-5 pb-10 pt-16 text-center sm:px-8 sm:pt-24">
        <Reveal className="mx-auto max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-line bg-panel-muted px-3 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-heat shadow-[0_0_10px_rgba(207,127,72,0.9)]" />
            <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-brass">
              Contact
            </p>
          </div>

          <h1 className="mt-6 font-display text-5xl font-medium tracking-tight text-ink sm:text-6xl">
            Start a{" "}
            <span className="bg-gradient-to-r from-ink via-brass to-heat bg-clip-text text-transparent">
              project.
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-md text-lg leading-relaxed text-steel">
            Tell us what you are building. We’ll tell you exactly how we’d
            approach it — usually within one working day.
          </p>

          <a
            href="mailto:hello@anvilrylabs.com"
            className="mt-7 inline-flex items-center gap-3 rounded-lg border border-line bg-panel-muted px-4 py-3 font-mono text-sm text-ink transition hover:border-brass/40 hover:bg-mist"
          >
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-heat/5 text-[11px] font-semibold text-heat-deep">
              @
            </span>
            hello@anvilrylabs.com
          </a>
        </Reveal>

        <Reveal delayMs={80} className="mx-auto mt-10 grid max-w-4xl gap-4 text-left sm:grid-cols-3">
          {points.map((point) => (
            <div
              key={point.title}
              className="rounded-xl border border-line bg-panel-muted p-4 text-center"
            >
              <p className="font-display text-lg font-semibold text-ink">
                {point.title}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-steel">
                {point.body}
              </p>
            </div>
          ))}
        </Reveal>
      </section>

      <section className="relative mx-auto max-w-2xl px-5 pb-20 sm:px-8 sm:pb-28">
        <Reveal
          delayMs={90}
          className="panel-shadow relative overflow-hidden rounded-2xl border border-line bg-panel"
        >
          <div className="relative flex items-center justify-between border-b border-line px-6 py-4 sm:px-8">
            <div className="flex items-center gap-3">
              <AnvilMark className="h-9 w-9" />
              <div className="text-left">
                <p className="font-display text-sm font-semibold text-ink">
                  Anvilry Labs
                </p>
                <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-steel">
                  Enquiry desk
                </p>
              </div>
            </div>
            <span className="rounded-full border border-line bg-mist px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.08em] text-ink-soft">
              Reply in 1 day
            </span>
          </div>

          <div className="relative p-6 text-left sm:p-8">
            <ContactForm />
          </div>
        </Reveal>
      </section>
    </div>
  );
}
