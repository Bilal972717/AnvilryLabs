export const siteConfig = {
  name: "Anvilry Labs",
  url: "https://www.anvilrylabs.com",
  email: "hello@anvilrylabs.com",
  tagline: "Software, properly forged.",
  description:
    "Websites, apps and custom software built with a craftsperson’s care and an engineer’s rigor, then made easy to find.",
  sameAs: [
    // Add profile URLs as they go live (LinkedIn, GitHub, Clutch, Trustpilot).
  ] as string[],
} as const;

export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${normalized === "/" ? "" : normalized}`;
}
