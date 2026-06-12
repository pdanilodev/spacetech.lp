"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Instagram, Youtube } from "lucide-react";
import { SOCIAL_POSTS } from "@/lib/social";
import { SITE } from "@/lib/site";
import { FAQ } from "@/components/sections/FAQ";
import { FadeIn } from "@/components/shared/FadeIn";
import { cn } from "@/lib/utils";

function PlatformIcon({ platform }: { platform: "instagram" | "youtube" }) {
  if (platform === "youtube") {
    return <Youtube className="h-3.5 w-3.5" />;
  }
  return <Instagram className="h-3.5 w-3.5" />;
}

function SocialCard({
  post,
  index,
}: {
  post: (typeof SOCIAL_POSTS)[number];
  index: number;
}) {
  return (
    <motion.article
      className="flex w-[300px] shrink-0 flex-col overflow-hidden rounded-xl border border-border bg-background sm:w-[320px]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-[10px] font-bold text-primary">
            ST
          </div>
          <div>
            <p className="text-xs font-semibold text-foreground">
              {post.account}
            </p>
            <p className="text-[10px] text-muted-foreground">{post.timeAgo}</p>
          </div>
        </div>
        <Link
          href={post.url}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-primary px-2.5 py-1 text-[10px] font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          Ver perfil
        </Link>
      </div>

      <div
        className={cn(
          "relative flex h-44 items-end bg-gradient-to-br p-4",
          post.imageGradient
        )}
      >
        <p className="text-sm leading-snug font-medium text-foreground/90 line-clamp-3">
          {post.caption}
        </p>
      </div>

      <Link
        href={post.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 border-t border-border py-3 text-[11px] font-medium tracking-wide text-primary uppercase transition-colors hover:bg-surface/50"
      >
        <PlatformIcon platform={post.platform} />
        Ver no {post.platform === "instagram" ? "Instagram" : "YouTube"}
        <ExternalLink className="h-3 w-3" />
      </Link>
    </motion.article>
  );
}

export function SocialFeed() {
  return (
    <section id="social" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <FadeIn>
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-medium tracking-[0.2em] text-primary uppercase">
                Acompanhe
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight uppercase md:text-4xl">
                Últimos Posts da Equipe
              </h2>
            </div>
            <div className="flex items-center gap-5">
              <Link
                href={SITE.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-medium tracking-wide text-muted-foreground uppercase transition-colors hover:text-foreground"
              >
                <Instagram className="h-4 w-4" />
                Instagram
              </Link>
              <Link
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-medium tracking-wide text-muted-foreground uppercase transition-colors hover:text-foreground"
              >
                <Youtube className="h-4 w-4" />
                YouTube
              </Link>
            </div>
          </div>
        </FadeIn>

        <div className="mt-10 -mx-6 flex gap-4 overflow-x-auto px-6 pb-4 scrollbar-none lg:-mx-0 lg:px-0">
          {SOCIAL_POSTS.map((post, i) => (
            <SocialCard key={post.id} post={post} index={i} />
          ))}
        </div>

        <FAQ />
      </div>
    </section>
  );
}
