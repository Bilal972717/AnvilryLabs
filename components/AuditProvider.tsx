"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { AuditDialog } from "@/components/AuditDialog";

export type LeadMode = "audit" | "consultation";

type AuditContextValue = {
  open: boolean;
  mode: LeadMode;
  openAudit: () => void;
  openConsultation: () => void;
  closeAudit: () => void;
};

const AuditContext = createContext<AuditContextValue | null>(null);

export function AuditProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<LeadMode>("audit");

  const openAudit = useCallback(() => {
    setMode("audit");
    setOpen(true);
  }, []);

  const openConsultation = useCallback(() => {
    setMode("consultation");
    setOpen(true);
  }, []);

  const closeAudit = useCallback(() => setOpen(false), []);

  const value = useMemo(
    () => ({ open, mode, openAudit, openConsultation, closeAudit }),
    [open, mode, openAudit, openConsultation, closeAudit],
  );

  return (
    <AuditContext.Provider value={value}>
      {children}
      <AuditDialog open={open} mode={mode} onClose={closeAudit} />
    </AuditContext.Provider>
  );
}

export function useAudit() {
  const ctx = useContext(AuditContext);
  if (!ctx) {
    throw new Error("useAudit must be used within AuditProvider");
  }
  return ctx;
}
