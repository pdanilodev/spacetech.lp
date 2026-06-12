import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { RecursosContent } from "@/components/recursos/RecursosContent";

export const metadata: Metadata = {
  title: "Recursos | Space Tech FTC #23504",
  description:
    "Guias, documentação e ferramentas para equipes FTC — incluindo a Space Academy.",
};

export default function RecursosPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <RecursosContent />

      <Footer />
    </main>
  );
}
