import Image from "next/image";
import { highlights, photos } from "@/data/gallery";
import {
  Container,
  Eyebrow,
  PillLink,
  Section,
  SectionTitle,
} from "@/components/ui/primitives";

export function Gallery() {
  return (
    <Section id="fotos" className="bg-white">
      <Container>
        <Eyebrow>Como foi</Eyebrow>
        <SectionTitle className="max-w-[760px]">
          O 2º CODEC em fotos.
        </SectionTitle>

        <div className="mt-[clamp(40px,5vw,56px)] grid grid-cols-2 gap-3 md:grid-cols-3">
          {highlights.map((idx, i) => {
            const p = photos[idx];
            return (
              <div
                key={p.src}
                className={`relative overflow-hidden rounded-[22px] bg-line-soft ${
                  i === 0
                    ? "col-span-2 aspect-[16/10] md:row-span-2 md:aspect-auto"
                    : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes={
                    i === 0
                      ? "(min-width: 1080px) 700px, 100vw"
                      : "(min-width: 1080px) 345px, 50vw"
                  }
                  className="object-cover"
                />
              </div>
            );
          })}
        </div>

        <div className="mt-9">
          <PillLink href="/galeria" size="lg">
            Ver galeria completa
          </PillLink>
        </div>
      </Container>
    </Section>
  );
}
