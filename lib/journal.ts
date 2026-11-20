export type JournalArticle = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  date: string;
  author: string;
  serviceSlug: string;
  summary: string;
  sections: { heading: string; body: string[] }[];
};

export const journalArticles: JournalArticle[] = [
  {
    slug: "custom-or-template-website",
    title: "Custom or template website: how to choose",
    metaTitle: "Custom vs template website · Anvilry Labs",
    metaDescription:
      "A plain-language guide to choosing a custom build or a template-based site — based on goals, timeline, budget and how you’ll maintain it.",
    date: "2026-11-21",
    author: "Anvilry Labs",
    serviceSlug: "accelerated-builds",
    summary:
      "Choose based on uniqueness of the product, timeline and who will maintain the site — not on which option sounds more impressive.",
    sections: [
      {
        heading: "The short answer",
        body: [
          "Choose a template-based (Accelerated) site when you need a polished marketing presence quickly, your pages follow common patterns, and budget or time is tight.",
          "Choose a custom (Bespoke) site when workflows, integrations or UX must match how your business actually works — and when you expect the product to grow in complexity.",
        ],
      },
      {
        heading: "Questions that decide it",
        body: [
          "Do you need unusual user flows or deep integrations? That points to custom.",
          "Is the main job to explain the offer, capture enquiries and look credible? A tailored template often wins.",
          "Who edits the site after launch? Heavy editorial needs may favour a CMS build either way.",
          "Will you rebuild in 12–18 months anyway? Starting accelerated can be the rational move.",
        ],
      },
      {
        heading: "Cost and timeline, honestly",
        body: [
          "Templates compress design and engineering time. Custom spends that time on architecture and unique UI. Neither should mean vague scope — both should be quoted in writing before production.",
          "If someone sells “custom” at template speed and price, ask what is actually unique.",
        ],
      },
      {
        heading: "A practical next step",
        body: [
          "List must-have pages, must-have integrations and your launch date. Bring that list to a short consultation — we will tell you which service line fits and why.",
        ],
      },
    ],
  },
  {
    slug: "what-a-website-really-costs",
    title: "What a website really costs",
    metaTitle: "Website cost guide · Anvilry Labs",
    metaDescription:
      "What drives website cost: scope, content, integrations and care after launch — plus how fixed quotes and change requests should work.",
    date: "2026-11-21",
    author: "Anvilry Labs",
    serviceSlug: "web-development",
    summary:
      "Price follows scope. The number moves with pages, integrations, content readiness and how much uniqueness you need — not with buzzwords.",
    sections: [
      {
        heading: "What you are actually buying",
        body: [
          "Discovery and decisions, design or template tailoring, engineering, content entry, QA, SEO foundations, launch and handover. Skipping any of those usually costs more later.",
        ],
      },
      {
        heading: "The levers that move price",
        body: [
          "Number of unique templates and complex pages.",
          "Integrations (CRM, bookings, payments, membership).",
          "Migrations and redirect maps from an old site.",
          "Whether copy and assets are ready on day one.",
          "Ongoing care: hosting, updates, SEO retainers.",
        ],
      },
      {
        heading: "How we quote",
        body: [
          "We agree scope in Blueprint and quote before production. Changes are priced before they are built. That keeps the project honest for both sides.",
          "Exact figures depend on the brief. Use a consultation or free audit to get a range tied to your situation — not a generic package pulled from thin air.",
        ],
      },
      {
        heading: "Cheaper is not always lower risk",
        body: [
          "The expensive part of a bad website is rebuilds, lost enquiries and lock-in. A clear fixed-scope engagement is usually cheaper than an open-ended “we’ll figure it out”.",
        ],
      },
    ],
  },
  {
    slug: "technical-seo-audit-checklist",
    title: "Technical SEO audit checklist",
    metaTitle: "Technical SEO audit checklist · Anvilry Labs",
    metaDescription:
      "A practical technical SEO checklist: indexability, speed, structure, metadata, sitemap, robots and Core Web Vitals — ordered by impact.",
    date: "2026-11-21",
    author: "Anvilry Labs",
    serviceSlug: "findability",
    summary:
      "Start with indexability and speed. Then fix structure, metadata and internal links. Content strategy only pays off on a site Google can crawl and users can use.",
    sections: [
      {
        heading: "Indexability first",
        body: [
          "One URL per page — no hash-based “pages”.",
          "robots.txt not blocking important paths.",
          "XML sitemap submitted in Search Console.",
          "Canonical tags consistent with the preferred host (www or non-www).",
          "HTTPS everywhere with clean redirects.",
        ],
      },
      {
        heading: "Structure and metadata",
        body: [
          "Unique title and meta description per page.",
          "One clear H1 that matches the page intent.",
          "Logical headings and internal links to money pages.",
          "Structured data where it matches the content (Organization, FAQ, Article, Breadcrumbs).",
        ],
      },
      {
        heading: "Speed and experience",
        body: [
          "LCP under 2.5s on key templates.",
          "Images compressed and sized correctly; lazy-load below the fold.",
          "Scripts kept light; third parties audited.",
          "CLS stable — no layout jumps from late-loading media.",
        ],
      },
      {
        heading: "Want this done for you?",
        body: [
          "Our free written audit reviews speed, technical SEO and structure, with the highest-impact fixes first. Claim it from the free audit page — no obligation.",
        ],
      },
    ],
  },
  {
    slug: "website-redesign-checklist",
    title: "Website redesign checklist that protects rankings",
    metaTitle: "Website redesign SEO checklist · Anvilry Labs",
    metaDescription:
      "How to redesign a site without throwing away rankings: URL mapping, redirects, content parity and post-launch Search Console checks.",
    date: "2026-11-21",
    author: "Anvilry Labs",
    serviceSlug: "web-development",
    summary:
      "A redesign is an SEO event. Protect equity with a URL map, 301s, content parity on key pages and a watchful month after launch.",
    sections: [
      {
        heading: "Before you redesign",
        body: [
          "Export top landing pages from Search Console and analytics.",
          "Decide which URLs stay, merge or retire.",
          "Inventory content that currently converts — testimonials, pricing clarity, service detail.",
        ],
      },
      {
        heading: "During the build",
        body: [
          "Build a redirect map (old → new) before go-live.",
          "Keep or improve title/H1 intent on money pages.",
          "Re-implement structured data and analytics events.",
          "Test forms, canonicals and mobile templates.",
        ],
      },
      {
        heading: "After launch",
        body: [
          "Submit the new sitemap.",
          "Spot-check redirects and 404s weekly for the first month.",
          "Watch impressions and queries for key pages; fix soft 404s and missing parity fast.",
        ],
      },
    ],
  },
  {
    slug: "how-to-brief-a-software-agency",
    title: "How to brief a software agency",
    metaTitle: "How to brief a software agency · Anvilry Labs",
    metaDescription:
      "What to include in an agency brief: goals, users, constraints, integrations, success measures and decision makers — so quotes stay accurate.",
    date: "2026-11-21",
    author: "Anvilry Labs",
    serviceSlug: "custom-software",
    summary:
      "A good brief reduces cost. Share goals, users, must-have integrations, constraints and how success will be measured.",
    sections: [
      {
        heading: "Include these",
        body: [
          "Business goal in one sentence.",
          "Primary users and what they need to complete.",
          "Must-have integrations and data sources.",
          "Deadline drivers (launch event, season, funding).",
          "Who decides and who will maintain the product.",
        ],
      },
      {
        heading: "Skip these",
        body: [
          "A 40-page feature wish list with no priorities.",
          "Solutioning the stack before the problem is clear.",
          "“Make it like X” without saying which part of X matters.",
        ],
      },
      {
        heading: "What happens next with us",
        body: [
          "We turn your brief into a Blueprint: scope, timeline, risks and a named contact — then a fixed quote for that scope.",
        ],
      },
    ],
  },
  {
    slug: "core-web-vitals-for-business-owners",
    title: "Core Web Vitals explained for business owners",
    metaTitle: "Core Web Vitals for business owners · Anvilry Labs",
    metaDescription:
      "LCP, INP and CLS in plain language — why they affect enquiries, and what a development team should fix first.",
    date: "2026-11-21",
    author: "Anvilry Labs",
    serviceSlug: "findability",
    summary:
      "Core Web Vitals measure whether your site feels fast and stable. They affect both search and conversion.",
    sections: [
      {
        heading: "The three that matter",
        body: [
          "LCP — how quickly the main content appears. Target under 2.5 seconds.",
          "INP — how quickly the page responds to clicks and taps. Target under 200 ms.",
          "CLS — whether the layout jumps while loading. Target under 0.1.",
        ],
      },
      {
        heading: "Why owners should care",
        body: [
          "Slow or jumpy pages lose enquiries before the pitch is read. Search systems also use these signals as part of page experience.",
        ],
      },
      {
        heading: "What usually fixes them",
        body: [
          "Compress and properly size images; avoid giant hero files.",
          "Defer non-critical scripts; be careful with tag managers and embeds.",
          "Reserve space for media and ads so the layout does not shift.",
        ],
      },
    ],
  },
  {
    slug: "how-to-launch-without-losing-traffic",
    title: "How to launch a site without losing traffic",
    metaTitle: "Launch a site without losing traffic · Anvilry Labs",
    metaDescription:
      "A redirect-first launch checklist: URL maps, 301s, sitemap updates and the first-month Search Console checks that protect rankings.",
    date: "2026-11-21",
    author: "Anvilry Labs",
    serviceSlug: "web-development",
    summary:
      "Treat launch as an SEO migration. Map every important URL, ship 301s, resubmit the sitemap, then watch Search Console for two to four weeks.",
    sections: [
      {
        heading: "Build the URL map first",
        body: [
          "List every URL that currently earns clicks or conversions. Decide keep, merge or retire before design debates finish.",
          "If two old pages become one new page, pick the strongest URL as the destination and redirect the rest.",
        ],
      },
      {
        heading: "Redirects that actually work",
        body: [
          "Use permanent (301) redirects from old paths to the closest equivalent new path — not a blanket redirect to the homepage.",
          "Test a sample of top pages, PDF links and campaign URLs before DNS flips.",
          "Keep the redirect map in version control so it survives hosting changes.",
        ],
      },
      {
        heading: "Go-live day",
        body: [
          "Flip HTTPS and host consistently (www or non-www — pick one).",
          "Submit the new XML sitemap in Search Console.",
          "Confirm analytics and conversion events still fire on thank-you or mailto flows.",
        ],
      },
      {
        heading: "The first month",
        body: [
          "Crawl for soft 404s and redirect chains weekly.",
          "Compare impressions for money pages. Sudden drops usually mean a missing redirect or thin content parity — fix those before rewriting the whole site again.",
        ],
      },
    ],
  },
  {
    slug: "cms-comparison-for-small-teams",
    title: "CMS comparison for small teams",
    metaTitle: "CMS comparison for small teams · Anvilry Labs",
    metaDescription:
      "How small teams should choose a CMS: editor experience, permissions, hosting care and when WordPress or a modern headless setup fits.",
    date: "2026-11-21",
    author: "Anvilry Labs",
    serviceSlug: "cms-builds",
    summary:
      "Pick the CMS your editors will actually use. Features matter less than permissions, preview, media handling and who keeps it updated.",
    sections: [
      {
        heading: "Start with the editors",
        body: [
          "Who publishes weekly? What do they fear breaking? A CMS that looks powerful in a demo but confuses editors becomes shelfware.",
          "Ask for a draft → preview → publish walkthrough with real content types, not a blank install.",
        ],
      },
      {
        heading: "WordPress when it fits",
        body: [
          "Strong when you need a large plugin ecosystem, familiar editing, or a wide pool of freelancers. Keep the plugin list lean and plan updates.",
          "Weak when the site is mostly an app with complex data rules — that often wants a custom or headless approach.",
        ],
      },
      {
        heading: "Modern / headless options",
        body: [
          "Useful when the front end must be very fast or shared across web and other channels. Editors need a clear UI and preview or they will bounce.",
          "Budget for the front-end build — headless is not automatically cheaper.",
        ],
      },
      {
        heading: "Decision rule",
        body: [
          "If the site is mostly pages and posts with light integrations, a well-structured traditional CMS is usually enough. If the product is the software, treat CMS as one module inside a bespoke build.",
        ],
      },
    ],
  },
  {
    slug: "ecommerce-speed-and-conversion",
    title: "Ecommerce speed and conversion basics",
    metaTitle: "Ecommerce speed and conversion · Anvilry Labs",
    metaDescription:
      "Why store speed affects sales, which templates to fix first, and the conversion basics every ecommerce brief should include.",
    date: "2026-11-21",
    author: "Anvilry Labs",
    serviceSlug: "ecommerce",
    summary:
      "Slow product and collection pages tax every visit. Fix LCP on templates shoppers actually use, then make the path to checkout obvious.",
    sections: [
      {
        heading: "Speed is a merchandising feature",
        body: [
          "Shoppers compare you to the fastest store they used today. Heavy hero videos, unoptimised product galleries and third-party scripts are the usual culprits.",
        ],
      },
      {
        heading: "Fix templates, not one-off pages",
        body: [
          "Prioritise collection, product, cart and checkout templates. One slow product template multiplies across the catalogue.",
          "Compress images, lazy-load below-the-fold media, and audit apps/scripts that inject on every page.",
        ],
      },
      {
        heading: "Conversion basics in the brief",
        body: [
          "Clear price, shipping and returns near the buy action.",
          "Trust signals that match the brand — not generic badge spam.",
          "Analytics events for add-to-cart, checkout steps and purchase so you can see where people drop.",
        ],
      },
      {
        heading: "Platform choice",
        body: [
          "Shopify covers many catalogues well. Custom storefronts make sense for unusual B2B rules or deep product logic. Choose in Blueprint with trade-offs written down.",
        ],
      },
    ],
  },
  {
    slug: "accessibility-checks-before-launch",
    title: "Accessibility checks before launch",
    metaTitle: "Accessibility checks before launch · Anvilry Labs",
    metaDescription:
      "A practical pre-launch accessibility checklist: keyboard use, contrast, forms, images and focus — without drowning in jargon.",
    date: "2026-11-21",
    author: "Anvilry Labs",
    serviceSlug: "web-development",
    summary:
      "Accessibility is part of quality, not a nice-to-have sticker. Run keyboard, contrast and form checks before every launch.",
    sections: [
      {
        heading: "Why it belongs in Proof",
        body: [
          "If people cannot tab, read or submit, you lose enquiries — and you take on avoidable risk. We treat access checks as part of Proof alongside speed and SEO.",
        ],
      },
      {
        heading: "Minimum launch checks",
        body: [
          "Keyboard: reach every control, see a visible focus ring, and escape dialogs.",
          "Images: meaningful alt text; decorative images marked appropriately.",
          "Contrast: body text and buttons readable on their backgrounds.",
          "Forms: labels tied to inputs, errors that make sense, and usable on mobile.",
          "Motion: respect reduced-motion preferences for non-essential animation.",
        ],
      },
      {
        heading: "Tools help — people decide",
        body: [
          "Automated scanners catch some issues. A real pass still needs a human walking the critical flows: home → service → contact or checkout.",
        ],
      },
    ],
  },
  {
    slug: "fixed-price-or-retainer",
    title: "Fixed price or retainer: which suits your project",
    metaTitle: "Fixed price or retainer · Anvilry Labs",
    metaDescription:
      "When to use a fixed-price build vs a retainer for care, SEO or iteration — and how Anvilry Labs keeps both scopes honest.",
    date: "2026-11-21",
    author: "Anvilry Labs",
    serviceSlug: "bespoke-builds",
    summary:
      "Fixed price fits a defined build. Retainers fit ongoing care, SEO and iteration. Mixing them without boundaries is how budgets melt.",
    sections: [
      {
        heading: "Fixed price for defined outcomes",
        body: [
          "Use a fixed quote when scope can be written: pages, features, integrations and a launch definition. Changes get their own quote.",
          "This is how our Blueprint → production path works for Accelerated, Managed and Bespoke builds.",
        ],
      },
      {
        heading: "Retainers for ongoing work",
        body: [
          "Use a retainer when the work never “finishes”: content support, Findability, hosting care, small iterations after launch.",
          "A good retainer names hours or outcomes, response times and what is out of scope.",
        ],
      },
      {
        heading: "A common hybrid",
        body: [
          "Build on a fixed quote, then a smaller retainer for the first months of care. That keeps launch sharp and post-launch support predictable.",
        ],
      },
      {
        heading: "What to avoid",
        body: [
          "Open-ended “we’ll figure it out” builds with no Blueprint.",
          "Retainers that silently absorb large new features that should have been quoted.",
        ],
      },
    ],
  },
  {
    slug: "what-a-clean-handover-looks-like",
    title: "What a clean handover looks like",
    metaTitle: "Clean project handover checklist · Anvilry Labs",
    metaDescription:
      "What you should receive at the end of a website or software project: access, documentation, ownership and a support window that has edges.",
    date: "2026-11-21",
    author: "Anvilry Labs",
    serviceSlug: "bespoke-builds",
    summary:
      "Handover means you can run and change what you paid for. Access, docs, ownership and a defined support window — not tribal knowledge.",
    sections: [
      {
        heading: "You should walk away with",
        body: [
          "Repositories, hosting and domain access in your accounts where possible.",
          "Credentials inventory and environment notes.",
          "Editor or operator guide for day-to-day changes.",
          "Architecture notes for the next developer — including decisions and trade-offs.",
        ],
      },
      {
        heading: "Ownership, plainly",
        body: [
          "You own the code and assets we produce for the project. Lock-in is a failure mode, not a business model.",
        ],
      },
      {
        heading: "Support with edges",
        body: [
          "A post-launch window should say what is included, how to request help and when work becomes a new quote. Vague “we’re around” support helps no one.",
        ],
      },
      {
        heading: "How we run it",
        body: [
          "Handover is a named stage in our process — after Proof, before we call the project done. If something is missing from the checklist, it is not handed over yet.",
        ],
      },
    ],
  },
];

export function getArticle(slug: string) {
  return journalArticles.find((article) => article.slug === slug);
}

export const journalSlugs = journalArticles.map((article) => article.slug);
