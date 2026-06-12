"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import { logoutAdmin } from "@/lib/admin/auth";
import { adminStore } from "@/lib/admin/store";

interface AdminHeaderProps {
  title: string;
  action?: React.ReactNode;
}

export function AdminHeader({ title, action }: AdminHeaderProps) {
  const router = useRouter();
  const [session, setSession] = useState(adminStore.getSession);

  useEffect(() => {
    setSession(adminStore.getSession());
  }, []);

  const now = new Date();
  const dateStr = now.toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const timeStr = now.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <header className="mb-8 flex flex-wrap items-start justify-between gap-4">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
          {title}
        </h1>
        <p className="mt-1 text-sm capitalize text-gray-500">{dateStr}</p>
      </div>

      <div className="flex items-center gap-4">
        {action}
        <span className="hidden text-2xl font-light text-gray-300 md:block">
          {timeStr}
        </span>
        <div className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-2 shadow-sm">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
            {session?.name?.charAt(0) ?? "A"}
          </div>
          <span className="text-sm font-medium text-gray-700">
            {session?.name}
          </span>
          <button
            type="button"
            onClick={() => {
              logoutAdmin();
              router.push("/admin/login");
            }}
            className="ml-1 rounded-lg p-1.5 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-700"
            aria-label="Sair"
          >
            <LogOut className="h-4 w-4" />
          </button>
        </div>
      </div>
    </header>
  );
}
