import Image from "next/image";

export function ForgeBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <Image
        src="/hero-bg.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="scale-105 object-cover object-center"
      />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(243,245,249,0.55)_0%,rgba(243,245,249,0.35)_40%,rgba(243,245,249,0.62)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(243,245,249,0.78)_0%,rgba(243,245,249,0.35)_48%,transparent_72%)]" />
      <div className="noise-overlay absolute inset-0 opacity-60" />

      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-paper via-paper/85 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-paper/50 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-px heat-bar opacity-90" />
    </div>
  );
}
