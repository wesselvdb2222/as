import { ImageResponse } from "next/og";

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
          alignItems: "center",
          justifyContent: "center",
          background: "#08080c",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -140,
            left: 300,
            width: 700,
            height: 700,
            borderRadius: "50%",
            background: "#9256ff",
            opacity: 0.35,
            filter: "blur(120px)",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
          }}
        >
          <div
            style={{
              display: "flex",
              height: 20,
              width: 20,
              borderRadius: "50%",
              background: "#9256ff",
            }}
          />
          <div
            style={{
              display: "flex",
              fontSize: 72,
              fontWeight: 700,
              color: "#f4f4f6",
              letterSpacing: -1.5,
            }}
          >
            AllSourced
          </div>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 32,
            color: "#9a9aa8",
          }}
        >
          We handle your backend.
        </div>
      </div>
    ),
    { ...size },
  );
}
