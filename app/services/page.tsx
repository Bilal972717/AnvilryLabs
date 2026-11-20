import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Reveal } from "@/components/Reveal";
import { ServiceCta } from "@/components/ServiceCta";
import { servicePages } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Bespoke Builds, Accelerated Builds, Managed Platforms and Findability — plus web, app, CMS, ecommerce and SEO pages from Anvilry Labs.",
  alternates: { canonical: "/services" },
};

const lines = [
  {
    n: "01",
    title: "Bespoke Builds",
    href: "/services/bespoke-builds",
    body: "Custom websites, web apps, mobile apps and software built from scratch. Exactly what the business needs, built to scale.",
    children: [
      { label: "Web development", href: "/services/web-development" },
      { label: "App development", href: "/services/app-development" },
      { label: "Custom software", href: "/services/custom-software" },
    ],
  },
  {
    n: "02",
    title: "Accelerated Builds",
    href: "/services/accelerated-builds",
    body: "Template-based websites and apps, tailored and polished. A professional launch in a fraction of the time and budget, never a lesser option.",
    children: [] as { label: string; href: string }[],
  },
  {
    n: "03",
    title: "Managed Platforms",
    href: "/services/managed-platforms",
    body: "CMS-based builds your team can run themselves, with training and support. Control over content without depending on us.",
    children: [
      { label: "CMS builds", href: "/services/cms-builds" },
      { label: "Ecommerce stores", href: "/services/ecommerce" },
    ],
  },
  {
    n: "04",
    title: "Findability",
    href: "/services/findability",
    body: "SEO is part of the build, not an afterthought. Traffic and enquiries from the right people.",
    children: [
      { label: "Free audit", href: "/free-audit" },
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-workshop">
      <section className="mx-auto max-w-6xl px-5 pb-10 pt-16 text-center sm:px-8 sm:pt-24">
        <Reveal className="mx-auto max-w-3xl">
          <div className="flex justify-center">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Services" },
              ]}
            />
          </div>
          <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.08em] text-steel">
            Services
          </p>
          <h1 className="mt-4 font-display text-5xl font-medium tracking-tight text-ink sm:text-6xl">
            Built to last. Easy to find.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-steel">
            Four service lines, with dedicated pages for the searches that lead
            to real enquiries. We describe the work by the outcome, not only the
            technology.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl space-y-16 px-5 pb-24 sm:px-8">
        {lines.map((line, i) => (
          <Reveal key={line.n} delayMs={i * 40} className="border-t border-line pt-10">
            <p className="font-mono text-[11px] text-heat-deep">{line.n}</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              <Link
                href={line.href}
                className="transition hover:text-heat-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-heat"
              >
                {line.title}
              </Link>
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-steel">
              {line.body}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href={line.href}
                className="btn-heat rounded-md px-5 py-3 text-sm font-semibold text-ink"
              >
                View {line.title}
              </Link>
              {line.children.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className="btn-ghost rounded-md px-5 py-3 text-sm font-semibold text-ink"
                >
                  {child.label}
                </Link>
              ))}
            </div>
          </Reveal>
        ))}

        <Reveal className="border-t border-line pt-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-steel">
            All service pages
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {servicePages.map((page) => (
              <li key={page.slug}>
                <Link
                  href={`/services/${page.slug}`}
                  className="text-sm font-semibold text-brass underline decoration-heat/60 underline-offset-4 hover:text-ink"
                >
                  {page.title} →
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal>
          <ServiceCta
            title="Not sure which fits?"
            body="Book a free consultation and we’ll map the right service line to your goal."
          />
        </Reveal>
      </section>
    </div>
  );
}
