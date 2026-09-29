import { values } from "@/data/event";
import { Container, Section } from "@/components/ui/primitives";

const label = "mb-2.5 text-[17px] font-semibold text-brand-yellow";

export function MissionVision() {
  return (
    <Section className="bg-brand-navy text-surface">
      <Container className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] gap-[clamp(40px,6vw,80px)]">
        <div className="flex flex-col gap-10">
          <div>
            <h2 className={label}>Missão</h2>
            <p className="text-[clamp(24px,3vw,34px)] leading-[1.2] font-semibold tracking-[-0.02em] text-pretty">
              Artes marciais verdadeiramente acessíveis a todos — o esporte
              como ferramenta de inclusão e transformação social.
            </p>
          </div>
          <div>
            <h2 className={label}>Visão</h2>
            <p className="text-[19px] leading-[1.45] text-navy-muted text-pretty">
              Ser referência na promoção da inclusão e do protagonismo por meio
              das artes marciais, integrando esporte, cultura, acessibilidade e
              empoderamento.
            </p>
          </div>
        </div>
        <div>
          <h2 className={`${label} !mb-[18px]`}>Valores</h2>
          <ul className="flex flex-col">
            {values.map((v) => (
              <li
                key={v}
                className="py-1 text-[clamp(28px,3.6vw,44px)] leading-[1.18] font-bold tracking-[-0.025em]"
              >
                {v}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
