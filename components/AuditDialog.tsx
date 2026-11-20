"use client";

import { useEffect, useState, type FormEvent } from "react";
import type { LeadMode } from "@/components/AuditProvider";
import { CustomSelect } from "@/components/CustomSelect";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

type AuditDialogProps = {
  open: boolean;
  mode: LeadMode;
  onClose: () => void;
};

const fieldClass =
  "w-full rounded-lg border border-line bg-panel-muted px-3.5 py-3 text-sm text-ink outline-none transition placeholder:text-steel/80 focus:border-heat/50 focus:ring-2 focus:ring-heat/30";

const auditFocusOptions = [
  "More enquiries",
  "Faster site",
  "Search rankings",
  "A new build",
];

const consultationFocusOptions = [
  "A new website or app",
  "Rebuild or redesign",
  "SEO and findability",
  "Not sure — need advice",
];

const auditIncludes = [
  "Speed and Core Web Vitals",
  "Technical SEO structure",
  "Highest-impact fixes first",
  "Reply within one working day",
];

const consultationIncludes = [
  "30-minute discovery call",
  "Clear next steps in writing",
  "Honest fit check",
  "Reply within one working day",
];

const copyByMode = {
  audit: {
    eyebrow: "Free audit",
    title: "Get your free website and SEO audit.",
    description:
      "A short written review with the highest-impact fixes first. No obligation.",
    formHint: "Tell us where to look and what matters most.",
    subject: "Free website & SEO audit request",
    bodyLine: "Please send my free written audit.",
    includes: auditIncludes,
    focusOptions: auditFocusOptions,
    showWebsite: true,
    submitLabel: "Send my request",
  },
  consultation: {
    eyebrow: "Free consultation",
    title: "Book a free consultation.",
    description:
      "A short call to talk through what you need, how we’d approach it, and whether we’re a fit. No obligation.",
    formHint: "Tell us a little about what you’re building.",
    subject: "Free consultation request",
    bodyLine: "Please book me a free consultation.",
    includes: consultationIncludes,
    focusOptions: consultationFocusOptions,
    showWebsite: false,
    submitLabel: "Book my consultation",
  },
} as const;

type Draft = {
  name: string;
  website: string;
  email: string;
  focus: string;
  body: string;
  mailto: string;
  subject: string;
};

function normalizeWebsite(raw: string) {
  const trimmed = raw.trim();
  if (!trimmed) return trimmed;
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  return `https://${trimmed}`;
}

