import type { FaqItem } from "@/lib/faqs";

export type ServicePage = {
  slug: string;
  line: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  audience: string;
  process: string[];
  deliverables: string[];
  stack: string[];
  proof: string[];
  faqs: FaqItem[];
  relatedArticles: string[];
  relatedServices: string[];
};

export const servicePages: ServicePage[] = [
  {
    slug: "bespoke-builds",
    line: "Bespoke",
    title: "Bespoke Builds",
    metaTitle: "Bespoke software & websites · Anvilry Labs",
    metaDescription:
      "Custom websites, web apps, mobile apps and software built from scratch for founders and businesses that need a lasting foundation.",
    h1: "Software shaped around how you work.",
    intro:
      "Bespoke Builds are custom websites, apps and platforms designed around your process — not a template shoehorned into it. Best for teams that need unique workflows, integrations or room to grow. Pricing is scoped and fixed before production.",
    audience: "Founders, product teams and established brands",
    process: [
      "Brief: goals, constraints and success measures in writing",
      "Blueprint: scope, architecture, timeline and named contact",
      "Forge: short cycles with a working demo each milestone",
      "Proof: performance, security, accessibility and SEO checks",
      "Handover: documentation, ownership and launch support",
    ],
    deliverables: [
      "Technical architecture and component system",
      "Custom UI matched to your brand",
      "Web and/or mobile application",
      "API and third-party integrations",
      "Full code and asset ownership",
    ],
    stack: [
      "Modern web frameworks (Next.js, React and related)",
      "Native or cross-platform mobile where needed",
      "Secure APIs, auth and data layers",
      "CI, hosting and monitoring suited to the product",
    ],
    proof: [
      "Named point of contact on every project",
      "Written scope before production",
      "Working demos at every milestone",
      "You own the code at handover",
    ],
    faqs: [
      {
        q: "When is bespoke the right choice?",
        a: "When your product or workflow does not fit a template or CMS cleanly, or when integrations and scale matter more than launch speed alone.",
      },
      {
        q: "How long does a bespoke build take?",
        a: "It depends on scope. We agree a timeline in Blueprint and show progress weekly with working demos.",
      },
      {
        q: "Who owns the code?",
        a: "You do. Handover includes documentation, assets and access — no lock-in.",
      },
    ],
    relatedArticles: [
      "custom-or-template-website",
      "how-to-brief-a-software-agency",
    ],
    relatedServices: ["web-development", "app-development", "custom-software"],
  },
  {
    slug: "web-development",
    line: "Bespoke",
    title: "Web development",
    metaTitle: "Web development agency · Anvilry Labs",
    metaDescription:
      "Fast, secure websites designed and engineered from scratch — for businesses that need clarity, performance and room to grow.",
    h1: "Websites that hold up under real use.",
    intro:
      "We design and build websites from the ground up: clear structure, strong performance and SEO built in. For companies that need more than a brochure and less than a full product platform. Scope and price are agreed before we build.",
    audience: "SMBs, professional services and growing brands",
    process: [
      "Discovery and information architecture",
      "Design system and key page templates",
      "Engineering, content modelling and QA",
      "Technical SEO, redirects and analytics",
      "Launch and clean handover",
    ],
    deliverables: [
      "Responsive website on a maintainable stack",
      "Core page templates and components",
      "Basic SEO setup and structured data",
      "Analytics and form tracking",
      "Training or written editor guide if needed",
    ],
    stack: [
      "Next.js and modern front-end tooling",
      "Headless or traditional CMS when useful",
      "CDN hosting and image optimisation",
      "Search Console and analytics ready",
    ],
    proof: [
      "Performance targets agreed up front",
      "Technical SEO as part of the build",
      "Milestone demos you can click",
      "Documented handover",
    ],
    faqs: [
      {
        q: "Do you redesign existing sites?",
        a: "Yes. We plan redirects and SEO checks so a redesign does not throw away rankings you already earned.",
      },
      {
        q: "Will the site be editable?",
        a: "If you need to change content yourself, we recommend a Managed Platforms or CMS build. Bespoke sites can include a CMS when that is part of the brief.",
      },
      {
        q: "Is SEO included?",
        a: "Technical SEO foundations are part of every web build. Ongoing Findability work is available as a separate service line.",
      },
    ],
    relatedArticles: [
      "website-redesign-checklist",
      "how-to-launch-without-losing-traffic",
    ],
    relatedServices: ["bespoke-builds", "findability", "accelerated-builds"],
  },
  {
    slug: "app-development",
    line: "Bespoke",
    title: "App development",
    metaTitle: "Mobile app development agency · Anvilry Labs",
    metaDescription:
      "iOS and Android apps from idea to the stores — scoped clearly, demoed in milestones, handed over with ownership.",
    h1: "Apps that ship — and stay maintainable.",
    intro:
      "We build mobile apps for iOS and Android with the same discipline as our web work: written scope, milestone demos and a clean handover. Suited to products that need native feel, offline behaviour or store distribution. Pricing is fixed to the agreed Blueprint.",
    audience: "Startups and product teams",
    process: [
      "Product brief and platform choice",
      "UX flows and technical Blueprint",
      "Build in milestones with test builds",
      "Store submission support and QA",
      "Handover of code, accounts and docs",
    ],
    deliverables: [
      "iOS and/or Android application",
      "API integration and auth where needed",
      "TestFlight / internal testing builds",
      "Store listing guidance",
      "Source code ownership",
    ],
    stack: [
      "Native or cross-platform (chosen for the product)",
      "Secure backend and push notifications as required",
      "Analytics and crash reporting",
      "CI for repeatable releases",
    ],
    proof: [
      "Milestone builds you can install",
      "Named contact throughout",
      "Changes quoted before they are built",
      "You own the repository",
    ],
    faqs: [
      {
        q: "Native or cross-platform?",
        a: "We recommend based on budget, timeline and product needs — then document the trade-offs in Blueprint.",
      },
      {
        q: "Do you handle store submissions?",
        a: "We support App Store and Google Play submission. Apple and Google review outcomes remain outside anyone’s full control.",
      },
      {
        q: "Can you build the backend too?",
        a: "Yes. Many app projects include API, auth and admin tools as part of the same engagement.",
      },
    ],
    relatedArticles: ["how-to-brief-a-software-agency", "custom-or-template-website"],
    relatedServices: ["bespoke-builds", "custom-software", "web-development"],
  },
  {
    slug: "custom-software",
    line: "Bespoke",
    title: "Custom software",
    metaTitle: "Custom software development · Anvilry Labs",
    metaDescription:
      "Web apps and platforms shaped around how your business works — with clear scope, milestone demos and full ownership.",
    h1: "Tools built for your process, not the other way round.",
    intro:
      "Custom software means internal tools, client portals and platforms that match how your team actually operates. We scope carefully, ship in visible milestones and leave you with code you own. Quotes are agreed before production starts.",
    audience: "Operations-heavy SMBs and growing companies",
    process: [
      "Map workflows and pain points",
      "Blueprint: architecture, roles and timeline",
      "Forge with demos of real workflows",
      "Proof: security, access control and performance",
      "Handover and optional support window",
    ],
    deliverables: [
      "Web application or internal platform",
      "Role-based access and integrations",
      "Admin tools where needed",
      "Documentation for operators and developers",
      "Ownership of code and infrastructure configs",
    ],
    stack: [
      "Web app frameworks suited to the domain",
      "Databases and APIs designed for your data",
      "Auth, permissions and audit trails",
      "Hosting and backup strategy agreed up front",
    ],
    proof: [
      "Workflow demos, not slideware",
      "Risks surfaced early in writing",
      "No hidden costs — changes quoted first",
      "Clean documentation at handover",
    ],
    faqs: [
      {
        q: "Can you replace spreadsheets and scattered tools?",
        a: "Often yes. We start by mapping the real process so the software removes friction instead of adding another silo.",
      },
      {
        q: "Do you offer ongoing support?",
        a: "Yes, as a defined post-launch window or retainer — agreed separately from the build quote.",
      },
      {
        q: "How do you handle security?",
        a: "Access control, secure defaults and review checkpoints are part of Proof. Sensitive environments get extra scrutiny in Blueprint.",
      },
    ],
    relatedArticles: [
      "how-to-brief-a-software-agency",
      "fixed-price-or-retainer",
    ],
    relatedServices: ["bespoke-builds", "web-development", "app-development"],
  },
  {
    slug: "accelerated-builds",
    line: "Accelerated",
    title: "Accelerated Builds",
    metaTitle: "Fast website launch agency · Anvilry Labs",
    metaDescription:
      "Template-based websites tailored to your brand — a polished launch in weeks, with SEO basics and a clean handover.",
    h1: "A professional launch in weeks, not months.",
    intro:
      "Accelerated Builds use a proven template foundation, then tailor branding, content and structure to you. Ideal when speed and budget matter more than a fully custom system. You still get QA, basic SEO and a proper handover — never a lesser option.",
    audience: "Founders and SMBs who need to launch soon",
    process: [
      "Goals and template match",
      "Brand, content and layout tailoring",
      "Responsive build and QA",
      "Basic SEO and analytics",
      "Launch support",
    ],
    deliverables: [
      "Polished marketing or brochure site",
      "Brand-aligned styling and content slots",
      "Mobile-ready pages",
      "Analytics and form setup",
      "Launch checklist completed",
    ],
    stack: [
      "Curated modern templates",
      "Lightweight CMS options when useful",
      "CDN hosting",
      "Search Console ready",
    ],
    proof: [
      "Faster path to a credible live site",
      "Clear scope so the timeline holds",
      "Room to upgrade to bespoke later",
      "You own what we ship",
    ],
    faqs: [
      {
        q: "Is a template site “cheap and low quality”?",
        a: "No. We treat Accelerated as a craft track: right template, careful tailoring, QA and SEO basics. It is a different shape of work, not a cut corner.",
      },
      {
        q: "Can we outgrow an accelerated site?",
        a: "Yes. Many clients start here, then move parts or the whole site into a bespoke or CMS build when the product demands it.",
      },
      {
        q: "How fast is “weeks”?",
        a: "Typical accelerated launches land in a few weeks once content and decisions are available. Delays usually come from missing copy or approvals — we flag that early.",
      },
    ],
    relatedArticles: [
      "custom-or-template-website",
      "what-a-website-really-costs",
    ],
    relatedServices: ["web-development", "bespoke-builds", "findability"],
  },
  {
    slug: "managed-platforms",
    line: "Managed",
    title: "Managed Platforms",
    metaTitle: "CMS website development · Anvilry Labs",
    metaDescription:
      "CMS-based sites your team can run — with training, documentation and optional hosting, updates and monitoring.",
    h1: "Sites your team can run without calling us first.",
    intro:
      "Managed Platforms are CMS builds designed for editors: clear content structures, training and a support window. You keep control of day-to-day updates. Pricing covers the build; hosting and ongoing care are optional and quoted separately.",
    audience: "Teams that publish content regularly",
    process: [
      "CMS selection matched to the team",
      "Content model and templates",
      "Build, migrations and QA",
      "Editor training and written guides",
      "Optional hosting and monitoring",
    ],
    deliverables: [
      "CMS-powered website",
      "Editor-friendly content types",
      "Training session and guide",
      "Launch and basic SEO setup",
      "Defined post-launch support window",
    ],
    stack: [
      "Modern CMS platforms suited to the brief",
      "Component-driven front ends when needed",
      "Hosting and backup options",
      "Update and monitoring plans",
    ],
    proof: [
      "Editors can publish without a developer",
      "Written guides, not tribal knowledge",
      "Support window with clear boundaries",
      "Ownership stays with you",
    ],
    faqs: [
      {
        q: "Which CMS do you use?",
        a: "We choose based on your editors, content volume and integrations — then document why in Blueprint. We do not force one stack for every client.",
      },
      {
        q: "Can you migrate an existing CMS site?",
        a: "Yes. Migrations include URL mapping and redirect planning so rankings and bookmarks survive the move.",
      },
      {
        q: "Do you host the site?",
        a: "We can. Hosting, updates and monitoring are optional add-ons with a clear monthly scope.",
      },
    ],
    relatedArticles: [
      "cms-comparison-for-small-teams",
      "what-a-clean-handover-looks-like",
    ],
    relatedServices: ["cms-builds", "ecommerce", "findability"],
  },
  {
    slug: "cms-builds",
    line: "Managed",
    title: "CMS builds",
    metaTitle: "CMS website agency · Anvilry Labs",
    metaDescription:
      "Editor-friendly CMS websites with clear content structures, training and a handover your team can actually use.",
    h1: "Content systems people will actually use.",
    intro:
      "A CMS build only works if editors can find fields, preview pages and publish safely. We design the content model first, then the site — so updates stay fast after launch. Quotes cover the agreed templates and training.",
    audience: "Marketing and content teams",
    process: [
      "Content audit and model design",
      "Template and component build",
      "Permissions and workflows",
      "Training and documentation",
      "Launch with SEO basics",
    ],
    deliverables: [
      "Configured CMS and front end",
      "Reusable page and content types",
      "Roles and publishing workflow",
      "Editor guide",
      "Redirects if replacing an old site",
    ],
    stack: [
      "CMS chosen for the team and content shape",
      "Preview and draft workflows",
      "Media handling and image optimisation",
      "Analytics hooks for key pages",
    ],
    proof: [
      "Fewer “call the developer” moments",
      "Structured content instead of one-off pages",
      "Documented how-to for your team",
      "SEO foundations included",
    ],
    faqs: [
      {
        q: "WordPress or something else?",
        a: "We use WordPress when it fits, and other CMS options when they fit better. The decision is written into Blueprint with trade-offs.",
      },
      {
        q: "Can non-technical staff publish?",
        a: "That is the point. We design fields, previews and permissions so day-to-day publishing does not need engineering.",
      },
      {
        q: "What about plugins and updates?",
        a: "We keep the stack lean. If you want ongoing updates and monitoring, that sits under Managed Platforms support.",
      },
    ],
    relatedArticles: [
      "cms-comparison-for-small-teams",
      "what-a-clean-handover-looks-like",
    ],
    relatedServices: ["managed-platforms", "web-development", "findability"],
  },
  {
    slug: "ecommerce",
    line: "Managed",
    title: "Ecommerce stores",
    metaTitle: "Ecommerce web development agency · Anvilry Labs",
    metaDescription:
      "Stores built for speed, conversion and easy management — with clear scope, SEO basics and a handover you control.",
    h1: "Stores that load fast and sell clearly.",
    intro:
      "We build ecommerce sites that prioritise speed, clarity and operable day-to-day management. Product structure, checkout and performance are part of the Blueprint — not afterthoughts. Pricing depends on catalogue size, integrations and customisation.",
    audience: "Retail and product brands",
    process: [
      "Catalogue, checkout and ops mapping",
      "Platform and theme or custom UI decision",
      "Build, payments and shipping integrations",
      "Performance and conversion QA",
      "Launch, redirects and training",
    ],
    deliverables: [
      "Storefront and product templates",
      "Checkout and payment setup support",
      "Basic SEO for collection and product patterns",
      "Analytics and conversion events",
      "Editor / ops training",
    ],
    stack: [
      "Shopify or custom storefronts when needed",
      "Payment and shipping integrations",
      "Performance-focused front ends",
      "Search and analytics instrumentation",
    ],
    proof: [
      "Speed treated as a conversion feature",
      "Clear ownership of the store after launch",
      "Redirect plan when replacing an old shop",
      "No surprise scope mid-build",
    ],
    faqs: [
      {
        q: "Shopify or custom?",
        a: "Shopify suits many catalogues and ops needs. Custom makes sense for unusual checkout, B2B rules or deep product logic. We recommend in writing.",
      },
      {
        q: "Do you migrate products?",
        a: "Yes. Migrations include product data, URL mapping and a redirect plan.",
      },
      {
        q: "Is SEO included for products?",
        a: "Template-level SEO (titles, structure, performance) is part of the build. Ongoing content and Findability retainers are separate.",
      },
    ],
    relatedArticles: [
      "ecommerce-speed-and-conversion",
      "how-to-launch-without-losing-traffic",
    ],
    relatedServices: ["managed-platforms", "findability", "web-development"],
  },
  {
    slug: "findability",
    line: "Findability",
    title: "Findability (SEO)",
    metaTitle: "SEO services for small business · Anvilry Labs",
    metaDescription:
      "Technical SEO, on-page work and content strategy so the right people find you — with plain-language reporting.",
    h1: "Get found by the people ready to enquire.",
    intro:
      "Findability is SEO as part of how the site is built and improved: technical foundations, on-page clarity and content that answers real questions. Aimed at businesses that want qualified enquiries, not vanity traffic. Engagements are scoped — audits, project SEO or ongoing retainers.",
    audience: "SMBs and service businesses",
    process: [
      "Technical and content baseline",
      "Keyword and intent map tied to services",
      "On-page and structural fixes",
      "Content plan with clear next steps",
      "Monthly reporting in plain language",
    ],
    deliverables: [
      "Technical SEO audit with priorities",
      "On-page optimisation and structured data",
      "Content / keyword mapping for key pages",
      "Redirect and launch SEO checks",
      "Monthly numbers with recommended actions",
    ],
    stack: [
      "Search Console and analytics",
      "Crawl and Core Web Vitals monitoring",
      "Schema suited to the page type",
      "Editorial workflows that editors can keep up",
    ],
    proof: [
      "Priorities ordered by impact",
      "Reports you can act on without a decoder",
      "SEO wired into builds, not bolted on late",
      "Free written audit available for new enquiries",
    ],
    faqs: [
      {
        q: "What does the free audit include?",
        a: "A short written review of speed, technical SEO and structure, with the highest-impact fixes listed first. No obligation.",
      },
      {
        q: "How soon will we rank?",
        a: "New or rebuilt sites usually need a few months before rankings move meaningfully. We focus on indexability, intent-matched pages and proof — not promises of overnight page one.",
      },
      {
        q: "Do you write content?",
        a: "We can plan and guide content, and write key pages when that is in scope. Volume blogging without expertise is not our model.",
      },
    ],
    relatedArticles: [
      "technical-seo-audit-checklist",
      "core-web-vitals-for-business-owners",
    ],
    relatedServices: ["web-development", "accelerated-builds", "ecommerce"],
  },
];

export function getService(slug: string) {
  return servicePages.find((page) => page.slug === slug);
}

export const serviceSlugs = servicePages.map((page) => page.slug);
