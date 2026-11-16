"use client";

import { useEffect, useState } from "react";

const stages = [
  {
    label: "Brief",
    output: "Goal locked",
    detail: "Written success measures before any build starts.",
  },
  {
    label: "Blueprint",
    output: "Scope sealed",
    detail: "Timeline, architecture and one named contact.",
  },
  {
    label: "Forge",
    output: "Demo live",
    detail: "Short cycles. Something you can click each milestone.",
  },
  {
    label: "Proof",
    output: "Evidence in",
    detail: "Speed, access, SEO and security checked together.",
  },
  {
    label: "Launch",
    output: "Go live",
    detail: "Redirects, metadata and monitoring — then release.",
  },
  {
    label: "Care",
    output: "Handover",
    detail: "Docs, training and ownership. You keep the keys.",
  },
];

export function HeroForgePanel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
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
    }, 2800);
    return () => window.clearInterval(id);
  }, [paused, reduceMotion]);

  return (
    <div
      className="relative overflow-hidden rounded-2xl border border-line bg-panel shadow-[0_30px_80px_rgba(0,0,0,0.18)]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
          setPaused(false);
        }
      }}
    >
      <div className="absolute inset-x-0 top-0 z-10 h-px heat-bar" />
      <div className="pointer-events-none absolute -right-16 -top-20 h-48 w-48 rounded-full bg-heat/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-10 h-40 w-40 rounded-full bg-brass/15 blur-3xl" />

      <div className="relative border-b border-line px-5 py-4 sm:px-6">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-brass">
              Live forge panel
            </p>
            <h2 className="mt-1.5 font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl">
              Six stages. Visible output.
            </h2>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-heat/25 bg-heat/10 px-2.5 py-1">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-heat opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-heat" />
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-heat">
              Live
            </span>
          </div>
        </div>

        {/* Progress rail */}
        <div className="mt-5 flex gap-1.5" aria-hidden="true">
          {stages.map((item, i) => (
            <div
              key={item.label}
              className="h-1 flex-1 overflow-hidden rounded-full bg-mist"
            >
              <div
                className={`h-full rounded-full bg-heat transition-all duration-500 ${
                  i < active ? "w-full" : i === active ? "w-full" : "w-0"
                } ${i === active && !reduceMotion ? "opacity-100" : i < active ? "opacity-70" : "opacity-30"}`}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="relative p-5 sm:p-6">
        <ol className="space-y-1.5">
          {stages.map((item, i) => {
            const isActive = i === active;
            const isDone = i < active;
            return (
              <li key={item.label}>
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  className={`group flex w-full cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-left transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-heat ${
                    isActive
                      ? "bg-heat/15 ring-1 ring-heat/35"
                      : "hover:bg-mist"
                  }`}
                  aria-current={isActive ? "step" : undefined}
                >
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-md font-mono text-[11px] transition ${
                      isActive
                        ? "bg-heat text-white shadow-[0_0_20px_rgba(239,85,32,0.45)]"
                        : isDone
                          ? "border border-brass/40 text-brass"
                          : "border border-line text-steel"
                    }`}
                  >
                    {isDone && !isActive ? "✓" : String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span
                      className={`block text-sm font-semibold ${
                        isActive ? "text-ink" : "text-ink-soft"
                      }`}
                    >
                      {item.label}
                    </span>
                  </span>
                  <span
                    className={`shrink-0 font-mono text-[10px] uppercase tracking-[0.14em] ${
                      isActive ? "text-heat" : isDone ? "text-brass/80" : "text-steel"
                    }`}
                  >
                    {isActive ? "Now" : isDone ? item.output : "Queued"}
                  </span>
                </button>
              </li>
            );
          })}
        </ol>

        <div
          key={stage.label}
          className={`mt-5 rounded-xl border border-line bg-panel-muted px-4 py-4 ${
            reduceMotion ? "" : "animate-rise"
          }`}
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-brass">
            Stage output · {stage.label}
          </p>
          <p className="mt-2 font-display text-lg font-semibold text-ink">
            {stage.output}
          </p>
          <p className="mt-1.5 text-sm leading-relaxed text-steel">{stage.detail}</p>
        </div>
      </div>
    </div>
  );
}
