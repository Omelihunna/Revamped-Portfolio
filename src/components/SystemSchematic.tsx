import { useState } from "react";
import type { NodeState, EdgeState, Pt, SysNode, SystemSpec } from "../data/systems.ts";
import { KLASSTACK } from "../data/systems.ts";

/* ------------------------------------------------------------------ *
 * Palette — one accent, state shown through hue and brightness.
 * ------------------------------------------------------------------ */

const STATE_COLOR: Record<NodeState, string> = {
    ok: "#c5f24a",
    busy: "#f3c969",
    alert: "#f0883e",
    down: "#f0616d",
    standby: "#5c6560",
};

const EDGE_COLOR: Record<EdgeState, string> = {
    flow: "#c5f24a",
    heavy: "#f3c969",
    paused: "#8d7074",
};

const INK = "#e8eae8";
const DIM = "#7d8480";

/* Orthogonal path with rounded corners. */
const orthPath = (pts: Pt[], r = 10): string => {
    if (pts.length < 2) return "";
    let d = "M" + pts[0][0] + "," + pts[0][1];
    for (let i = 1; i < pts.length - 1; i++) {
        const [px, py] = pts[i - 1];
        const [cx, cy] = pts[i];
        const [nx, ny] = pts[i + 1];
        const d1 = Math.hypot(cx - px, cy - py);
        const d2 = Math.hypot(nx - cx, ny - cy);
        if (!d1 || !d2) continue;
        const rr = Math.min(r, d1 / 2, d2 / 2);
        const ax = cx - ((cx - px) / d1) * rr;
        const ay = cy - ((cy - py) / d1) * rr;
        const bx = cx + ((nx - cx) / d2) * rr;
        const by = cy + ((ny - cy) / d2) * rr;
        d += " L" + ax + "," + ay + " Q" + cx + "," + cy + " " + bx + "," + by;
    }
    const last = pts[pts.length - 1];
    d += " L" + last[0] + "," + last[1];
    return d;
};

/* Point halfway along a polyline, for the break marker on a dead edge. */
const midOf = (pts: Pt[]): Pt => {
    const segs: number[] = [];
    let total = 0;
    for (let i = 1; i < pts.length; i++) {
        const l = Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]);
        segs.push(l);
        total += l;
    }
    let want = total / 2;
    for (let i = 0; i < segs.length; i++) {
        if (want <= segs[i]) {
            const t = segs[i] ? want / segs[i] : 0;
            return [
                pts[i][0] + (pts[i + 1][0] - pts[i][0]) * t,
                pts[i][1] + (pts[i + 1][1] - pts[i][1]) * t,
            ];
        }
        want -= segs[i];
    }
    return pts[pts.length - 1];
};

/* ------------------------------------------------------------------ */

