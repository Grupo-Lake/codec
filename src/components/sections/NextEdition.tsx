import { WHATSAPP_URL } from "@/lib/config";
import { PillLink } from "@/components/ui/primitives";

export function NextEdition() {
  return (
    <section
      id="proxima-edicao"
      className="bg-brand-blue px-[22px] py-[clamp(80px,11vw,150px)] text-center text-white"
    >
      <div className="mx-auto max-w-[880px]">
        <h2 className="text-[clamp(40px,7vw,80px)] leading-[1.02] font-extrabold tracking-[-0.035em] text-balance">
          Obrigado por fazer parte.
        </h2>
        <p className="mx-auto mt-5 max-w-[560px] text-[clamp(17px,2vw,21px)] leading-[1.4] font-medium text-brand-navy">
          Quer acompanhar a próxima edição, participar ou apoiar? Fale com a
          organização.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-7">
          <PillLink
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
          >
            Falar no WhatsApp
          </PillLink>
          <a href="/galeria" className="text-[17px] font-medium text-white">
            Rever as fotos ›
          </a>
        </div>
      </div>
    </section>
  );
}
