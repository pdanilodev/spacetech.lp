"use client";

import { useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { useAdminStore } from "@/hooks/useAdminStore";
import { adminStore, generateId } from "@/lib/admin/store";
import type { AdminResource } from "@/lib/admin/types";

const TAGS = ["Guia", "Competição", "Documentação", "Código", "Blog", "Iniciante"];

export default function AdminRecursosPage() {
  const [resources, setResources] = useAdminStore(
    () => adminStore.getResources(),
    adminStore.setResources
  );
  const [editing, setEditing] = useState<AdminResource | null>(null);

  const empty: AdminResource = {
    id: "",
    title: "",
    description: "",
    href: "",
    tag: "Guia",
    featured: false,
  };

  const save = () => {
    if (!editing?.title || !editing.href) return;
    if (editing.id) {
      setResources(resources.map((r) => (r.id === editing.id ? editing : r)));
    } else {
      setResources([
        ...resources,
        { ...editing, id: generateId("r") },
      ]);
    }
    setEditing(null);
  };

  const remove = (id: string) => {
    setResources(resources.filter((r) => r.id !== id));
  };

  return (
    <>
      <AdminHeader
        title="Recursos"
        action={
          <button
            type="button"
            onClick={() => setEditing({ ...empty })}
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
          >
            <Plus className="h-4 w-4" />
            Novo Recurso
          </button>
        }
      />

      <p className="mb-6 text-sm text-gray-500">
        Gerencie os cards da página <span className="text-primary">/recursos</span>.
        O Space Academy é editado na aba Academy.
      </p>

      {editing && (
        <div className="mb-6 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <h3 className="mb-4 font-semibold text-gray-900">
            {editing.id ? "Editar recurso" : "Novo recurso"}
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            <input
              placeholder="Título"
              value={editing.title}
              onChange={(e) => setEditing({ ...editing, title: e.target.value })}
              className="rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-primary md:col-span-2"
            />
            <textarea
              placeholder="Descrição"
              value={editing.description}
              onChange={(e) =>
                setEditing({ ...editing, description: e.target.value })
              }
              rows={2}
              className="rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-primary md:col-span-2"
            />
            <input
              placeholder="Link (ex: /recursos/blog)"
              value={editing.href}
              onChange={(e) => setEditing({ ...editing, href: e.target.value })}
              className="rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-primary"
            />
            <select
              value={editing.tag}
              onChange={(e) => setEditing({ ...editing, tag: e.target.value })}
              className="rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-primary"
            >
              {TAGS.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
            <label className="flex items-center gap-2 text-sm text-gray-700">
              <input
                type="checkbox"
                checked={editing.featured}
                onChange={(e) =>
                  setEditing({ ...editing, featured: e.target.checked })
                }
              />
              Destaque
            </label>
          </div>
          <div className="mt-4 flex gap-2">
            <button
              type="button"
              onClick={save}
              className="rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
            >
              Salvar
            </button>
            <button
              type="button"
              onClick={() => setEditing(null)}
              className="rounded-xl border border-gray-200 px-5 py-2.5 text-sm text-gray-600"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}

      <div className="grid gap-4 md:grid-cols-2">
        {resources.map((resource) => (
          <div
            key={resource.id}
            className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-semibold text-gray-900">{resource.title}</p>
                <p className="text-xs text-gray-400">
                  {resource.href} · {resource.tag}
                </p>
                <p className="mt-2 text-sm text-gray-600">{resource.description}</p>
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setEditing(resource)}
                  className="text-xs font-medium text-primary hover:underline"
                >
                  Editar
                </button>
                <button
                  type="button"
                  onClick={() => remove(resource.id)}
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
