export type AwardTier = "mundial" | "nacional" | "regional";

export interface Award {
  id: string;
  year: number;
  event: string;
  award: string;
  tier: AwardTier;
}

export interface PodiumTier {
  tier: AwardTier;
  label: string;
  subtitle: string;
  position: 1 | 2 | 3;
  height: string;
  accent: string;
  awards: Award[];
}

export const AWARDS: Award[] = [
  {
    id: "w1",
    year: 2025,
    event: "FIRST Championship — FTC Edison Division",
    award: "Inspire Award — 3º Lugar",
    tier: "mundial",
  },
  {
    id: "n1",
    year: 2025,
    event: "Brazil Championship",
    award: "Control Award",
    tier: "nacional",
  },
  {
    id: "n2",
    year: 2025,
    event: "Brazil Championship",
    award: "Winning Alliance — 1st Team Selected",
    tier: "nacional",
  },
  {
    id: "n3",
    year: 2024,
    event: "Brazil Championship",
    award: "Innovate Award sponsored by RTX — 2º Lugar",
    tier: "nacional",
  },
  {
    id: "n4",
    year: 2023,
    event: "Brazil FIRST Tech Challenge — National Tournament",
    award: "Motivate Award — 2º Lugar",
    tier: "nacional",
  },
  {
    id: "r1",
    year: 2025,
    event: "Festival Regional SESI de Robótica",
    award: "Sustain Award",
    tier: "regional",
  },
  {
    id: "r2",
    year: 2025,
    event: "Festival Regional SESI de Robótica",
    award: "Winning Alliance — Captain",
    tier: "regional",
  },
  {
    id: "r3",
    year: 2024,
    event: "Torneio Regional SESI de Robótica — PE",
    award: "Design Award",
    tier: "regional",
  },
  {
    id: "r4",
    year: 2024,
    event: "Torneio Regional SESI de Robótica — PE",
    award: "Winning Alliance — Captain",
    tier: "regional",
  },
  {
    id: "w2",
    year: 2024,
    event: "Run for the Robots Premier Event",
    award: "Inspire Award",
    tier: "mundial",
  },
  {
    id: "r6",
    year: 2023,
    event: "BR Torneio de Robótica — Regional Pernambuco",
    award: "Finalist Alliance — 1st Team Selected",
    tier: "regional",
  },
  {
    id: "r7",
    year: 2023,
    event: "BR Torneio de Robótica — Regional Pernambuco",
    award: "Think Award",
    tier: "regional",
  },
];

export const PODIUM_TIERS: PodiumTier[] = [
  {
    tier: "nacional",
    label: "Nacional",
    subtitle: "4 prêmios",
    position: 2,
    height: "h-36 md:h-44",
    accent: "#C0C8D4",
    awards: AWARDS.filter((a) => a.tier === "nacional"),
  },
  {
    tier: "mundial",
    label: "Mundial",
    subtitle: "2 prêmios",
    position: 1,
    height: "h-48 md:h-56",
    accent: "#FACC15",
    awards: AWARDS.filter((a) => a.tier === "mundial"),
  },
  {
    tier: "regional",
    label: "Regional",
    subtitle: "6 prêmios",
    position: 3,
    height: "h-28 md:h-36",
    accent: "#CD7F32",
    awards: AWARDS.filter((a) => a.tier === "regional"),
  },
];

export interface MatchVideo {
  id: string;
  title: string;
  event: string;
  year: number;
  youtubeId: string;
  description: string;
}

export const MATCH_VIDEOS: MatchVideo[] = [
  {
    id: "v1",
    title: "Final — Brazil Championship 2025",
    event: "Brazil Championship",
    year: 2025,
    youtubeId: "",
    description: "Partida decisiva da aliança campeã no nacional.",
  },
  {
    id: "v2",
    title: "FIRST Championship — Edison Division",
    event: "FIRST Championship",
    year: 2025,
    youtubeId: "",
    description: "Highlights da nossa participação no mundial.",
  },
  {
    id: "v3",
    title: "Regional SESI — PE 2024",
    event: "Torneio Regional SESI",
    year: 2024,
    youtubeId: "",
    description: "Partida que garantiu o Winning Alliance na região.",
  },
];

export interface ImpactStory {
  id: string;
  role: string;
  name: string;
  quote: string;
  initials: string;
  accent: string;
  improvements: string[];
}

export const IMPACT_STORIES: ImpactStory[] = [
  {
    id: "i1",
    role: "Programador · Drive Team",
    name: "Ana L.",
    initials: "AL",
    accent: "#22D363",
    quote:
      "Entrei sem saber programar. Hoje lidero o autônomo e quero cursar Engenharia de Computação.",
    improvements: [
      "Aprendeu Java e lógica do zero em 6 meses",
      "Passou a ensinar novatos no time",
      "Ganhou confiança para apresentar soluções técnicas",
    ],
  },
  {
    id: "i2",
    role: "Mentor técnico · SESI",
    name: "Prof. Carlos M.",
    initials: "CM",
    accent: "#38BDF8",
    quote:
      "Ver estudantes resolverem problemas reais sob pressão de competição é o que mais me motiva na Space Tech.",
    improvements: [
      "Acompanhou a formação de 4 gerações de membros",
      "Viu alunos ingressarem em cursos de engenharia",
      "Transformou aulas teóricas em projetos reais",
    ],
  },
  {
    id: "i3",
    role: "Operador de robô · Capitã",
    name: "Julia R.",
    initials: "JR",
    accent: "#A78BFA",
    quote:
      "A confiança que ganhei pilotando em arenas lotadas mudou como me apresento em qualquer situação.",
    improvements: [
      "Superou o medo de falar em público",
      "Liderou a aliança campeã regional",
      "Desenvolveu comunicação sob pressão",
    ],
  },
];
