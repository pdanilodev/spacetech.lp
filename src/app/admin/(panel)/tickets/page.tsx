"use client";

import { useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { useAdminStore } from "@/hooks/useAdminStore";
import { adminStore, generateId } from "@/lib/admin/store";
import type { Ticket, TicketStatus } from "@/lib/admin/types";
import { cn } from "@/lib/utils";

const STATUSES: { value: TicketStatus; label: string }[] = [
  { value: "novo", label: "Novos" },
  { value: "em_andamento", label: "Em Andamento" },
  { value: "concluido", label: "Concluídos" },
  { value: "cancelado", label: "Cancelados" },
];

const statusColor: Record<TicketStatus, string> = {
  novo: "bg-emerald-100 text-emerald-700",
  em_andamento: "bg-blue-100 text-blue-700",
  concluido: "bg-violet-100 text-violet-700",
  cancelado: "bg-rose-100 text-rose-600",
};

export default function AdminTicketsPage() {
  const [tickets, setTickets] = useAdminStore(
    () => adminStore.getTickets(),
    adminStore.setTickets
  );
  const [filter, setFilter] = useState<TicketStatus | "todos">("todos");
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    status: "novo" as TicketStatus,
  });

  const filtered =
    filter === "todos" ? tickets : tickets.filter((t) => t.status === filter);

  const addTicket = () => {
    if (!form.name || !form.email) return;
    const ticket: Ticket = {
      id: generateId(),
      ...form,
      createdAt: new Date().toISOString(),
    };
    setTickets([ticket, ...tickets]);
    setForm({ name: "", email: "", subject: "", message: "", status: "novo" });
    setShowForm(false);
  };

  const updateStatus = (id: string, status: TicketStatus) => {
    setTickets(tickets.map((t) => (t.id === id ? { ...t, status } : t)));
  };

  const remove = (id: string) => {
    setTickets(tickets.filter((t) => t.id !== id));
  };

  return (
    <>
      <AdminHeader
        title="Tickets"
        action={
          <button
            type="button"
            onClick={() => setShowForm(!showForm)}
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
          >
            <Plus className="h-4 w-4" />
            Novo Ticket
          </button>
        }
      />

      {showForm && (
        <div className="mb-6 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <h3 className="mb-4 font-semibold text-gray-900">Adicionar pessoa / ticket</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <input
              placeholder="Nome"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-primary"
            />
            <input
              placeholder="E-mail"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-primary"
            />
            <input
              placeholder="Assunto"
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
              className="rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-primary md:col-span-2"
            />
            <textarea
              placeholder="Mensagem"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={3}
              className="rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-primary md:col-span-2"
            />
          </div>
          <button
            type="button"
            onClick={addTicket}
            className="mt-4 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
          >
            Salvar ticket
          </button>
        </div>
      )}

      <div className="mb-5 flex flex-wrap gap-2">
        <FilterBtn active={filter === "todos"} onClick={() => setFilter("todos")}>
          Todos
        </FilterBtn>
        {STATUSES.map((s) => (
          <FilterBtn
            key={s.value}
            active={filter === s.value}
            onClick={() => setFilter(s.value)}
          >
            {s.label}
          </FilterBtn>
        ))}
      </div>

      <div className="space-y-3">
        {filtered.map((ticket) => (
          <div
            key={ticket.id}
            className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="font-semibold text-gray-900">
                  #{ticket.id} · {ticket.name}
                </p>
                <p className="text-sm text-gray-500">{ticket.email}</p>
                <p className="mt-2 text-sm font-medium text-gray-800">
                  {ticket.subject}
                </p>
                <p className="mt-1 text-sm text-gray-500">{ticket.message}</p>
              </div>
              <div className="flex flex-col items-end gap-2">
                <span
                  className={cn(
                    "rounded-full px-2.5 py-0.5 text-[10px] font-bold tracking-wide uppercase",
                    statusColor[ticket.status]
                  )}
                >
                  {STATUSES.find((s) => s.value === ticket.status)?.label}
                </span>
                <select
                  value={ticket.status}
                  onChange={(e) =>
                    updateStatus(ticket.id, e.target.value as TicketStatus)
                  }
                  className="rounded-lg border border-gray-200 px-2 py-1 text-xs"
                >
                  {STATUSES.map((s) => (
                    <option key={s.value} value={s.value}>
                      {s.label}
                    </option>
                  ))}
                </select>
                <button
                  type="button"
                  onClick={() => remove(ticket.id)}
                  className="text-gray-400 hover:text-red-500"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function FilterBtn({
  children,
  active,
  onClick,
}: {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full px-4 py-1.5 text-xs font-medium transition-colors",
        active
          ? "bg-primary text-primary-foreground"
          : "bg-white text-gray-600 border border-gray-200 hover:border-primary/30"
      )}
    >
      {children}
    </button>
  );
}
