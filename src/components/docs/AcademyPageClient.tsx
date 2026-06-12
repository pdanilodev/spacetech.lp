"use client";

import { notFound } from "next/navigation";
import { AcademyContent } from "@/components/docs/AcademyContent";
import { usePublicAcademyPages } from "@/hooks/usePublicData";
import type { AcademyPageContent } from "@/lib/resources";

interface AcademyPageClientProps {
  slug: string;
  fallback: AcademyPageContent;
}

export function AcademyPageClient({ slug, fallback }: AcademyPageClientProps) {
  const pages = usePublicAcademyPages();
  const page = pages[slug] ?? fallback;

  if (!page) notFound();

  return <AcademyContent page={page} />;
}
