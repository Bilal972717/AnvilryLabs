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
        className="pointer-events-auto inline-flex items-center gap-2.5 rounded-md border border-line bg-panel/95 px-4 py-2.5 text-sm font-semibold text-ink shadow-[0_8px_24px_rgba(20,22,28,0.08)] backdrop-blur-md transition hover:border-heat/50 hover:text-heat focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-heat dark:bg-panel/90 dark:shadow-[0_10px_28px_rgba(0,0,0,0.45)]"
        aria-label="Open free audit"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-heat" aria-hidden="true" />
        Free audit
      </button>
    </div>
  );
}
