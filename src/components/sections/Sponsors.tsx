"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SPONSORS } from "@/lib/data";
import { FadeIn } from "@/components/shared/FadeIn";
import { Button } from "@/components/ui/button";

export function Sponsors() {
  return (
    <section id="patrocinadores" className="relative border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <FadeIn>
            <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
              Parceiros
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Empresas que acreditam no futuro
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
              {SPONSORS.slice(0, 6).map((sponsor) => (
                <span
                  key={sponsor.name}
                  className="text-xs font-medium tracking-[0.12em] text-muted-foreground/60 uppercase transition-colors hover:text-muted-foreground"
                >
                  {sponsor.name}
                </span>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="mt-14 max-w-lg">
              <p className="text-muted-foreground">
                Investir na Space Tech é investir na próxima geração de
                inovadores, engenheiros e líderes.
              </p>
              <Button size="lg" className="group mt-6" asChild>
                <Link href="/patrocinadores">
                  Ver Pacotes de Patrocínio
                  <ArrowRight className="transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
