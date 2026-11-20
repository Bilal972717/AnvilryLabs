import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { ServiceCta } from "@/components/ServiceCta";
import { faqPageJsonLd } from "@/lib/faqs";
import { getArticle } from "@/lib/journal";
import { getService, serviceSlugs } from "@/lib/services";
import { absoluteUrl, siteConfig } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  return {
    title: service.metaTitle.replace(` · ${siteConfig.name}`, ""),
    description: service.metaDescription,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: absoluteUrl(`/services/${service.slug}`),
      type: "website",
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const relatedArticles = service.relatedArticles
    .map((articleSlug) => getArticle(articleSlug))
    .filter((article): article is NonNullable<typeof article> => Boolean(article));
  const relatedServices = service.relatedServices
    .map((serviceSlug) => getService(serviceSlug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  const professionalServiceLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `${service.title} · ${siteConfig.name}`,
    description: service.metaDescription,
    url: absoluteUrl(`/services/${service.slug}`),
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: ["US", "GB", "EU", "AE", "SA"],
  };

  return (
    <div className="bg-workshop">
      <JsonLd data={professionalServiceLd} />
      <JsonLd data={faqPageJsonLd(service.faqs)} />

      <section className="mx-auto max-w-6xl px-5 pb-10 pt-16 sm:px-8 sm:pt-24">
        <Reveal>
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: service.title },
            ]}
          />
          <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.08em] text-steel">
            {service.line} · {service.title}
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-medium tracking-tight text-ink sm:text-6xl">
            {service.h1}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-steel">
            {service.intro}
          </p>
          <p className="mt-4 text-sm text-ink-soft">
            Built for: {service.audience}
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl space-y-16 px-5 pb-24 sm:px-8">
        <Reveal className="border-t border-line pt-10">
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink">
            How we deliver it
          </h2>
          <ol className="mt-6 grid gap-3 sm:grid-cols-2">
            {service.process.map((step, index) => (
              <li
                key={step}
                className="border border-line bg-paper-elevated px-4 py-3 text-sm text-ink-soft"
              >
                <span className="font-mono text-[11px] text-heat-deep">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-2">{step}</p>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal className="border-t border-line pt-10">
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink">
            Deliverables
          </h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {service.deliverables.map((item) => (
              <li
                key={item}
                className="border border-line bg-paper-elevated px-4 py-3 text-sm text-ink-soft"
              >
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="grid gap-10 border-t border-line pt-10 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-3xl font-bold tracking-tight text-ink">
              Tech stack
            </h2>
            <ul className="mt-6 space-y-3">
              {service.stack.map((item) => (
                <li key={item} className="text-sm leading-relaxed text-steel">
                  <span className="mr-2 text-heat-deep">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delayMs={60}>
            <h2 className="font-display text-3xl font-bold tracking-tight text-ink">
              Trust signals
            </h2>
            <ul className="mt-6 space-y-3">
              {service.proof.map((item) => (
                <li key={item} className="text-sm leading-relaxed text-steel">
                  <span className="mr-2 text-heat-deep">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal className="border-t border-line pt-10">
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink">
            Questions
          </h2>
          <div className="mt-6 divide-y divide-line border-y border-line">
            {service.faqs.map((item) => (
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

        {(relatedServices.length > 0 || relatedArticles.length > 0) && (
          <Reveal className="border-t border-line pt-10">
            <h2 className="font-display text-3xl font-bold tracking-tight text-ink">
              Keep reading
            </h2>
            <div className="mt-6 grid gap-8 sm:grid-cols-2">
              {relatedServices.length > 0 ? (
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-steel">
                    Related services
                  </p>
                  <ul className="mt-3 space-y-2">
                    {relatedServices.map((item) => (
                      <li key={item.slug}>
                        <Link
                          href={`/services/${item.slug}`}
                          className="text-sm font-semibold text-brass underline decoration-heat/60 underline-offset-4 hover:text-ink"
                        >
                          {item.title} →
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
              {relatedArticles.length > 0 ? (
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-steel">
                    Related articles
                  </p>
                  <ul className="mt-3 space-y-2">
                    {relatedArticles.map((item) => (
                      <li key={item.slug}>
                        <Link
                          href={`/journal/${item.slug}`}
                          className="text-sm font-semibold text-brass underline decoration-heat/60 underline-offset-4 hover:text-ink"
                        >
                          {item.title} →
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </Reveal>
        )}

        <Reveal>
          <ServiceCta />
        </Reveal>
      </section>
    </div>
  );
}
