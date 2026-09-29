"use client";

import { useState } from "react";
import { faq } from "@/data/event";
import { Section } from "@/components/ui/primitives";

export function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <Section id="faq" className="bg-surface">
      <div className="mx-auto max-w-[780px] px-[22px]">
        <h2 className="mb-9 text-[clamp(34px,5.4vw,56px)] leading-[1.05] font-bold tracking-[-0.03em]">
          Dúvidas frequentes.
        </h2>
        <div className="flex flex-col border-t border-line">
          {faq.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className="border-b border-line">
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-${i}`}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="flex w-full cursor-pointer items-center justify-between gap-5 border-0 bg-transparent py-[22px] text-left text-ink"
                  >
                    <span className="text-[19px] font-semibold tracking-[-0.01em]">
                      {item.q}
                    </span>
                    <span
                      aria-hidden
                      className="w-6 flex-none text-center text-[26px] font-light text-muted"
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                </h3>
                <p
                  id={`faq-${i}`}
                  hidden={!isOpen}
                  className="pr-11 pb-6 text-[17px] leading-[1.5] text-muted text-pretty"
                >
                  {item.a}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
