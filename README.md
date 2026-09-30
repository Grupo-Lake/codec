# 2º CODEC 2026 – Landing Page

Site oficial do **2º CODEC** (Congresso de Desenvolvimento nos Esportes de Contato), realizado pela OPAM – Organização Paulista de Artes Marciais em parceria com a Etec.

- **Datas:** 05/10/2026 (CEU Quinta do Sol) e 08/10/2026 (Etec Itaquera II), das 18h30 às 21h
- **Ingresso:** gratuito, com a doação de um brinquedo
- **Inscrição:** https://www.even3.com.br/2-congresso-codec-congresso-de-desenvolvimento-nos-esportes-de-contato-791146/

## Stack

Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS v4

## Estrutura

```
src/app/                 layout, página, sitemap, robots, imagem OG
src/components/layout/   Header (client) e Footer
src/components/sections/ uma seção da página por arquivo
src/components/ui/       Container, Section, Eyebrow, SectionTitle, PillLink
src/data/                conteúdo (datas, palestrantes, apoiadores, FAQ...)
src/lib/config.ts        links, contatos e datas do evento
```

Para atualizar textos, palestrantes ou apoiadores, edite `src/data/*` sem mexer nos componentes. As cores e a fonte ficam no bloco `@theme` de `src/app/globals.css`.

## Como executar

Requer Node.js 18.18+ (recomendado 22).

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
npm run lint
```

Defina `NEXT_PUBLIC_SITE_URL` para o domínio final (usado em metadados, sitemap e JSON-LD).
