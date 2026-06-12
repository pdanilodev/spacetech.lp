import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { PageReveal } from "@/components/effects/PageReveal";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Space Tech | FTC Team #23504",
  description:
    "Equipe FTC #23504 utilizando robótica, inovação e impacto social para transformar vidas. Construindo Tecnologia. Inspirando Gerações.",
  keywords: [
    "FTC",
    "FIRST Tech Challenge",
    "Space Tech",
    "robótica",
    "STEM",
    "inovação",
  ],
  openGraph: {
    title: "Space Tech | FTC Team #23504",
    description:
      "Construindo Tecnologia. Inspirando Gerações.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <SmoothScroll>
          <PageReveal>{children}</PageReveal>
        </SmoothScroll>
      </body>
    </html>
  );
}
