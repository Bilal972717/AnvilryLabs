export type IndustryPage = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  challenges: string[];
  approach: string[];
  services: string[];
  faqs: { q: string; a: string }[];
};

export const industryPages: IndustryPage[] = [
  {
    slug: "ecommerce-and-retail",
    title: "Ecommerce and retail",
    metaTitle: "Ecommerce web development agency · Anvilry Labs",
    metaDescription:
      "Ecommerce and retail websites built for speed, conversion and operable day-to-day management — from Anvilry Labs.",
    h1: "Stores that load fast and sell clearly.",
    intro:
      "Retail sites live or die on speed, clarity and ops that staff can run. We build storefronts with performance and conversion in the Blueprint — not bolted on after launch.",
    challenges: [
      "Slow collection and product templates that tax every visit",
      "Checkout friction and unclear shipping or returns",
      "Catalogue migrations that break URLs and rankings",
      "Apps and scripts that quietly destroy Core Web Vitals",
    ],
    approach: [
      "Map catalogue, checkout and ops before choosing Shopify or custom",
      "Optimise the templates shoppers actually use",
      "Plan redirects when replacing an old shop",
      "Instrument add-to-cart and checkout events",
    ],
    services: ["ecommerce", "findability", "managed-platforms"],
    faqs: [
      {
        q: "Shopify or custom storefront?",
        a: "Shopify fits many catalogues. Custom makes sense for unusual B2B rules or deep product logic. We recommend in writing during Blueprint.",
      },
      {
        q: "Can you migrate an existing store?",
        a: "Yes — products, URL mapping and a redirect plan so bookmarks and rankings survive.",
      },
    ],
  },
  {
    slug: "saas-and-startups",
    title: "SaaS and startups",
    metaTitle: "SaaS website development · Anvilry Labs",
    metaDescription:
      "Marketing sites and product UIs for SaaS and startups — clear scope, milestone demos and room to grow.",
    h1: "Ship the story and the product without shaky foundations.",
    intro:
      "Startups need speed without painting themselves into a corner. We help with marketing sites, app shells and custom software — scoped so you can launch, learn and extend.",
    challenges: [
      "Launch pressure with unfinished positioning",
      "Marketing site and product UI drifting apart",
      "Integrations (billing, auth, CRM) underestimated",
      "SEO ignored until paid channels get expensive",
    ],
    approach: [
      "Separate must-ship from nice-to-have in Blueprint",
      "Milestone demos you can click, not slide decks",
      "Technical SEO foundations on public pages",
      "Clear ownership so you are not locked in",
    ],
    services: ["bespoke-builds", "web-development", "app-development", "findability"],
    faqs: [
      {
        q: "Can you build marketing site and app together?",
        a: "Yes. We often phase a credible marketing site first, then product UI — or run them in parallel when the team is ready.",
      },
      {
        q: "Do you work with early-stage teams?",
        a: "Yes, when there is a clear goal and a decision-maker. Vague “build us an AI platform” briefs get tightened before we quote.",
      },
    ],
  },
  {
    slug: "professional-services",
    title: "Professional services",
    metaTitle: "Professional services websites · Anvilry Labs",
    metaDescription:
      "Websites for professional services firms that need trust, clarity and enquiries — with SEO and a CMS editors can use.",
    h1: "Sites that make expertise easy to trust — and easy to find.",
    intro:
      "Professional services win on clarity: who you help, how engagement works, and proof. We build sites that explain the offer, capture enquiries and stay editable for partners and marketers.",
    challenges: [
      "Generic messaging that could belong to any firm",
      "Partner bios and service pages that never get updated",
      "Weak local or practice-area findability",
      "Forms that do not reach the right people",
    ],
    approach: [
      "Service and audience structure before visual polish",
      "CMS patterns partners will actually update",
      "Technical SEO and practice-area page templates",
      "Enquiry routing and response expectations in writing",
    ],
    services: ["web-development", "cms-builds", "findability", "accelerated-builds"],
    faqs: [
      {
        q: "Accelerated or bespoke?",
        a: "Many firms start Accelerated or CMS-based when the offer is clear. Bespoke fits portals, client tools or unusual workflows.",
      },
      {
        q: "Can you help with content structure?",
        a: "Yes — information architecture and page outlines are part of getting enquiries, not an optional extra.",
      },
    ],
  },
  {
    slug: "health-and-wellness",
    title: "Health and wellness",
    metaTitle: "Health and wellness websites · Anvilry Labs",
    metaDescription:
      "Websites for health and wellness brands — clear journeys, bookings or enquiries, and performance that feels calm and fast.",
    h1: "Calm, clear sites for care and wellness brands.",
    intro:
      "Health and wellness visitors are deciding under stress or hope. We build sites that load quickly, explain services plainly and make the next step obvious — booking, enquiry or purchase.",
    challenges: [
      "Confusing service menus and soft calls to action",
      "Booking or ecommerce flows bolted on late",
      "Heavy visuals that hurt mobile speed",
      "Content that overpromises or is hard to keep accurate",
    ],
    approach: [
      "Journey mapping from landing page to booking or cart",
      "Performance budgets on hero and gallery templates",
      "CMS structures for services, practitioners and FAQs",
      "Analytics on the steps that matter",
    ],
    services: ["web-development", "ecommerce", "managed-platforms", "findability"],
    faqs: [
      {
        q: "Do you integrate booking tools?",
        a: "Yes, when they are part of the brief. We document the tool choice and who owns the subscription.",
      },
      {
        q: "Can you migrate from a builder site?",
        a: "Often. We plan redirects and content parity so you do not throw away the traffic you already earned.",
      },
    ],
  },
  {
    slug: "hospitality",
    title: "Hospitality",
    metaTitle: "Hospitality website development · Anvilry Labs",
    metaDescription:
      "Hospitality websites focused on enquiries and bookings — fast on mobile, clear offers, and CMS updates for seasonal content.",
    h1: "Hospitality sites that turn interest into bookings.",
    intro:
      "Guests decide on phones, often mid-scroll. We build hospitality sites that show the offer fast, keep seasonal content editable, and connect cleanly to booking or enquiry flows.",
    challenges: [
      "Beautiful designs that feel slow on mobile",
      "Seasonal offers trapped in PDFs or Instagram",
      "Booking engines that break layout or speed",
      "Multi-property or multi-venue structure without a plan",
    ],
    approach: [
      "Mobile-first templates for rooms, menus and offers",
      "CMS for events and seasonal pages",
      "Careful booking embed or integration choices",
      "Technical SEO for location and offer pages",
    ],
    services: ["web-development", "managed-platforms", "findability", "accelerated-builds"],
    faqs: [
      {
        q: "Do you replace the booking engine?",
        a: "We usually integrate what you already use unless there is a strong reason to change. Switching engines is its own project.",
      },
      {
        q: "Can marketing update offers without us?",
        a: "Yes — that is why Managed Platforms and CMS builds exist. Training and a written guide are part of handover.",
      },
    ],
  },
];

export function getIndustry(slug: string) {
  return industryPages.find((page) => page.slug === slug);
}

export const industrySlugs = industryPages.map((page) => page.slug);
