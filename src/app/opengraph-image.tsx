import { ImageResponse } from "next/og";

export const alt =
  "Hüseyin Alşan — Traffic Engineer professional portfolio";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "#003C3F",
          color: "#FFFFFF",
          padding: "72px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: "absolute",
            width: "420px",
            height: "420px",
            borderRadius: "9999px",
            border: "2px solid rgba(182, 217, 87, 0.20)",
            top: "-170px",
            right: "-80px",
          }}
        />

        <div
          style={{
            position: "absolute",
            width: "260px",
            height: "260px",
            borderRadius: "9999px",
            border: "2px solid rgba(182, 217, 87, 0.14)",
            top: "10px",
            right: "70px",
          }}
        />

        {/* Left accent line */}
        <div
          style={{
            width: "10px",
            height: "100%",
            borderRadius: "9999px",
            background: "#B6D957",
            marginRight: "42px",
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flex: 1,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              alignSelf: "flex-start",
              border: "1px solid rgba(182, 217, 87, 0.35)",
              background: "rgba(182, 217, 87, 0.10)",
              color: "#B6D957",
              borderRadius: "9999px",
              padding: "14px 22px",
              fontSize: "22px",
              fontWeight: 700,
              letterSpacing: "4px",
              textTransform: "uppercase",
            }}
          >
            Professional Portfolio
          </div>

          <div
            style={{
              display: "flex",
              marginTop: "42px",
              fontSize: "78px",
              lineHeight: 1,
              fontWeight: 800,
              letterSpacing: "-3px",
            }}
          >
            Hüseyin Alşan
          </div>

          <div
            style={{
              display: "flex",
              marginTop: "20px",
              color: "#B6D957",
              fontSize: "42px",
              fontWeight: 700,
            }}
          >
            Traffic Engineer
          </div>

          <div
            style={{
              display: "flex",
              maxWidth: "820px",
              marginTop: "32px",
              color: "rgba(255, 255, 255, 0.72)",
              fontSize: "25px",
              lineHeight: 1.5,
            }}
          >
            Transport planning · Active travel · Street design · Traffic
            modelling · Civil engineering
          </div>
        </div>

        {/* Bottom-right mark */}
        <div
          style={{
            position: "absolute",
            right: "72px",
            bottom: "58px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
            color: "rgba(255, 255, 255, 0.55)",
            fontSize: "20px",
          }}
        >
          <div
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "9999px",
              background: "#B6D957",
            }}
          />

          UK-based Traffic Engineer
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}