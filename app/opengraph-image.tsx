import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "SlydeIn — Africa's biggest houseparty"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default function Image() {
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
          background: "#5E1850",
          color: "#F3EEE4",
          padding: "72px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: "0.32em",
            textTransform: "uppercase",
            opacity: 0.8,
            marginBottom: 34,
          }}
        >
          Africa&apos;s biggest houseparty
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 112,
            fontWeight: 800,
            letterSpacing: "0.12em",
            lineHeight: 1,
          }}
        >
          SLYDEIN
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 30,
            marginTop: 34,
            opacity: 0.9,
          }}
        >
          Parties · Nightlife · Events
        </div>
      </div>
    ),
    size,
  )
}
