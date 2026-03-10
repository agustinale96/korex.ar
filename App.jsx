import { useState } from "react";
import { SET_COLORS } from "../data/catalog.js";

/**
 * Renders a colored placeholder with the card's initials
 * while the real image is loading or if it fails.
 */
export function Placeholder({ name, set }) {
  const initials = (name || "")
    .split(" ")
    .filter((w) => /^[A-Z\u00C0-\u024F]/.test(w))
    .map((w) => w[0])
    .join("")
    .slice(0, 3);

  const color = SET_COLORS[set] || "#1a3a50";

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.5rem",
        background: `linear-gradient(160deg, ${color}33, #0a1220)`,
      }}
    >
      <div
        style={{
          fontSize: "2rem",
          fontFamily: "Rajdhani, sans-serif",
          fontWeight: 700,
          color: `${color}bb`,
          letterSpacing: "2px",
        }}
      >
        {initials || "◈"}
      </div>
      <div
        style={{
          fontSize: "0.55rem",
          fontFamily: "Rajdhani, sans-serif",
          color: `${color}77`,
          letterSpacing: "3px",
          textTransform: "uppercase",
        }}
      >
        {set}
      </div>
    </div>
  );
}

/** Full-size card image with placeholder fallback (used in the grid). */
export function CardImage({ url, name, set }) {
  const [loaded, setLoaded] = useState(false);
  const [error,  setError]  = useState(false);

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      {!loaded && <Placeholder name={name} set={set} />}
      {!error && (
        <img
          src={url}
          alt={name}
          className="card-img"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: loaded ? "block" : "none",
          }}
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
        />
      )}
    </div>
  );
}

/** Small thumbnail used inside the autocomplete dropdown and modals. */
export function AcThumb({ url, name, set }) {
  const [loaded, setLoaded] = useState(false);
  const [error,  setError]  = useState(false);

  const color    = SET_COLORS[set] || "#1a3a50";
  const initials = (name || "")
    .split(" ")
    .filter((w) => /^[A-Z]/.test(w))
    .map((w) => w[0])
    .join("")
    .slice(0, 2);

  return (
    <div
      style={{
        width: 36,
        height: 50,
        flexShrink: 0,
        borderRadius: 4,
        overflow: "hidden",
        border: "1px solid rgba(0,180,255,.15)",
        background: `linear-gradient(160deg, ${color}44, #0d1626)`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: `${color}cc`,
        fontSize: ".72rem",
        fontFamily: "Rajdhani, sans-serif",
        fontWeight: 700,
        position: "relative",
      }}
    >
      {!loaded && <span>{initials || "◈"}</span>}
      {!error && (
        <img
          src={url}
          alt={name}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: loaded ? "block" : "none",
          }}
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
        />
      )}
    </div>
  );
}
