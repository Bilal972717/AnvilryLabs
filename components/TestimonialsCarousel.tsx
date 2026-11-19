"use client";

import { useEffect, useState } from "react";

const testimonials = [
  {
    quote:
      "Very responsive and clear communication. A quick audit of our WooCommerce site’s GA4 integration to check tracking and sales.",
    name: "Melanie Woodward",
    meta: "RC Design Inc · WooCommerce / GA4",
  },
  {
    quote:
      "A great support on our Shopify landing page — delivered error-free and on time. Clear communication throughout. I’d work with them again.",
    name: "Sky Lickiss",
    meta: "Shopify",
  },
  {
    quote:
      "Amazing work. Professional, careful with detail, and excellent communication. Highly recommend.",
    name: "The Good Weather Co",
    meta: "WordPress · Subscriptions",
  },
  {
    quote:
      "Communicated well, completed every change requested, and stayed responsive. Attention to detail, fast revisions, and everything finished as asked. Highly recommended.",
    name: "Andrey Sukhinin",
    meta: "United States",
  },
  {
    quote:
      "Completed the Webflow task quickly and accurately. Followed instructions, kept us updated, and delivered everything as requested. Reliable and easy to work with.",
    name: "Rittam Debnath",
    meta: "India · Webflow",
  },
  {
    quote:
      "Brilliant service. Needed tweaks to my Shopify store and every action landed quickly. Professional, clear communication, and went further to make sure we were satisfied.",
    name: "Kelvin",
    meta: "United Kingdom · Shopify",
  },
];

export function TestimonialsCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const total = testimonials.length;
  const item = testimonials[active]!;

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (paused || reduceMotion) return;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % total);
    }, 5500);
    return () => window.clearInterval(id);
  }, [paused, reduceMotion, total]);

  const go = (dir: -1 | 1) => {
    setActive((i) => (i + dir + total) % total);
  };

  return (
    <div
      className="mt-12"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
          setPaused(false);
        }
      }}
    >
      <div
        className="relative overflow-hidden border-t border-white/10 pt-8"
        aria-roledescription="carousel"
        aria-label="Client testimonials"
      >
        <div
          key={item.name}
          className={reduceMotion ? undefined : "animate-rise"}
          aria-live={reduceMotion ? "polite" : "off"}
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#cf7f48]/80">
            {String(active + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </p>
          <blockquote className="mt-5 max-w-3xl font-display text-2xl font-medium leading-snug tracking-tight text-[#f6f2ea] sm:text-3xl">
            “{item.quote}”
          </blockquote>
          <footer className="mt-8 flex flex-col gap-1">
            <cite className="not-italic text-sm font-semibold text-[#f6f2ea]">
              {item.name}
            </cite>
            <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#cf7f48]/85">
              {item.meta}
            </p>
          </footer>
        </div>

        <div className="mt-10 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2" role="tablist" aria-label="Testimonial slides">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                type="button"
                role="tab"
                aria-selected={i === active}
                aria-label={`Show testimonial ${i + 1}`}
                onClick={() => setActive(i)}
                className={`h-1.5 rounded-full transition ${
                  i === active
                    ? "w-8 bg-[#cf7f48]"
                    : "w-1.5 bg-white/25 hover:bg-white/45"
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => go(-1)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/15 text-[#f6f2ea] transition hover:border-[#cf7f48]/50 hover:text-[#cf7f48] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#cf7f48]"
              aria-label="Previous testimonial"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/15 text-[#f6f2ea] transition hover:border-[#cf7f48]/50 hover:text-[#cf7f48] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#cf7f48]"
              aria-label="Next testimonial"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
