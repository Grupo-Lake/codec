import { audience } from "@/data/event";
import { REGISTRATION_URL, WHATSAPP_URL } from "@/lib/config";
import { ExternalLink, PillLink } from "@/components/ui/primitives";

export function Register() {
  return (
    <section
      id="inscricao"
      className="bg-brand-blue px-[22px] py-[clamp(80px,11vw,150px)] text-center text-white"
    >
      <div className="mx-auto max-w-[880px]">
        <h2 className="text-[clamp(40px,7vw,80px)] leading-[1.02] font-extrabold tracking-[-0.035em] text-balance">
          Garanta sua vaga.
        </h2>
        <p className="mx-auto mt-5 max-w-[560px] text-[clamp(17px,2vw,21px)] leading-[1.4] font-medium text-brand-navy">
          Inscrição gratuita. No dia, traga um brinquedo.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-7">
          <PillLink
            href={REGISTRATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
          >
            Inscrever-se
          </PillLink>
          <ExternalLink
            href={WHATSAPP_URL}
            className="text-[17px] font-medium text-white"
          >
            Tirar dúvidas no WhatsApp ›
          </ExternalLink>
        </div>
        <h3 className="mt-12 mb-3.5 text-sm font-semibold text-brand-navy">
          Aberto à comunidade
        </h3>
        <ul className="mx-auto flex max-w-[760px] flex-wrap justify-center gap-2">
          {audience.map((a) => (
            <li
              key={a}
              className="rounded-full bg-white/90 px-3.5 py-2 text-sm font-medium text-brand-navy"
            >
              {a}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
