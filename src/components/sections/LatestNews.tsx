"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { BLOG_POSTS, formatBlogDate } from "@/lib/blog";
import { FadeIn } from "@/components/shared/FadeIn";
import { cn } from "@/lib/utils";

const ROTATE_MS = 5000;
const posts = BLOG_POSTS.slice(0, 2);

export function LatestNews() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const active = posts[activeIndex];

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setActiveIndex((i) => (i + 1) % posts.length);
    }, ROTATE_MS);
    return () => clearInterval(timer);
  }, [paused]);

  const selectPost = (index: number) => {
    setActiveIndex(index);
    setPaused(true);
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => setPaused(false), ROTATE_MS * 2);
  };

  useEffect(() => {
    return () => {
      if (resumeTimer.current) clearTimeout(resumeTimer.current);
    };
  }, []);

  return (
    <section id="novidades" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <FadeIn>
          <h2 className="text-3xl font-bold tracking-tight uppercase md:text-4xl">
            Últimas Novidades
          </h2>
        </FadeIn>

        <div
          className="relative mt-12 lg:mt-14"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative">
            {/* Featured card */}
            <div className="relative min-h-[420px] overflow-hidden rounded-2xl border border-border bg-surface md:min-h-[460px] lg:pr-[46%]">
              <div
                className="pointer-events-none absolute inset-0 opacity-30"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2322d363' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")`,
                }}
              />
              <div className="pointer-events-none absolute -top-16 -right-16 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />

              <AnimatePresence mode="wait">
                {active && (
                  <motion.div
                    key={active.slug}
                    className="relative flex min-h-[420px] flex-col justify-between p-8 md:min-h-[460px] md:p-10"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.35, ease: [0.25, 0.4, 0.25, 1] }}
                  >
                    <div className="max-w-xl">
                      <span className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[10px] font-semibold tracking-[0.12em] text-primary uppercase">
                        {active.category}
                      </span>
                      <h3 className="mt-5 text-2xl font-bold leading-[1.15] tracking-tight md:text-[1.75rem] lg:text-3xl">
                        {active.title}
                      </h3>
                      <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-[15px]">
                        {active.excerpt}
                      </p>
                    </div>

                    <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
                      <Link
                        href={`/recursos/blog/${active.slug}`}
                        className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm text-foreground transition-colors hover:border-primary/40 hover:text-primary"
                      >
                        Ler matéria
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                      <span className="text-[11px] tracking-wide text-muted-foreground/70">
                        {formatBlogDate(active.date)} · {active.readTime}
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="absolute right-0 bottom-0 left-0 h-px overflow-hidden bg-border">
                {!paused && (
                  <motion.div
                    key={activeIndex}
                    className="h-full bg-primary"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: ROTATE_MS / 1000, ease: "linear" }}
                  />
                )}
              </div>
            </div>

            {/* Subject list — centered on the right */}
            <div className="mt-6 lg:absolute lg:top-1/2 lg:right-4 lg:mt-0 lg:w-[min(100%,340px)] lg:-translate-y-1/2 xl:right-8">
              <div className="flex flex-col justify-center rounded-2xl border border-border bg-background/95 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-sm md:p-7">
                <ul className="flex flex-col gap-1">
                  {posts.map((post, index) => {
                    const isActive = index === activeIndex;
                    return (
                      <li key={post.slug}>
                        <button
                          type="button"
                          onClick={() => selectPost(index)}
                          className={cn(
                            "group flex w-full gap-3.5 rounded-xl px-2 py-4 text-left transition-colors",
                            isActive ? "bg-primary/5" : "hover:bg-surface/80"
                          )}
                        >
                          <span
                            className={cn(
                              "mt-0.5 w-[3px] shrink-0 self-stretch rounded-full transition-all duration-500",
                              isActive
                                ? "bg-primary shadow-[0_0_10px_rgba(34,211,99,0.5)]"
                                : "bg-border group-hover:bg-primary/25"
                            )}
                          />
                          <div className="min-w-0 flex-1">
                            <div className="flex items-start justify-between gap-2">
                              <h4
                                className={cn(
                                  "text-[15px] font-semibold leading-snug transition-colors",
                                  isActive
                                    ? "text-foreground"
                                    : "text-foreground/75 group-hover:text-foreground"
                                )}
                              >
                                {post.title}
                              </h4>
                              <ArrowUpRight
                                className={cn(
                                  "mt-0.5 h-3.5 w-3.5 shrink-0 text-primary transition-opacity",
                                  isActive ? "opacity-100" : "opacity-0 group-hover:opacity-50"
                                )}
                              />
                            </div>
                            <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground line-clamp-2">
                              {post.excerpt}
                            </p>
                          </div>
                        </button>
                      </li>
                    );
                  })}
                </ul>

                <Link
                  href="/recursos/blog"
                  className="mt-4 flex items-center justify-center gap-1.5 border-t border-border pt-4 text-[11px] font-medium tracking-[0.1em] text-muted-foreground uppercase transition-colors hover:text-primary"
                >
                  Ver todas
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
