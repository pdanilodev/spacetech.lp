import type { Metadata } from "next";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AwardsPodium } from "@/components/sections/AwardsPodium";
import { AwardsTable } from "@/components/sections/AwardsTable";
import { MatchVideos } from "@/components/sections/MatchVideos";
import { RoboticsImpact } from "@/components/sections/RoboticsImpact";
import { AWARDS } from "@/lib/awards";
import { SITE } from "@/lib/site";
import { VALUES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Sobre o Time | Space Tech FTC #23504",
  description:
    "Conheça a Space Tech — 12 prêmios em competições regionais, nacionais e mundiais. FTC #23504 do SESI Paulista.",
};

export default function SobrePage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden pt-28 pb-16 md:pt-32 md:pb-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,211,99,0.1)_0%,transparent_60%)]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-xs tracking-[0.2em] text-primary uppercase">
                Sobre o Time
              </p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                Space Tech
                <span className="mt-1 block text-2xl font-medium text-muted-foreground md:text-3xl">
                  FTC #{SITE.teamNumber}
                </span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                {SITE.description}
              </p>
              <p className="mt-4 text-sm text-muted-foreground/80">
                {SITE.location} · {SITE.school}
              </p>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <div className="relative aspect-square w-full max-w-sm overflow-hidden rounded-3xl border border-border bg-surface/50 p-12">
                <Image
                  src="/images/logo-shield.png"
                  alt="Space Tech"
                  width={320}
                  height={400}
                  className="h-full w-full object-contain"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -left-4 rounded-2xl border border-primary/30 bg-background px-5 py-4 md:-left-8">
                <p className="text-3xl font-bold text-primary">{AWARDS.length}</p>
                <p className="text-xs text-muted-foreground">Prêmios FTC</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Missão & valores */}
      <section className="border-t border-border py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            Missão & Valores
          </h2>
          <p className="mt-4 max-w-3xl text-muted-foreground">
            Democratizar o acesso à tecnologia, inspirar a próxima geração de
            engenheiros e líderes, e competir com excelência em cada temporada.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {VALUES.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-border bg-surface/30 p-6"
              >
                <h3 className="font-semibold text-primary">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pódio + tabela */}
      <section className="border-t border-border py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <AwardsPodium />
          <AwardsTable />
        </div>
      </section>

      {/* Vídeos */}
      <section className="border-t border-border py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <MatchVideos />
        </div>
      </section>

      {/* Impacto */}
      <section className="border-t border-border pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <RoboticsImpact />
        </div>
      </section>

      <Footer />
    </main>
  );
}
