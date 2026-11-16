import Link from "next/link";
import { AnvilMark } from "@/components/AnvilMark";

const explore = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/process", label: "Process" },
  { href: "/about", label: "About" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-forge text-ink">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px heat-bar opacity-50" />
      <div className="pointer-events-none absolute -right-16 top-0 h-48 w-48 rounded-full bg-heat/10 blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <AnvilMark className="h-9 w-9" />
            <span className="font-display text-lg font-bold tracking-tight">
              Anvilry Labs
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-steel">
            Software, properly forged. Websites, apps and custom software built
            to hold up — then made easy to find.
          </p>
        </div>
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-heat">
            Explore
          </p>
          <ul className="mt-4 space-y-2.5">
            {explore.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-ink-soft transition hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-heat"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-heat">
            Connect
          </p>
          <ul className="mt-4 space-y-2.5">
            <li>
              <Link
                href="/contact"
                className="text-sm text-ink-soft transition hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-heat"
              >
                Contact
              </Link>
            </li>
            <li>
              <a
                href="mailto:hello@anvilrylabs.com"
                className="text-sm text-ink-soft transition hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-heat"
              >
                hello@anvilrylabs.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line pb-[max(1.25rem,env(safe-area-inset-bottom))]">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 pr-36 text-xs text-steel sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:pr-40">
          <p>© 2026 Anvilry Labs · anvilrylabs.com</p>
          <p className="font-mono tracking-wide">Software, properly forged.</p>
        </div>
      </div>
    </footer>
  );
}
