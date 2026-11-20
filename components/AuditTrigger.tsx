"use client";

import type { ReactNode } from "react";
import { useAudit } from "@/components/AuditProvider";
import { trackEvent } from "@/lib/analytics";

type AuditTriggerProps = {
  children: ReactNode;
  className?: string;
  location?: string;
};

export function AuditTrigger({
  children,
  className,
  location = "unknown",
}: AuditTriggerProps) {
  const { openAudit } = useAudit();

  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        trackEvent("audit_cta_click", { location });
        openAudit();
      }}
    >
      {children}
    </button>
  );
}
