import {
  BookOpen,
  Box,
  CheckSquare,
  Code2,
  FileText,
  GraduationCap,
  LayoutTemplate,
  Newspaper,
  Rocket,
  type LucideIcon,
} from "lucide-react";
import { PRODUCTS, type Product } from "@/lib/data";
import {
  ACADEMY_NAV,
  ACADEMY_PAGES,
  RESOURCES,
  type AcademyPageContent,
  type AcademySection,
  type Resource,
} from "@/lib/resources";
import { DEFAULT_ACADEMY, DEFAULT_PRODUCTS, DEFAULT_RESOURCES } from "@/lib/admin/defaults";
import { adminStore } from "@/lib/admin/store";
import type { AcademyChapter, AdminProduct, AdminResource } from "@/lib/admin/types";

const CATEGORY_ICONS: Record<string, LucideIcon> = {
  Guias: BookOpen,
  Portfolios: LayoutTemplate,
  CAD: Box,
  Programação: Code2,
  Cursos: GraduationCap,
  Templates: FileText,
};

const RESOURCE_ICONS: Record<string, LucideIcon> = {
  "space-academy": GraduationCap,
  "season-guide": BookOpen,
  "engineering-notebook": FileText,
  "programming-basics": Code2,
  "competition-checklist": CheckSquare,
  blog: Newspaper,
  "getting-started": Rocket,
};

export function adminProductToProduct(p: AdminProduct): Product {
  const fallback = PRODUCTS.find((x) => x.id === p.id);
  return {
    id: p.id,
    title: p.title,
    description: p.description,
    price: p.price,
    category: p.category as Product["category"],
    icon: fallback?.icon ?? CATEGORY_ICONS[p.category] ?? BookOpen,
    featured: p.featured,
  };
}

export function getPublicProducts(): Product[] {
  if (typeof window === "undefined") return PRODUCTS;
  return adminStore.getProducts().map(adminProductToProduct);
}

export function adminResourceToResource(r: AdminResource): Resource {
  const fallback = RESOURCES.find((x) => x.id === r.id);
  return {
    id: r.id,
    title: r.title,
    description: r.description,
    href: r.href,
    tag: r.tag,
    featured: r.featured,
    icon: fallback?.icon ?? RESOURCE_ICONS[r.id] ?? BookOpen,
  };
}

export function getPublicResources(): Resource[] {
  if (typeof window === "undefined") return RESOURCES;
  return adminStore.getResources().map(adminResourceToResource);
}

export function chaptersToPages(
  chapters: AcademyChapter[]
): Record<string, AcademyPageContent> {
  return chapters.reduce<Record<string, AcademyPageContent>>((acc, ch) => {
    acc[ch.slug] = {
      slug: ch.slug,
      title: ch.title,
      description: ch.description,
      sections: ch.sections,
    };
    return acc;
  }, {});
}

export function chaptersToNav(chapters: AcademyChapter[]): AcademySection[] {
  return chapters.map((ch) => ({
    slug: ch.slug,
    title: ch.title,
    group: ch.group,
  }));
}

export function getPublicAcademyPages(): Record<string, AcademyPageContent> {
  if (typeof window === "undefined") return ACADEMY_PAGES;
  const chapters = adminStore.getAcademy();
  if (!chapters.length) return ACADEMY_PAGES;
  return chaptersToPages(chapters);
}

export function getPublicAcademyNav(): AcademySection[] {
  if (typeof window === "undefined") return ACADEMY_NAV;
  const chapters = adminStore.getAcademy();
  if (!chapters.length) return ACADEMY_NAV;
  return chaptersToNav(chapters);
}

export { DEFAULT_PRODUCTS, DEFAULT_RESOURCES, DEFAULT_ACADEMY };
