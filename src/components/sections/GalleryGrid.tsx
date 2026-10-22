"use client";

import Image from "next/image";
import { useState } from "react";
import { photos } from "@/data/gallery";
import { Lightbox } from "@/components/ui/Lightbox";

export function GalleryGrid() {
  const [index, setIndex] = useState<number | null>(null);

  return (
    <>
      <ul className="columns-2 gap-3 md:columns-3">
        {photos.map((p, i) => (
          <li key={p.src} className="mb-3 break-inside-avoid">
            <button
              type="button"
              aria-label={`Ampliar foto: ${p.alt}`}
              onClick={() => setIndex(i)}
              className="block w-full cursor-zoom-in overflow-hidden rounded-[18px] border-0 bg-line-soft p-0"
            >
              <Image
                src={p.src}
                alt={p.alt}
                width={p.width}
                height={p.height}
                sizes="(min-width: 1080px) 345px, (min-width: 768px) 33vw, 50vw"
                className="block h-auto w-full"
              />
            </button>
          </li>
        ))}
      </ul>
      <Lightbox photos={photos} index={index} onChange={setIndex} />
    </>
  );
}
