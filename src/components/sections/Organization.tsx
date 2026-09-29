import Image from "next/image";
import { organizers } from "@/data/people";
import { OPAM_URL } from "@/lib/config";
import {
  Container,
  Eyebrow,
  ExternalLink,
  Section,
} from "@/components/ui/primitives";

export function Organization() {
  return (
    <Section id="organizadores" className="bg-white">
      <Container>
        <Eyebrow>Organização</Eyebrow>
        <h2 className="max-w-[760px] text-[clamp(30px,4.4vw,48px)] leading-[1.08] font-bold tracking-[-0.025em] text-balance">
          Feito por educadores que vivem o tatame.
        </h2>

        <div className="mt-12 grid grid-cols-[repeat(auto-fit,minmax(min(100%,340px),1fr))] gap-x-7 gap-y-9">
          {organizers.map((o) => (
            <div key={o.name} className="flex items-start gap-[18px]">
              <Image
                src={o.img}
                alt={o.name}
                width={88}
                height={88}
                className="size-[88px] flex-none rounded-full bg-surface object-cover"
              />
              <div className="flex flex-col gap-1">
                <span className="text-xs font-semibold tracking-[0.08em] text-muted uppercase">
                  {o.tag}
                </span>
                <span className="text-xl font-semibold tracking-[-0.01em]">
                  {o.name}
                </span>
                <span className="text-[15px] leading-[1.45] text-muted text-pretty">
                  {o.bio}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] overflow-hidden rounded-[28px] bg-brand-blue text-brand-navy">
          <div className="flex flex-col justify-center gap-[22px] p-[clamp(28px,4vw,48px)]">
            <Image
              src="/opam-logo.jpeg"
              alt="OPAM — Organização Paulista de Artes Marciais, Nin do Ryu"
              width={132}
              height={132}
              className="size-[132px] flex-none rounded-full bg-white object-contain p-1.5"
            />
            <div className="flex flex-col gap-1.5">
              <span className="text-sm font-semibold">Realização</span>
              <span className="text-[clamp(22px,2.6vw,28px)] font-bold tracking-[-0.015em] text-white">
                OPAM — Organização Paulista de Artes Marciais
              </span>
              <span className="text-base leading-[1.45] font-medium">
                Fundada em 2005 em Itaquera, antes Associação Karatê Nin do
                Ryu, sob a responsabilidade do Sensei Bruno Garcia.
              </span>
              <ExternalLink
                href={OPAM_URL}
                className="mt-2 text-base font-semibold text-white"
              >
                Conheça a OPAM ›
              </ExternalLink>
            </div>
          </div>
          <div className="relative min-h-[300px]">
            <Image
              src="/sobre/sobre.webp"
              alt="Sensei Bruno Garcia"
              fill
              sizes="(min-width: 1080px) 540px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
