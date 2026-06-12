"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import {
  formatBlogDate,
  getFeaturedPost,
  getLatestPosts,
} from "@/lib/blog";
import { FadeIn } from "@/components/shared/FadeIn";
import { cn } from "@/lib/utils";

export function LatestNews() {
  const featured = getFeaturedPost();
  const latest = getLatestPosts(3);
  const posts = [featured, ...latest.filter((p) => p.slug !== featured.slug)].slice(
    0,
    4
  );
  const [activeSlug, setActiveSlug] = useState(posts[0]?.slug ?? "");

  return (
    <section id="novidades" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <FadeIn>
          <h2 className="text-3xl font-bold tracking-tight uppercase md:text-4xl">
            Últimas Novidades
          </h2>
        </FadeIn>

        <div className="relative mt-12 lg:mt-16">
          <div className="grid gap-6 lg:grid-cols-12 lg:gap-0">
            <motion.div
              className="relative overflow-hidden rounded-2xl border border-border bg-surface lg:col-span-7 lg:rounded-r-none"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-40"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2322d363' fill-opacity='0.06'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
              />
              <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />

              <div className="relative flex min-h-[380px] flex-col justify-between p-8 md:p-10 lg:min-h-[420px] lg:pr-16">
                <div>
                  <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                    Uma equipe de{" "}
                    <span className="font-medium text-primary">
                      entusiastas da robótica
                    </span>{" "}
                    dedicada a criar projetos competitivos de alta qualidade no
                    FIRST Tech Challenge.
                  </p>
                  <p className="mt-4 max-w-md text-sm text-muted-foreground/80">
                    Acompanhe nossas novidades, competições e iniciativas de
                    impacto social.
                  </p>
                </div>

                <div className="mt-10">
                  <p className="text-4xl font-bold tracking-tight md:text-5xl">
                    👋 #SpaceTech
                  </p>
                  <p className="mt-1 text-2xl font-bold text-foreground/90">
                    FTC #23504
                  </p>
                </div>

                <div className="mt-8 flex items-center justify-between gap-4">
                  <Link
                    href="/recursos/blog"
                    className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2 text-sm text-foreground transition-colors hover:border-primary/40 hover:text-primary"
                  >
                    Ver todas
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                  <span className="text-[10px] tracking-[0.15em] text-muted-foreground uppercase">
                    Blog oficial
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative lg:col-span-6 lg:-ml-16 lg:mt-8"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="rounded-2xl border border-border bg-background p-6 shadow-[0_20px_60px_rgba(0,0,0,0.4)] md:p-8">
                <ul className="divide-y divide-border">
                  {posts.map((post) => (
                    <li key={post.slug}>
                      <Link
                        href={`/recursos/blog/${post.slug}`}
                        className="group flex gap-4 py-5 first:pt-0 last:pb-0"
                        onMouseEnter={() => setActiveSlug(post.slug)}
                      >
                        <span
                          className={cn(
                            "mt-1 w-0.5 shrink-0 rounded-full bg-transparent transition-colors duration-300",
                            activeSlug === post.slug && "bg-primary"
                          )}
                        />
                        <div className="min-w-0 flex-1">
                          <div className="flex items-start justify-between gap-3">
                            <h3 className="text-sm font-semibold leading-snug text-foreground transition-colors group-hover:text-primary md:text-base">
                              {post.title}
                            </h3>
                            <ArrowUpRight className="h-4 w-4 shrink-0 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
                          </div>
                          <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2">
                            {post.excerpt}
                          </p>
                          <p className="mt-2 text-[11px] text-muted-foreground/60">
                            {formatBlogDate(post.date)} · {post.readTime}
                          </p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
