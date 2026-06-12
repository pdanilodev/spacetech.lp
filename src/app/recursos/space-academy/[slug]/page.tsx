import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AcademyPageClient } from "@/components/docs/AcademyPageClient";
import { ACADEMY_PAGES } from "@/lib/resources";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(ACADEMY_PAGES)
    .filter((slug) => slug !== "")
    .map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = ACADEMY_PAGES[slug];
  if (!page) return { title: "Não encontrado" };

  return {
    title: `${page.title} | Space Academy`,
    description: page.description,
  };
}

export default async function AcademySlugPage({ params }: PageProps) {
  const { slug } = await params;
  const page = ACADEMY_PAGES[slug];

  if (!page) notFound();

  return <AcademyPageClient slug={slug} fallback={page} />;
}
