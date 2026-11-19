import Image from "next/image";

type AnvilMarkProps = {
  className?: string;
  priority?: boolean;
  variant?: "dark" | "light";
};

/** Compact Forge Matrix mark (from social lockup). */
export function AnvilMark({
  className = "h-9 w-9",
  priority = false,
  variant = "light",
}: AnvilMarkProps) {
  return (
    <Image
      src={variant === "dark" ? "/mark-dark.png" : "/mark-light.png"}
      alt=""
      width={1024}
      height={1024}
      priority={priority}
      className={`shrink-0 rounded-[18%] ${className}`}
      aria-hidden="true"
    />
  );
}
