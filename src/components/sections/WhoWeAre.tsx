"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Rocket, Target, Users } from "lucide-react";
import { STATS, VALUES } from "@/lib/data";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { FadeIn } from "@/components/shared/FadeIn";
import { Badge } from "@/components/ui/badge";

const valueIcons = [Rocket, Target, Users];

export function WhoWeAre() {
  return (
    <section id="sobre" className="relative overflow-hidden py-24 md:py-32">
      <div
        className="pointer-events-none absolute top-0 right-0 h-[500px] w-[500px] opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(34,211,99,0.2) 0%, transparent 70%)",
        }}
      />

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
              <p className="text-2xl font-bold text-primary">FTC</p>
              <p className="text-sm text-muted-foreground">Team #23504</p>
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
                A Space Tech é uma equipe de FIRST Tech Challenge que une
                engenharia de ponta, design inovador e impacto social. Não
                construímos apenas robôs — construímos futuros.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Nossa missão é democratizar o acesso à tecnologia, inspirar a
                próxima geração de engenheiros e líderes, e competir no mais
                alto nível do FTC com excelência e propósito.
              </p>
            </FadeIn>

            <div className="mt-10 space-y-6">
              {VALUES.map((value, i) => {
                const Icon = valueIcons[i];
                return (
                  <FadeIn key={value.title} delay={0.3 + i * 0.1}>
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
          </div>
        </div>

        <div className="mt-24 grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
          {STATS.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.1}>
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
