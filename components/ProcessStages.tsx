"use client";

import { useEffect, useId, useState } from "react";

const stages = [
  {
    id: "brief",
    label: "Brief",
    title: "We listen before we build.",
    body: "Awkward questions first. Then a written goal and success measures you can hold us to.",
    proof: ["Goal agreed in writing", "Audience named", "Constraint mapped", "Success measured up front"],
  },
  {
    id: "blueprint",
    label: "Blueprint",
    title: "Scope, timeline, named contact.",
    body: "Architecture and delivery rhythm on paper before a line of production code.",
    proof: ["Scope document", "Timeline locked", "One named contact", "Risks surfaced early"],
  },
  {
    id: "forge",
    label: "Forge",
    title: "Short cycles. Working demos.",
    body: "Every milestone ends with something you can click — not a slide deck.",
    proof: ["Milestone demos", "Done · Next · Risks", "Decisions logged", "No silent weeks"],
  },
  {
    id: "proof",
    label: "Proof",
    title: "Evidence before we ship.",
    body: "Performance, security, accessibility and SEO checks with a shared report.",
    proof: ["Speed measured", "Access checked", "SEO scored", "Security reviewed"],
  },
  {
    id: "launch",
    label: "Launch",
    title: "Planned release, not a leap.",
    body: "Redirects, metadata, sitemap and monitoring — then we go live.",
    proof: ["Redirects mapped", "Metadata checked", "Sitemap submitted", "Monitoring live"],
  },
  {
    id: "care",
    label: "Care",
    title: "Handover that actually hands over.",
    body: "Documentation, training and a defined support window. You own the code.",
    proof: ["Docs delivered", "Team trained", "Assets handed over", "Support window active"],
  },
];

export function ProcessStages() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const baseId = useId();
  const stage = stages[active]!;

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (paused || reduceMotion) return;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % stages.length);
    }, 4200);
    return () => window.clearInterval(id);
  }, [paused, reduceMotion]);

  return (
    <div
      className="panel-shadow relative overflow-hidden rounded-2xl border border-line bg-panel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
          setPaused(false);
        }
      }}
    >
      <div className="relative border-b border-line px-4 py-4 sm:px-6 sm:py-5">
        <div className="mb-4 flex items-center justify-between gap-3">
          <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-steel">
            Six-stage forge path
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-steel">
            {String(active + 1).padStart(2, "0")} / {String(stages.length).padStart(2, "0")}
          </p>
        </div>

        <div
          role="tablist"
          aria-label="Process stages"
          className="flex gap-2 overflow-x-auto overscroll-x-contain pb-1 sm:gap-2.5 sm:overflow-visible sm:pb-0"
        >
          {stages.map((item, index) => {
            const selected = index === active;
            const done = index < active;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                id={`${baseId}-tab-${item.id}`}
                aria-selected={selected}
                aria-controls={`${baseId}-panel`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(index)}
                className={`group relative min-w-[4.75rem] flex-1 cursor-pointer rounded-xl border px-2.5 py-3 text-left transition sm:min-w-0 sm:px-3 ${
                  selected
                    ? "border-heat/50 bg-heat text-ink shadow-[0_10px_28px_rgba(163,230,53,0.28)]"
                    : done
                      ? "border-brass/30 bg-brass/10 text-ink hover:border-brass/50"
                      : "border-line bg-panel-muted text-ink-soft hover:border-heat/30 hover:bg-mist hover:text-ink"
                }`}
              >
                <span
                  className={`font-mono text-[10px] uppercase tracking-[0.08em] ${
                    selected ? "text-ink/70" : "text-brass"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="mt-1 block text-sm font-semibold">{item.label}</span>
                {selected && !reduceMotion ? (
                  <span className="absolute inset-x-3 bottom-1.5 h-0.5 overflow-hidden rounded-full bg-ink/15">
                    <span
                      key={stage.id}
                      className="progress-fill block h-full rounded-full bg-ink/70"
                    />
                  </span>
                ) : null}
              </button>
            );
          })}
        </div>
      </div>

      <div
        role="tabpanel"
        id={`${baseId}-panel`}
        aria-labelledby={`${baseId}-tab-${stage.id}`}
        aria-live={reduceMotion ? "polite" : "off"}
        className="relative grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center"
      >
        <div key={stage.id} className={reduceMotion ? undefined : "animate-rise"}>
          <div className="inline-flex items-center gap-2 rounded-full border border-heat/25 bg-heat/5 px-3 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-heat" />
            <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-heat">
              Stage {String(active + 1).padStart(2, "0")} · {stage.label}
            </p>
          </div>
          <h3 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            {stage.title}
          </h3>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-steel">
            {stage.body}
          </p>
        </div>

        <ul className="grid gap-2.5 sm:grid-cols-2">
          {stage.proof.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2.5 rounded-xl border border-line bg-mist/70 px-3.5 py-3 text-sm text-ink-soft"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-heat" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
