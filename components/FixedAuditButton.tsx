"use client";

import { useAudit } from "@/components/AuditProvider";

export function FixedAuditButton() {
  const { open, openAudit } = useAudit();

  if (open) return null;

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-[55] flex justify-end p-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:p-6">
      <button
        type="button"
        onClick={openAudit}
        className="pointer-events-auto group relative overflow-hidden rounded-md border border-heat/40 bg-panel text-left shadow-[0_16px_40px_rgba(20,22,28,0.12)] transition hover:-translate-y-0.5 hover:border-heat focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-heat dark:border-heat/50 dark:bg-[#12151c] dark:shadow-[0_18px_48px_rgba(0,0,0,0.55)]"
        aria-label="Open free audit"
      >
        <span className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-brass via-heat to-heat-deep" aria-hidden="true" />
        <span className="absolute inset-x-0 top-0 h-px heat-bar opacity-80" aria-hidden="true" />
        <span className="flex items-center gap-3 py-3 pr-4 pl-4 sm:pr-5">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm bg-heat text-white shadow-[0_6px_16px_rgba(224,77,26,0.35)] transition group-hover:brightness-110">
            <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" aria-hidden="true">
              <path
                d="M3 8.5h7.5M8 5l3.5 3.5L8 12"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="min-w-0">
            <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-heat">
              Free audit
            </span>
            <span className="mt-0.5 block text-sm font-semibold text-ink">
              Get yours
            </span>
          </span>
        </span>
      </button>
    </div>
  );
}
