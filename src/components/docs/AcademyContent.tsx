import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { AcademyPageContent } from "@/lib/resources";
import { CodeBlock } from "@/components/docs/CodeBlock";

interface AcademyContentProps {
  page: AcademyPageContent;
}

export function AcademyContent({ page }: AcademyContentProps) {
  return (
    <article className="min-w-0 flex-1">
      <nav className="mb-6 flex items-center gap-1.5 text-sm text-muted-foreground">
        <Link href="/recursos" className="transition-colors hover:text-foreground">
          Recursos
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <Link
          href="/recursos/space-academy"
          className="transition-colors hover:text-foreground"
        >
          Space Academy
        </Link>
        {page.slug && (
          <>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-foreground">{page.title}</span>
          </>
        )}
      </nav>

      <header className="mb-10 border-b border-border pb-8">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
          {page.title}
        </h1>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
          {page.description}
        </p>
      </header>

      <div className="space-y-10">
        {page.sections.map((section) => (
          <section key={section.id} id={section.id}>
            <h2 className="mb-3 text-xl font-semibold tracking-tight">
              {section.heading}
            </h2>
            <div className="prose-docs text-sm leading-relaxed text-muted-foreground md:text-[15px]">
              {section.content.split("\n").map((line, i) => (
                <p key={i} className={i > 0 ? "mt-2" : ""}>
                  {line}
                </p>
              ))}
            </div>
            {section.note && (
              <div className="mt-4 rounded-xl border border-primary/20 bg-primary/5 px-4 py-3 text-sm text-foreground/80">
                <span className="font-medium text-primary">Nota · </span>
                {section.note}
              </div>
            )}
            {section.code && (
              <CodeBlock code={section.code} language={section.language} />
            )}
          </section>
        ))}
      </div>
    </article>
  );
}
