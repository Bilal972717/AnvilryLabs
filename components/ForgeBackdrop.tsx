import Image from "next/image";

export function ForgeBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 hero-kenburns">
        <Image
          src="/hero-lab.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_30%]"
        />
      </div>

      {/* Soft wash so the photo stays the plane; denser only behind copy */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(246,242,234,0.42)_0%,rgba(246,242,234,0.1)_24%,rgba(246,242,234,0.08)_52%,rgba(246,242,234,0.88)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_68%_52%_at_50%_40%,rgba(246,242,234,0.9)_0%,rgba(246,242,234,0.55)_38%,rgba(246,242,234,0.18)_62%,transparent_78%)]" />
      <div className="noise-overlay absolute inset-0 opacity-35" />

      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-paper via-paper/80 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-paper/45 to-transparent" />
      <div className="heat-bar absolute inset-x-0 top-0 h-px" />
    </div>
  );
}
