import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { ServiceCta } from "@/components/ServiceCta";
import { getArticle, journalSlugs } from "@/lib/journal";
import { getService } from "@/lib/services";
import { absoluteUrl, siteConfig } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return journalSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};

  return {
    title: article.metaTitle.replace(` · ${siteConfig.name}`, ""),
    description: article.metaDescription,
    alternates: { canonical: `/journal/${article.slug}` },
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      url: absoluteUrl(`/journal/${article.slug}`),
      type: "article",
    },
  };
}

export default async function JournalArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const relatedService = getService(article.serviceSlug);

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDescription,
    datePublished: article.date,
    dateModified: article.date,
    author: {
      "@type": "Organization",
      name: article.author,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntityOfPage: absoluteUrl(`/journal/${article.slug}`),
  };

  return (
    <div className="bg-workshop">
      <JsonLd data={articleLd} />

      <article className="mx-auto max-w-3xl px-5 pb-24 pt-16 sm:px-8 sm:pt-24">
        <Reveal>
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Journal", href: "/journal" },
              { label: article.title },
            ]}
          />
          <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.08em] text-steel">
            {article.date} · {article.author}
          </p>
          <h1 className="mt-4 font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl">
            {article.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-steel">
            {article.summary}
          </p>
        </Reveal>

        <div className="mt-12 space-y-10">
          {article.sections.map((section) => (
            <Reveal key={section.heading}>
              <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                {section.heading}
              </h2>
              <div className="mt-4 space-y-4">
                {section.body.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 48)}
                    className="text-base leading-relaxed text-steel"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        {relatedService ? (
          <Reveal className="mt-12 border-t border-line pt-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-steel">
              Related service
            </p>
            <Link
              href={`/services/${relatedService.slug}`}
              className="mt-3 inline-flex text-sm font-semibold text-brass underline decoration-heat/60 underline-offset-4 hover:text-ink"
            >
              {relatedService.title} →
            </Link>
          </Reveal>
        ) : null}

        <Reveal className="mt-12">
          <ServiceCta />
        </Reveal>
      </article>
    </div>
  );
}
