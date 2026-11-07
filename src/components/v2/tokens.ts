/* Design tokens for /v2. One accent; state and hierarchy carried by
 * brightness rather than hue. The light section inverts deliberately —
 * it is the one about visual work. */

export const T = {
    bg: "#0a0c0b",
    panel: "#0d0f0e",
    raised: "#141715",
    line: "rgba(255,255,255,0.09)",
    lineSoft: "rgba(255,255,255,0.055)",
    ink: "#e8eae8",
    dim: "#7d8480",
    faint: "#5c6560",
    accent: "#c5f24a",

    lightBg: "#f1f0ea",
    lightInk: "#14160f",
    lightDim: "#5d6157",
    lightLine: "rgba(0,0,0,0.13)",
};

export const GRID_BG = {
    backgroundImage:
        "linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px)",
    backgroundSize: "32px 32px",
};
