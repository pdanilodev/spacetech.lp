import { SITE } from "@/lib/site";

export interface SocialPost {
  id: string;
  platform: "instagram" | "youtube";
  account: string;
  handle: string;
  timeAgo: string;
  caption: string;
  imageGradient: string;
  url: string;
}

export const SOCIAL_POSTS: SocialPost[] = [
  {
    id: "1",
    platform: "instagram",
    account: "Space Tech FTC",
    handle: SITE.instagram,
    timeAgo: "há 2 semanas",
    caption:
      "Kickoff DECODE! Nossa equipe já está analisando o jogo e prototipando as primeiras ideias. 🚀🤖",
    imageGradient: "from-primary/30 via-emerald-900/40 to-background",
    url: SITE.instagramUrl,
  },
  {
    id: "2",
    platform: "instagram",
    account: "Space Tech FTC",
    handle: SITE.instagram,
    timeAgo: "há 1 mês",
    caption:
      "Workshop de robótica no SESI Paulista — mais de 120 estudantes impactados em um dia de STEM!",
    imageGradient: "from-teal-900/50 via-primary/20 to-background",
    url: SITE.instagramUrl,
  },
  {
    id: "3",
    platform: "instagram",
    account: "Space Tech FTC",
    handle: SITE.instagram,
    timeAgo: "há 1 mês",
    caption:
      "Bastidores da montagem do robô. Engenharia, testes e muita café. ☕",
    imageGradient: "from-surface via-primary/10 to-background",
    url: SITE.instagramUrl,
  },
  {
    id: "4",
    platform: "youtube",
    account: "Space Tech FTC",
    handle: "@spacetechftc",
    timeAgo: "há 2 meses",
    caption:
      "Highlights da nossa última competição regional — autônomo, teleop e celebração da equipe!",
    imageGradient: "from-red-950/40 via-surface to-background",
    url: "https://youtube.com",
  },
];

export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "O que é o FIRST Tech Challenge?",
    answer:
      "O FTC é uma competição de robótica para estudantes de 12 a 18 anos. Equipes projetam, constroem e programam robôs para competir em alianças, desenvolvendo habilidades em STEM, trabalho em equipe e liderança.",
  },
  {
    question: "Como entrar na Space Tech?",
    answer:
      "Somos uma equipe do SESI Paulista. Interessados podem entrar em contato pelo e-mail ou Instagram. Buscamos estudantes motivados em engenharia, programação, design e comunicação.",
  },
  {
    question: "A Space Academy é gratuita?",
    answer:
      "Sim! Todos os guias e documentação da Space Academy são gratuitos e abertos para qualquer equipe FTC ou estudante interessado em robótica.",
  },
  {
    question: "Como patrocinar a equipe?",
    answer:
      "Visite nossa página de Patrocinadores para conhecer os pacotes disponíveis. Entre em contato pelo e-mail spacetechftc@gmail.com para discutir parcerias personalizadas.",
  },
  {
    question: "Onde vocês competem?",
    answer:
      "Competimos em eventos regionais e estaduais do FIRST no Brasil. Nossa base é em Paulista — PE, no SESI Paulista.",
  },
];
