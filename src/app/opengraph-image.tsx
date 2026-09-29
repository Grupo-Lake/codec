import { ImageResponse } from "next/og";

export const alt = "2º CODEC 2026 — 05 e 08 de outubro, Itaquera, SP";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#3499d1",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignSelf: "flex-start",
            background: "#fed034",
            color: "#00263b",
            fontSize: 30,
            fontWeight: 700,
            padding: "8px 20px",
            borderRadius: 12,
          }}
        >
          2ª edição · 05 e 08 de outubro de 2026
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 32,
            fontSize: 132,
            fontWeight: 800,
            letterSpacing: -4,
            lineHeight: 1,
          }}
        >
          2º CODEC
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 24,
            fontSize: 40,
            color: "#00263b",
            fontWeight: 600,
          }}
        >
          Congresso de Desenvolvimento nos Esportes de Contato
        </div>
        <div style={{ display: "flex", marginTop: 12, fontSize: 32, color: "#00263b" }}>
          Seu ingresso é um brinquedo · Itaquera, SP
        </div>
      </div>
    ),
    size,
  );
}
