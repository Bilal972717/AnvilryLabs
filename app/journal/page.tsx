import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Reveal } from "@/components/Reveal";
import { journalArticles } from "@/lib/journal";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Answer-first guides on websites, software, SEO and working with an agency — from Anvilry Labs.",
  alternates: { canonical: "/journal" },
};

export default function JournalPage() {
  return (
    <div className="bg-workshop">
      <section className="mx-auto max-w-6xl px-5 pb-10 pt-16 sm:px-8 sm:pt-24">
        <Reveal>
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Journal" },
            ]}
          />
          <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.08em] text-steel">
            Journal
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl font-medium tracking-tight text-ink sm:text-6xl">
            Clear answers before the brief.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-steel">
            Practical guides for founders and operators. Each piece ends with a
            next step — consultation, audit or a related service.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-24 sm:px-8">
        <div className="grid gap-4 md:grid-cols-2">
          {journalArticles.map((article, index) => (
            <Reveal
              key={article.slug}
              delayMs={index * 40}
              className="border border-line bg-paper-elevated p-6 transition hover:border-heat/35"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-steel">
                {article.date}
              </p>
              <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-ink">
                <Link
                  href={`/journal/${article.slug}`}
                  className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-heat"
                >
                  {article.title}
                </Link>
              </h2>
              <p className="mt-3 text-base leading-relaxed text-steel">
                {article.summary}
              </p>
              <Link
                href={`/journal/${article.slug}`}
                className="mt-5 inline-flex text-sm font-semibold text-brass underline decoration-heat/60 underline-offset-4 hover:text-ink"
              >
                Read article →
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
