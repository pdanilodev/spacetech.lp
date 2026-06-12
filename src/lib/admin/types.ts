export type TicketStatus = "novo" | "em_andamento" | "concluido" | "cancelado";

export interface AdminSession {
  email: string;
  name: string;
}

export interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: "administrador" | "editor";
}

export interface AdminProduct {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  featured?: boolean;
}

export interface Ticket {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: TicketStatus;
  createdAt: string;
}

export interface AcademyChapter {
  slug: string;
  title: string;
  description: string;
  group: string;
  sections: {
    id: string;
    heading: string;
    content: string;
    code?: string;
    language?: string;
    note?: string;
  }[];
}

export interface AdminResource {
  id: string;
  title: string;
  description: string;
  href: string;
  tag: string;
  featured?: boolean;
}
