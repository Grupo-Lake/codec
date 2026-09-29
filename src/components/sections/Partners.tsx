import Image from "next/image";
import { partners, perks } from "@/data/event";
import { supporters } from "@/data/supporters";
import { WHATSAPP_LABEL, WHATSAPP_URL } from "@/lib/config";
import {
  Container,
  Eyebrow,
  PillLink,
  Section,
} from "@/components/ui/primitives";

export function Partners() {
  return (
    <Section id="apoiadores" className="bg-white">
      <Container>
        <Eyebrow>Parceiros</Eyebrow>
        <h2 className="max-w-[760px] text-[clamp(30px,4.4vw,48px)] leading-[1.08] font-bold tracking-[-0.025em] text-balance">
          Quem acredita no esporte como transformação.
        </h2>

        <div className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] gap-5">
          {partners.map((p) => (
            <div
              key={p.t}
              className="flex flex-col gap-1.5 rounded-[22px] bg-surface p-7"
            >
              <span className="text-[19px] font-bold tracking-[-0.01em]">
                {p.t}
              </span>
              <span className="text-[15px] text-muted">{p.d}</span>
            </div>
          ))}
        </div>

        <h3 className="mt-12 mb-4 text-sm font-semibold text-muted">
          Apoiadores culturais da 1ª edição
        </h3>
        <ul className="grid grid-cols-[repeat(auto-fill,minmax(140px,1fr))] overflow-hidden rounded-[22px] border border-line-soft bg-white">
          {supporters.map((s) => (
            <li
              key={s.name}
              className="flex aspect-[3/2] flex-col items-center justify-center gap-2 bg-white p-3.5 shadow-[inset_-1px_-1px_0_var(--color-line-soft)]"
            >
              <Image
                src={s.img}
                alt=""
                width={60}
                height={48}
                className="max-h-12 max-w-[60px] object-contain opacity-85 grayscale"
              />
              <span className="text-center text-[11px] leading-[1.3] text-muted">
                {s.name}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-7 grid grid-cols-[repeat(auto-fit,minmax(min(100%,340px),1fr))] items-center gap-9 rounded-[28px] bg-brand-navy p-[clamp(36px,5vw,60px)] text-surface">
          <div>
            <h3 className="text-[clamp(28px,3.6vw,40px)] leading-[1.08] font-bold tracking-[-0.025em]">
              Seja um apoiador.
            </h3>
            <p className="mt-3.5 mb-6 text-[17px] leading-[1.45] text-navy-muted text-pretty">
              Associe sua marca à educação, à inclusão e à formação de cidadãos
              pelo esporte. Fale direto com o Sensei Bruno.
            </p>
            <PillLink
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="!px-6 !py-3"
            >
              WhatsApp {WHATSAPP_LABEL}
            </PillLink>
          </div>
          <ul className="flex flex-col">
            {perks.map((k) => (
              <li
                key={k.t}
                className="flex flex-col gap-[3px] border-t border-white/14 py-4"
              >
                <span className="text-[19px] font-semibold">{k.t}</span>
                <span className="text-[15px] text-navy-muted">{k.d}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
