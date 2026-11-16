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
      className="overflow-hidden rounded-2xl border border-line bg-forge-mid"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
          setPaused(false);
        }
      }}
    >
      <div
        role="tablist"
        aria-label="Process stages"
        className="flex gap-1 overflow-x-auto overscroll-x-contain border-b border-line p-2 sm:gap-0 sm:overflow-visible sm:p-0"
      >
        {stages.map((item, index) => {
          const selected = index === active;
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
              className={`min-w-[5.5rem] shrink-0 cursor-pointer rounded-lg px-2 py-2.5 text-left transition sm:min-w-0 sm:flex-1 sm:rounded-none sm:border-r sm:border-line sm:px-3 sm:py-4 last:sm:border-r-0 ${
                selected
                  ? "bg-heat text-white"
                  : "text-ink-soft hover:bg-mist hover:text-ink"
              }`}
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] opacity-80">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="mt-1 block text-sm font-semibold">{item.label}</span>
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id={`${baseId}-panel`}
        aria-labelledby={`${baseId}-tab-${stage.id}`}
        aria-live={reduceMotion ? "polite" : "off"}
        className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end"
      >
        <div key={stage.id} className={reduceMotion ? undefined : "animate-rise"}>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-heat">
            Stage {String(active + 1).padStart(2, "0")} · {stage.label}
          </p>
          <h3 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            {stage.title}
          </h3>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-steel">
            {stage.body}
          </p>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2">
          {stage.proof.map((item) => (
            <li
              key={item}
              className="border border-line bg-panel-muted px-4 py-3 text-sm text-ink-soft"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
