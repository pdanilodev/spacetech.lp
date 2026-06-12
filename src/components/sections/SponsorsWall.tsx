"use client";

import { Building2 } from "lucide-react";
import { SPONSORS } from "@/lib/data";
import { FadeIn } from "@/components/shared/FadeIn";
import { cn } from "@/lib/utils";

const tierColors: Record<string, string> = {
  Platinum: "border-primary/30 bg-primary/5",
  Gold: "border-yellow-500/25 bg-yellow-500/5",
  Silver: "border-gray-400/25 bg-gray-400/5",
  Partner: "border-border bg-surface/40",
};

export function SponsorsWall() {
  return (
    <section className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              Nossos Patrocinadores
            </h2>
            <p className="mt-3 text-muted-foreground">
              Empresas que acreditam no futuro da inovação e da educação STEM.
            </p>
          </div>
        </FadeIn>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-5">
          {SPONSORS.map((sponsor, i) => (
            <FadeIn key={sponsor.name} delay={i * 0.05}>
              <div
                className={cn(
                  "flex h-28 flex-col items-center justify-center rounded-xl border p-4 transition-colors duration-300 hover:border-primary/30 md:h-32",
                  tierColors[sponsor.tier]
                )}
              >
                <Building2 className="mb-2 h-6 w-6 text-muted-foreground" />
                <p className="text-center text-sm font-medium">{sponsor.name}</p>
                <span className="mt-0.5 text-[10px] tracking-wide text-muted-foreground uppercase">
                  {sponsor.tier}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
