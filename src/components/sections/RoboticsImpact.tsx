"use client";

import { Sparkles } from "lucide-react";
import { IMPACT_STORIES } from "@/lib/awards";
import { FadeIn } from "@/components/shared/FadeIn";
import { cn } from "@/lib/utils";

export function RoboticsImpact() {
  return (
    <div>
      <FadeIn>
        <div className="max-w-2xl">
          <p className="text-xs tracking-[0.2em] text-primary uppercase">
            Impacto
          </p>
          <h3 className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">
            Como a robótica transforma vidas
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
            Por trás de cada troféu há pessoas que cresceram em confiança,
            liderança e pensamento crítico — competidores, mentores e quem
            descobriu um caminho em STEM.
          </p>
        </div>
      </FadeIn>

      <div className="mt-12 space-y-6">
        {IMPACT_STORIES.map((story, i) => (
          <FadeIn key={story.id} delay={i * 0.1}>
            <article className="group overflow-hidden rounded-2xl border border-border bg-surface/30 transition-transform duration-300 hover:-translate-y-0.5">
              <div className="grid md:grid-cols-[220px_1fr] lg:grid-cols-[260px_1fr]">
                {/* Photo / avatar panel */}
                <div
                  className="relative flex min-h-[200px] flex-col items-center justify-end overflow-hidden p-6 md:min-h-0"
                  style={{
                    background: `linear-gradient(160deg, ${story.accent}22 0%, ${story.accent}08 50%, transparent 100%)`,
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-30"
                    style={{
                      background: `radial-gradient(circle at 30% 20%, ${story.accent}44 0%, transparent 55%)`,
                    }}
                  />
                  <div
                    className="relative flex h-24 w-24 items-center justify-center rounded-2xl border-2 text-2xl font-bold shadow-lg md:h-28 md:w-28 md:text-3xl"
                    style={{
                      borderColor: `${story.accent}44`,
                      background: `linear-gradient(135deg, ${story.accent}33, rgba(7,11,20,0.9))`,
                      color: story.accent,
                      boxShadow: `0 8px 32px ${story.accent}22`,
                    }}
                  >
                    {story.initials}
                  </div>
                  <div className="relative mt-4 text-center">
                    <p className="text-sm font-semibold text-foreground">
                      {story.name}
                    </p>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      {story.role}
                    </p>
                  </div>
                </div>

                {/* Quote + improvements */}
                <div className="flex flex-col justify-center border-t border-border p-6 md:border-t-0 md:border-l lg:p-8">
                  <blockquote className="text-base leading-relaxed text-foreground/90 md:text-lg">
                    &ldquo;{story.quote}&rdquo;
                  </blockquote>

                  <div className="mt-6">
                    <p className="mb-3 flex items-center gap-2 text-[11px] font-semibold tracking-[0.12em] text-primary uppercase">
                      <Sparkles className="h-3.5 w-3.5" />
                      Como a robótica ajudou
                    </p>
                    <ul className="space-y-2.5">
                      {story.improvements.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-sm text-muted-foreground"
                        >
                          <span
                            className={cn(
                              "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                            )}
                            style={{ background: story.accent }}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
