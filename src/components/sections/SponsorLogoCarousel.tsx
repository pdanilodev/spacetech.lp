"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SPONSOR_LOGOS } from "@/lib/data";

const VISIBLE_COUNT = 5;
const INTERVAL_MS = 3000;

function chunkSponsors<T>(items: T[], size: number): T[][] {
  if (items.length === 0) return [];
  const chunks: T[][] = [];
  for (let i = 0; i < items.length; i += size) {
    const chunk = items.slice(i, i + size);
    if (chunk.length < size) {
      chunks.push([...chunk, ...items.slice(0, size - chunk.length)]);
    } else {
      chunks.push(chunk);
    }
  }
  return chunks;
}

function SponsorLogoPlaceholder({
  name,
  abbr,
}: {
  name: string;
  abbr: string;
}) {
  return (
    <div className="group flex flex-1 items-center justify-center px-2">
      <div className="flex items-center gap-2 opacity-40 transition-opacity duration-300 group-hover:opacity-70">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-[10px] font-bold tracking-wider text-foreground/80">
          {abbr}
        </span>
        <span className="hidden text-sm font-semibold tracking-tight text-foreground/70 sm:block">
          {name}
        </span>
      </div>
    </div>
  );
}

export function SponsorLogoCarousel() {
  const batches = useMemo(
    () => chunkSponsors([...SPONSOR_LOGOS], VISIBLE_COUNT),
    []
  );
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (batches.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % batches.length);
    }, INTERVAL_MS);
    return () => clearInterval(timer);
  }, [batches.length]);

  const current = batches[index] ?? [];

  return (
    <div className="relative mt-12 border-t border-border/60 pt-8 lg:mt-16">
      <p className="mb-6 text-center text-[10px] tracking-[0.2em] text-muted-foreground/60 uppercase">
        Patrocinadores
      </p>

      <div className="relative h-14 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="absolute inset-0 flex items-center justify-between gap-4"
            initial={{ y: 48, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -48, opacity: 0 }}
            transition={{ duration: 0.55, ease: [0.25, 0.4, 0.25, 1] }}
          >
            {current.map((sponsor) => (
              <SponsorLogoPlaceholder
                key={`${index}-${sponsor.name}`}
                name={sponsor.name}
                abbr={sponsor.abbr}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {batches.length > 1 && (
        <div className="mt-5 flex justify-center gap-1.5">
          {batches.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Patrocinadores grupo ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1 rounded-full transition-all duration-300 ${
                i === index
                  ? "w-5 bg-primary"
                  : "w-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
