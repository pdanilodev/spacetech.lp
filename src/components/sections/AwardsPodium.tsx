"use client";

import { useCallback, useRef, useState } from "react";
import { Trophy } from "lucide-react";
import { AWARDS, PODIUM_TIERS, type PodiumTier } from "@/lib/awards";
import { FadeIn } from "@/components/shared/FadeIn";
import { cn } from "@/lib/utils";

function AwardsTooltip({
  data,
  open,
}: {
  data: PodiumTier;
  open: boolean;
}) {
  return (
    <div
      className={cn(
        "absolute top-full left-1/2 z-40 mt-3 w-72 -translate-x-1/2",
        "transition-all duration-300 ease-out",
        open
          ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
          : "pointer-events-none -translate-y-1 scale-95 opacity-0"
      )}
    >
      {/* Invisible bridge so the cursor can reach the card */}
      <div className="absolute -top-3 right-0 left-0 h-3" aria-hidden />

      <div
        className="overflow-hidden rounded-2xl border bg-background/98 shadow-2xl backdrop-blur-xl"
        style={{
          borderColor: `${data.accent}33`,
          boxShadow: `0 16px 48px rgba(0,0,0,0.45), 0 0 0 1px ${data.accent}18`,
        }}
      >
        <div
          className="border-b px-4 py-2.5"
          style={{
            borderColor: `${data.accent}22`,
            background: `linear-gradient(135deg, ${data.accent}18, transparent)`,
          }}
        >
          <p className="text-xs font-semibold tracking-wide text-foreground uppercase">
            {data.label}
          </p>
          <p className="mt-0.5 text-[10px] text-muted-foreground">
            Role para ver todos os prêmios
          </p>
        </div>
        <ul
          className="max-h-56 divide-y divide-border overflow-y-auto overscroll-contain"
          style={{ scrollbarWidth: "thin" }}
        >
          {data.awards.map((award) => (
            <li key={award.id} className="px-4 py-3">
              <p className="text-sm font-medium leading-snug text-foreground">
                {award.award}
              </p>
              <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground">
                {award.event}
              </p>
              <p
                className="mt-1.5 text-[10px] font-semibold"
                style={{ color: data.accent }}
              >
                {award.year}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function PodiumStep({ data }: { data: PodiumTier }) {
  const [open, setOpen] = useState(false);
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleEnter = useCallback(() => {
    if (leaveTimer.current) clearTimeout(leaveTimer.current);
    setOpen(true);
  }, []);

  const handleLeave = useCallback(() => {
    leaveTimer.current = setTimeout(() => setOpen(false), 120);
  }, []);

  const order =
    data.position === 1
      ? "order-2"
      : data.position === 2
        ? "order-1"
        : "order-3";

  const width =
    data.position === 1
      ? "max-w-[200px]"
      : data.position === 2
        ? "max-w-[180px]"
        : "max-w-[180px]";

  return (
    <div
      className={cn(
        "relative flex flex-1 flex-col items-center outline-none",
        order,
        width
      )}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {/* Trophy */}
      <div
        className={cn(
          "relative z-10 mb-5 flex items-center justify-center md:mb-6",
          "transition-transform duration-500",
          open && "-translate-y-2",
          data.position === 1
            ? "h-24 w-24 md:h-32 md:w-32"
            : "h-20 w-20 md:h-24 md:w-24"
        )}
      >
        <div
          className={cn(
            "pointer-events-none absolute inset-0 scale-75 rounded-full opacity-0 transition-all duration-500",
            open && "scale-110 opacity-100"
          )}
          style={{
            background: `radial-gradient(circle at center, ${data.accent}45 0%, ${data.accent}18 35%, transparent 68%)`,
          }}
        />
        <div
          className={cn(
            "pointer-events-none absolute inset-0 rounded-full opacity-0 blur-xl transition-opacity duration-500",
            open && "opacity-60"
          )}
          style={{
            background: `radial-gradient(circle, ${data.accent}55 0%, transparent 65%)`,
          }}
        />
        <Trophy
          className="relative h-[72%] w-[72%]"
          style={{
            color: data.accent,
            filter: `drop-shadow(0 0 12px ${data.accent}44)`,
          }}
          strokeWidth={1.2}
          fill="transparent"
        />
      </div>

      {/* Label */}
      <div className="relative mb-4 text-center">
        <p className="text-sm font-bold tracking-[0.12em] text-foreground uppercase md:text-base">
          {data.label}
        </p>
        <p
          className="mt-1 inline-flex rounded-full px-2.5 py-0.5 text-[11px] font-semibold"
          style={{
            background: `${data.accent}18`,
            color: data.accent,
          }}
        >
          {data.subtitle}
        </p>

        <AwardsTooltip data={data} open={open} />
      </div>

      {/* Pedestal */}
      <div
        className={cn(
          "relative w-full overflow-hidden rounded-t-2xl border border-b-0 transition-all duration-500",
          data.height,
          open && "shadow-lg"
        )}
        style={{
          borderColor: open ? `${data.accent}55` : `${data.accent}33`,
          boxShadow: open
            ? `0 8px 32px ${data.accent}22`
            : `inset 0 1px 0 ${data.accent}22`,
          background: `linear-gradient(180deg, ${data.accent}28 0%, ${data.accent}08 40%, rgba(17,24,39,0.9) 100%)`,
        }}
      >
        <div
          className="absolute inset-x-0 top-0 h-px"
          style={{
            background: `linear-gradient(90deg, transparent, ${data.accent}66, transparent)`,
          }}
        />
        <span
          className="absolute top-4 left-1/2 -translate-x-1/2 font-bold opacity-20 select-none"
          style={{
            color: data.accent,
            fontSize: data.position === 1 ? "3.5rem" : "2.5rem",
            lineHeight: 1,
          }}
        >
          {data.position}º
        </span>
      </div>
    </div>
  );
}

export function AwardsPodium() {
  return (
    <div>
      <FadeIn>
        <div className="text-center">
          <p className="text-xs tracking-[0.2em] text-primary uppercase">
            Conquistas
          </p>
          <h3 className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">
            {AWARDS.length} Prêmios em Competição
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">
            Passe o mouse sobre cada troféu para ver os prêmios — role dentro do
            card para ver temporadas anteriores.
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.15}>
        <div className="relative mx-auto mt-16 max-w-3xl px-4 pb-64 pt-8 md:mt-20 md:max-w-4xl md:pb-72">
          <div className="absolute right-4 bottom-0 left-4 h-3 rounded-full bg-gradient-to-r from-transparent via-border to-transparent md:right-8 md:left-8" />

          <div className="flex items-end justify-center gap-2 md:gap-4">
            {PODIUM_TIERS.map((tier) => (
              <PodiumStep key={tier.tier} data={tier} />
            ))}
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
