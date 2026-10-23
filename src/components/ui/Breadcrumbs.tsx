import Link from "next/link";
import { breadcrumbJsonLd } from "@/lib/schema";
import { JsonLd } from "@/components/ui/JsonLd";

export function Breadcrumbs({ items }: { items: { name: string; path: string }[] }) {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(items)} />
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] uppercase tracking-[0.16em] text-muted">
          {items.map((item, index) => {
            const last = index === items.length - 1;
            return (
              <li key={`${item.path}-${item.name}`} className="flex items-center gap-2">
                {index > 0 ? (
                  <span aria-hidden className="text-gold">
                    /
                  </span>
                ) : null}
                {last ? (
                  <span aria-current="page" className="text-charcoal">
                    {item.name}
                  </span>
                ) : (
                  <Link href={item.path} className="hover:text-charcoal">
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
