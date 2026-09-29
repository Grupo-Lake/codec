import { days } from "@/data/event";
import {
  Container,
  Eyebrow,
  ExternalLink,
  Section,
  SectionTitle,
} from "@/components/ui/primitives";

export function Days() {
  return (
    <Section id="datas" className="!py-[clamp(64px,8vw,110px)] bg-white">
      <Container>
        <Eyebrow>Duas noites, dois endereços</Eyebrow>
        <SectionTitle className="max-w-[760px]">
          Escolha a sua noite. Ou venha nas duas.
        </SectionTitle>
        <div className="mt-[clamp(40px,5vw,56px)] grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] gap-5">
          {days.map((d) => (
            <article
              key={d.short}
              className="flex flex-col gap-[22px] rounded-[28px] bg-surface p-[clamp(28px,4vw,44px)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex flex-col gap-0.5">
                  <span className="text-[13px] font-semibold tracking-[0.08em] text-link uppercase">
                    {d.tag}
                  </span>
                  <span className="text-[clamp(56px,7vw,84px)] leading-none font-extrabold tracking-[-0.04em]">
                    {d.day}
                  </span>
                  <span className="text-[19px] font-semibold text-muted">
                    {d.month}
                  </span>
                </div>
                <span className="rounded-[10px] bg-brand-yellow px-3.5 py-2 text-[15px] font-bold whitespace-nowrap text-brand-navy">
                  {d.time}
                </span>
              </div>
              <div className="flex flex-col gap-1 border-t border-line pt-5">
                <span className="text-[22px] font-bold tracking-[-0.015em]">
                  {d.place}
                </span>
                <span className="text-[15px]">{d.room}</span>
                <span className="text-[15px] leading-[1.45] text-muted">
                  {d.addr}
                </span>
              </div>
              <div className="flex flex-wrap gap-[22px] text-base">
                <ExternalLink href={d.map} className="text-link">
                  Como chegar ›
                </ExternalLink>
                <ExternalLink href={d.flyer} className="text-link">
                  Baixar convite ›
                </ExternalLink>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
