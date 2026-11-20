"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useAudit } from "@/components/AuditProvider";
import { trackEvent } from "@/lib/analytics";

const links = [
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/work", label: "Work" },
  { href: "/process", label: "Process" },
  { href: "/journal", label: "Journal" },
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
          onClick={() => {
            trackEvent("audit_cta_click", { location: "announcement_bar" });
            openAudit();
          }}
          className="group flex w-full cursor-pointer items-center justify-center border-b border-line bg-[#101a2e] px-4 py-2.5 text-center text-[#f6f2ea] transition hover:bg-[#1a2740] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-heat"
        >
          <span className="max-w-[22rem] text-[12px] font-medium leading-snug text-[#f6f2ea]/85 sm:max-w-none sm:text-[13px]">
            Free website and SEO audit for new enquiries.{" "}
            <span className="inline-flex items-center gap-1 font-semibold text-[#cf7f48] transition group-hover:text-[#d9925c]">
              Claim yours
              <span
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-0.5"
              >
                →
              </span>
            </span>
          </span>
        </button>

        <div className="mx-auto flex h-[4.75rem] max-w-6xl items-center justify-between gap-4 px-5 sm:h-20 sm:px-8">
          <Link
            href="/"
            className="group flex items-center rounded-sm text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-heat"
            onClick={() => setMenuOpen(false)}
          >
            <Image
              src="/logo-nav.png"
              alt="Anvilry Labs"
              width={537}
              height={434}
              priority
              className="h-14 w-auto sm:h-16"
            />
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
              onClick={() => {
                trackEvent("audit_cta_click", { location: "header" });
                openAudit();
              }}
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
        <div className="fixed inset-0 z-[60] md:hidden">
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
              <div className="flex items-center">
                <Image
                  src="/logo-nav.png"
                  alt="Anvilry Labs"
                  width={537}
                  height={434}
                  className="h-12 w-auto"
                />
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
                  trackEvent("audit_cta_click", { location: "mobile_menu" });
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
