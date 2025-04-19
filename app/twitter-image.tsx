import { ImageResponse } from "next/og"

export const runtime = "edge"

export const alt = "PromptCraft RH - L'IA au service de la transformation RH"
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 48,
        background: "linear-gradient(to right, #3b82f6, #4f46e5)",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px",
        color: "white",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "20px",
          fontSize: "32px",
          fontWeight: "bold",
        }}
      >
        <span style={{ color: "#3b82f6" }}>RH</span>
        <span style={{ color: "#1e3a8a" }}>.PROMPT</span>
        <span style={{ color: "#6b7280" }}>101.FR</span>
      </div>
      <h1
        style={{
          fontSize: "64px",
          fontWeight: "bold",
          textAlign: "center",
          margin: "0 0 20px 0",
          lineHeight: "1.2",
        }}
      >
        L'IA au service de la transformation RH
      </h1>
      <p
        style={{
          fontSize: "24px",
          textAlign: "center",
          maxWidth: "800px",
          margin: "0 0 40px 0",
          lineHeight: "1.4",
        }}
      >
        La plateforme de référence pour transformer votre fonction RH grâce aux prompts d'IA générative méthodiquement
        optimisés
      </p>
      <div
        style={{
          display: "flex",
          gap: "20px",
          fontSize: "20px",
        }}
      >
        <div
          style={{
            background: "rgba(255, 255, 255, 0.2)",
            padding: "10px 20px",
            borderRadius: "8px",
          }}
        >
          Catalogue de Prompts
        </div>
        <div
          style={{
            background: "rgba(255, 255, 255, 0.2)",
            padding: "10px 20px",
            borderRadius: "8px",
          }}
        >
          Matrice d'Opportunités
        </div>
        <div
          style={{
            background: "rgba(255, 255, 255, 0.2)",
            padding: "10px 20px",
            borderRadius: "8px",
          }}
        >
          Guide IA pour RH
        </div>
      </div>
    </div>,
    { ...size },
  )
}
