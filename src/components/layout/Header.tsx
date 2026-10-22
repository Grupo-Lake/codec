"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { PillLink } from "@/components/ui/primitives";

const links = [
  { href: "/#fotos", label: "Fotos" },
  { href: "/#sobre", label: "Sobre" },
  { href: "/#programacao", label: "Programação" },
  { href: "/#brinquedo", label: "Ação solidária" },
  { href: "/#organizadores", label: "Organização" },
  { href: "/#local", label: "Locais" },
  { href: "/#apoiadores", label: "Parceiros" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/8 bg-page/80 backdrop-blur-xl backdrop-saturate-[180%]">
      <div className="mx-auto flex h-[52px] max-w-[1080px] items-center justify-between gap-6 px-[22px]">
        <Link
          href="/#top"
          className="flex items-center gap-2.5 text-ink no-underline"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/logo.svg"
            alt=""
            width={34}
            height={34}
            className="h-[34px] w-auto"
            priority
          />
          <span className="text-[19px] font-semibold tracking-[-0.01em]">
            2º CODEC
          </span>
        </Link>

        <nav
          aria-label="Principal"
          className="hidden items-center gap-6 text-xs min-[900px]:flex"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-ink-soft hover:underline"
            >
              {l.label}
            </a>
          ))}
          <PillLink href="/galeria" size="sm">
            Galeria
          </PillLink>
        </nav>

        <div className="flex items-center gap-2.5 min-[900px]:hidden">
          <PillLink
            href="/galeria"
            className="!px-3.5 !py-1.5 !text-[13px] !font-semibold"
          >
            Galeria
          </PillLink>
          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls="menu-mobile"
            onClick={() => setOpen((v) => !v)}
            className="size-11 cursor-pointer border-0 bg-transparent text-[22px] text-ink"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="menu-mobile"
          aria-label="Menu mobile"
          onClick={() => setOpen(false)}
          className="flex flex-col bg-page px-[22px] pt-2 pb-6 text-2xl font-semibold tracking-[-0.01em] min-[900px]:hidden"
        >
          {links.map((l) => (
            <a key={l.href} href={l.href} className="py-2.5 text-ink no-underline">
              {l.label}
            </a>
          ))}
          <a href="/galeria" className="py-2.5 text-link no-underline">
            Galeria ›
          </a>
        </nav>
      )}
    </header>
  );
}
