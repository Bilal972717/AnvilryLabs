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
          className="object-cover object-[68%_28%] sm:object-[72%_30%]"
        />
      </div>

      {/* Keep the photo as the plane; lift only where copy sits */}
      <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(246,242,234,0.94)_0%,rgba(246,242,234,0.78)_28%,rgba(246,242,234,0.28)_52%,rgba(246,242,234,0.08)_72%,transparent_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(246,242,234,0.35)_0%,transparent_22%,transparent_62%,rgba(246,242,234,0.92)_100%)]" />
      <div className="noise-overlay absolute inset-0 opacity-30" />

      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-paper via-paper/70 to-transparent" />
      <div className="heat-bar absolute inset-x-0 top-0 h-px" />
    </div>
  );
}
