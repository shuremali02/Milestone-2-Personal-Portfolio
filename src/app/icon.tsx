import { ImageResponse } from "next/og";

// Browser tab favicon — same teal monogram badge as the OG card
// (see opengraph-image.tsx), replacing the default Next.js/Vercel icon.
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #00A38C, #14B8A6)",
          borderRadius: 7,
          color: "white",
          fontSize: 20,
          fontWeight: 700,
          fontFamily: "Arial, sans-serif",
        }}
      >
        S
      </div>
    ),
    { ...size }
  );
}
