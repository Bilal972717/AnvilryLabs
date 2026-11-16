"use client";

import {
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
} from "react";
import { createPortal } from "react-dom";

type CustomSelectProps = {
  name: string;
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
};

export function CustomSelect({
  name,
  label,
  options,
  value,
  onChange,
}: CustomSelectProps) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(
    Math.max(0, options.indexOf(value)),
  );
  const [coords, setCoords] = useState({ top: 0, left: 0, width: 0 });
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const listId = useId();
  const labelId = useId();

  useEffect(() => {
    setMounted(true);
  }, []);

  useLayoutEffect(() => {
    if (!open || !triggerRef.current) return;

    const update = () => {
      const rect = triggerRef.current!.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom;
      const listHeight = Math.min(224, options.length * 44 + 12);
      const openUp = spaceBelow < listHeight + 12 && rect.top > spaceBelow;
      setCoords({
        top: openUp ? rect.top - listHeight - 8 : rect.bottom + 8,
        left: rect.left,
        width: rect.width,
      });
    };

    update();
    window.addEventListener("resize", update);
    window.addEventListener("scroll", update, true);
    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("scroll", update, true);
    };
  }, [open, options.length]);

  useEffect(() => {
    if (!open) return;

    function onPointerDown(e: MouseEvent) {
      const target = e.target as Node;
      if (
        rootRef.current?.contains(target) ||
        listRef.current?.contains(target)
      ) {
        return;
      }
      setOpen(false);
    }

    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, [open]);

  useEffect(() => {
    if (!open || !listRef.current) return;
    const option = listRef.current.querySelector<HTMLElement>(
      `[data-index="${activeIndex}"]`,
    );
    option?.focus();
  }, [open, activeIndex]);

  function selectOption(option: string) {
    onChange(option);
    setOpen(false);
    triggerRef.current?.focus();
  }

  function onTriggerKeyDown(e: ReactKeyboardEvent<HTMLButtonElement>) {
    if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setActiveIndex(Math.max(0, options.indexOf(value)));
      setOpen(true);
    }
  }

  function onListKeyDown(e: ReactKeyboardEvent<HTMLUListElement>) {
    if (e.key === "Escape") {
      e.preventDefault();
      e.stopPropagation();
      setOpen(false);
      triggerRef.current?.focus();
      return;
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => (i + 1) % options.length);
      return;
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => (i - 1 + options.length) % options.length);
      return;
    }

    if (e.key === "Home") {
      e.preventDefault();
      setActiveIndex(0);
      return;
    }

    if (e.key === "End") {
      e.preventDefault();
      setActiveIndex(options.length - 1);
      return;
    }

    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      const option = options[activeIndex];
      if (option) selectOption(option);
    }
  }

  return (
    <div ref={rootRef} className="relative block">
      <span id={labelId} className="mb-1.5 block text-xs font-medium text-ink-soft">
        {label}
      </span>
      <input type="hidden" name={name} value={value} />
      <button
        ref={triggerRef}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-labelledby={labelId}
        aria-controls={listId}
        onClick={() => {
          setActiveIndex(Math.max(0, options.indexOf(value)));
          setOpen((v) => !v);
        }}
        onKeyDown={onTriggerKeyDown}
        className={`flex w-full items-center justify-between gap-3 rounded-md border bg-panel-muted px-3 py-2.5 text-left text-sm text-ink outline-none transition focus-visible:border-heat/60 focus-visible:ring-2 focus-visible:ring-heat/40 ${
          open
            ? "border-heat/60 ring-2 ring-heat/40"
            : "border-line hover:border-ink/25"
        }`}
      >
        <span>{value}</span>
        <svg
          viewBox="0 0 16 16"
          className={`h-4 w-4 shrink-0 text-brass transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M4 6l4 4 4-4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open && mounted
        ? createPortal(
            <ul
              ref={listRef}
              id={listId}
              role="listbox"
              aria-labelledby={labelId}
              tabIndex={-1}
              onKeyDown={onListKeyDown}
              style={{
                position: "fixed",
                top: coords.top,
                left: coords.left,
                width: coords.width,
              }}
              className="z-[80] max-h-56 overflow-auto rounded-xl border border-line bg-panel p-1.5 shadow-[0_20px_50px_rgba(20,22,28,0.14)] outline-none"
            >
              {options.map((option, index) => {
                const selected = option === value;
                return (
                  <li
                    key={option}
                    id={`${listId}-opt-${index}`}
                    role="option"
                    aria-selected={selected}
                    data-index={index}
                    tabIndex={index === activeIndex ? 0 : -1}
                    className={`flex cursor-pointer items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm outline-none transition focus-visible:ring-2 focus-visible:ring-heat/40 ${
                      selected || index === activeIndex
                        ? "bg-heat/15 text-ink"
                        : "text-ink-soft hover:bg-panel-muted hover:text-ink"
                    }`}
                    onClick={() => selectOption(option)}
                    onMouseEnter={() => setActiveIndex(index)}
                  >
                    <span>{option}</span>
                    {selected ? (
                      <svg
                        viewBox="0 0 16 16"
                        className="h-3.5 w-3.5 text-heat"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M3.5 8.5l3 3 6-6.5"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ) : null}
                  </li>
                );
              })}
            </ul>,
            document.body,
          )
        : null}
    </div>
  );
}
