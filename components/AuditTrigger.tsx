"use client";

import type { ReactNode } from "react";
import { useAudit } from "@/components/AuditProvider";

type AuditTriggerProps = {
  children: ReactNode;
  className?: string;
};

export function AuditTrigger({ children, className }: AuditTriggerProps) {
  const { openAudit } = useAudit();

  return (
    <button type="button" className={className} onClick={openAudit}>
      {children}
    </button>
  );
}
