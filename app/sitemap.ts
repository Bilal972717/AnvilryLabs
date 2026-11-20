import type { MetadataRoute } from "next";
import { industryPages } from "@/lib/industries";
import { journalArticles } from "@/lib/journal";
import { servicePages } from "@/lib/services";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/services",
    "/industries",
    "/work",
    "/process",
    "/about",
    "/contact",
    "/free-audit",
    "/pricing-guide",
    "/journal",
  ].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" || path === "/services" ? ("weekly" as const) : ("monthly" as const),
    priority: path === "" ? 1 : path === "/free-audit" || path === "/services" ? 0.9 : 0.7,
  }));

  const services = servicePages.map((page) => ({
    url: `${siteConfig.url}/services/${page.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const industries = industryPages.map((page) => ({
    url: `${siteConfig.url}/industries/${page.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const journal = journalArticles.map((article) => ({
    url: `${siteConfig.url}/journal/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: "monthly" as const,
    priority: 0.65,
  }));

  return [...staticRoutes, ...services, ...industries, ...journal];
}
