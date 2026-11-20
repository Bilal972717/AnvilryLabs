export type FaqItem = {
  q: string;
  a: string;
};

export const homeFaqs: FaqItem[] = [
  {
    q: "Who do you work with?",
    a: "Anyone who wants it done properly: founders, small businesses, established brands and international clients.",
  },
  {
    q: "What do you build?",
    a: "Websites, web and mobile apps, custom software, template-based and CMS-based builds, ecommerce stores, and SEO.",
  },
  {
    q: "How long do projects take?",
    a: "It depends on scope, which we agree in writing during Blueprint. Accelerated builds launch in weeks.",
  },
  {
    q: "How do you price?",
    a: "Pricing is agreed up front. Changes are quoted before they are built, so there are no hidden costs.",
  },
  {
    q: "Who owns the code?",
    a: "You do. Handover includes full documentation and ownership of code and assets.",
  },
  {
    q: "What does the free consultation include?",
    a: "A short discovery call to talk through what you need, how we’d approach it, and whether we’re a fit — with clear next steps in writing.",
  },
  {
    q: "What does the free audit include?",
    a: "A written review of speed, technical SEO and structure, with the highest-impact fixes listed first.",
  },
];

export function faqPageJsonLd(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}
