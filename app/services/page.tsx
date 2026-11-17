import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Services",
  description: "Bespoke Builds, Accelerated Builds, Managed Platforms and Findability.",
};

const lines = [
  {
    n: "01",
    title: "Bespoke Builds",
    body: "Custom websites, web apps, mobile apps and software built from scratch. Exactly what the business needs, built to scale.",
    items: [
      "Discovery and technical architecture",
      "Custom UI design and component library",
      "Web and mobile app development",
      "API and third-party integrations",
      "Security, performance and accessibility testing",
    ],
  },
  {
    n: "02",
    title: "Accelerated Builds",
    body: "Template-based websites and apps, tailored and polished. A professional launch in a fraction of the time and budget, never a lesser option.",
    items: [
      "Template selection matched to your goals",
      "Branding, content and layout tailoring",
      "Responsive build and QA",
      "Basic SEO setup and analytics",
      "Launch support and handover",
    ],
  },
  {
    n: "03",
    title: "Managed Platforms",
    body: "CMS-based builds your team can run themselves, with training and support. Control over content without depending on us.",
    items: [
      "CMS selection and build",
      "Editor-friendly content structures",
      "Team training and written guides",
      "Hosting, updates and monitoring options",
      "Defined post-launch support window",
    ],
  },
  {
    n: "04",
    title: "Findability",
    body: "SEO is part of the build, not an afterthought. Traffic and enquiries from the right people.",
    items: [
      "Technical SEO audit",
      "On-page optimisation and structured data",
      "Content strategy and keyword mapping",
      "Redirects and launch SEO checks",
      "Monthly reporting with real numbers",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-workshop">
      <section className="mx-auto max-w-6xl px-5 pb-10 pt-16 text-center sm:px-8 sm:pt-24">
        <Reveal className="mx-auto max-w-3xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-steel">
            Services
          </p>
          <h1 className="mt-4 font-display text-5xl font-medium tracking-tight text-ink sm:text-6xl">
            Built to last. Easy to find.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-steel">
            We describe the work by the outcome, not only the technology.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl space-y-16 px-5 pb-24 sm:px-8">
        {lines.map((line, i) => (
          <Reveal key={line.n} delayMs={i * 40} className="border-t border-line pt-10">
            <p className="font-mono text-[11px] text-heat">{line.n}</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              {line.title}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-steel">
              {line.body}
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {line.items.map((item) => (
                <li
                  key={item}
                  className="border border-line bg-paper-elevated px-4 py-3 text-sm text-ink-soft"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}

        <Reveal className="rounded-2xl border border-line bg-forge-plane px-6 py-10 text-ink sm:px-10">
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink">
            Not sure which fits?
          </h2>
          <p className="mt-3 max-w-lg text-steel">
            Book a discovery call and we’ll map the right service line to your goal.
          </p>
          <Link
            href="/contact"
            className="btn-heat mt-6 inline-flex rounded-md px-5 py-3 text-sm font-semibold text-ink"
          >
            Book a discovery call
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
