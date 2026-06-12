"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/data";
import { cn } from "@/lib/utils";

function NavLink({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick?: () => void;
}) {
  const pathname = usePathname();
  const isActive =
    href === "/patrocinadores"
      ? pathname === "/patrocinadores"
      : href === "/recursos"
        ? pathname.startsWith("/recursos")
        : href === "/"
          ? pathname === "/"
          : false;

  return (
    <Link
      href={href}
      onClick={onClick}
      className="group relative py-1 text-[13px] text-muted-foreground transition-colors hover:text-foreground"
    >
      <span className={cn(isActive && "text-foreground")}>{label}</span>
      <span
        className={cn(
          "absolute -bottom-0.5 left-0 h-px bg-primary transition-all duration-300 ease-out",
          isActive ? "w-full" : "w-0 group-hover:w-full"
        )}
      />
    </Link>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <div className="pointer-events-none fixed top-4 right-0 left-0 z-50 flex justify-center px-4 md:top-5 md:px-6">
        <motion.header
          className={cn(
            "pointer-events-auto w-full max-w-5xl rounded-2xl transition-all duration-500",
            scrolled ? "glass-nav-floating-scrolled" : "glass-nav-floating"
          )}
          initial={{ y: -24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <nav className="flex h-14 items-center justify-between px-4 md:px-6">
            <Link href="/" className="relative z-10 shrink-0">
              <Image
                src="/images/logo-horizontal-white.png"
                alt="Space Tech"
                width={120}
                height={30}
                className="h-6 w-auto opacity-90 transition-opacity hover:opacity-100 md:h-7"
                priority
              />
            </Link>

            <div className="hidden items-center gap-7 md:flex">
              {NAV_LINKS.map((link) => (
                <NavLink key={link.href} href={link.href} label={link.label} />
              ))}
              <Link
                href="/patrocinadores"
                className="rounded-xl bg-primary px-4 py-1.5 text-[13px] font-medium text-primary-foreground shadow-[0_0_16px_rgba(34,211,99,0.2)] transition-all hover:shadow-[0_0_24px_rgba(34,211,99,0.35)]"
              >
                Patrocinar
              </Link>
            </div>

            <button
              className="relative z-10 md:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            >
              {mobileOpen ? (
                <X className="h-5 w-5 text-foreground" />
              ) : (
                <Menu className="h-5 w-5 text-foreground" />
              )}
            </button>
          </nav>
        </motion.header>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex items-start justify-center bg-background/80 pt-24 backdrop-blur-xl md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="glass-nav-floating mx-4 w-full max-w-sm rounded-2xl p-8"
              initial={{ y: -16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -16, opacity: 0 }}
            >
              <div className="flex flex-col items-center gap-6">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className="text-base text-foreground"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <Link
                  href="/patrocinadores"
                  className="mt-2 rounded-xl bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground"
                  onClick={() => setMobileOpen(false)}
                >
                  Patrocinar
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
