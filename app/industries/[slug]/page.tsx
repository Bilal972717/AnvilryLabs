import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { ServiceCta } from "@/components/ServiceCta";
import { faqPageJsonLd } from "@/lib/faqs";
import { getIndustry, industrySlugs } from "@/lib/industries";
import { getService } from "@/lib/services";
import { absoluteUrl, siteConfig } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return industrySlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return {};

  return {
    title: industry.metaTitle.replace(` · ${siteConfig.name}`, ""),
    description: industry.metaDescription,
    alternates: { canonical: `/industries/${industry.slug}` },
    openGraph: {
      title: industry.metaTitle,
      description: industry.metaDescription,
      url: absoluteUrl(`/industries/${industry.slug}`),
    },
  };
}

export default async function IndustryDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  const relatedServices = industry.services
    .map((serviceSlug) => getService(serviceSlug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  return (
    <div className="bg-workshop">
      <JsonLd data={faqPageJsonLd(industry.faqs)} />

      <section className="mx-auto max-w-6xl px-5 pb-10 pt-16 sm:px-8 sm:pt-24">
        <Reveal>
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Industries", href: "/industries" },
              { label: industry.title },
            ]}
          />
          <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.08em] text-steel">
            Industries · {industry.title}
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-medium tracking-tight text-ink sm:text-6xl">
            {industry.h1}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-steel">
            {industry.intro}
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl space-y-16 px-5 pb-24 sm:px-8">
        <div className="grid gap-10 border-t border-line pt-10 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-3xl font-bold tracking-tight text-ink">
              Common challenges
            </h2>
            <ul className="mt-6 space-y-3">
              {industry.challenges.map((item) => (
                <li key={item} className="text-sm leading-relaxed text-steel">
                  <span className="mr-2 text-heat-deep">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delayMs={60}>
            <h2 className="font-display text-3xl font-bold tracking-tight text-ink">
              How we approach it
            </h2>
            <ul className="mt-6 space-y-3">
              {industry.approach.map((item) => (
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
            Related services
          </h2>
          <ul className="mt-6 flex flex-wrap gap-3">
            {relatedServices.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex rounded-md border border-line bg-paper-elevated px-4 py-2 text-sm font-semibold text-ink transition hover:border-heat/35"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="border-t border-line pt-10">
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink">
            Questions
          </h2>
          <div className="mt-6 divide-y divide-line border-y border-line">
            {industry.faqs.map((item) => (
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

        <Reveal>
          <ServiceCta />
        </Reveal>
      </section>
    </div>
  );
}
