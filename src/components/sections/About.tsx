import Image from "next/image";
import { objectives } from "@/data/event";
import {
  Container,
  Eyebrow,
  Section,
  SectionTitle,
} from "@/components/ui/primitives";

const photos = [
  { src: "/lp/foto-hero.webp", alt: "Turma de karatê em treino" },
  { src: "/lp/foto-classes.webp", alt: "Sensei e aluno em kihon" },
  { src: "/lp/foto-sobre.webp", alt: "Aluna em treino" },
];

export function About() {
  return (
    <Section id="sobre" className="bg-surface">
      <Container>
        <Eyebrow>Sobre o CODEC</Eyebrow>
        <SectionTitle className="max-w-[860px]">
          Pelo segundo ano, o tatame vira sala de aula.
        </SectionTitle>
        <p className="mt-6 max-w-[700px] text-[clamp(17px,1.9vw,21px)] leading-[1.45] text-muted text-pretty">
          O CODEC nasceu para promover inclusão, esporte e responsabilidade
          social. Profissionais e especialistas apresentam suas pesquisas e
          experiências — e, nesta edição, em parceria com a Etec, os estudantes
          participam da construção do evento.
        </p>

        <div className="mt-[clamp(40px,5vw,56px)] grid min-h-[220px] grid-cols-[2fr_1fr_1fr] gap-3 aspect-[3/1]">
          {photos.map((p) => (
            <div key={p.src} className="relative overflow-hidden rounded-[22px]">
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(min-width: 1080px) 540px, 50vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs text-muted">Treinos da OPAM · Nin do Ryu.</p>

        <div className="mt-[clamp(40px,5vw,56px)] grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-5">
          {objectives.map((o) => (
            <div
              key={o.n}
              className="flex min-h-[220px] flex-col gap-3 rounded-[22px] bg-white px-[30px] py-[34px]"
            >
              <span className="text-[13px] font-semibold text-muted tabular-nums">
                {o.n}
              </span>
              <h3 className="mt-auto text-[26px] leading-[1.12] font-bold tracking-[-0.02em]">
                {o.t}
              </h3>
              <p className="text-base leading-[1.45] text-muted text-pretty">
                {o.d}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
