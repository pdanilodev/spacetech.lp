"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Gem } from "lucide-react";
import type { SponsorshipPackage } from "@/lib/data";
import { cn } from "@/lib/utils";

interface SponsorshipPackageCardProps {
  pkg: SponsorshipPackage;
  index: number;
}

function formatPrice(value: number) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 0,
  });
}

export function SponsorshipPackageCard({
  pkg,
  index,
}: SponsorshipPackageCardProps) {
  const isSolid = pkg.buttonStyle === "solid";

  return (
    <motion.article
      className="group relative flex flex-col overflow-hidden rounded-2xl border bg-surface/60"
      style={{ borderColor: pkg.border }}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
      whileHover={{ y: -6 }}
    >
      {/* Glow orb */}
      <div
        className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full blur-3xl transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: pkg.glow, opacity: 0.7 }}
      />

      {/* Planet visual */}
      <div className="relative flex h-36 items-end justify-center overflow-hidden border-b border-white/5">
        <div
          className="absolute top-6 right-6 h-20 w-20 rounded-full blur-[1px]"
          style={{
            background: `radial-gradient(circle at 35% 35%, ${pkg.accent}cc, ${pkg.accent}44 50%, transparent 70%)`,
            boxShadow: `0 0 40px ${pkg.glow}`,
          }}
        />
        {pkg.id === "estelar" && (
          <>
            {[...Array(6)].map((_, i) => (
              <span
                key={i}
                className="absolute h-0.5 w-0.5 rounded-full bg-white/40"
                style={{
                  top: `${20 + i * 12}%`,
                  left: `${15 + i * 10}%`,
                }}
              />
            ))}
          </>
        )}
        {pkg.badge && (
          <div
            className="absolute top-4 left-4 flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-semibold tracking-wide uppercase"
            style={{
              background: `${pkg.accent}22`,
              color: pkg.accent,
              border: `1px solid ${pkg.border}`,
            }}
          >
            {pkg.badge.variant === "premium" && (
              <Gem className="h-3 w-3" strokeWidth={2} />
            )}
            {pkg.badge.label}
          </div>
        )}
      </div>

      <div className="relative flex flex-1 flex-col p-6">
        <h3
          className="text-xl font-semibold tracking-tight"
          style={{ color: pkg.accent }}
        >
          {pkg.name}
        </h3>

        <div className="mt-3 flex items-baseline gap-1">
          <span className="text-3xl font-bold text-foreground">
            {formatPrice(pkg.price)}
          </span>
          <span className="text-xs text-muted-foreground">/ temporada</span>
        </div>

        <ul className="mt-6 flex flex-1 flex-col gap-3">
          {pkg.features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-2.5 text-sm text-muted-foreground"
            >
              <Check
                className="mt-0.5 h-4 w-4 shrink-0"
                style={{ color: pkg.accent }}
                strokeWidth={2.5}
              />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <Link
          href={`mailto:contato@spacetech.ftc?subject=Patrocínio ${pkg.name} - Space Tech`}
          className={cn(
            "mt-8 flex w-full items-center justify-center rounded-xl py-3 text-sm font-medium transition-all duration-300",
            isSolid
              ? "text-background hover:opacity-90"
              : "border bg-transparent hover:bg-white/5"
          )}
          style={
            isSolid
              ? { backgroundColor: pkg.accent }
              : { borderColor: pkg.border, color: pkg.accent }
          }
        >
          {pkg.badge?.variant === "premium" && (
            <Gem className="mr-2 h-4 w-4" />
          )}
          Escolher {pkg.name}
        </Link>
      </div>
    </motion.article>
  );
}
