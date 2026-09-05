import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Unc.Fund. Small checks. Big Unc energy.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
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
          background: "#F7F3EA",
          color: "#1E2430",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div style={{ display: "flex", fontSize: 128, fontWeight: 800, letterSpacing: -4, lineHeight: 1 }}>
          <span style={{ color: "#2F5D8A" }}>UNC</span>
          <span style={{ color: "#1E2430", fontWeight: 500 }}>.FUND</span>
        </div>
        <div style={{ fontSize: 44, fontWeight: 700, marginTop: 24 }}>Small checks. Big Unc energy.</div>
        <div style={{ fontSize: 26, color: "#4A5261", marginTop: 16 }}>
          First checks into blockchain, AI, software and robotics. $500 to $9,999. Decision in a week.
        </div>
        <div style={{ position: "absolute", right: 80, top: 90, width: 220, height: 220, borderRadius: 48, background: "#2F5D8A", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: 120, height: 150, borderRadius: 30, background: "#F7F3EA", display: "flex", justifyContent: "center" }}>
            <div style={{ width: 8, height: 90, marginTop: 50, background: "#2F5D8A", borderRadius: 4 }} />
          </div>
        </div>
        <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 56, background: "#2F5D8A" }} />
      </div>
    ),
    { ...size }
  );
}
