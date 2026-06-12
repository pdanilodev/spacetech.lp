export const SITE = {
  name: "Space Tech",
  teamNumber: "23504",
  tagline: "BUILDING THE FUTURE",
  description:
    "Equipe FTC #23504 da escola SESI Paulista — escola de referência — explorando robótica, ciência e inovação para impactar a próxima geração STEAM.",
  email: "spacetechftc@gmail.com",
  phone: "+55 81 99123-7303",
  instagram: "@spacetech.ftc",
  instagramUrl: "https://instagram.com/spacetech.ftc",
  location: "Paulista — PE",
  school: "SESI Paulista — Escola de referência",
  season: "DECODE presented by RTX",
  seasonYear: "2025/26",
} as const;

export const FOOTER_LINKS = {
  equipe: [
    { label: "Sobre", href: "/sobre" },
    { label: "Space Academy", href: "/recursos/space-academy" },
    { label: "Blog", href: "/recursos/blog" },
  ],
  apoie: [
    { label: "Patrocinadores", href: "/patrocinadores" },
    { label: "Marketplace", href: "/#marketplace" },
    { label: "Contato", href: `mailto:${SITE.email}` },
  ],
} as const;

export const AFFILIATIONS = [
  {
    abbr: "FTC",
    label: "Liga Oficial",
    title: "FIRST Tech Challenge",
  },
  {
    abbr: "</>",
    label: `Temporada ${SITE.seasonYear}`,
    title: SITE.season,
  },
  {
    abbr: "SESI",
    label: "Equipe da Escola",
    title: "SESI Paulista",
  },
] as const;
