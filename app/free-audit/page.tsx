import type { Metadata } from "next";
import { AuditTrigger } from "@/components/AuditTrigger";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ConsultationTrigger } from "@/components/ConsultationTrigger";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { faqPageJsonLd, type FaqItem } from "@/lib/faqs";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Free website & SEO audit",
  description:
    "Claim a free written audit of your site’s speed, technical SEO and structure — with the highest-impact fixes listed first. No obligation.",
  alternates: { canonical: "/free-audit" },
  openGraph: {
    title: "Free website & SEO audit · Anvilry Labs",
    description:
      "A short written review of speed, SEO and structure. Highest-impact fixes first. No obligation.",
    url: absoluteUrl("/free-audit"),
  },
};

const includes = [
  "Speed and Core Web Vitals snapshot",
  "Technical SEO and indexability checks",
  "Structure and on-page priorities",
  "Highest-impact fixes listed first",
  "Reply within one working day",
];

const faqs: FaqItem[] = [
  {
    q: "What does the free audit include?",
    a: "A written review of speed, technical SEO and structure, with the highest-impact fixes listed first.",
  },
  {
    q: "Is there an obligation to hire you?",
    a: "No. The audit stands alone. If you want help implementing fixes, we quote that separately.",
  },
  {
    q: "How fast do you reply?",
    a: "Within one working day with a clear next step.",
  },
  {
    q: "What do you need from me?",
    a: "Your website URL, a work email, and what matters most — enquiries, speed, rankings or a new build.",
  },
];

export default function FreeAuditPage() {
  return (
    <div className="bg-workshop">
      <JsonLd data={faqPageJsonLd(faqs)} />

      <section className="relative overflow-hidden border-b border-line bg-paper-elevated">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_right,rgba(207,127,72,0.14),transparent_55%)]" />
        <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <Reveal>
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Free audit" },
              ]}
            />
            <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.08em] text-steel">
              Free audit
            </p>
            <h1 className="mt-4 max-w-3xl font-display text-4xl font-medium tracking-tight text-ink sm:text-6xl">
              Find out what is holding your site back.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-steel">
              A short, written review of your site’s speed, SEO and structure —
              with the highest-impact fixes first. No obligation. For new
              enquiries from businesses that want qualified traffic, not vanity
              metrics.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <AuditTrigger className="btn-heat rounded-lg px-7 py-3.5 text-sm font-semibold text-ink">
                Claim my free audit
              </AuditTrigger>
              <ConsultationTrigger className="btn-ghost rounded-lg px-7 py-3.5 text-sm font-semibold text-ink">
                Book a free consultation
              </ConsultationTrigger>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <Reveal>
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink">
            What you get
          </h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {includes.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 border border-line bg-paper-elevated px-4 py-3 text-sm text-ink-soft"
              >
                <span className="mt-0.5 text-heat-deep">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="mt-16">
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink">
            Questions
          </h2>
          <div className="mt-6 divide-y divide-line border-y border-line">
            {faqs.map((item) => (
              <div key={item.q} className="py-5">
                <h3 className="font-display text-xl font-semibold tracking-tight text-ink">
                  {item.q}
                </h3>
                <p className="mt-2 max-w-3xl text-base leading-relaxed text-steel">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-16 text-center">
          <AuditTrigger className="btn-heat rounded-lg px-7 py-3.5 text-sm font-semibold text-ink">
            Claim my free audit
          </AuditTrigger>
        </Reveal>
      </section>
    </div>
  );
}
