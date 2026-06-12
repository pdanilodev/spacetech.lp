export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  featured?: boolean;
  content: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "lancamento-space-academy",
    title: "Lançamento da Space Academy",
    excerpt:
      "Nossa documentação oficial para equipes FTC — do zero à competição.",
    category: "Recursos",
    date: "2026-03-15",
    readTime: "4 min",
    featured: true,
    content: [
      "A Space Tech apresenta a Space Academy: um hub de documentação inspirado nos melhores guias de tecnologia, criado para ajudar equipes iniciantes e experientes no FIRST Tech Challenge.",
      "O guia cobre desde os primeiros passos no FTC até programação avançada, modo autônomo e documentação de Engineering Notebook. Tudo escrito pela nossa equipe, com exemplos reais de código e checklists práticos.",
      "Acesse em /recursos/space-academy e explore os capítulos pela barra lateral. Novos conteúdos serão adicionados a cada temporada.",
    ],
  },
  {
    slug: "temporada-decode-2025",
    title: "Kickoff da Temporada DECODE",
    excerpt:
      "Análise inicial do jogo, estratégias e nossos primeiros protótipos.",
    category: "Competição",
    date: "2026-02-08",
    readTime: "6 min",
    content: [
      "A temporada DECODE presented by RTX foi revelada e nossa equipe já está em movimento. Após o kickoff, realizamos sessões de análise do Game Manual e definimos prioridades de pontuação.",
      "Nosso foco inicial está em um autônomo confiável e um sistema de manipulação versátil. Documentamos cada decisão no Engineering Notebook.",
    ],
  },
  {
    slug: "workshop-robotica-sesi",
    title: "Workshop de Robótica no SESI",
    excerpt:
      "Impactamos mais de 120 estudantes em um dia de imersão em STEM.",
    category: "Impacto",
    date: "2026-01-22",
    readTime: "3 min",
    content: [
      "A Space Tech realizou um workshop aberto no SESI Paulista, apresentando robótica competitiva, demonstrações do nosso robô e atividades práticas para estudantes do ensino fundamental e médio.",
      "O evento reforça nossa missão de inspirar a próxima geração de engenheiros e líderes através da tecnologia.",
    ],
  },
  {
    slug: "novo-site-space-tech",
    title: "Novo site da Space Tech",
    excerpt:
      "Lançamos nossa nova presença digital — mais moderna, rápida e profissional.",
    category: "Equipe",
    date: "2026-01-10",
    readTime: "2 min",
    content: [
      "Estrenamos um site completamente redesenhado com foco em experiência premium, recursos para a comunidade FTC e uma área dedicada a patrocinadores.",
      "O projeto reflete o mesmo padrão de qualidade que buscamos em competição: design limpo, performance e atenção aos detalhes.",
    ],
  },
  {
    slug: "regional-nordeste-resultados",
    title: "Resultados da Regional Nordeste",
    excerpt:
      "Classificação para a próxima fase e prêmio de Inspire em destaque.",
    category: "Competição",
    date: "2025-12-05",
    readTime: "5 min",
    content: [
      "Após uma temporada intensa de preparação, a Space Tech competiu na Regional Nordeste com excelentes resultados. Nosso autônomo e apresentação de equipe foram diferenciais.",
      "Agradecemos a todos os patrocinadores e mentores que tornaram essa jornada possível.",
    ],
  },
];

export function getBlogPost(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getFeaturedPost() {
  return BLOG_POSTS.find((p) => p.featured) ?? BLOG_POSTS[0];
}

export function getLatestPosts(limit = 4) {
  return BLOG_POSTS.filter((p) => !p.featured).slice(0, limit);
}

export function formatBlogDate(date: string) {
  return new Date(date).toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
