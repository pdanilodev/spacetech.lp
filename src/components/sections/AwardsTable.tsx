"use client";

import { AWARDS, PODIUM_TIERS } from "@/lib/awards";
import { FadeIn } from "@/components/shared/FadeIn";

const tierLabels = {
  mundial: "Mundial",
  nacional: "Nacional",
  regional: "Regional",
} as const;

export function AwardsTable() {
  return (
    <div className="mt-20">
      <FadeIn>
        <h3 className="text-xl font-bold tracking-tight md:text-2xl">
          Todas as premiações
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Histórico completo por ano, competição e categoria.
        </p>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="mt-8 overflow-hidden rounded-2xl border border-border">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="border-b border-border bg-surface/60">
                  <th className="px-5 py-3.5 text-xs font-medium tracking-wide text-muted-foreground uppercase">
                    Ano
                  </th>
                  <th className="px-5 py-3.5 text-xs font-medium tracking-wide text-muted-foreground uppercase">
                    Nível
                  </th>
                  <th className="px-5 py-3.5 text-xs font-medium tracking-wide text-muted-foreground uppercase">
                    Competição
                  </th>
                  <th className="px-5 py-3.5 text-xs font-medium tracking-wide text-muted-foreground uppercase">
                    Premiação
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {AWARDS.map((award) => {
                  const tier = PODIUM_TIERS.find((t) => t.tier === award.tier);
                  return (
                    <tr
                      key={award.id}
                      className="transition-colors hover:bg-surface/40"
                    >
                      <td className="px-5 py-4 font-medium text-foreground">
                        {award.year}
                      </td>
                      <td className="px-5 py-4">
                        <span
                          className="inline-flex rounded-full px-2.5 py-0.5 text-[11px] font-semibold"
                          style={{
                            background: `${tier?.accent}22`,
                            color: tier?.accent,
                          }}
                        >
                          {tierLabels[award.tier]}
                        </span>
                      </td>
                      <td className="px-5 py-4 text-muted-foreground">
                        {award.event}
                      </td>
                      <td className="px-5 py-4 font-medium text-foreground">
                        {award.award}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
