"use client";

import { useEffect, useState } from "react";
import { NIGHT_1_START, NIGHT_2_START } from "@/lib/config";

const N1 = Date.parse(NIGHT_1_START);
const N2 = Date.parse(NIGHT_2_START);
const pad = (n: number) => String(Math.floor(n)).padStart(2, "0");

function compute(now: number) {
  const target = now < N1 ? N1 : N2;
  const label =
    now < N1
      ? "até a 1ª noite · 05/10, CEU Quinta do Sol"
      : now < N2
        ? "até a 2ª noite · 08/10, Etec Itaquera II"
        : "Obrigado a todos que participaram";
  const d = Math.max(0, target - now) / 1000;
  return {
    label,
    items: [
      { v: pad(d / 86400), l: "dias" },
      { v: pad((d % 86400) / 3600), l: "horas" },
      { v: pad((d % 3600) / 60), l: "min" },
      { v: pad(d % 60), l: "seg" },
    ],
  };
}

export function Countdown() {
  // null no servidor e na 1ª renderização: evita mismatch de hidratação
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const c = now === null ? null : compute(now);
  const items = c?.items ?? ["dias", "horas", "min", "seg"].map((l) => ({ v: "--", l }));

  return (
    <div className="mx-auto mt-12 flex flex-col items-center gap-3.5">
      <div
        role="timer"
        aria-label="Contagem regressiva para o evento"
        className="flex justify-center gap-[clamp(18px,4vw,48px)]"
      >
        {items.map((i) => (
          <div key={i.l} className="flex min-w-14 flex-col items-center gap-1">
            <span className="text-[clamp(34px,5vw,56px)] font-bold tracking-[-0.03em] tabular-nums">
              {i.v}
            </span>
            <span className="text-xs font-semibold tracking-[0.08em] text-brand-navy uppercase">
              {i.l}
            </span>
          </div>
        ))}
      </div>
      <span className="min-h-5 text-[13px] text-brand-navy">{c?.label}</span>
    </div>
  );
}
