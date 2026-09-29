import Image from "next/image";
import { steps } from "@/data/event";
import { Container, Section } from "@/components/ui/primitives";

export function Solidarity() {
  return (
    <Section id="brinquedo" className="bg-brand-yellow text-brand-navy">
      <Container className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] items-center gap-[clamp(36px,5vw,64px)]">
        <div>
          <p className="mb-3 text-[17px] font-bold">Ação solidária</p>
          <h2 className="text-[clamp(34px,5.4vw,64px)] leading-[1.05] font-extrabold tracking-[-0.03em] text-balance">
            Sua entrada é um brinquedo.
          </h2>
          <p className="mt-[22px] text-[clamp(17px,1.9vw,21px)] leading-[1.45] text-pretty">
            Traga um brinquedo novo ou usado em bom estado. Tudo o que for
            arrecadado vai para crianças em situação de vulnerabilidade da
            região — no Dia das Crianças e no Natal.
          </p>
          <ol className="mt-9 flex flex-col">
            {steps.map((s) => (
              <li
                key={s.n}
                className="grid grid-cols-[44px_1fr] gap-4 border-t border-brand-navy/20 py-[18px]"
              >
                <span
                  aria-hidden
                  className="flex size-8 items-center justify-center rounded-full bg-brand-navy text-sm font-bold text-brand-yellow"
                >
                  {s.n}
                </span>
                <div className="flex flex-col gap-[3px]">
                  <span className="text-[19px] font-bold tracking-[-0.01em]">
                    {s.t}
                  </span>
                  <span className="text-[15px]">{s.d}</span>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="relative aspect-square w-full max-w-[520px] justify-self-center">
          <Image
            src="/convites/convite-08-10.jpeg"
            alt="Convite da noite de 08/10"
            width={640}
            height={640}
            sizes="(min-width: 900px) 320px, 60vw"
            className="absolute top-0 right-0 h-auto w-[62%] rotate-[4deg] rounded-[14px] shadow-[0_20px_40px_rgba(0,38,59,.25)]"
          />
          <Image
            src="/convites/convite-05-10.jpeg"
            alt="Convite da noite de 05/10"
            width={640}
            height={640}
            sizes="(min-width: 900px) 320px, 60vw"
            className="absolute bottom-0 left-0 h-auto w-[62%] -rotate-[4deg] rounded-[14px] shadow-[0_20px_40px_rgba(0,38,59,.3)]"
          />
        </div>
      </Container>
    </Section>
  );
}
