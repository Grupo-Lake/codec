import type { Metadata, Viewport } from "next";
import "./globals.css";
import { EVENT_FULL_NAME, SITE_URL } from "@/lib/config";

const title = `2º CODEC 2026 – ${EVENT_FULL_NAME}`;
const description =
  "Cidadania, inclusão e acessibilidade. Duas noites de palestras, 05 e 08 de outubro de 2026, em Itaquera, São Paulo. Inscrição gratuita: seu ingresso é um brinquedo.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  keywords: [
    "CODEC",
    "artes marciais",
    "esportes de contato",
    "congresso",
    "inclusão",
    "acessibilidade",
    "Itaquera",
    "OPAM",
    "Etec",
  ],
  authors: [{ name: "OPAM - Organização Paulista de Artes Marciais" }],
  creator: "OPAM - Nin do Ryu",
  alternates: { canonical: "/" },
  icons: { icon: "/logo.svg", apple: "/logo.svg" },
  openGraph: {
    title,
    description,
    type: "website",
    locale: "pt_BR",
    siteName: "2º CODEC",
  },
  twitter: { card: "summary_large_image", title, description },
};

export const viewport: Viewport = {
  themeColor: "#3499d1",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className="font-sans">{children}</body>
    </html>
  );
}
