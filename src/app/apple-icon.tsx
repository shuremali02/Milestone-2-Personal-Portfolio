import { ImageResponse } from "next/og";

// iOS/iPadOS home-screen icon — same teal monogram badge as the favicon
// (see icon.tsx) and OG card (opengraph-image.tsx), just at touch-icon size.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
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
          color: "white",
          fontSize: 96,
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
