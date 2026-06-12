"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ACADEMY_NAV } from "@/lib/resources";
import { cn } from "@/lib/utils";

const groups = [...new Set(ACADEMY_NAV.map((item) => item.group))];

export function DocsSidebar() {
  const pathname = usePathname();
  const basePath = "/recursos/space-academy";

  return (
    <aside className="w-full shrink-0 lg:w-56">
      <nav className="sticky top-28 space-y-6">
        {groups.map((group) => (
          <div key={group}>
            <p className="mb-2 text-[11px] font-medium tracking-[0.12em] text-muted-foreground uppercase">
              {group}
            </p>
            <ul className="space-y-0.5">
              {ACADEMY_NAV.filter((item) => item.group === group).map(
                (item) => {
                  const href =
                    item.slug === ""
                      ? basePath
                      : `${basePath}/${item.slug}`;
                  const isActive =
                    item.slug === ""
                      ? pathname === basePath
                      : pathname === href;

                  return (
                    <li key={item.slug || "intro"}>
                      <Link
                        href={href}
                        className={cn(
                          "block rounded-lg px-3 py-1.5 text-sm transition-colors",
                          isActive
                            ? "bg-primary/10 font-medium text-primary"
                            : "text-muted-foreground hover:bg-surface hover:text-foreground"
                        )}
                      >
                        {item.title}
                      </Link>
                    </li>
                  );
                }
              )}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}
