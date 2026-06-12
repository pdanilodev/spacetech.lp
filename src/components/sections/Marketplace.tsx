"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, ShoppingBag, Star } from "lucide-react";
import {
  PRODUCTS,
  PRODUCT_CATEGORIES,
  type ProductCategory,
} from "@/lib/data";
import { FadeIn } from "@/components/shared/FadeIn";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

function formatPrice(price: number) {
  return price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

export function Marketplace() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<ProductCategory>("Todos");

  const filtered = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesSearch =
        product.title.toLowerCase().includes(search.toLowerCase()) ||
        product.description.toLowerCase().includes(search.toLowerCase());
      const matchesCategory =
        category === "Todos" || product.category === category;
      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  return (
    <section id="marketplace" className="relative py-24 md:py-32">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <FadeIn>
            <Badge className="mb-4">Marketplace</Badge>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Recursos digitais para{" "}
              <span className="text-gradient">equipes FTC</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Guias, templates, CAD files e cursos criados por engenheiros da
              Space Tech para acelerar sua temporada.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.3}>
          <div className="mx-auto mt-12 max-w-2xl">
            <div className="relative">
              <Search className="absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Buscar produtos..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-11"
              />
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.35}>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {PRODUCT_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={cn(
                  "rounded-full border px-4 py-1.5 text-sm transition-all duration-300",
                  category === cat
                    ? "border-primary/50 bg-primary/10 text-primary"
                    : "border-border text-muted-foreground hover:border-primary/30 hover:text-foreground"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product, i) => {
            const Icon = product.icon;
            return (
              <FadeIn key={product.id} delay={i * 0.05}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Card className="group h-full overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-[0_0_30px_rgba(34,211,99,0.1)]">
                    <div className="relative flex h-40 items-center justify-center bg-gradient-to-br from-primary/10 via-surface to-background">
                      <Icon className="h-12 w-12 text-primary/60 transition-all duration-500 group-hover:scale-110 group-hover:text-primary" />
                      {product.featured && (
                        <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-primary/20 px-2 py-0.5 text-xs text-primary">
                          <Star className="h-3 w-3 fill-primary" />
                          Destaque
                        </div>
                      )}
                    </div>

                    <CardHeader className="pb-2">
                      <div className="flex items-start justify-between gap-2">
                        <CardTitle className="text-base">{product.title}</CardTitle>
                        <Badge variant="secondary" className="shrink-0 text-xs">
                          {product.category}
                        </Badge>
                      </div>
                      <CardDescription className="line-clamp-2">
                        {product.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent>
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-bold text-primary">
                          {formatPrice(product.price)}
                        </span>
                        <Button size="sm" className="group/btn">
                          <ShoppingBag className="h-3.5 w-3.5" />
                          Comprar
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </FadeIn>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div className="mt-12 text-center text-muted-foreground">
            Nenhum produto encontrado para sua busca.
          </div>
        )}
      </div>
    </section>
  );
}
