import { ImageResponse } from "next/og";

// Branded Open Graph card generated at request time — shown when the site is
// shared on LinkedIn, WhatsApp, X, etc. Replaces the plain headshot with a
// designed card in the portfolio's teal brand.
export const runtime = "edge";
export const alt = "Syed Shurem Ali — AI Engineer & Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  const teal = "#2DD4BF";
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0A0F1A",
          padding: "72px 80px",
          position: "relative",
        }}
      >
        {/* teal glow accent */}
        <div
          style={{
            position: "absolute",
            top: -170,
            right: -130,
            width: 540,
            height: 540,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0,163,140,0.45), rgba(10,15,26,0) 70%)",
            display: "flex",
          }}
        />

        {/* top: monogram badge + eyebrow */}
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 66,
              height: 66,
              borderRadius: 18,
              background: "linear-gradient(135deg, #00A38C, #14B8A6)",
              color: "white",
              fontSize: 34,
              fontWeight: 700,
            }}
          >
            S
          </div>
          <div style={{ display: "flex", color: "#7DD3C8", fontSize: 26, letterSpacing: 8 }}>
            PORTFOLIO
          </div>
        </div>

        {/* middle: name + role */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", color: "white", fontSize: 90, fontWeight: 800, lineHeight: 1.05 }}>
            Syed Shurem Ali
          </div>
          <div style={{ display: "flex", color: teal, fontSize: 46, marginTop: 16 }}>
            {"AI Engineer & Full-Stack Developer"}
          </div>
        </div>

        {/* bottom: accent bar + stack */}
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div style={{ display: "flex", width: 128, height: 6, background: teal, borderRadius: 4 }} />
          <div style={{ display: "flex", color: "#93A4B8", fontSize: 27 }}>
            {"LLMs · Agentic AI · Next.js · TypeScript · Flutter · MySQL"}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
