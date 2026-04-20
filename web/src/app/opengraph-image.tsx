import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Web制作ポートフォリオ";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#fafafa",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 56,
            fontWeight: 700,
            letterSpacing: "-0.03em",
            color: "#111111",
          }}
        >
          Web制作ポートフォリオ
        </div>
        <div
          style={{
            marginTop: 16,
            fontSize: 22,
            color: "#525252",
          }}
        >
          ランディングページ · ブランドサイト
        </div>
      </div>
    ),
    { ...size }
  );
}
