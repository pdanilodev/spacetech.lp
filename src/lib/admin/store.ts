import {
  DEFAULT_ACADEMY,
  DEFAULT_ADMIN_USERS,
  DEFAULT_PRODUCTS,
  DEFAULT_RESOURCES,
  DEFAULT_TICKETS,
} from "@/lib/admin/defaults";
import type {
  AcademyChapter,
  AdminProduct,
  AdminResource,
  AdminSession,
  AdminUser,
  Ticket,
} from "@/lib/admin/types";

const KEYS = {
  session: "st_admin_session",
  products: "st_admin_products",
  tickets: "st_admin_tickets",
  admins: "st_admin_admins",
  academy: "st_admin_academy",
  resources: "st_admin_resources",
} as const;

function read<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function write<T>(key: string, value: T) {
  if (typeof window === "undefined") return;
  localStorage.setItem(key, JSON.stringify(value));
  window.dispatchEvent(new CustomEvent("st_admin_update", { detail: key }));
}

export const adminStore = {
  getSession: () => read<AdminSession | null>(KEYS.session, null),
  setSession: (session: AdminSession | null) => {
    if (typeof window === "undefined") return;
    if (session) write(KEYS.session, session);
    else localStorage.removeItem(KEYS.session);
  },

  getProducts: () => read<AdminProduct[]>(KEYS.products, DEFAULT_PRODUCTS),
  setProducts: (products: AdminProduct[]) => write(KEYS.products, products),

  getTickets: () => read<Ticket[]>(KEYS.tickets, DEFAULT_TICKETS),
  setTickets: (tickets: Ticket[]) => write(KEYS.tickets, tickets),

  getAdmins: () => read<AdminUser[]>(KEYS.admins, DEFAULT_ADMIN_USERS),
  setAdmins: (admins: AdminUser[]) => write(KEYS.admins, admins),

  getAcademy: () => read<AcademyChapter[]>(KEYS.academy, DEFAULT_ACADEMY),
  setAcademy: (chapters: AcademyChapter[]) => write(KEYS.academy, chapters),

  getResources: () => read<AdminResource[]>(KEYS.resources, DEFAULT_RESOURCES),
  setResources: (resources: AdminResource[]) => write(KEYS.resources, resources),

  resetAll: () => {
    if (typeof window === "undefined") return;
    Object.values(KEYS).forEach((k) => localStorage.removeItem(k));
  },
};

export function generateId(prefix = "") {
  return `${prefix}${Math.random().toString(36).slice(2, 9).toUpperCase()}`;
}
