"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  GraduationCap,
  Home,
  LayoutDashboard,
  ShoppingBag,
  Star,
  Ticket,
  Users,
} from "lucide-react";
import { adminStore } from "@/lib/admin/store";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard, exact: true },
  { href: "/admin/tickets", label: "Tickets", icon: Ticket },
  { href: "/admin/administradores", label: "Administradores", icon: Users },
  { href: "/admin/academy", label: "Academy", icon: GraduationCap },
  { href: "/admin/marketplace", label: "Marketplace", icon: ShoppingBag },
  { href: "/admin/recursos", label: "Recursos", icon: Star },
] as const;

export function AdminSidebar() {
  const pathname = usePathname();
  const [session, setSession] = useState(adminStore.getSession);

  useEffect(() => {
    setSession(adminStore.getSession());
  }, []);

  return (
    <aside className="flex h-screen w-60 shrink-0 flex-col border-r border-white/5 bg-[#0c1018] text-white">
      <div className="flex items-center gap-2.5 border-b border-white/5 px-5 py-5">
        <Image
          src="/images/logo-shield.png"
          alt="Space Tech"
          width={32}
          height={32}
          className="h-8 w-8"
        />
        <span className="text-sm font-semibold tracking-tight">Space Tech</span>
      </div>

      <nav className="flex-1 space-y-1 px-3 py-4">
        <p className="mb-2 px-3 text-[10px] font-semibold tracking-[0.15em] text-white/30 uppercase">
          Principal
        </p>
        {NAV.map((item) => {
          const active =
            "exact" in item && item.exact
              ? pathname === item.href
              : pathname.startsWith(item.href);
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
                active
                  ? "bg-primary text-primary-foreground"
                  : "text-white/60 hover:bg-white/5 hover:text-white"
              )}
            >
              <Icon className="h-4 w-4 shrink-0" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-white/5 p-4">
        <div className="mb-3 flex items-center gap-3 rounded-xl bg-white/5 px-3 py-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
            {session?.name?.charAt(0) ?? "A"}
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-medium">{session?.name}</p>
            <p className="text-[11px] text-white/40">Administrador</p>
          </div>
        </div>
        <Link
          href="/"
          className="flex items-center justify-center gap-2 rounded-xl border border-white/10 py-2.5 text-xs font-medium text-white/60 transition-colors hover:bg-white/5 hover:text-white"
        >
          <Home className="h-3.5 w-3.5" />
          Voltar ao site
        </Link>
      </div>
    </aside>
  );
}
