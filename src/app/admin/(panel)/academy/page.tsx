"use client";

import { useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { useAdminStore } from "@/hooks/useAdminStore";
import { adminStore, generateId } from "@/lib/admin/store";
import type { AcademyChapter } from "@/lib/admin/types";

const GROUPS = ["Começar", "Competição", "Engenharia", "Documentação"];

export default function AdminAcademyPage() {
  const [chapters, setChapters] = useAdminStore(
    () => adminStore.getAcademy(),
    adminStore.setAcademy
  );
  const [editing, setEditing] = useState<AcademyChapter | null>(null);

  const empty: AcademyChapter = {
    slug: "",
    title: "",
    description: "",
    group: "Começar",
    sections: [
      { id: generateId("s"), heading: "Nova seção", content: "Conteúdo da seção..." },
    ],
  };

  const save = () => {
    if (!editing?.title) return;
    const slug =
      editing.slug ||
      editing.title
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");

    const chapter = { ...editing, slug };
    const idx = chapters.findIndex((c) => c.slug === chapter.slug);
    if (idx >= 0) {
      setChapters(chapters.map((c, i) => (i === idx ? chapter : c)));
    } else {
      setChapters([...chapters, chapter]);
    }
    setEditing(null);
  };

  const remove = (slug: string) => {
    setChapters(chapters.filter((c) => c.slug !== slug));
  };

  const updateSection = (
    index: number,
    field: keyof AcademyChapter["sections"][0],
    value: string
  ) => {
    if (!editing) return;
    const sections = [...editing.sections];
    sections[index] = { ...sections[index], [field]: value };
    setEditing({ ...editing, sections });
  };

  const addSection = () => {
    if (!editing) return;
    setEditing({
      ...editing,
      sections: [
        ...editing.sections,
        { id: generateId("s"), heading: "Nova seção", content: "" },
      ],
    });
  };

  const removeSection = (index: number) => {
    if (!editing) return;
    setEditing({
      ...editing,
      sections: editing.sections.filter((_, i) => i !== index),
    });
  };

  return (
    <>
      <AdminHeader
        title="Space Academy"
        action={
          <button
            type="button"
            onClick={() => setEditing({ ...empty })}
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
          >
            <Plus className="h-4 w-4" />
            Novo Capítulo
          </button>
        }
      />

      <p className="mb-6 text-sm text-gray-500">
        Edite os capítulos da documentação. As alterações aparecem em{" "}
        <span className="text-primary">/recursos/space-academy</span>.
      </p>

      {editing && (
        <div className="mb-6 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <h3 className="mb-4 font-semibold text-gray-900">
            {chapters.some((c) => c.slug === editing.slug && editing.slug)
              ? "Editar capítulo"
              : "Novo capítulo"}
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            <input
              placeholder="Título"
              value={editing.title}
              onChange={(e) => setEditing({ ...editing, title: e.target.value })}
              className="rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-primary"
            />
            <input
              placeholder="Slug (ex: introducao)"
              value={editing.slug}
              onChange={(e) => setEditing({ ...editing, slug: e.target.value })}
              className="rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-primary"
            />
            <input
              placeholder="Descrição"
              value={editing.description}
              onChange={(e) =>
                setEditing({ ...editing, description: e.target.value })
              }
              className="rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-primary md:col-span-2"
            />
            <select
              value={editing.group}
              onChange={(e) => setEditing({ ...editing, group: e.target.value })}
              className="rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-primary"
            >
              {GROUPS.map((g) => (
                <option key={g} value={g}>
                  {g}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-semibold text-gray-800">Seções</h4>
              <button
                type="button"
                onClick={addSection}
                className="text-xs font-medium text-primary hover:underline"
              >
                + Adicionar seção
              </button>
            </div>
            {editing.sections.map((section, i) => (
              <div
                key={section.id}
                className="rounded-xl border border-gray-100 bg-gray-50/50 p-4"
              >
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-xs font-medium text-gray-500">
                    Seção {i + 1}
                  </span>
                  <button
                    type="button"
                    onClick={() => removeSection(i)}
                    className="text-gray-400 hover:text-red-500"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </button>
                </div>
                <input
                  placeholder="Título da seção"
                  value={section.heading}
                  onChange={(e) => updateSection(i, "heading", e.target.value)}
                  className="mb-2 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-primary"
                />
                <textarea
                  placeholder="Conteúdo"
                  value={section.content}
                  onChange={(e) => updateSection(i, "content", e.target.value)}
                  rows={4}
                  className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-primary"
                />
              </div>
            ))}
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

      <div className="space-y-3">
        {chapters.map((chapter) => (
          <div
            key={chapter.slug || chapter.title}
            className="flex items-start justify-between gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
          >
            <div>
              <p className="font-semibold text-gray-900">{chapter.title}</p>
              <p className="text-xs text-gray-400">
                /{chapter.slug || "(intro)"} · {chapter.group}
              </p>
              <p className="mt-1 text-sm text-gray-500">{chapter.description}</p>
              <p className="mt-1 text-xs text-gray-400">
                {chapter.sections.length} seção(ões)
              </p>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setEditing(chapter)}
                className="text-xs font-medium text-primary hover:underline"
              >
                Editar
              </button>
              <button
                type="button"
                onClick={() => remove(chapter.slug)}
                className="text-gray-400 hover:text-red-500"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
