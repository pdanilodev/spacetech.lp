"use client";

import { useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { useAdminStore } from "@/hooks/useAdminStore";
import { adminStore, generateId } from "@/lib/admin/store";
import type { AdminProduct } from "@/lib/admin/types";
import { PRODUCT_CATEGORIES } from "@/lib/data";

const categories = PRODUCT_CATEGORIES.filter((c) => c !== "Todos");

export default function AdminMarketplacePage() {
  const [products, setProducts] = useAdminStore(
    () => adminStore.getProducts(),
    adminStore.setProducts
  );
  const [editing, setEditing] = useState<AdminProduct | null>(null);

  const empty: AdminProduct = {
    id: "",
    title: "",
    description: "",
    price: 0,
    category: "Guias",
    featured: false,
  };

  const save = () => {
    if (!editing?.title) return;
    if (editing.id) {
      setProducts(products.map((p) => (p.id === editing.id ? editing : p)));
    } else {
      setProducts([...products, { ...editing, id: generateId("p") }]);
    }
    setEditing(null);
  };

  const remove = (id: string) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <>
      <AdminHeader
        title="Marketplace"
        action={
          <button
            type="button"
            onClick={() => setEditing({ ...empty })}
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
          >
            <Plus className="h-4 w-4" />
            Novo Produto
          </button>
        }
      />

      {editing && (
        <div className="mb-6 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <h3 className="mb-4 font-semibold text-gray-900">
            {editing.id ? "Editar produto" : "Novo produto"}
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
              rows={3}
              className="rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-primary md:col-span-2"
            />
            <input
              type="number"
              placeholder="Preço"
              value={editing.price || ""}
              onChange={(e) =>
                setEditing({ ...editing, price: parseFloat(e.target.value) || 0 })
              }
              className="rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-primary"
            />
            <select
              value={editing.category}
              onChange={(e) =>
                setEditing({ ...editing, category: e.target.value })
              }
              className="rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-primary"
            >
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
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
        {products.map((product) => (
          <div
            key={product.id}
            className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-semibold text-gray-900">{product.title}</p>
                <p className="mt-1 text-xs text-gray-500">{product.category}</p>
                <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                  {product.description}
                </p>
                <p className="mt-2 text-lg font-bold text-primary">
                  R$ {product.price.toFixed(2)}
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setEditing(product)}
                  className="text-xs font-medium text-primary hover:underline"
                >
                  Editar
                </button>
                <button
                  type="button"
                  onClick={() => remove(product.id)}
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