export function AuditDialog({ open, mode, onClose }: AuditDialogProps) {
  const copy = copyByMode[mode];
  const [draft, setDraft] = useState<Draft | null>(null);
  const [copied, setCopied] = useState(false);
  const [focus, setFocus] = useState(copy.focusOptions[0]!);

  useEffect(() => {
    if (!open) {
      setDraft(null);
      setCopied(false);
    }
    setFocus(copyByMode[mode].focusOptions[0]!);
  }, [open, mode]);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") || "").trim();
    const website = normalizeWebsite(String(form.get("website") || ""));
    const email = String(form.get("email") || "").trim();
    const subject = copy.subject;
    const body =
      mode === "audit"
        ? `Website: ${website}\nEmail: ${email}\nWhat matters most: ${focus}\n\n${copy.bodyLine}`
        : `Name: ${name}\nEmail: ${email}\nWhat you’re building: ${focus}${
            website ? `\nWebsite: ${website}` : ""
          }\n\n${copy.bodyLine}`;
    const mailto = `mailto:hello@anvilrylabs.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setDraft({ name, website, email, focus, body, mailto, subject });
    setCopied(false);
    trackEvent(
      mode === "audit" ? "audit_request_submit" : "consultation_request_submit",
      { focus, has_website: Boolean(website) },
    );
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

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        if (!next) onClose();
      }}
    >
      <DialogContent
        showCloseButton={false}
        className={cn(
          "flex max-h-[92dvh] w-full max-w-[calc(100%-0rem)] flex-col gap-0 overflow-hidden rounded-t-2xl border border-line bg-panel p-0 text-ink shadow-[0_40px_100px_rgba(0,0,0,0.25)] ring-0",
          "top-auto bottom-0 left-1/2 translate-x-[-50%] translate-y-0 sm:top-1/2 sm:bottom-auto sm:max-h-[min(90vh,880px)] sm:max-w-3xl sm:translate-y-[-50%] sm:rounded-2xl",
        )}
      >
        <div className="absolute inset-x-0 top-0 z-20 h-px bg-line" />

        <header className="relative z-10 flex shrink-0 items-center justify-between gap-3 border-b border-line bg-panel px-4 py-3 sm:px-6 sm:py-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-steel">
            {copy.eyebrow}
          </p>
          <DialogClose
            className="inline-flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-lg border border-line bg-panel-muted text-lg leading-none text-steel transition hover:bg-mist hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-heat"
            aria-label="Close"
          >
            ×
          </DialogClose>
        </header>

        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain [-webkit-overflow-scrolling:touch]">
          <div className="grid md:grid-cols-2">
            <section className="border-b border-line bg-gradient-to-br from-accent via-forge-mid to-paper px-4 py-5 sm:px-8 sm:py-7 md:border-b-0 md:border-r md:border-line">
              <DialogTitle className="font-display text-[1.45rem] font-bold leading-[1.2] tracking-tight text-ink sm:text-3xl md:text-[2rem] lg:text-[2.15rem]">
                {draft ? "Finish in your email app." : copy.title}
              </DialogTitle>
              <DialogDescription className="mt-2.5 text-sm leading-relaxed text-steel sm:mt-3">
                {draft
                  ? "If a mail window opened, hit send. If not, use the copy button or email hello@anvilrylabs.com."
                  : copy.description}
              </DialogDescription>

              {!draft ? (
                <ul className="mt-4 grid grid-cols-1 gap-2 sm:mt-6 sm:gap-2.5">
                  {copy.includes.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-[13px] text-ink-soft sm:text-sm"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-heat/15 text-[11px] text-heat-deep">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>

            <section className="px-4 py-5 sm:px-8 sm:py-7">
              {draft ? (
                <div className="flex min-h-44 flex-col">
                  <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-brass">
                    Prepared message
                  </p>
                  <pre className="mt-3 max-h-40 overflow-auto rounded-lg border border-line bg-panel-muted p-3 text-xs leading-relaxed text-ink-soft whitespace-pre-wrap">
                    {draft.body}
                  </pre>
                  <div className="mt-5 space-y-2.5">
                    <a
                      href={draft.mailto}
                      className="btn-heat inline-flex w-full items-center justify-center rounded-lg px-4 py-3 text-sm font-semibold text-ink"
                    >
                      Open mail app again
                    </a>
                    <button
                      type="button"
                      onClick={copyMessage}
                      className="btn-ghost w-full rounded-lg px-4 py-3 text-sm font-semibold text-ink"
                    >
                      {copied ? "Copied" : "Copy message"}
                    </button>
                    <DialogClose className="w-full rounded-lg px-4 py-2.5 text-sm font-semibold text-steel transition hover:text-ink">
                      Close
                    </DialogClose>
                  </div>
                </div>
              ) : (
                <form
                  className="space-y-3.5 pb-[max(1.25rem,env(safe-area-inset-bottom))] sm:space-y-4"
                  onSubmit={handleSubmit}
                >
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-brass">
                      Request details
                    </p>
                    <p className="mt-1 text-sm text-steel">{copy.formHint}</p>
                  </div>
                  {mode === "consultation" ? (
                    <label className="block">
                      <span className="mb-1.5 block text-xs font-medium text-ink-soft">
                        Name
                      </span>
                      <input
                        name="name"
                        required
                        autoComplete="name"
                        placeholder="Your name"
                        className={fieldClass}
                      />
                    </label>
                  ) : null}
                  {copy.showWebsite || mode === "consultation" ? (
                    <label className="block">
                      <span className="mb-1.5 block text-xs font-medium text-ink-soft">
                        Website{mode === "consultation" ? " (optional)" : ""}
                      </span>
                      <input
                        name="website"
                        required={mode === "audit"}
                        inputMode="url"
                        autoComplete="url"
                        placeholder="yourwebsite.com"
                        className={fieldClass}
                      />
                      {mode === "audit" ? (
                        <span className="mt-1.5 block text-[11px] text-steel">
                          Paste any public URL or domain.
                        </span>
                      ) : null}
                    </label>
                  ) : null}
                  <label className="block">
                    <span className="mb-1.5 block text-xs font-medium text-ink-soft">
                      Work email
                    </span>
                    <input
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="you@company.com"
                      className={fieldClass}
                    />
                  </label>
                  <CustomSelect
                    name="focus"
                    label={
                      mode === "consultation"
                        ? "What you’re building"
                        : "What matters most"
                    }
                    options={[...copy.focusOptions]}
                    value={focus}
                    onChange={setFocus}
                  />
                  <button
                    type="submit"
                    className="btn-heat mt-1 w-full rounded-lg px-4 py-3.5 text-sm font-semibold text-ink"
                  >
                    {copy.submitLabel}
                  </button>
                </form>
              )}
            </section>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
