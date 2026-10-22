import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GalleryGrid } from "@/components/sections/GalleryGrid";
import { VIDEO_SRC } from "@/data/gallery";
import {
  Container,
  Eyebrow,
  Section,
  SectionTitle,
} from "@/components/ui/primitives";

const title = "Galeria do 2º CODEC 2026 – fotos e vídeo";
const description =
  "Fotos e vídeo do 2º CODEC, realizado em 05 e 08 de outubro de 2026, em Itaquera, São Paulo.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/galeria" },
  openGraph: { title, description, type: "website", locale: "pt_BR", siteName: "2º CODEC" },
  twitter: { card: "summary_large_image", title, description },
};

export default function GaleriaPage() {
  return (
    <>
      <a href="#top" className="skip-link">
        Pular para o conteúdo
      </a>
      <Header />
      <main>
        <Section id="top" className="bg-white">
          <Container>
            <Eyebrow>Galeria</Eyebrow>
            <SectionTitle className="max-w-[760px]">
              O 2º CODEC, noite a noite.
            </SectionTitle>
            <p className="mt-6 max-w-[620px] text-[clamp(17px,1.9vw,21px)] leading-[1.45] text-muted text-pretty">
              Registros das duas noites de palestras, entregas de troféus e
              reencontros. Clique em uma foto para ampliar.
            </p>

            <video
              controls
              playsInline
              preload="metadata"
              aria-label="Vídeo do 2º CODEC"
              className="mt-[clamp(32px,4vw,48px)] mb-3 max-h-[75vh] w-full rounded-[22px] bg-black"
            >
              <source src={VIDEO_SRC} type="video/mp4" />
            </video>

            <div className="mt-3">
              <GalleryGrid />
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
