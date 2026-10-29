import Link from "next/link";
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
            <Link href="/#fotos" className={link}>Como foi</Link>
            <Link href="/#programacao" className={link}>Programação</Link>
            <Link href="/#local" className={link}>Locais</Link>
          </div>
          <div className={col}>
            <span className={head}>Mais</span>
            <a href="/galeria" className={link}>Galeria</a>
            <Link href="/blog" className={link}>Blog</Link>
            <Link href="/#brinquedo" className={link}>Ação solidária</Link>
            <Link href="/#proxima-edicao" className={link}>Próxima edição</Link>
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
            <ExternalLink href="https://grupolake.com.br" className={link}>
              Grupo Lake
            </ExternalLink>
          </span>
        </div>
      </div>
    </footer>
  );
}
