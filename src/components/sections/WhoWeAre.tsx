"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Rocket, Target, Users } from "lucide-react";
import { STATS, VALUES } from "@/lib/data";
import { AWARDS } from "@/lib/awards";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { FadeIn } from "@/components/shared/FadeIn";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const valueIcons = [Rocket, Target, Users];

export function WhoWeAre() {
  return (
    <section id="sobre" className="relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute top-0 right-0 h-[500px] w-[500px] opacity-20 bg-[radial-gradient(circle,rgba(34,211,99,0.2)_0%,transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          <FadeIn direction="left" className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-surface to-background" />
              <div className="absolute inset-0 flex items-center justify-center p-12">
                <Image
                  src="/images/logo-shield.png"
                  alt="Space Tech Shield Logo"
                  width={400}
                  height={500}
                  className="h-auto w-full max-w-[300px] drop-shadow-2xl"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>

            <motion.div
              className="absolute -right-4 -bottom-4 rounded-xl border border-primary/30 bg-surface/90 p-4 backdrop-blur-xl md:-right-8 md:-bottom-8"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <p className="text-2xl font-bold text-primary">{AWARDS.length}</p>
              <p className="text-sm text-muted-foreground">Prêmios FTC</p>
            </motion.div>
          </FadeIn>

          <div>
            <FadeIn>
              <Badge className="mb-4">Quem Somos</Badge>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                Pioneiros em{" "}
                <span className="text-gradient">exploração tecnológica</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
                A Space Tech é a equipe FTC #23504 do SESI Paulista. Unimos
                engenharia, inovação e impacto social para competir no mais alto
                nível da robótica estudantil.
              </p>
            </FadeIn>

            <div className="mt-8 space-y-6">
              {VALUES.slice(0, 2).map((value, i) => {
                const Icon = valueIcons[i];
                return (
                  <FadeIn key={value.title} delay={0.25 + i * 0.1}>
                    <div className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">
                          {value.title}
                        </h3>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>

            <FadeIn delay={0.4}>
              <Button size="lg" className="group mt-10" asChild>
                <Link href="/sobre">
                  Conheça a equipe completa
                  <ArrowRight className="transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </FadeIn>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
          {STATS.filter((s) => s.label !== "Prêmios Conquistados").map(
            (stat, i) => (
              <FadeIn key={stat.label} delay={i * 0.1}>
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                />
              </FadeIn>
            )
          )}
        </div>
      </div>
    </section>
  );
}
