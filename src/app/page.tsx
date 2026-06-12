import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { WhoWeAre } from "@/components/sections/WhoWeAre";
import { LatestNews } from "@/components/sections/LatestNews";
import { SocialFeed } from "@/components/sections/SocialFeed";
import { Sponsors } from "@/components/sections/Sponsors";
import { Marketplace } from "@/components/sections/Marketplace";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />
      <Hero />
      <WhoWeAre />
      <LatestNews />
      <SocialFeed />
      <Sponsors />
      <Marketplace />
      <Footer />
    </main>
  );
}
