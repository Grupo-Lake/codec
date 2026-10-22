import Image from "next/image";
import { Container, Section } from "@/components/ui/primitives";

export function Solidarity() {
  return (
    <Section id="brinquedo" className="bg-brand-yellow text-brand-navy">
      <Container className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] items-center gap-[clamp(36px,5vw,64px)]">
        <div>
          <p className="mb-3 text-[17px] font-bold">Ação solidária</p>
          <h2 className="text-[clamp(34px,5.4vw,64px)] leading-[1.05] font-extrabold tracking-[-0.03em] text-balance">
            Sua entrada foi um brinquedo.
          </h2>
          <p className="mt-[22px] text-[clamp(17px,1.9vw,21px)] leading-[1.45] text-pretty">
            Cada participante trouxe um brinquedo novo ou usado em bom estado.
            Tudo o que foi arrecadado vai para crianças em situação de
            vulnerabilidade da região — no Dia das Crianças e no Natal.
          </p>
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
