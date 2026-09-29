import { schedule } from "@/data/event";
import { Container, Eyebrow, Section } from "@/components/ui/primitives";

export function Schedule() {
  return (
    <Section id="programacao" className="bg-white">
      <Container className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] gap-[clamp(36px,5vw,64px)]">
        <div>
          <Eyebrow>Programação</Eyebrow>
          <h2 className="text-[clamp(34px,5.4vw,64px)] leading-[1.05] font-bold tracking-[-0.03em]">
            <span className="block">Das 18h30</span>
            <span className="block">às 21h.</span>
          </h2>
          <p className="mt-[22px] max-w-[420px] text-[17px] leading-[1.45] text-muted">
            A mesma estrutura nas duas noites. Palestras sobre pesquisa,
            inclusão, esporte e responsabilidade social.
          </p>
          <p className="mt-[18px] text-[15px] text-muted">
            Palestrantes de 2026 em breve.
          </p>
        </div>
        <ol className="flex flex-col gap-3">
          {schedule.map((s) => (
            <li
              key={s.time}
              className="grid grid-cols-[84px_1fr] items-baseline gap-[18px] rounded-[18px] bg-surface px-[26px] py-[22px]"
            >
              <span className="text-[21px] font-bold tracking-[-0.01em] tabular-nums">
                {s.time}
              </span>
              <div className="flex flex-col gap-[3px]">
                <span className="text-[17px] font-semibold">{s.t}</span>
                <span className="text-[15px] text-muted">{s.d}</span>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
