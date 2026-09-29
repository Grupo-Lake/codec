import { days } from "@/data/event";
import {
  Container,
  Eyebrow,
  Section,
  SectionTitle,
} from "@/components/ui/primitives";

export function Locations() {
  return (
    <Section id="local" className="bg-surface">
      <Container>
        <Eyebrow>Locais</Eyebrow>
        <SectionTitle>Dois endereços na Zona Leste.</SectionTitle>
        <div className="mt-11 grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] gap-5">
          {days.map((d) => (
            <div
              key={d.short}
              className="flex flex-col overflow-hidden rounded-[22px] bg-white"
            >
              <iframe
                title={`Mapa: ${d.place}`}
                src={d.embed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block aspect-[16/10] w-full border-0 bg-line-soft grayscale-[.5]"
              />
              <div className="flex flex-col gap-[5px] px-[26px] pt-6 pb-7">
                <span className="text-xs font-semibold tracking-[0.08em] text-link uppercase">
                  {d.tag} · {d.short}
                </span>
                <span className="text-xl font-bold tracking-[-0.01em]">
                  {d.place}
                </span>
                <span className="text-[15px] leading-[1.45] text-muted">
                  {d.addr}
                </span>
                <span className="mt-1.5 text-[15px] leading-[1.45]">
                  {d.tip}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
