"use client";

import { SPONSORSHIP_PACKAGES } from "@/lib/data";
import { FadeIn } from "@/components/shared/FadeIn";
import { SponsorshipPackageCard } from "@/components/sections/SponsorshipPackageCard";

interface SponsorshipPackagesProps {
  showHeader?: boolean;
}

export function SponsorshipPackages({ showHeader = true }: SponsorshipPackagesProps) {
  return (
    <section className="relative py-16 md:py-24">
      {showHeader && (
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <FadeIn>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span className="text-xs font-medium tracking-[0.15em] text-primary uppercase">
                Patrocínio
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
              Pacotes de Patrocínio
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mt-4 text-base text-muted-foreground md:text-lg">
              Invista no futuro da robótica e receba visibilidade para sua marca.
              Escolha o pacote ideal para sua empresa.
            </p>
          </FadeIn>
        </div>
      )}

      <div className="mx-auto mt-14 grid max-w-7xl gap-6 px-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {SPONSORSHIP_PACKAGES.map((pkg, i) => (
          <SponsorshipPackageCard key={pkg.id} pkg={pkg} index={i} />
        ))}
      </div>
    </section>
  );
}
