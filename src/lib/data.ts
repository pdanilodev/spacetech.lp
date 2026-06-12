import {
  BookOpen,
  Box,
  Code2,
  FileText,
  GraduationCap,
  LayoutTemplate,
  type LucideIcon,
} from "lucide-react";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Sobre o Time", href: "/sobre" },
  { label: "Recursos", href: "/recursos" },
  { label: "Marketplace", href: "/#marketplace" },
  { label: "Patrocinadores", href: "/patrocinadores" },
] as const;

export interface SponsorshipPackage {
  id: string;
  name: string;
  price: number;
  features: string[];
  badge?: { label: string; variant: "value" | "premium" };
  accent: string;
  glow: string;
  border: string;
  buttonStyle: "outline" | "solid";
}

export const SPONSORSHIP_PACKAGES: SponsorshipPackage[] = [
  {
    id: "planetaria",
    name: "Planetária",
    price: 1000,
    accent: "#F97316",
    glow: "rgba(249, 115, 22, 0.35)",
    border: "rgba(249, 115, 22, 0.35)",
    buttonStyle: "outline",
    features: [
      "Logo em materiais impressos",
      "Logo no site",
      "Menção em eventos",
    ],
  },
  {
    id: "estelar",
    name: "Estelar",
    price: 2000,
    accent: "#22D3EE",
    glow: "rgba(34, 211, 238, 0.3)",
    border: "rgba(34, 211, 238, 0.35)",
    buttonStyle: "outline",
    features: [
      "Todos os benefícios Planetária",
      "Menção em post do Instagram",
      "Menção em apresentações",
    ],
  },
  {
    id: "galaxia",
    name: "Galáxia",
    price: 3000,
    accent: "#FACC15",
    glow: "rgba(250, 204, 21, 0.35)",
    border: "rgba(250, 204, 21, 0.4)",
    buttonStyle: "solid",
    badge: { label: "Melhor custo-benefício", variant: "value" },
    features: [
      "Todos os benefícios Estelar",
      "Logo em banner de competição",
      "Post dedicado no Instagram",
      "Vídeo de agradecimento",
    ],
  },
  {
    id: "universo",
    name: "Universo",
    price: 4000,
    accent: "#A855F7",
    glow: "rgba(168, 85, 247, 0.35)",
    border: "rgba(168, 85, 247, 0.4)",
    buttonStyle: "solid",
    badge: { label: "Premium", variant: "premium" },
    features: [
      "Todos os benefícios Galáxia",
      "Logo no robô",
      "Destaque na página inicial",
      "Pacote personalizado",
      "Participação em decisões do projeto",
      "Acesso exclusivo a eventos",
    ],
  },
];

export const STATS = [
  { label: "Pessoas Impactadas", value: 2500, suffix: "+" },
  { label: "Projetos Realizados", value: 45, suffix: "+" },
  { label: "Temporadas FTC", value: 4, suffix: "" },
  { label: "Prêmios Conquistados", value: 12, suffix: "" },
  { label: "Eventos Participados", value: 18, suffix: "+" },
] as const;

export const VALUES = [
  {
    title: "Inovação",
    description:
      "Exploramos fronteiras da engenharia com criatividade e coragem tecnológica.",
  },
  {
    title: "Impacto Social",
    description:
      "Usamos robótica como ferramenta para transformar comunidades e inspirar futuros líderes.",
  },
  {
    title: "Excelência",
    description:
      "Buscamos o mais alto padrão em cada projeto, competição e iniciativa que empreendemos.",
  },
] as const;

export const SPONSORS = [
  { name: "TechNova", tier: "Platinum" },
  { name: "Orbit Systems", tier: "Gold" },
  { name: "Nebula Labs", tier: "Gold" },
  { name: "AstroForge", tier: "Silver" },
  { name: "Quantum Drive", tier: "Silver" },
  { name: "Stellar Works", tier: "Partner" },
  { name: "Cosmos AI", tier: "Partner" },
  { name: "Lunar Dynamics", tier: "Partner" },
  { name: "Vertex Inc", tier: "Partner" },
  { name: "Pulse Robotics", tier: "Partner" },
] as const;

export const SPONSOR_LOGOS = [
  { name: "TechNova", abbr: "TN" },
  { name: "Orbit Systems", abbr: "OS" },
  { name: "Nebula Labs", abbr: "NL" },
  { name: "AstroForge", abbr: "AF" },
  { name: "Quantum Drive", abbr: "QD" },
  { name: "Stellar Works", abbr: "SW" },
  { name: "Cosmos AI", abbr: "CA" },
  { name: "Lunar Dynamics", abbr: "LD" },
  { name: "Vertex Inc", abbr: "VX" },
  { name: "Pulse Robotics", abbr: "PR" },
] as const;

export type ProductCategory =
  | "Todos"
  | "Guias"
  | "Portfolios"
  | "CAD"
  | "Programação"
  | "Cursos"
  | "Templates";

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  category: Exclude<ProductCategory, "Todos">;
  icon: LucideIcon;
  featured?: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: "1",
    title: "FTC Season Guide 2025",
    description:
      "Guia completo da temporada com estratégias, regras e dicas de competição.",
    price: 29.9,
    category: "Guias",
    icon: BookOpen,
    featured: true,
  },
  {
    id: "2",
    title: "Portfolio Pro Template",
    description:
      "Template premium para portfólio de equipe FTC com design moderno e responsivo.",
    price: 49.9,
    category: "Portfolios",
    icon: LayoutTemplate,
    featured: true,
  },
  {
    id: "3",
    title: "Robot CAD Package",
    description:
      "Arquivos CAD completos de robôs FTC com peças modulares e documentação.",
    price: 79.9,
    category: "CAD",
    icon: Box,
  },
  {
    id: "4",
    title: "Autonomous Navigation Kit",
    description:
      "Recursos de programação para navegação autônoma com exemplos em Java e Kotlin.",
    price: 39.9,
    category: "Programação",
    icon: Code2,
  },
  {
    id: "5",
    title: "Engineering Notebook Template",
    description:
      "Template profissional de caderno de engenharia alinhado aos critérios de julgamento.",
    price: 19.9,
    category: "Templates",
    icon: FileText,
  },
  {
    id: "6",
    title: "FTC Programming Masterclass",
    description:
      "Curso completo de programação FTC: sensores, telemetria e controle avançado.",
    price: 99.9,
    category: "Cursos",
    icon: GraduationCap,
    featured: true,
  },
];

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  "Todos",
  "Guias",
  "Portfolios",
  "CAD",
  "Programação",
  "Cursos",
  "Templates",
];

export const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: "instagram" as const,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: "linkedin" as const,
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    icon: "youtube" as const,
  },
  {
    label: "Email",
    href: "mailto:spacetechftc@gmail.com",
    icon: "mail" as const,
  },
] as const;