const SystemSchematic = ({ spec = KLASSTACK }: { spec?: SystemSpec }) => {
    const [active, setActive] = useState(0);
    const mode = spec.modes[active];

    const nodeState = (id: string): NodeState => mode.nodes?.[id] ?? "ok";
    const edgeState = (id: string): EdgeState => mode.edges?.[id] ?? "flow";

    const groups = spec.nodes.reduce<Record<string, SysNode[]>>((acc, n) => {
        (acc[n.group] ||= []).push(n);
        return acc;
    }, {});

    return (
        <figure
            className="not-prose overflow-hidden rounded-lg border font-mono"
            style={{ background: "#0d0f0e", borderColor: "rgba(255,255,255,0.09)" }}
        >
            <style>{`
                @keyframes ks-dash { to { stroke-dashoffset: -24; } }
                .ks-flow   { stroke-dasharray: 2 6; animation: ks-dash 1.6s linear infinite; }
                .ks-heavy  { stroke-dasharray: 2 4; animation: ks-dash 0.7s linear infinite; }
                .ks-paused { stroke-dasharray: 4 4; }
                @media (prefers-reduced-motion: reduce) {
                    .ks-flow, .ks-heavy { animation: none; }
                }
                .ks-log { scrollbar-width: thin; scrollbar-color: rgba(255,255,255,0.18) transparent; }
                .ks-log::-webkit-scrollbar { height: 6px; }
                .ks-log::-webkit-scrollbar-track { background: transparent; }
                .ks-log::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.14); border-radius: 3px; }
            `}</style>

            {/* Header */}
            <figcaption
                className="flex flex-wrap items-center justify-between gap-2 border-b px-4 py-3"
                style={{ borderColor: "rgba(255,255,255,0.09)" }}
            >
                <div>
                    <div className="flex items-baseline gap-2 text-[10px] uppercase tracking-[0.18em]">
                        <span style={{ color: INK }}>{spec.name}</span>
                        <span style={{ color: DIM }}>— system architecture</span>
                    </div>
                    <div className="mt-1 text-[10px]" style={{ color: "#5c6560" }}>
                        {spec.stack}
                    </div>
                </div>
                <div className="flex shrink-0 items-center gap-1.5">
                    {spec.note && (
                        <span
                            className="rounded-sm border px-1.5 py-0.5 text-[9px] uppercase tracking-[0.18em]"
                            style={{ borderColor: STATE_COLOR.alert + "66", color: STATE_COLOR.alert }}
                        >
                            {spec.note}
                        </span>
                    )}
                    <span
                        className="rounded-sm border px-1.5 py-0.5 text-[9px] uppercase tracking-[0.18em]"
                        style={{ borderColor: "rgba(255,255,255,0.18)", color: DIM }}
                    >
                        Illustrative
                    </span>
                </div>
            </figcaption>

            {/* Readout */}
            <div
                className="grid grid-cols-2 border-b sm:grid-cols-4"
                style={{ borderColor: "rgba(255,255,255,0.09)" }}
            >
                {mode.readout.map((r, i) => (
                    <div
                        key={r.k}
                        className={
                            "border-white/10 px-4 py-3" +
                            (i % 2 === 1 ? " border-l" : "") +
                            (i !== 0 ? " sm:border-l" : "") +
                            (i >= 2 ? " border-t sm:border-t-0" : "")
                        }
                    >
                        <div className="text-[9px] uppercase tracking-[0.16em]" style={{ color: DIM }}>
                            {r.k}
                        </div>
                        <div className="mt-1 text-sm" style={{ color: INK }}>
                            {r.v}
                        </div>
                    </div>
                ))}
            </div>

            {/* Diagram — SVG from md up */}
            <div
                className="hidden md:block"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                }}
            >
                <svg viewBox={spec.viewBox} className="block w-full" role="img"
                     aria-label={spec.name + " architecture, " + mode.tab + ": " + mode.caption}>
                    <defs>
                        {(Object.keys(EDGE_COLOR) as EdgeState[]).map((s) => (
                            <marker
                                key={s}
                                id={"ks-arrow-" + s}
                                viewBox="0 0 8 8"
                                refX="7"
                                refY="4"
                                markerWidth="5"
                                markerHeight="5"
                                orient="auto-start-reverse"
                            >
                                <path d="M0,1 L7,4 L0,7 z" fill={EDGE_COLOR[s]} opacity={s === "paused" ? 0.4 : 0.9} />
                            </marker>
                        ))}
                    </defs>

                    {spec.edges.map((e) => {
                        const st = edgeState(e.id);
                        return (
                            <path
                                key={e.id}
                                d={orthPath(e.pts)}
                                fill="none"
                                stroke={EDGE_COLOR[st]}
                                strokeWidth={1.25}
                                strokeOpacity={st === "paused" ? 0.8 : 0.85}
                                markerEnd={"url(#ks-arrow-" + st + ")"}
                                className={st === "flow" ? "ks-flow" : st === "heavy" ? "ks-heavy" : "ks-paused"}
                            />
                        );
                    })}

                    {spec.edges
                        .filter((e) => edgeState(e.id) === "paused")
                        .map((e) => {
                            const [mx, my] = midOf(e.pts);
                            return (
                                <g key={e.id + "-break"}>
                                    <rect x={mx - 8} y={my - 8} width={16} height={16} fill="#0d0f0e" />
                                    <path
                                        d={"M" + (mx - 4) + "," + (my - 4) + " L" + (mx + 4) + "," + (my + 4) +
                                           " M" + (mx + 4) + "," + (my - 4) + " L" + (mx - 4) + "," + (my + 4)}
                                        stroke={STATE_COLOR.down}
                                        strokeWidth={1.6}
                                        strokeLinecap="round"
                                    />
                                </g>
                            );
                        })}

                    {spec.nodes.map((n) => {
                        const st = nodeState(n.id);
                        const c = STATE_COLOR[st];
                        const down = st === "down";
                        const idle = st === "standby";
                        return (
                            <g key={n.id}>
                                <rect
                                    x={n.x}
                                    y={n.y}
                                    width={spec.nodeW}
                                    height={spec.nodeH}
                                    rx={3}
                                    fill={down ? "#1a1213" : "#141715"}
                                    stroke={c}
                                    strokeOpacity={down ? 0.9 : idle ? 0.3 : st === "alert" ? 0.85 : 0.55}
                                    strokeWidth={down || st === "alert" ? 1.7 : 1}
                                />
                                <rect x={n.x + 12} y={n.y + 14} width={5} height={5} fill={c} opacity={idle ? 0.5 : 1} />
                                <text
                                    x={n.x + 24}
                                    y={n.y + 19}
                                    fontSize={7.5}
                                    letterSpacing={1.4}
                                    fill={DIM}
                                    fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
                                >
                                    {n.kicker}
                                </text>
                                <text
                                    x={n.x + 12}
                                    y={n.y + 38}
                                    fontSize={11.5}
                                    fill={idle ? DIM : down ? c : INK}
                                    fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
                                >
                                    {n.label}
                                </text>
                            </g>
                        );
                    })}
                </svg>
            </div>

            {/* Diagram — stacked flow below md */}
            <div className="md:hidden">
                {Object.entries(groups).map(([group, nodes]) => (
                    <div key={group} className="border-b px-4 py-3" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                        <div className="mb-2 text-[9px] uppercase tracking-[0.16em]" style={{ color: DIM }}>
                            {group}
                        </div>
                        <div className="space-y-1.5">
                            {nodes.map((n) => {
                                const st = nodeState(n.id);
                                const c = STATE_COLOR[st];
                                const down = st === "down";
                                const idle = st === "standby";
                                return (
                                    <div
                                        key={n.id}
                                        className="flex items-center gap-2.5 rounded-sm border px-2.5 py-2"
                                        style={{
                                            borderColor: c + (down ? "cc" : idle ? "33" : "66"),
                                            background: down ? "#1a1213" : "#141715",
                                        }}
                                    >
                                        <span
                                            className="inline-block h-[5px] w-[5px] shrink-0"
                                            style={{ background: c, opacity: idle ? 0.5 : 1 }}
                                        />
                                        <span className="text-xs" style={{ color: idle ? DIM : down ? c : INK }}>
                                            {n.label}
                                        </span>
                                        <span className="ml-auto text-[9px] uppercase tracking-[0.14em]" style={{ color: DIM }}>
                                            {st}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>

            {/* Event log */}
            <div
                className="ks-log overflow-x-auto border-y px-4 py-3"
                style={{ borderColor: "rgba(255,255,255,0.09)", background: "#0a0c0b" }}
            >
                {mode.log.map((line) => (
                    <div
                        key={line}
                        className="whitespace-pre text-[10px] leading-5"
                        style={{ color: DIM }}
                    >
                        {line}
                    </div>
                ))}
            </div>

            {/* Mode switch */}
            <div className="flex flex-wrap gap-1.5 px-4 pb-3 pt-3">
                {spec.modes.map((m, i) => {
                    const on = i === active;
                    return (
                        <button
                            key={m.id}
                            type="button"
                            onClick={() => setActive(i)}
                            aria-pressed={on}
                            className="rounded-sm border px-2.5 py-1.5 text-[10px] uppercase tracking-[0.14em] transition-colors"
                            style={{
                                borderColor: on ? STATE_COLOR.ok : "rgba(255,255,255,0.14)",
                                color: on ? STATE_COLOR.ok : DIM,
                                background: on ? "rgba(197,242,74,0.08)" : "transparent",
                            }}
                        >
                            {m.tab}
                        </button>
                    );
                })}
            </div>

            <p
                className="min-h-[3.5rem] px-4 pb-4 text-xs leading-relaxed sm:min-h-[2.5rem]"
                style={{ color: DIM }}
            >
                {mode.caption}
            </p>
        </figure>
    );
};

export default SystemSchematic;
