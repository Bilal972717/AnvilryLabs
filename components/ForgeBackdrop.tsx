export function ForgeBackdrop() {
  return (
    <div className="noise-overlay pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 0%, var(--hero-vignette) 100%)",
        }}
      />
      <div className="absolute -right-[8%] top-[-5%] h-[85%] w-[70%] rounded-[42%] bg-[radial-gradient(circle_at_35%_35%,rgba(239,85,32,0.32),rgba(239,85,32,0.08)_40%,transparent_68%)] blur-2xl" />
      <div className="absolute bottom-[-18%] left-[-12%] h-[58%] w-[52%] rounded-full bg-[radial-gradient(circle,rgba(196,163,106,0.16),transparent_65%)] blur-3xl" />

      <div className="ember left-[12%] top-[28%] h-2 w-2" style={{ animationDelay: "0s" }} />
      <div className="ember left-[22%] top-[62%] h-1.5 w-1.5" style={{ animationDelay: "1.4s" }} />
      <div className="ember right-[34%] top-[24%] h-2.5 w-2.5" style={{ animationDelay: "2.2s" }} />
      <div className="ember right-[18%] top-[55%] h-1.5 w-1.5" style={{ animationDelay: "3.1s" }} />
      <div className="ember left-[48%] top-[78%] h-2 w-2" style={{ animationDelay: "4s" }} />

      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-paper via-paper/80 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-px heat-bar opacity-90" />
    </div>
  );
}
