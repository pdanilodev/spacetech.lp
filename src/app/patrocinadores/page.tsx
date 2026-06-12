import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SponsorshipPackages } from "@/components/sections/SponsorshipPackages";
import { SponsorsWall } from "@/components/sections/SponsorsWall";

export const metadata: Metadata = {
  title: "Patrocinadores | Space Tech FTC #23504",
  description:
    "Invista no futuro da robótica. Conheça os pacotes de patrocínio da Space Tech e apoie a próxima geração de inovadores.",
};

export default function PatrocinadoresPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div
        className="pointer-events-none absolute top-0 left-1/2 h-[500px] w-[800px] -translate-x-1/2 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse, rgba(34,211,99,0.12) 0%, transparent 70%)",
        }}
      />

      <Navbar />

      <div className="pt-24">
        <SponsorshipPackages />
        <SponsorsWall />
      </div>

      <Footer />
    </main>
  );
}
