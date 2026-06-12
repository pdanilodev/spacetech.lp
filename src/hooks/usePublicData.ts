"use client";

import { useEffect, useState } from "react";
import { PRODUCTS, type Product } from "@/lib/data";
import {
  ACADEMY_NAV,
  ACADEMY_PAGES,
  RESOURCES,
  type AcademyPageContent,
  type AcademySection,
  type Resource,
} from "@/lib/resources";
import {
  getPublicAcademyNav,
  getPublicAcademyPages,
  getPublicProducts,
  getPublicResources,
} from "@/lib/admin/public-data";

function useClientData<T>(getter: () => T, ssrFallback: T): T {
  const [data, setData] = useState<T>(ssrFallback);

  useEffect(() => {
    const sync = () => setData(getter());
    sync();

    const onStorage = (e: StorageEvent) => {
      if (e.key?.startsWith("st_admin_")) sync();
    };

    window.addEventListener("st_admin_update", sync);
    window.addEventListener("storage", onStorage);
    return () => {
      window.removeEventListener("st_admin_update", sync);
      window.removeEventListener("storage", onStorage);
    };
  }, [getter]);

  return data;
}

export function usePublicProducts(): Product[] {
  return useClientData(getPublicProducts, PRODUCTS);
}

export function usePublicResources(): Resource[] {
  return useClientData(getPublicResources, RESOURCES);
}

export function usePublicAcademyPages(): Record<string, AcademyPageContent> {
  return useClientData(getPublicAcademyPages, ACADEMY_PAGES);
}

export function usePublicAcademyNav(): AcademySection[] {
  return useClientData(getPublicAcademyNav, ACADEMY_NAV);
}
