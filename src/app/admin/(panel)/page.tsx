"use client";

import Link from "next/link";
import { FileText, Clock, CheckCircle2, XCircle, Sparkles } from "lucide-react";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { useAdminStore } from "@/hooks/useAdminStore";
import { adminStore } from "@/lib/admin/store";
import type { Ticket, TicketStatus } from "@/lib/admin/types";
import { cn } from "@/lib/utils";

const statusConfig: Record<
  TicketStatus,
  { label: string; color: string; bar: string; icon: React.ElementType }
> = {
  novo: { label: "Novos", color: "text-emerald-600", bar: "bg-emerald-500", icon: Sparkles },
  em_andamento: { label: "Em Andamento", color: "text-blue-600", bar: "bg-blue-500", icon: Clock },
  concluido: { label: "Concluídos", color: "text-violet-600", bar: "bg-violet-500", icon: CheckCircle2 },
  cancelado: { label: "Cancelados", color: "text-rose-500", bar: "bg-rose-400", icon: XCircle },
};

export default function AdminDashboardPage() {
  const [tickets] = useAdminStore(
    () => adminStore.getTickets(),
    adminStore.setTickets
  );

  const counts = {
    novo: tickets.filter((t) => t.status === "novo").length,
    em_andamento: tickets.filter((t) => t.status === "em_andamento").length,
    concluido: tickets.filter((t) => t.status === "concluido").length,
    cancelado: tickets.filter((t) => t.status === "cancelado").length,
  };
  const total = tickets.length;

  return (
    <>
      <AdminHeader
        title="Painel de Controle"
        action={
          <Link
            href="/admin/tickets"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-opacity hover:opacity-90"
          >
            <FileText className="h-4 w-4" />
            Gerir Tickets
          </Link>
        }
      />

      <div className="grid gap-5 lg:grid-cols-12">
        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm lg:col-span-4">
          <p className="text-5xl font-bold text-gray-900">{total}</p>
          <p className="mt-1 font-medium text-gray-700">Total de Tickets</p>
          <p className="mt-1 text-xs text-gray-400">Atualizados em tempo real</p>
        </div>

        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm lg:col-span-4">
          <p className="mb-4 text-sm font-semibold text-gray-800">
            Status dos Tickets
          </p>
          <div className="space-y-3">
            {(Object.keys(statusConfig) as TicketStatus[]).map((key) => {
              const pct = total ? Math.round((counts[key] / total) * 100) : 0;
              return (
                <div key={key}>
                  <div className="mb-1 flex justify-between text-xs">
                    <span className="text-gray-600">{statusConfig[key].label}</span>
                    <span className="font-medium text-gray-800">{pct}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-gray-100">
                    <div
                      className={cn("h-full rounded-full transition-all", statusConfig[key].bar)}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 lg:col-span-4">
          {(Object.keys(statusConfig) as TicketStatus[]).map((key) => {
            const Icon = statusConfig[key].icon;
            return (
              <div
                key={key}
                className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm"
              >
                <Icon className={cn("h-5 w-5", statusConfig[key].color)} />
                <p className="mt-2 text-2xl font-bold text-gray-900">
                  {counts[key]}
                </p>
                <p className="text-xs text-gray-500">{statusConfig[key].label}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-8 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="font-semibold text-gray-900">Tickets Recentes</h2>
          <Link href="/admin/tickets" className="text-sm text-primary hover:underline">
            Ver todos →
          </Link>
        </div>
        <div className="space-y-3">
          {tickets.slice(0, 4).map((ticket) => (
            <TicketRow key={ticket.id} ticket={ticket} />
          ))}
        </div>
      </div>
    </>
  );
}

function TicketRow({ ticket }: { ticket: Ticket }) {
  const cfg = statusConfig[ticket.status];
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-gray-100 px-4 py-3">
      <div>
        <p className="text-sm font-semibold text-gray-900">
          #{ticket.id} · {ticket.name}
        </p>
        <p className="text-xs text-gray-500">{ticket.email}</p>
      </div>
      <div className="flex items-center gap-3">
        <span className={cn("text-[10px] font-bold tracking-wide uppercase", cfg.color)}>
          {cfg.label}
        </span>
        <span className="text-xs text-gray-400">
          {new Date(ticket.createdAt).toLocaleDateString("pt-BR")}
        </span>
        <Link
          href="/admin/tickets"
          className="rounded-lg bg-primary/10 px-3 py-1 text-xs font-medium text-primary hover:bg-primary/20"
        >
          Visualizar
        </Link>
      </div>
    </div>
  );
}
