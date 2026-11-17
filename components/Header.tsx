"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnvilMark } from "@/components/AnvilMark";
import { useAudit } from "@/components/AuditProvider";

const links = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/process", label: "Process" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const { openAudit } = useAudit();
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const sidebarRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const node = headerRef.current;
    if (!node) return;

    const syncHeight = () => {
      document.documentElement.style.setProperty(
        "--site-header-h",
        `${node.getBoundingClientRect().height}px`,
      );
    };

    syncHeight();
    const observer = new ResizeObserver(syncHeight);
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const sidebar = sidebarRef.current;
    const closeBtn = closeButtonRef.current;

    requestAnimationFrame(() => {
      closeBtn?.focus();
    });

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        return;
      }

      if (e.key !== "Tab" || !sidebar) return;

      const focusable = [
        ...sidebar.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      ].filter((el) => !el.hasAttribute("disabled") && el.tabIndex !== -1);

      if (focusable.length === 0) return;

      const first = focusable[0]!;
      const last = focusable[focusable.length - 1]!;

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      menuButtonRef.current?.focus();
    };
  }, [menuOpen]);

  return (
    <>
      <header
        ref={headerRef}
        className="sticky top-0 z-40 border-b border-line/80 bg-paper/75 backdrop-blur-2xl"
      >
        <button
          type="button"
          onClick={openAudit}
          className="group flex w-full cursor-pointer items-center justify-center gap-2 border-b border-line bg-ink px-4 py-2.5 text-center text-bone transition hover:bg-[#1a1e28] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-heat"
        >
          <span className="text-[12px] font-medium text-paper/85 sm:text-[13px]">
            Free website and SEO audit for new enquiries.
          </span>
          <span className="inline-flex items-center gap-1 text-[12px] font-semibold text-heat transition group-hover:text-[#b6f04a] sm:text-[13px]">
            Claim yours
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </span>
        </button>

        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:h-[4.5rem] sm:px-8">
          <Link
            href="/"
            className="group flex items-center gap-2.5 rounded-sm text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-heat"
            onClick={() => setMenuOpen(false)}
          >
            <AnvilMark priority className="h-10 w-10" />
            <span className="font-display text-[1.15rem] font-semibold tracking-tight sm:text-lg">
              Anvilry Labs
            </span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative rounded-sm text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-heat ${
                    active
                      ? "font-medium text-ink"
                      : "text-steel hover:text-ink"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  {link.label}
                  {active ? (
                    <span className="absolute -bottom-1 left-0 h-px w-full bg-heat" />
                  ) : null}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={openAudit}
              className="btn-heat hidden cursor-pointer rounded-md px-3.5 py-2 text-sm font-semibold text-ink sm:inline-flex"
            >
              Free audit
            </button>
            <button
              ref={menuButtonRef}
              type="button"
              className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-md border border-line text-ink transition hover:bg-mist focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-heat md:hidden"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls={menuOpen ? "mobile-sidebar" : undefined}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span className="sr-only">Menu</span>
              <span className="flex w-4 flex-col gap-1" aria-hidden="true">
                <span
                  className={`h-0.5 w-full bg-ink transition ${menuOpen ? "translate-y-1.5 rotate-45" : ""}`}
                />
                <span
                  className={`h-0.5 w-full bg-ink transition ${menuOpen ? "opacity-0" : ""}`}
                />
                <span
                  className={`h-0.5 w-full bg-ink transition ${menuOpen ? "-translate-y-1.5 -rotate-45" : ""}`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {menuOpen ? (
        <div className="fixed inset-0 z-50 md:hidden">
          <button
            type="button"
            aria-label="Close menu"
            className="absolute inset-0 bg-overlay backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          />

          <aside
            ref={sidebarRef}
            id="mobile-sidebar"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation"
            className="absolute right-0 top-0 flex h-full w-[min(86vw,22rem)] flex-col border-l border-line bg-panel shadow-[-20px_0_48px_rgba(20,22,28,0.12)]"
          >
            <div className="flex items-center justify-between border-b border-line px-5 py-4">
              <div className="flex items-center gap-2.5">
                <AnvilMark className="h-9 w-9" />
                <span className="font-display text-base font-semibold tracking-tight text-ink">
                  Anvilry Labs
                </span>
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => setMenuOpen(false)}
                className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-md border border-line text-ink transition hover:bg-mist focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-heat"
                aria-label="Close menu"
              >
                ×
              </button>
            </div>

            <nav className="flex flex-1 flex-col gap-1 px-4 py-5" aria-label="Mobile">
              {links.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={`rounded-lg px-3 py-3 text-base transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-heat ${
                      active
                        ? "bg-heat/15 font-semibold text-ink"
                        : "text-ink-soft hover:bg-mist hover:text-ink"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <div className="border-t border-line p-4">
              <button
                type="button"
                onClick={() => {
                  setMenuOpen(false);
                  openAudit();
                }}
                className="btn-heat w-full cursor-pointer rounded-md px-3 py-3 text-base font-semibold text-ink"
              >
                Free audit
              </button>
            </div>
          </aside>
        </div>
      ) : null}
    </>
  );
}
