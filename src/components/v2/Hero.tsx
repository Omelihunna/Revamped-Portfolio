import { T, GRID_BG } from "./tokens.ts";
import { PROFILE, EXPERIENCE } from "../../data/profile.ts";

const FACTS = [
    { k: "shipping since", v: String(PROFILE.since) },
    { k: "roles", v: String(EXPERIENCE.length) },
    { k: "primary", v: "TypeScript" },
    { k: "based", v: PROFILE.location },
];

const Hero = () => (
    <section id="top" className="border-b" style={{ borderColor: T.line }}>
        <div style={GRID_BG}>
            <div className="mx-auto max-w-6xl px-5 pb-16 pt-14 md:px-8 md:pb-24 md:pt-24">
                <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em]">
                    <span
                        className="inline-block h-[6px] w-[6px]"
                        style={{ background: T.accent }}
                        aria-hidden="true"
                    />
                    <span style={{ color: T.dim }}>{PROFILE.role}</span>
                </div>

                <h1
                    className="mt-6 text-4xl leading-[1.05] tracking-tight sm:text-5xl md:text-7xl"
                    style={{ color: T.ink }}
                >
                    {PROFILE.name}
                </h1>

                <p
                    className="mt-5 max-w-2xl text-xl leading-snug tracking-tight md:text-3xl"
                    style={{ color: T.faint }}
                >
                    Backend systems — and what
                    <br className="hidden sm:block" /> happens when they break.
                </p>

                <p className="mt-6 max-w-xl text-sm leading-relaxed md:text-base" style={{ color: T.dim }}>
                    {PROFILE.blurb}
                </p>

                <div className="mt-9 flex flex-wrap gap-2.5">
                    <a
                        href="#systems"
                        className="rounded-sm px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.14em] transition-opacity hover:opacity-85"
                        style={{ background: T.accent, color: "#10140a" }}
                    >
                        See the systems
                    </a>
                    <a
                        href={PROFILE.resume}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="rounded-sm border px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.14em] transition-colors hover:border-white/35"
                        style={{ borderColor: T.line, color: T.ink }}
                    >
                        Résumé
                    </a>
                </div>
            </div>
        </div>

        <dl
            className="mx-auto grid max-w-6xl grid-cols-2 border-t sm:grid-cols-4"
            style={{ borderColor: T.line }}
        >
            {FACTS.map((f, i) => (
                <div
                    key={f.k}
                    className={
                        "px-5 py-4 md:px-8" +
                        (i % 2 === 1 ? " border-l" : "") +
                        (i !== 0 ? " sm:border-l" : "") +
                        (i >= 2 ? " border-t sm:border-t-0" : "")
                    }
                    style={{ borderColor: T.line }}
                >
                    <dt className="font-mono text-[9px] uppercase tracking-[0.16em]" style={{ color: T.faint }}>
                        {f.k}
                    </dt>
                    <dd className="mt-1 font-mono text-sm" style={{ color: T.ink }}>
                        {f.v}
                    </dd>
                </div>
            ))}
        </dl>
    </section>
);

export default Hero;
