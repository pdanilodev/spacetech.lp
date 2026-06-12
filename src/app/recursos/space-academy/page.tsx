import type { Metadata } from "next";
import { AcademyPageClient } from "@/components/docs/AcademyPageClient";
import { ACADEMY_PAGES } from "@/lib/resources";

export const metadata: Metadata = {
  title: "Space Academy | Space Tech",
  description:
    "Guia completo para equipes e iniciantes em robótica FTC.",
};

export default function SpaceAcademyPage() {
  const page = ACADEMY_PAGES[""];
  return <AcademyPageClient slug="" fallback={page} />;
}
