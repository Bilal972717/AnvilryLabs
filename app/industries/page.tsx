import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Reveal } from "@/components/Reveal";
import { ServiceCta } from "@/components/ServiceCta";
import { industryPages } from "@/lib/industries";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Industry-focused website and software work from Anvilry Labs — ecommerce, SaaS, professional services, health and hospitality.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <div className="bg-workshop">
      <section className="mx-auto max-w-6xl px-5 pb-10 pt-16 sm:px-8 sm:pt-24">
        <Reveal>
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Industries" },
            ]}
          />
          <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.08em] text-steel">
            Industries
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl font-medium tracking-tight text-ink sm:text-6xl">
            Built for how your sector actually works.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-steel">
            Same delivery standard — named contact, written scope, milestone
            demos — applied to the problems each industry hits most often.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-24 sm:px-8">
        <div className="grid gap-4 md:grid-cols-2">
          {industryPages.map((industry, index) => (
            <Reveal
              key={industry.slug}
              delayMs={index * 40}
              className="border border-line bg-paper-elevated p-6 transition hover:border-heat/35"
            >
              <h2 className="font-display text-2xl font-bold tracking-tight text-ink">
                <Link href={`/industries/${industry.slug}`}>{industry.title}</Link>
              </h2>
              <p className="mt-3 text-base leading-relaxed text-steel">
                {industry.intro}
              </p>
              <Link
                href={`/industries/${industry.slug}`}
                className="mt-5 inline-flex text-sm font-semibold text-brass underline decoration-heat/60 underline-offset-4 hover:text-ink"
              >
                View industry →
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16">
          <ServiceCta />
        </Reveal>
      </section>
    </div>
  );
}
