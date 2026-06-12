import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  BLOG_POSTS,
  formatBlogDate,
  getBlogPost,
} from "@/lib/blog";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Não encontrado" };

  return {
    title: `${post.title} | Space Tech Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) notFound();

  return (
    <main className="min-h-screen">
      <Navbar />

      <article className="mx-auto max-w-2xl px-6 pt-32 pb-20 lg:px-10">
        <nav className="mb-8 flex items-center gap-1.5 text-sm text-muted-foreground">
          <Link href="/recursos" className="hover:text-foreground">
            Recursos
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <Link href="/recursos/blog" className="hover:text-foreground">
            Blog
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-foreground line-clamp-1">{post.title}</span>
        </nav>

        <span className="text-[10px] tracking-[0.15em] text-primary uppercase">
          {post.category}
        </span>
        <h1 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
          {post.title}
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">
          {formatBlogDate(post.date)} · {post.readTime}
        </p>

        <div className="mt-10 space-y-5 border-t border-border pt-10">
          {post.content.map((paragraph, i) => (
            <p
              key={i}
              className="text-[15px] leading-relaxed text-muted-foreground"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <Link
          href="/recursos/blog"
          className="mt-12 inline-flex text-sm text-primary hover:underline"
        >
          ← Voltar ao blog
        </Link>
      </article>

      <Footer />
    </main>
  );
}
