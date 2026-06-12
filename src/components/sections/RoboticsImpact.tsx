"use client";

import { motion } from "framer-motion";
import { Heart, Wrench, Code2 } from "lucide-react";
import { IMPACT_STORIES } from "@/lib/awards";
import { FadeIn } from "@/components/shared/FadeIn";

const icons = [Code2, Wrench, Heart];

export function RoboticsImpact() {
  return (
    <div>
      <FadeIn>
        <div className="max-w-2xl">
          <p className="text-xs tracking-[0.2em] text-primary uppercase">
            Impacto
          </p>
          <h3 className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">
            A robótica na vida de quem constrói o futuro
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
            Competições vão além de troféus. Competidores desenvolvem
            confiança, raciocínio lógico e liderança. Mentores e técnicos
            acompanham a formação de uma nova geração de profissionais em STEM.
          </p>
        </div>
      </FadeIn>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {IMPACT_STORIES.map((story, i) => {
          const Icon = icons[i];
          return (
            <FadeIn key={story.id} delay={i * 0.1}>
              <motion.blockquote
                className="flex h-full flex-col rounded-2xl border border-border bg-surface/40 p-6"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <p className="flex-1 text-sm leading-relaxed text-foreground/90">
                  &ldquo;{story.quote}&rdquo;
                </p>
                <footer className="mt-5 border-t border-border pt-4">
                  <p className="text-sm font-semibold text-foreground">
                    {story.role}
                  </p>
                  <p className="text-xs text-muted-foreground">{story.name}</p>
                </footer>
              </motion.blockquote>
            </FadeIn>
          );
        })}
      </div>
    </div>
  );
}
