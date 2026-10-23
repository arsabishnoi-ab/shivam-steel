"use client";

import { useId, useState } from "react";
import { Plus } from "lucide-react";
import type { FaqItem } from "@/types/content";
import { RichText } from "@/components/ui/RichText";

export function FaqList({ items }: { items: FaqItem[] }) {
  const baseId = useId();
  const [open, setOpen] = useState<string | null>(items[0] ? `${baseId}-0` : null);

  return (
    <div className="border-t border-line">
      {items.map((item, index) => {
        const id = `${baseId}-${index}`;
        const expanded = open === id;
        return (
          <div key={item.question} className="border-b border-line">
            <h3>
              <button
                type="button"
                className="flex w-full items-start justify-between gap-6 py-5 text-left"
                aria-expanded={expanded}
                aria-controls={id}
                onClick={() => setOpen(expanded ? null : id)}
              >
                <span className="font-serif text-2xl leading-snug text-charcoal">{item.question}</span>
                <Plus
                  aria-hidden
                  className={`mt-1 size-5 shrink-0 text-gold transition-transform ${expanded ? "rotate-45" : ""}`}
                />
              </button>
            </h3>
            <div id={id} role="region" hidden={!expanded} className="pb-6 pr-8 text-base leading-relaxed text-muted">
              {expanded ? <RichText parts={item.answer} /> : null}
            </div>
          </div>
        );
      })}
    </div>
  );
}
