import Image from "next/image";

type AnvilryLogoProps = {
  className?: string;
  priority?: boolean;
  /** Light = Navy + Copper on Bone. Dark = Bone + Copper on Navy. */
  variant?: "dark" | "light";
};

export function AnvilryLogo({
  className = "",
  priority = false,
  variant = "light",
}: AnvilryLogoProps) {
  const isDark = variant === "dark";

  return (
    <Image
      src={isDark ? "/logo-lockup-dark.png" : "/logo-lockup-light.png"}
      alt="Anvilry Labs"
      width={540}
      height={434}
      priority={priority}
      className={`h-11 w-auto sm:h-12 ${className}`}
    />
  );
}
