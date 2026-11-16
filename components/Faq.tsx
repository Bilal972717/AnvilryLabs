"use client";

import { useId, useState } from "react";

const faqs = [
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
    q: "What does the free audit include?",
    a: "A written review of speed, technical SEO and structure, with the highest-impact fixes listed first.",
  },
];

export function Faq() {
  const [open, setOpen] = useState(0);
  const baseId = useId();

  return (
    <div className="divide-y divide-line border-y border-line">
      {faqs.map((item, index) => {
        const isOpen = open === index;
        const panelId = `${baseId}-panel-${index}`;
        const buttonId = `${baseId}-button-${index}`;

        return (
          <div key={item.q}>
            <button
              type="button"
              id={buttonId}
              className="flex w-full items-center justify-between gap-4 py-5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-heat"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpen(isOpen ? -1 : index)}
            >
              <span className="font-display text-lg font-semibold tracking-tight text-ink sm:text-xl">
                {item.q}
              </span>
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-lg leading-none transition ${
                  isOpen
                    ? "border-heat bg-heat text-white"
                    : "border-line text-ink"
                }`}
                aria-hidden="true"
              >
                {isOpen ? "−" : "+"}
              </span>
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              aria-hidden={!isOpen}
              inert={!isOpen ? true : undefined}
              className={`grid transition-[grid-template-rows] duration-300 ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="pb-5 pr-12 text-base leading-relaxed text-steel">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
