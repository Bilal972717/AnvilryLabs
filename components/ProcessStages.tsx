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
  const progress = ((active + 1) / stages.length) * 100;

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
      className="relative overflow-hidden rounded-2xl border border-line bg-[#101a2e] text-[#f6f2ea]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
          setPaused(false);
        }
      }}
    >
      <div className="heat-bar absolute inset-x-0 top-0 h-px" />

      <div className="relative border-b border-white/10 px-5 py-5 sm:px-8 sm:py-6">
        <div className="mb-6 flex items-end justify-between gap-3">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-[#cf7f48]">
              Six-stage forge path
            </p>
            <p className="mt-1 text-sm text-[#f6f2ea]/55">
              A working demo at every milestone.
            </p>
          </div>
          <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#f6f2ea]/50">
            {String(active + 1).padStart(2, "0")} / {String(stages.length).padStart(2, "0")}
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-0 right-0 top-[0.95rem] hidden h-px bg-white/10 sm:block" />
          <div
            className="absolute left-0 top-[0.95rem] hidden h-px bg-[#cf7f48]/70 transition-[width] duration-500 ease-out sm:block"
            style={{ width: `${(active / (stages.length - 1)) * 100}%` }}
          />

          <div
            role="tablist"
            aria-label="Process stages"
            className="relative flex gap-2 overflow-x-auto overscroll-x-contain pb-1 sm:grid sm:grid-cols-6 sm:gap-3 sm:overflow-visible sm:pb-0"
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
                  className="group relative flex min-w-[4.5rem] flex-col items-start gap-2.5 text-left sm:min-w-0"
                >
                  <span
                    className={`relative z-[1] flex h-8 w-8 items-center justify-center rounded-md border font-mono text-[11px] transition ${
                      selected
                        ? "border-[#cf7f48] bg-[#cf7f48] text-[#101a2e]"
                        : done
                          ? "border-[#cf7f48]/50 bg-[#1a2740] text-[#cf7f48]"
                          : "border-white/15 bg-[#1a2740] text-[#f6f2ea]/55 group-hover:border-[#cf7f48]/40 group-hover:text-[#f6f2ea]"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`text-sm font-medium transition ${
                      selected ? "text-[#f6f2ea]" : "text-[#f6f2ea]/45 group-hover:text-[#f6f2ea]/75"
                    }`}
                  >
                    {item.label}
                  </span>
                  {selected && !reduceMotion ? (
                    <span className="absolute inset-x-0 -bottom-1 h-0.5 overflow-hidden rounded-full bg-white/10 sm:left-0 sm:right-auto sm:w-8">
                      <span
                        key={stage.id}
                        className="progress-fill block h-full rounded-full bg-[#cf7f48]"
                      />
                    </span>
                  ) : null}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div
        role="tabpanel"
        id={`${baseId}-panel`}
        aria-labelledby={`${baseId}-tab-${stage.id}`}
        aria-live={reduceMotion ? "polite" : "off"}
        className="relative grid gap-10 px-5 py-8 sm:px-8 sm:py-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14"
      >
        <div key={`${stage.id}-copy`} className={reduceMotion ? undefined : "animate-rise"}>
          <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#cf7f48]">
            Stage {String(active + 1).padStart(2, "0")} · {stage.label}
          </p>
          <h3 className="mt-4 font-display text-3xl font-medium tracking-tight text-[#f6f2ea] sm:text-4xl">
            {stage.title}
          </h3>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-[#f6f2ea]/65">
            {stage.body}
          </p>
        </div>

        <ul
          key={`${stage.id}-proof`}
          className={`space-y-0 border-t border-white/10 ${reduceMotion ? "" : "animate-rise-delay-1"}`}
        >
          {stage.proof.map((item, i) => (
            <li
              key={item}
              className="flex items-baseline gap-4 border-b border-white/10 py-3.5 text-sm text-[#f6f2ea]/80"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-[#cf7f48]/80">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="h-1 w-full bg-white/5" aria-hidden="true">
        <div
          className="h-full bg-[#cf7f48]/80 transition-[width] duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
