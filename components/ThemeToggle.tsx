"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      className={`group relative inline-flex h-10 w-[4.25rem] cursor-pointer items-center rounded-md border border-line bg-panel-muted p-1 transition hover:border-brass/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-heat ${className}`}
      aria-label={
        !mounted ? "Toggle color theme" : isDark ? "Switch to light theme" : "Switch to dark theme"
      }
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      <span
        className={`absolute top-1 bottom-1 w-7 rounded-sm bg-heat shadow-[0_4px_12px_rgba(224,77,26,0.35)] transition-[left] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          !mounted || isDark ? "left-8" : "left-1"
        }`}
        aria-hidden="true"
      />
      <span className="relative z-10 grid w-full grid-cols-2 items-center">
        <span
          className={`flex items-center justify-center transition-colors ${
            mounted && !isDark ? "text-white" : "text-steel"
          }`}
          aria-hidden="true"
        >
          <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none">
            <circle cx="8" cy="8" r="2.25" stroke="currentColor" strokeWidth="1.4" />
            <path
              d="M8 1.75v1.5M8 12.75v1.5M1.75 8h1.5M12.75 8h1.5M3.4 3.4l1.1 1.1M11.5 11.5l1.1 1.1M12.6 3.4l-1.1 1.1M4.5 11.5l-1.1 1.1"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          </svg>
        </span>
        <span
          className={`flex items-center justify-center transition-colors ${
            !mounted || isDark ? "text-white" : "text-steel"
          }`}
          aria-hidden="true"
        >
          <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none">
            <path
              d="M12.4 10.2A5.25 5.25 0 1 1 5.8 3.6 4.1 4.1 0 0 0 12.4 10.2Z"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </span>
    </button>
  );
}
