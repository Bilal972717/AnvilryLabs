import Link from "next/link";
import { AnvilryLogo } from "@/components/AnvilryLogo";

const explore = [
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/work", label: "Work" },
  { href: "/process", label: "Process" },
  { href: "/journal", label: "Journal" },
  { href: "/pricing-guide", label: "Pricing guide" },
  { href: "/free-audit", label: "Free audit" },
  { href: "/about", label: "About" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-[#101a2e] text-[#f6f2ea]">
      <div className="relative mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center">
            <AnvilryLogo variant="dark" className="h-14 sm:h-16" />
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#f6f2ea]/70">
            Software, properly forged. Websites, apps and custom software built
            to hold up — then made easy to find.
          </p>
        </div>
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#cf7f48]">
            Explore
          </p>
          <ul className="mt-4 space-y-2.5">
            {explore.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-[#f6f2ea]/75 transition hover:text-[#f6f2ea] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#cf7f48]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#cf7f48]">
            Connect
          </p>
          <ul className="mt-4 space-y-2.5">
            <li>
              <Link
                href="/contact"
                className="text-sm text-[#f6f2ea]/75 transition hover:text-[#f6f2ea] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#cf7f48]"
              >
                Contact
              </Link>
            </li>
            <li>
              <a
                href="mailto:hello@anvilrylabs.com"
                className="text-sm text-[#f6f2ea]/75 transition hover:text-[#f6f2ea] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#cf7f48]"
              >
                hello@anvilrylabs.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 pb-[max(1.25rem,env(safe-area-inset-bottom))]">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 pr-36 text-xs text-[#f6f2ea]/55 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:pr-40">
          <p>© 2026 Anvilry Labs · anvilrylabs.com</p>
          <p className="font-mono tracking-[0.08em]">Software, properly forged.</p>
        </div>
      </div>
    </footer>
  );
}
