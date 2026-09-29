import { EVENT_FULL_NAME, WHATSAPP_LABEL, WHATSAPP_URL } from "@/lib/config";
import { ExternalLink } from "@/components/ui/primitives";

const col = "flex flex-col gap-2";
const head = "font-semibold text-ink";
const link = "text-ink-soft hover:underline";

export function Footer() {
  return (
    <footer
      id="contato"
      className="bg-surface text-xs leading-normal text-muted"
    >
      <div className="mx-auto max-w-[1080px] px-[22px] pt-10 pb-7">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-7 border-b border-line pb-7">
          <div className={col}>
            <span className={head}>2º CODEC · 2026</span>
            <span>{EVENT_FULL_NAME}</span>
          </div>
          <div className={col}>
            <span className={head}>Evento</span>
            <a href="#datas" className={link}>Datas</a>
            <a href="#programacao" className={link}>Programação</a>
            <a href="#local" className={link}>Locais</a>
          </div>
          <div className={col}>
            <span className={head}>Participar</span>
            <a href="#inscricao" className={link}>Inscrição</a>
            <a href="#brinquedo" className={link}>Ação solidária</a>
            <a href="#faq" className={link}>Dúvidas</a>
          </div>
          <div className={col}>
            <span className={head}>Contato</span>
            <span>Sensei Bruno Garcia</span>
            <ExternalLink href={WHATSAPP_URL} className={link}>
              WhatsApp {WHATSAPP_LABEL}
            </ExternalLink>
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-4 pt-[18px]">
          <span>
            © 2026 CODEC. Realização OPAM — Organização Paulista de Artes
            Marciais · Nin do Ryu. Em parceria com a Etec.
          </span>
          <span>
            Powered by{" "}
            <ExternalLink href="https://hastydev.com.br" className={link}>
              HASTYDEV
            </ExternalLink>
          </span>
        </div>
      </div>
    </footer>
  );
}
