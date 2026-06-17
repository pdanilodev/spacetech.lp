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
    "Space Tech — 3 anos de FTC, 12 prêmios. Nossa missão é levar a FIRST e a metodologia STEAM de forma acessível para todos.",
};

const HERO_STATS = [
  { value: "3", label: "Anos de FTC" },
  { value: String(AWARDS.length), label: "Prêmios" },
  { value: `#${SITE.teamNumber}`, label: "Equipe" },
] as const;

export default function SobrePage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(34,211,99,0.14)_0%,transparent_55%)]" />
        <div className="pointer-events-none absolute right-0 bottom-0 h-[420px] w-[420px] bg-[radial-gradient(circle,rgba(34,211,99,0.06)_0%,transparent_70%)]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="text-xs tracking-[0.25em] text-primary uppercase">
                Sobre o Time
              </p>

              <p className="mt-6 text-sm font-semibold tracking-[0.2em] text-primary/80 uppercase">
                {SITE.tagline}
              </p>

              <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
                Space Tech
              </h1>
              <p className="mt-2 text-xl font-medium text-muted-foreground md:text-2xl">
                FTC #{SITE.teamNumber} · {SITE.school}
              </p>

              <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Nossa missão é levar a{" "}
                <span className="font-medium text-foreground">FIRST</span> e a
                metodologia{" "}
                <span className="font-medium text-foreground">STEAM</span> de
                uma forma acessível para todos — democratizando robótica,
                engenharia e inovação no SESI Paulista e além.
              </p>

              <div className="mt-10 grid grid-cols-3 gap-4 border-y border-border py-8">
                {HERO_STATS.map((stat) => (
                  <div key={stat.label} className="text-center md:text-left">
                    <p className="text-3xl font-bold text-primary md:text-4xl">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs tracking-wide text-muted-foreground uppercase">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <p className="text-sm text-muted-foreground/70">
                {SITE.location} · Temporada {SITE.seasonYear}
              </p>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-3xl border border-primary/20 bg-surface/40 p-10 shadow-[0_0_60px_rgba(34,211,99,0.08)] md:p-14">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,99,0.12)_0%,transparent_65%)]" />
                <Image
                  src="/images/logo-shield.png"
                  alt="Space Tech"
                  width={400}
                  height={400}
                  className="relative h-full w-full object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="border-t border-border py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            Nossos Valores
          </h2>
          <p className="mt-4 max-w-3xl text-muted-foreground">
            Construímos robôs, mas formamos pessoas — com excelência, propósito
            e impacto real na comunidade.
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
        <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-16 md:pt-20">
          <RoboticsImpact />
        </div>
      </section>

      <Footer />
    </main>
  );
}
