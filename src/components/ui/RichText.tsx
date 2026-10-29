import type { ReactNode } from "react";
import { ExternalLink } from "@/components/ui/primitives";

const LINK = /\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g;

/** Renderiza `[texto](https://url)` dentro de uma string como link externo. */
export function RichText({
  text,
  linkClassName,
}: {
  text: string;
  linkClassName: string;
}) {
  const parts: ReactNode[] = [];
  let last = 0;
  for (const m of text.matchAll(LINK)) {
    const start = m.index ?? 0;
    if (start > last) parts.push(text.slice(last, start));
    parts.push(
      <ExternalLink key={start} href={m[2]} className={linkClassName}>
        {m[1]}
      </ExternalLink>,
    );
    last = start + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return <>{parts}</>;
}
