import Image from "next/image";

type AnvilMarkProps = {
  className?: string;
  priority?: boolean;
};

export function AnvilMark({ className = "h-9 w-9", priority = false }: AnvilMarkProps) {
  return (
    <Image
      src="/logo.png"
      alt=""
      width={72}
      height={72}
      priority={priority}
      className={`rounded-md object-cover ${className}`}
      aria-hidden="true"
    />
  );
}
