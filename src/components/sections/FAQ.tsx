"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X } from "lucide-react";
import { FAQ_ITEMS } from "@/lib/social";
import { SITE } from "@/lib/site";
import { FadeIn } from "@/components/shared/FadeIn";
import Link from "next/link";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mt-24 grid gap-12 border-t border-border pt-16 lg:grid-cols-2 lg:gap-20">
      <FadeIn>
        <div>
          <h2 className="text-4xl font-bold tracking-tight uppercase md:text-5xl">
            FAQ
          </h2>
          <p className="mt-4 text-muted-foreground">
            Ainda tem dúvidas? Fique à vontade para nos enviar um e-mail.
          </p>
          <Link
            href={`mailto:${SITE.email}`}
            className="mt-6 inline-flex rounded-full border border-border bg-surface/50 px-5 py-2.5 text-sm text-foreground transition-colors hover:border-primary/30"
          >
            {SITE.email}
          </Link>
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="divide-y divide-border">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.question}>
                <button
                  type="button"
                  className="flex w-full items-start gap-4 py-5 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center text-muted-foreground">
                    {isOpen ? (
                      <X className="h-4 w-4" />
                    ) : (
                      <Plus className="h-4 w-4" />
                    )}
                  </span>
                  <span className="text-sm font-medium text-foreground md:text-base">
                    {item.question}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 pl-9 text-sm leading-relaxed text-muted-foreground">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </FadeIn>
    </div>
  );
}
