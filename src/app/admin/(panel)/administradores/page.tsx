"use client";

import { useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { useAdminStore } from "@/hooks/useAdminStore";
import { adminStore, generateId } from "@/lib/admin/store";
import type { AdminUser } from "@/lib/admin/types";

export default function AdminAdministradoresPage() {
  const [admins, setAdmins] = useAdminStore(
    () => adminStore.getAdmins(),
    adminStore.setAdmins
  );
  const [form, setForm] = useState<{
    name: string;
    email: string;
    role: AdminUser["role"];
  }>({ name: "", email: "", role: "administrador" });
  const [showForm, setShowForm] = useState(false);

  const add = () => {
    if (!form.name || !form.email) return;
    const user: AdminUser = {
      id: generateId("a"),
      ...form,
    };
    setAdmins([...admins, user]);
    setForm({ name: "", email: "", role: "administrador" });
    setShowForm(false);
  };

  const remove = (id: string) => {
    setAdmins(admins.filter((a) => a.id !== id));
  };

  return (
    <>
      <AdminHeader
        title="Administradores"
        action={
          <button
            type="button"
            onClick={() => setShowForm(!showForm)}
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
          >
            <Plus className="h-4 w-4" />
            Adicionar
          </button>
        }
      />

      {showForm && (
        <div className="mb-6 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <h3 className="mb-4 font-semibold text-gray-900">Novo administrador</h3>
          <div className="grid gap-4 md:grid-cols-3">
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
            <select
              value={form.role}
              onChange={(e) =>
                setForm({
                  ...form,
                  role: e.target.value as AdminUser["role"],
                })
              }
              className="rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-primary"
            >
              <option value="administrador">Administrador</option>
              <option value="editor">Editor</option>
            </select>
          </div>
          <button
            type="button"
            onClick={add}
            className="mt-4 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
          >
            Salvar
          </button>
        </div>
      )}

      <div className="space-y-3">
        {admins.map((admin) => (
          <div
            key={admin.id}
            className="flex items-center justify-between rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 text-sm font-bold text-primary">
                {admin.name.charAt(0).toUpperCase()}
              </div>
              <div>
                <p className="font-semibold text-gray-900">{admin.name}</p>
                <p className="text-sm text-gray-500">{admin.email}</p>
                <p className="text-xs text-gray-400">{admin.role}</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => remove(admin.id)}
              className="text-gray-400 hover:text-red-500"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
