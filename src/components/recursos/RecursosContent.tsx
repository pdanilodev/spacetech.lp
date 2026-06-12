"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BLOG_POSTS, formatBlogDate } from "@/lib/blog";
import { usePublicResources } from "@/hooks/usePublicData";
import { cn } from "@/lib/utils";

export function RecursosContent() {
  const resources = usePublicResources();
  const featured = resources.filter((r) => r.featured);
  const others = resources.filter((r) => !r.featured);

  return (
    <div className="mx-auto max-w-5xl px-6 pt-32 pb-20 lg:px-10">
      <div className="mb-12">
        <p className="text-xs tracking-[0.2em] text-primary uppercase">Recursos</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
          Documentação & Guias
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Materiais criados pela Space Tech para ajudar equipes FTC em engenharia,
          programação e competição.
        </p>
      </div>

      {featured.map((resource) => {
        const Icon = resource.icon;
        return (
          <Link
            key={resource.id}
            href={resource.href}
            className="group mb-10 block overflow-hidden rounded-2xl border border-primary/20 bg-surface/50 p-8 transition-all hover:border-primary/40 hover:shadow-[0_0_40px_rgba(34,211,99,0.08)] md:p-10"
          >
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="flex items-start gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <span className="text-[10px] tracking-[0.15em] text-primary uppercase">
                    {resource.tag} · Destaque
                  </span>
                  <h2 className="mt-1 text-2xl font-bold">{resource.title}</h2>
                  <p className="mt-2 max-w-lg text-sm text-muted-foreground">
                    {resource.description}
                  </p>
                </div>
              </div>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                Acessar guia
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        );
      })}

      <div className="mb-16">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
              Blog
            </p>
            <h2 className="mt-1 text-xl font-bold">Últimas Novidades</h2>
          </div>
          <Link href="/recursos/blog" className="text-sm text-primary hover:underline">
            Ver todas →
          </Link>
        </div>
        <ul className="divide-y divide-border rounded-xl border border-border">
          {BLOG_POSTS.slice(0, 4).map((post) => (
            <li key={post.slug}>
              <Link
                href={`/recursos/blog/${post.slug}`}
                className="group flex items-center justify-between gap-4 px-5 py-4 transition-colors hover:bg-surface/50"
              >
                <div>
                  <h3 className="text-sm font-medium group-hover:text-primary">
                    {post.title}
                  </h3>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    {formatBlogDate(post.date)} · {post.category}
                  </p>
                </div>
                <ArrowRight className="h-4 w-4 shrink-0 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {others.map((resource) => {
          const Icon = resource.icon;
          return (
            <Link
              key={resource.id}
              href={resource.href}
              className={cn(
                "group rounded-xl border border-border bg-surface/30 p-6 transition-all",
                "hover:border-primary/25 hover:bg-surface/50"
              )}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <span className="mt-4 block text-[10px] tracking-[0.12em] text-muted-foreground uppercase">
                {resource.tag}
              </span>
              <h3 className="mt-1 font-semibold text-foreground">{resource.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                {resource.description}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
