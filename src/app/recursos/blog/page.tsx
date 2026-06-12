import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BLOG_POSTS, formatBlogDate } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | Space Tech FTC #23504",
  description: "Últimas novidades, competições e iniciativas da Space Tech.",
};

export default function BlogPage() {
  const [featured, ...rest] = BLOG_POSTS;

  return (
    <main className="min-h-screen">
      <Navbar />

      <div className="mx-auto max-w-3xl px-6 pt-32 pb-20 lg:px-10">
        <p className="text-xs tracking-[0.2em] text-primary uppercase">
          Blog
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
          Últimas Novidades
        </h1>
        <p className="mt-4 text-muted-foreground">
          Tudo o que acontece na Space Tech — competições, projetos e impacto.
        </p>

        {featured && (
          <Link
            href={`/recursos/blog/${featured.slug}`}
            className="group mt-12 block overflow-hidden rounded-2xl border border-primary/20 bg-surface/50 p-8 transition-all hover:border-primary/40"
          >
            <span className="text-[10px] tracking-[0.15em] text-primary uppercase">
              Destaque · {featured.category}
            </span>
            <h2 className="mt-2 text-2xl font-bold group-hover:text-primary">
              {featured.title}
            </h2>
            <p className="mt-3 text-muted-foreground">{featured.excerpt}</p>
            <p className="mt-4 text-xs text-muted-foreground/70">
              {formatBlogDate(featured.date)} · {featured.readTime}
            </p>
          </Link>
        )}

        <ul className="mt-10 divide-y divide-border">
          {rest.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/recursos/blog/${post.slug}`}
                className="group flex items-start justify-between gap-4 py-6"
              >
                <div>
                  <span className="text-[10px] tracking-[0.12em] text-muted-foreground uppercase">
                    {post.category}
                  </span>
                  <h3 className="mt-1 font-semibold text-foreground transition-colors group-hover:text-primary">
                    {post.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">
                    {post.excerpt}
                  </p>
                  <p className="mt-2 text-[11px] text-muted-foreground/60">
                    {formatBlogDate(post.date)} · {post.readTime}
                  </p>
                </div>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <Footer />
    </main>
  );
}
