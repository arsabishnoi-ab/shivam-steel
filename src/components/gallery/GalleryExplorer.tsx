"use client";

import { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { categoryLabels } from "@/data/projects";
import type { GalleryImage, ProjectCategory } from "@/types/content";

const PAGE_SIZE = 12;

export function GalleryExplorer({ images }: { images: GalleryImage[] }) {
  const [category, setCategory] = useState<ProjectCategory | "all">("all");
  const [visible, setVisible] = useState(PAGE_SIZE);
  const [active, setActive] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const titleId = useId();

  const filtered =
    category === "all" ? images : images.filter((image) => image.categories.includes(category));
  const shown = filtered.slice(0, visible);
  const current = active != null ? filtered[active] : null;

  useEffect(() => {
    if (active == null) return;
    const previous = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") {
        setActive((index) => (index == null ? index : (index + 1) % filtered.length));
      }
      if (event.key === "ArrowLeft") {
        setActive((index) =>
          index == null ? index : (index - 1 + filtered.length) % filtered.length,
        );
      }
      if (event.key === "Tab" && dialogRef.current) {
        const nodes = dialogRef.current.querySelectorAll<HTMLElement>("button");
        if (nodes.length === 0) return;
        const first = nodes[0];
        const last = nodes[nodes.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      previous?.focus();
    };
  }, [active, filtered.length]);

  function onTouchEnd(startX: number, endX: number) {
    if (active == null) return;
    if (startX - endX > 40) {
      setActive((index) => (index == null ? index : (index + 1) % filtered.length));
    } else if (endX - startX > 40) {
      setActive((index) =>
        index == null ? index : (index - 1 + filtered.length) % filtered.length,
      );
    }
  }

  return (
    <div>
      <div className="flex max-w-full gap-2 overflow-x-auto pb-2" role="toolbar" aria-label="Filter photographs">
        {categoryLabels.map((item) => {
          const selected = category === item.id;
          return (
            <button
              key={item.id}
              type="button"
              aria-pressed={selected}
              className={`shrink-0 border px-4 py-2 text-[11px] uppercase tracking-[0.14em] ${
                selected ? "border-charcoal bg-charcoal text-ivory" : "border-line bg-paper text-ink"
              }`}
              onClick={() => {
                setCategory(item.id);
                setVisible(PAGE_SIZE);
                setActive(null);
              }}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      {shown.length === 0 ? (
        <p className="mt-10 text-muted">No photographs are in this category yet.</p>
      ) : (
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((image, index) => (
            <li key={image.id}>
              <button
                type="button"
                className="group block w-full text-left"
                onClick={() => setActive(index)}
              >
                <span className="relative block aspect-[4/3] bg-ivory">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </span>
                <span className="mt-3 block font-serif text-xl text-charcoal">{image.title}</span>
                <span className="mt-1 block text-sm text-muted">{image.location}</span>
              </button>
            </li>
          ))}
        </ul>
      )}

      {visible < filtered.length ? (
        <div className="mt-10">
          <button
            type="button"
            className="min-h-12 border border-charcoal px-6 text-[11px] uppercase tracking-[0.16em]"
            onClick={() => setVisible((count) => count + PAGE_SIZE)}
          >
            Load more photographs
          </button>
        </div>
      ) : null}

      {current ? (
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          className="fixed inset-0 z-[80] flex flex-col bg-charcoal/95 text-ivory"
        >
          <div className="flex items-center justify-between px-4 py-4">
            <p id={titleId} className="font-serif text-2xl">
              {current.title}
            </p>
            <button
              ref={closeRef}
              type="button"
              className="inline-flex size-11 items-center justify-center border border-ivory/30"
              onClick={() => setActive(null)}
            >
              <X aria-hidden className="size-5" />
              <span className="sr-only">Close</span>
            </button>
          </div>
          <div
            className="relative mx-auto flex w-full max-w-5xl flex-1 items-center px-4"
            onTouchStart={(event) => {
              dialogRef.current?.setAttribute("data-x", String(event.changedTouches[0]?.clientX ?? 0));
            }}
            onTouchEnd={(event) => {
              const start = Number(dialogRef.current?.getAttribute("data-x") ?? 0);
              onTouchEnd(start, event.changedTouches[0]?.clientX ?? start);
            }}
          >
            <button
              type="button"
              className="absolute left-2 z-10 inline-flex size-11 items-center justify-center border border-ivory/30 bg-charcoal/70 sm:left-4"
              onClick={() =>
                setActive((index) =>
                  index == null ? index : (index - 1 + filtered.length) % filtered.length,
                )
              }
            >
              <ChevronLeft aria-hidden className="size-5" />
              <span className="sr-only">Previous photograph</span>
            </button>
            <div className="relative mx-auto h-[62vh] w-full max-w-4xl">
              <Image
                src={current.src}
                alt={current.alt}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>
            <button
              type="button"
              className="absolute right-2 z-10 inline-flex size-11 items-center justify-center border border-ivory/30 bg-charcoal/70 sm:right-4"
              onClick={() =>
                setActive((index) => (index == null ? index : (index + 1) % filtered.length))
              }
            >
              <ChevronRight aria-hidden className="size-5" />
              <span className="sr-only">Next photograph</span>
            </button>
          </div>
          <p className="px-4 py-4 text-sm leading-relaxed text-[#d9d4cb] sm:px-8">{current.description}</p>
        </div>
      ) : null}
    </div>
  );
}
