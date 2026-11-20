"use client";

import type { ReactNode } from "react";
import { useAudit } from "@/components/AuditProvider";

type ConsultationTriggerProps = {
  children: ReactNode;
  className?: string;
};

export function ConsultationTrigger({
  children,
  className,
}: ConsultationTriggerProps) {
  const { openConsultation } = useAudit();

  return (
    <button type="button" className={className} onClick={openConsultation}>
      {children}
    </button>
  );
}
