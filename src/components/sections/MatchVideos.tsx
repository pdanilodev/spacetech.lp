"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { MATCH_VIDEOS } from "@/lib/awards";
import { FadeIn } from "@/components/shared/FadeIn";
import { cn } from "@/lib/utils";

export function MatchVideos() {
  const [activeId, setActiveId] = useState(MATCH_VIDEOS[0]?.id ?? "");

  const active = MATCH_VIDEOS.find((v) => v.id === activeId) ?? MATCH_VIDEOS[0];

  return (
    <div>
      <FadeIn>
        <p className="text-xs tracking-[0.2em] text-primary uppercase">
          Competições
        </p>
        <h3 className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">
          Partidas & Campeonatos
        </h3>
        <p className="mt-3 max-w-lg text-sm text-muted-foreground">
          Reviva momentos decisivos das nossas temporadas em regionais,
          nacionais e mundiais.
        </p>
      </FadeIn>

      <div className="mt-10 grid gap-8 lg:grid-cols-5">
        <FadeIn className="lg:col-span-3">
          <div className="overflow-hidden rounded-2xl border border-border bg-surface">
            {active && (
              <div className="relative aspect-video bg-surface">
                {active.youtubeId ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${active.youtubeId}`}
                    title={active.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full"
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-muted-foreground">
                    <Play className="h-12 w-12 opacity-30" />
                    <p className="text-sm">Vídeo em breve</p>
                  </div>
                )}
              </div>
            )}
            {active && (
              <div className="border-t border-border p-5">
                <p className="font-semibold text-foreground">{active.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {active.event} · {active.year}
                </p>
                <p className="mt-2 text-sm text-muted-foreground/80">
                  {active.description}
                </p>
              </div>
            )}
          </div>
        </FadeIn>

        <FadeIn delay={0.1} className="lg:col-span-2">
          <div className="space-y-2">
            {MATCH_VIDEOS.map((video) => (
              <button
                key={video.id}
                type="button"
                onClick={() => setActiveId(video.id)}
                className={cn(
                  "flex w-full items-center gap-3 rounded-xl border p-4 text-left transition-all",
                  activeId === video.id
                    ? "border-primary/40 bg-primary/5"
                    : "border-border bg-surface/30 hover:border-primary/20"
                )}
              >
                <div
                  className={cn(
                    "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg",
                    activeId === video.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-surface text-muted-foreground"
                  )}
                >
                  <Play className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-foreground">
                    {video.title}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {video.year} · {video.event}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
