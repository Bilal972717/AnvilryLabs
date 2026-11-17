type AnvilMarkProps = {
  className?: string;
  /** Kept for call-site compatibility; SVG mark needs no image priority. */
  priority?: boolean;
  variant?: "dark" | "light";
};

export function AnvilMark({
  className = "h-9 w-9",
  variant = "dark",
}: AnvilMarkProps) {
  const isLight = variant === "light";

  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      aria-hidden="true"
      focusable="false"
    >
      <rect
        width="64"
        height="64"
        rx="12"
        fill={isLight ? "#F4F1EA" : "#12151C"}
        stroke={isLight ? "#12151C" : "none"}
        strokeWidth={isLight ? 1.5 : 0}
      />
      <path
        d="M32 10 L50 52 H42.6 L39.2 42.8 H24.8 L21.4 52 H14 L32 10Z"
        fill={isLight ? "#12151C" : "#F4F1EA"}
      />
      <path
        d="M32 18.5 L41.2 42.8 H22.8 L32 18.5Z"
        fill={isLight ? "#F4F1EA" : "#12151C"}
      />
      <path d="M18 30 H46" stroke="#A3E635" strokeWidth="3.2" strokeLinecap="square" />
      <path d="M20.5 36.5 H43.5" stroke="#A3E635" strokeWidth="2.2" strokeLinecap="square" />
      <path d="M23 43 H41" stroke="#A3E635" strokeWidth="2.2" strokeLinecap="square" />
    </svg>
  );
}
