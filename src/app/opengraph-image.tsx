import { ImageResponse } from "next/og";
import { SITE_NAME } from "@/lib/site";

// Shared social preview for every page (link shares on WhatsApp, LinkedIn, X, ...).
export const alt = `${SITE_NAME}: agency ad accounts and Facebook structures for advertisers`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(160deg, #000000 0%, #0b0716 55%, #160c33 100%)",
          color: "#ffffff",
        }}
      >
        <div style={{ fontSize: 36, fontWeight: 600, color: "#9b82ff" }}>{SITE_NAME}</div>
        <div style={{ marginTop: 28, fontSize: 72, fontWeight: 700, lineHeight: 1.1, letterSpacing: -2 }}>
          Restricted assets?
        </div>
        <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.1, letterSpacing: -2, color: "rgba(255,255,255,0.55)" }}>
          We keep your business running.
        </div>
        <div style={{ marginTop: 40, fontSize: 30, color: "rgba(255,255,255,0.6)" }}>
          Agency ad accounts · Business Managers · Facebook structures
        </div>
      </div>
    ),
    size
  );
}
