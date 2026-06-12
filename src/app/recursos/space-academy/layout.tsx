import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { DocsSidebar } from "@/components/docs/DocsSidebar";

export default function SpaceAcademyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="mx-auto max-w-6xl px-6 pt-28 pb-20 lg:px-10 lg:pt-32">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-14">
          <DocsSidebar />
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
}
