"use client";

import type { ReactNode } from "react";
import { useAudit } from "@/components/AuditProvider";
import { trackEvent } from "@/lib/analytics";

type ConsultationTriggerProps = {
  children: ReactNode;
  className?: string;
  location?: string;
};

export function ConsultationTrigger({
  children,
  className,
  location = "unknown",
}: ConsultationTriggerProps) {
  const { openConsultation } = useAudit();

  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        trackEvent("consultation_cta_click", { location });
        openConsultation();
      }}
    >
      {children}
    </button>
  );
}
