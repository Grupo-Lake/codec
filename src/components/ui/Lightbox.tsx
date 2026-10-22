"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import type { GalleryPhoto } from "@/data/gallery";

type Props = {
  photos: GalleryPhoto[];
  index: number | null;
  onChange: (index: number | null) => void;
};

const nav =
  "absolute top-1/2 z-10 flex size-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border-0 bg-white/15 text-[26px] text-white hover:bg-white/30";

/** Visualizador em tela cheia sobre <dialog> nativo: Esc, foco preso e backdrop de graça. */
export function Lightbox({ photos, index, onChange }: Props) {
  const ref = useRef<HTMLDialogElement>(null);
  const open = index !== null;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (open && !el.open) el.showModal();
    if (!open && el.open) el.close();
  }, [open]);

  const go = (delta: number) => {
    if (index === null) return;
    onChange((index + delta + photos.length) % photos.length);
  };

  const current = index === null ? null : photos[index];

  return (
    <dialog
      ref={ref}
      aria-label="Visualizador de fotos"
      onClose={() => onChange(null)}
      onClick={(e) => e.target === e.currentTarget && onChange(null)}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") go(-1);
        if (e.key === "ArrowRight") go(1);
      }}
      className="m-0 h-dvh max-h-none w-screen max-w-none border-0 bg-transparent p-0 backdrop:bg-black/90"
    >
      {current && (
        <div className="relative h-full w-full">
          <button
            type="button"
            autoFocus
            aria-label="Fechar"
            onClick={() => onChange(null)}
            className="absolute top-4 right-4 z-10 flex size-11 cursor-pointer items-center justify-center rounded-full border-0 bg-white/15 text-xl text-white hover:bg-white/30"
          >
            ✕
          </button>
          <button
            type="button"
            aria-label="Foto anterior"
            onClick={() => go(-1)}
            className={`${nav} left-3`}
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Próxima foto"
            onClick={() => go(1)}
            className={`${nav} right-3`}
          >
            ›
          </button>
          <div className="absolute inset-x-0 top-14 bottom-14 mx-16 max-md:mx-3 max-md:mt-2">
            <Image
              key={current.src}
              src={current.src}
              alt={current.alt}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
          <p className="absolute inset-x-0 bottom-4 text-center text-sm text-white/80 tabular-nums">
            {index! + 1} / {photos.length}
          </p>
        </div>
      )}
    </dialog>
  );
}
