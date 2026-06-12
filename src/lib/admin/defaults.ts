import { BLOG_POSTS } from "@/lib/blog";
import { PRODUCTS } from "@/lib/data";
import { ACADEMY_NAV, ACADEMY_PAGES, RESOURCES } from "@/lib/resources";
import type {
  AdminProduct,
  AdminResource,
  AdminUser,
  AcademyChapter,
  Ticket,
} from "@/lib/admin/types";

export const DEFAULT_ADMIN_USERS: AdminUser[] = [
  {
    id: "1",
    name: "Danilo",
    email: "spacetechftc@gmail.com",
    role: "administrador",
  },
];

export const DEFAULT_PRODUCTS: AdminProduct[] = PRODUCTS.map((p) => ({
  id: p.id,
  title: p.title,
  description: p.description,
  price: p.price,
  category: p.category,
  featured: p.featured,
}));

export const DEFAULT_TICKETS: Ticket[] = [
  {
    id: "Q7QW050G",
    name: "Maria Silva",
    email: "maria@email.com",
    subject: "Dúvida sobre patrocínio",
    message: "Gostaria de saber mais sobre os pacotes de patrocínio.",
    status: "em_andamento",
    createdAt: "2026-06-10T14:30:00",
  },
  {
    id: "K3PL992X",
    name: "João Santos",
    email: "joao@escola.com",
    subject: "Space Academy",
    message: "Como acessar o guia de programação?",
    status: "em_andamento",
    createdAt: "2026-06-09T10:15:00",
  },
  {
    id: "M8RT441A",
    name: "Ana Costa",
    email: "ana@ftc.team",
    subject: "Marketplace",
    message: "Comprei o template e preciso de suporte.",
    status: "concluido",
    createdAt: "2026-06-08T16:45:00",
  },
  {
    id: "B2WN773C",
    name: "Pedro Lima",
    email: "pedro@email.com",
    subject: "Parceria",
    message: "Interesse em parceria com nossa equipe.",
    status: "em_andamento",
    createdAt: "2026-06-07T09:00:00",
  },
  {
    id: "F5JK228D",
    name: "Carla Mendes",
    email: "carla@sesi.com",
    subject: "Workshop",
    message: "Agendar workshop de robótica.",
    status: "em_andamento",
    createdAt: "2026-06-06T11:20:00",
  },
  {
    id: "H9QZ551E",
    name: "Lucas Ferreira",
    email: "lucas@email.com",
    subject: "Inscrição FTC",
    message: "Como entrar na equipe?",
    status: "concluido",
    createdAt: "2026-06-05T08:30:00",
  },
];

export const DEFAULT_ACADEMY: AcademyChapter[] = Object.entries(ACADEMY_PAGES).map(
  ([slug, page]) => ({
    slug: slug || "intro",
    title: page.title,
    description: page.description,
    group:
      ACADEMY_NAV.find((n) => n.slug === slug)?.group ?? "Começar",
    sections: page.sections,
  })
);

export const DEFAULT_RESOURCES: AdminResource[] = RESOURCES.map((r) => ({
  id: r.id,
  title: r.title,
  description: r.description,
  href: r.href,
  tag: r.tag,
  featured: r.featured,
}));

export const DEFAULT_BLOG_COUNT = BLOG_POSTS.length;
