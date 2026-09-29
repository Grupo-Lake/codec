"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { speakers } from "@/data/people";
import { Eyebrow, SectionTitle } from "@/components/ui/primitives";

const GAP = 20;

export function Speakers() {
  const track = useRef<HTMLDivElement>(null);
  const [slide, setSlide] = useState(0);
  const [atEnd, setAtEnd] = useState(false);
  const last = speakers.length - 1;

  const step = () => {
    const card = track.current?.children[0];
    return card ? card.getBoundingClientRect().width + GAP : 0;
  };

  const goTo = (i: number) => {
    const el = track.current;
    if (!el) return;
    el.scrollTo({
      left: Math.max(0, Math.min(last, i)) * step(),
      behavior: "smooth",
    });
  };

  const onScroll = () => {
    const el = track.current;
    if (!el || !step()) return;
    const end = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
    setAtEnd(end);
    setSlide(end ? last : Math.round(el.scrollLeft / step()));
  };

  const arrow =
    "flex size-11 cursor-pointer items-center justify-center rounded-full border-0 text-[22px] text-white transition-colors motion-reduce:transition-none";

  return (
    <section
      id="palestrantes"
      className="bg-brand-navy py-[clamp(72px,10vw,130px)] text-surface"
    >
      <div className="mx-auto max-w-[1080px] px-[22px]">
        <Eyebrow className="text-brand-yellow">Quem já passou pelo CODEC</Eyebrow>
        <SectionTitle className="max-w-[760px]">
          Palestrantes da 1ª edição.
        </SectionTitle>
      </div>

      <div
        ref={track}
        onScroll={onScroll}
        tabIndex={0}
        aria-label="Palestrantes da 1ª edição"
        className="mt-[clamp(44px,6vw,64px)] flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-pl-[max(22px,calc((100%-1080px)/2))] px-[max(22px,calc((100%-1080px)/2))] pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {speakers.map((p) => (
          <article
            key={p.name}
            className="flex w-[min(82vw,380px)] flex-none snap-start flex-col overflow-hidden rounded-[22px] bg-navy-card"
          >
            <Image
              src={p.img}
              alt={p.name}
              width={380}
              height={285}
              sizes="(min-width: 464px) 380px, 82vw"
              className="aspect-[4/3] w-full bg-[#12405e] object-cover"
            />
            <div className="flex flex-col gap-2.5 px-[26px] pt-6 pb-7">
              <h3 className="text-[22px] leading-[1.15] font-bold tracking-[-0.02em] text-balance">
                {p.talk}
              </h3>
              <div className="mt-1.5 flex flex-col gap-[3px] border-t border-white/14 pt-3.5">
                <span className="text-base font-semibold">{p.name}</span>
                <span className="text-sm leading-[1.4] text-navy-muted">
                  {p.role}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mx-auto mt-6 flex max-w-[1080px] items-center justify-between gap-4 px-[22px]">
        <div className="flex gap-2">
          {speakers.map((p, i) => (
            <button
              key={p.name}
              type="button"
              aria-label={`Palestrante ${i + 1}`}
              aria-current={i === slide}
              onClick={() => goTo(i)}
              className={`h-2 cursor-pointer rounded-sm border-0 p-0 transition-[width,background-color] duration-300 motion-reduce:transition-none ${
                i === slide ? "w-6 bg-brand-yellow" : "w-2 bg-white/30"
              }`}
            />
          ))}
        </div>
        <div className="flex gap-3">
          <button
            type="button"
            aria-label="Anterior"
            disabled={slide === 0}
            onClick={() => goTo(slide - 1)}
            className={`${arrow} ${slide > 0 ? "bg-white/18" : "bg-white/6"}`}
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Próximo"
            disabled={atEnd}
            onClick={() => goTo(slide + 1)}
            className={`${arrow} ${atEnd ? "bg-white/6" : "bg-white/18"}`}
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
