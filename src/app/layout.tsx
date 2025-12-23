import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Renda Extra com Celular - Método Validado para 2026",
  description: "Transforme seu celular em uma fonte de renda extra. Método comprovado para iniciantes ganharem R$ 2.000 a R$ 8.000 por mês usando apenas o smartphone.",
  keywords: ["renda extra", "ganhar dinheiro", "celular", "smartphone", "2026", "método", "dinheiro online", "trabalho remoto"],
  authors: [{ name: "Renda Extra com Celular" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Renda Extra com Celular - Método Validado para 2026",
    description: "Comece do zero e ganhe R$ 2.000 a R$ 8.000 por mês usando apenas seu celular. Método comprovado com garantia de 7 dias.",
    url: "https://rendaextracomcelular.com",
    siteName: "Renda Extra com Celular",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Renda Extra com Celular - Método Validado para 2026",
    description: "Transforme seu smartphone em uma máquina de renda extra. Método passo a passo para iniciantes.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
