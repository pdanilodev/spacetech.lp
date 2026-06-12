"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { HeroGreenBackground } from "@/components/effects/HeroGreenBackground";
import { SponsorLogoCarousel } from "@/components/sections/SponsorLogoCarousel";

const ease = [0.25, 0.4, 0.25, 1] as const;

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden">
      <HeroGreenBackground />
      <div className="noise-overlay pointer-events-none absolute inset-0" />

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, transparent 60%, rgba(7,11,20,0.9) 100%)",
        }}
      />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-6 pt-28 pb-8 lg:px-10 lg:pt-32">
        <div className="grid flex-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
            >
              <div className="mb-8 flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                <span className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
                  FIRST Tech Challenge
                </span>
              </div>
            </motion.div>

            <motion.h1
              className="max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease }}
            >
              <span className="block text-[clamp(1.75rem,4vw,2.75rem)] leading-[1.1] font-medium tracking-[0.04em] text-foreground/90 uppercase">
                Construindo Tecnologia.
              </span>
              <span className="mt-1 block text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] font-medium tracking-[-0.02em] text-primary italic">
                Inspirando Gerações.
              </span>
            </motion.h1>

            <motion.p
              className="mt-8 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease }}
            >
              Equipe FTC #23504 utilizando robótica, inovação e impacto social
              para transformar vidas.
            </motion.p>

            <motion.div
              className="mt-10 flex items-center gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4, ease }}
            >
              <Link
                href="#sobre"
                className="text-sm text-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
              >
                Conheça a Space Tech
              </Link>
              <span className="h-3 w-px bg-border" />
              <Link
                href="/patrocinadores"
                className="text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
              >
                Patrocinadores
              </Link>
            </motion.div>

            <motion.div
              className="mt-12 lg:mt-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.55, ease }}
            >
              <Link
                href="#sobre"
                aria-label="Rolar para baixo"
                className="inline-flex text-muted-foreground transition-colors hover:text-primary"
              >
                <ArrowDown className="h-5 w-5" strokeWidth={1.5} />
              </Link>
            </motion.div>
          </div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease }}
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-primary/10 bg-surface/80 backdrop-blur-sm">
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse at 40% 30%, rgba(34,211,99,0.15) 0%, transparent 65%)",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center p-12 md:p-16">
                <Image
                  src="/images/logo-shield.png"
                  alt="Space Tech"
                  width={360}
                  height={450}
                  className="h-auto w-full max-w-[220px] object-contain md:max-w-[280px]"
                  priority
                />
              </div>
            </div>

            <div className="absolute -right-3 -bottom-3 rounded-2xl border border-primary/20 bg-background/90 px-4 py-3 backdrop-blur-md md:-right-4 md:-bottom-4">
              <p className="text-[10px] tracking-[0.15em] text-muted-foreground uppercase">
                FTC Team
              </p>
              <p className="text-lg font-medium tracking-tight text-foreground">
                #23504
              </p>
            </div>
          </motion.div>
        </div>

        <SponsorLogoCarousel />
      </div>
    </section>
  );
}
