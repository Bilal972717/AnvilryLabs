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

type AuditContextValue = {
  open: boolean;
  openAudit: () => void;
  closeAudit: () => void;
};

const AuditContext = createContext<AuditContextValue | null>(null);

export function AuditProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  const openAudit = useCallback(() => setOpen(true), []);
  const closeAudit = useCallback(() => setOpen(false), []);

  const value = useMemo(
    () => ({ open, openAudit, closeAudit }),
    [open, openAudit, closeAudit],
  );

  return (
    <AuditContext.Provider value={value}>
      {children}
      <AuditDialog open={open} onClose={closeAudit} />
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
