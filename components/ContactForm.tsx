"use client";

import { useState, type FormEvent } from "react";
import { CustomSelect } from "@/components/CustomSelect";
import { trackEvent } from "@/lib/analytics";

const fieldClass =
  "w-full rounded-lg border border-line bg-panel-muted px-3.5 py-3 text-sm text-ink outline-none transition placeholder:text-steel/80 focus:border-heat/50 focus:ring-2 focus:ring-heat/30";

const interestOptions = [
  "Bespoke Builds",
  "Accelerated Builds",
  "Managed Platforms",
  "Findability (SEO)",
  "Not sure yet",
];

type Draft = {
  name: string;
  email: string;
  interest: string;
  about: string;
  subject: string;
  body: string;
  mailto: string;
};

export function ContactForm() {
  const [draft, setDraft] = useState<Draft | null>(null);
  const [copied, setCopied] = useState(false);
  const [interest, setInterest] = useState("Not sure yet");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const about = String(form.get("about") || "").trim();
    const subject = `Project enquiry from ${name || "website"}`;
    const body = `Name: ${name}\nEmail: ${email}\nInterested in: ${interest}\n\nAbout the project:\n${about}`;
    const mailto = `mailto:hello@anvilrylabs.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setDraft({ name, email, interest, about, subject, body, mailto });
    setCopied(false);
    trackEvent("contact_form_submit", { interest });
    window.location.href = mailto;
  }

  async function copyMessage() {
    if (!draft) return;
    try {
      await navigator.clipboard.writeText(
        `To: hello@anvilrylabs.com\nSubject: ${draft.subject}\n\n${draft.body}`,
      );
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  if (draft) {
    return (
      <div className="flex min-h-72 flex-col justify-center px-1 py-4">
        <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-brass">
          Next step
        </p>
        <h2 className="mt-3 font-display text-3xl font-bold text-ink">
          Finish in your email app.
        </h2>
        <p className="mt-3 max-w-md text-steel">
          If a mail window opened, hit send. If not, email{" "}
          <a
            href="mailto:hello@anvilrylabs.com"
            className="text-brass underline-offset-2 hover:underline"
          >
            hello@anvilrylabs.com
          </a>{" "}
          with the details below. We reply within one working day.
        </p>
        <pre className="mt-6 max-h-48 overflow-auto rounded-lg border border-line bg-panel-muted p-4 text-xs leading-relaxed text-ink-soft whitespace-pre-wrap">
          {`To: hello@anvilrylabs.com\nSubject: ${draft.subject}\n\n${draft.body}`}
        </pre>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href={draft.mailto} className="btn-heat rounded-lg px-4 py-3 text-sm font-semibold text-ink">
            Open mail app again
          </a>
          <button
            type="button"
            onClick={copyMessage}
            className="btn-ghost rounded-lg px-4 py-3 text-sm font-semibold text-ink"
          >
            {copied ? "Copied" : "Copy message"}
          </button>
          <button
            type="button"
            onClick={() => setDraft(null)}
            className="rounded-lg px-4 py-3 text-sm font-semibold text-steel transition hover:text-ink"
          >
            Edit details
          </button>
        </div>
      </div>
    );
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="border-b border-line pb-5">
        <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-brass">
          Project enquiry
        </p>
        <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight text-ink">
          Tell us what you’re building.
        </h2>
        <p className="mt-1.5 text-sm text-steel">
          Scope can be rough. We’ll help shape it in the reply.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-xs font-medium text-ink-soft">Name</span>
          <input name="name" required autoComplete="name" placeholder="Your name" className={fieldClass} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-medium text-ink-soft">Email</span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@company.com"
            className={fieldClass}
          />
        </label>
      </div>

      <CustomSelect
        name="interest"
        label="Interested in"
        options={interestOptions}
        value={interest}
        onChange={setInterest}
      />

      <label className="block">
        <span className="mb-1.5 block text-xs font-medium text-ink-soft">
          About the project
        </span>
        <textarea
          name="about"
          required
          rows={5}
          placeholder="Goals, timeline, current site, anything useful…"
          className={`${fieldClass} min-h-32 resize-y`}
        />
      </label>

      <button
        type="submit"
        className="btn-heat w-full rounded-lg px-4 py-3.5 text-sm font-semibold text-ink"
      >
        Send enquiry
      </button>
      <p className="text-center text-xs text-steel">
        Opens your email app with a prepared message. Or write us at{" "}
        <a href="mailto:hello@anvilrylabs.com" className="text-brass hover:underline">
          hello@anvilrylabs.com
        </a>
        .
      </p>
    </form>
  );
}
