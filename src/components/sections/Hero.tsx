import Image from "next/image";
import { Countdown } from "@/components/Countdown";
import { PillLink } from "@/components/ui/primitives";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-brand-navy px-[22px] pt-[clamp(56px,9vw,104px)] text-center text-white"
    >
      {/* Foto de treino em P&B sob uma camada marinho: fundo sóbrio, sem azul vivo */}
      <Image
        src="/lp/foto-hero.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-[center_35%]"
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-brand-navy/80" />

      <p className="mb-4 inline-flex items-center gap-2.5 text-[clamp(14px,1.5vw,17px)] font-semibold text-white">
        <span className="rounded-md bg-brand-yellow px-2.5 py-1 text-brand-navy">
          2ª edição
        </span>
        05 e 08 de outubro de 2026 · Itaquera, SP
      </p>
      <h1 className="mx-auto max-w-[1000px] text-[clamp(42px,8vw,96px)] leading-[1.02] font-extrabold tracking-[-0.035em] text-balance">
        <span className="block">Cidadania.</span>
        <span className="block">Inclusão.</span>
        <span className="block">Acessibilidade.</span>
      </h1>
      <p className="mx-auto mt-6 max-w-[660px] text-[clamp(18px,2.1vw,24px)] leading-[1.35] font-medium tracking-[-0.01em] text-white/85 text-pretty">
        Congresso de Desenvolvimento nos Esportes de Contato. Duas noites de
        palestras, em duas unidades da Etec — e seu ingresso é um brinquedo.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-7">
        <PillLink href="#inscricao">Inscreva-se grátis</PillLink>
        <a href="#datas" className="text-[17px] font-medium text-white">
          Ver os dois dias ›
        </a>
      </div>

      <Countdown />

      <div className="mx-auto mt-[clamp(40px,6vw,64px)] max-w-[1180px] overflow-hidden rounded-t-[28px] bg-navy-card">
        <Image
          src="/bg-codec.webp"
          alt="Luta de karatê em tatame azul e vermelho"
          width={1180}
          height={516}
          sizes="(min-width: 1220px) 1180px, 100vw"
          className="block aspect-[16/7] w-full object-cover object-[center_40%]"
        />
      </div>
    </section>
  );
}
