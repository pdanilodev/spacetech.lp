import Image from "next/image";
import Link from "next/link";
import {
  GraduationCap,
  Instagram,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { AFFILIATIONS, FOOTER_LINKS, SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10 lg:py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Image
              src="/images/logo-shield.png"
              alt="Space Tech"
              width={56}
              height={56}
              className="h-12 w-12 object-contain"
            />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {SITE.description}
            </p>
            <p className="mt-4 text-xs font-medium tracking-[0.2em] text-primary uppercase">
              {SITE.tagline}
            </p>
            <div className="mt-5 flex items-center gap-3">
              <Link
                href={SITE.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
              >
                <Instagram className="h-4 w-4" />
              </Link>
              <Link
                href={`mailto:${SITE.email}`}
                aria-label="Email"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
              >
                <Mail className="h-4 w-4" />
              </Link>
              <Link
                href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                aria-label="Telefone"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
              >
                <Phone className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Equipe */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold tracking-[0.15em] text-foreground uppercase">
              Equipe
            </h3>
            <ul className="mt-4 space-y-2.5">
              {FOOTER_LINKS.equipe.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Apoie */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold tracking-[0.15em] text-foreground uppercase">
              Apoie
            </h3>
            <ul className="mt-4 space-y-2.5">
              {FOOTER_LINKS.apoie.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div className="lg:col-span-4">
            <h3 className="text-xs font-semibold tracking-[0.15em] text-foreground uppercase">
              Contato
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {SITE.location}
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <GraduationCap className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {SITE.school}
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <Link
                  href={`mailto:${SITE.email}`}
                  className="transition-colors hover:text-foreground"
                >
                  {SITE.email}
                </Link>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <Link
                  href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                  className="transition-colors hover:text-foreground"
                >
                  {SITE.phone}
                </Link>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <Instagram className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <Link
                  href={SITE.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-foreground"
                >
                  {SITE.instagram}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 md:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Space Tech FTC #{SITE.teamNumber}.
            Todos os direitos reservados.
          </p>
          <p className="text-[10px] tracking-[0.15em] text-muted-foreground/70 uppercase">
            Building the Future · STEAM · Robotics
          </p>
        </div>

        {/* Affiliations */}
        <div className="mt-10">
          <p className="mb-5 text-center text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
            Afiliações & Programas
          </p>
          <div className="grid gap-3 sm:grid-cols-3">
            {AFFILIATIONS.map((item) => (
              <div
                key={item.title}
                className="flex items-center gap-4 rounded-xl border border-border bg-surface/40 px-4 py-4 transition-colors hover:border-primary/20"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-background text-xs font-bold text-primary">
                  {item.abbr}
                </div>
                <div>
                  <p className="text-[10px] tracking-wide text-muted-foreground uppercase">
                    {item.label}
                  </p>
                  <p className="text-sm font-semibold text-foreground">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
