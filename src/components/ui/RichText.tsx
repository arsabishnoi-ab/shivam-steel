import Link from "next/link";
import type { TextPart } from "@/types/content";

export function RichText({ parts }: { parts: TextPart[] }) {
  return (
    <>
      {parts.map((part, index) =>
        part.kind === "link" ? (
          <Link
            key={index}
            href={part.href}
            className="text-charcoal underline decoration-gold underline-offset-4"
          >
            {part.label}
          </Link>
        ) : (
          <span key={index}>{part.value}</span>
        ),
      )}
    </>
  );
}
