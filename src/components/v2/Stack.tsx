import { Section, SectionHead } from "./Chrome.tsx";
import { T } from "./tokens.ts";
import { STACK, EDUCATION } from "../../data/profile.ts";

const Stack = () => (
    <Section id="stack">
        <SectionHead
            n="04"
            kicker="Stack"
            title={<>What I reach for, and what I trained on.</>}
        />

        <div className="grid gap-x-10 gap-y-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
                <div className="grid gap-px sm:grid-cols-2" style={{ background: T.line }}>
                    {STACK.map((g) => (
                        <div key={g.group} className="p-5" style={{ background: T.bg }}>
                            <h3
                                className="font-mono text-[10px] uppercase tracking-[0.18em]"
                                style={{ color: T.accent }}
                            >
                                {g.group}
                            </h3>
                            <ul className="mt-3 flex flex-wrap gap-1.5">
                                {g.items.map((i) => (
                                    <li
                                        key={i}
                                        className="rounded-sm border px-2 py-1 font-mono text-[10px]"
                                        style={{ borderColor: T.line, color: T.dim }}
                                    >
                                        {i}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <aside>
                <h3 className="font-mono text-[10px] uppercase tracking-[0.18em]" style={{ color: T.faint }}>
                    Education
                </h3>
                <p className="mt-3 text-sm leading-relaxed" style={{ color: T.ink }}>
                    {EDUCATION.degree}
                </p>
                <p className="mt-1 text-[13px] leading-relaxed" style={{ color: T.dim }}>
                    {EDUCATION.school}
                </p>
                <p className="mt-1 font-mono text-[11px]" style={{ color: T.faint }}>
                    {EDUCATION.year}
                </p>

                <h3
                    className="mt-9 font-mono text-[10px] uppercase tracking-[0.18em]"
                    style={{ color: T.faint }}
                >
                    Certifications
                </h3>
                <ul className="mt-3 space-y-2">
                    {EDUCATION.certs.map((c) => (
                        <li key={c} className="text-[13px] leading-relaxed" style={{ color: T.dim }}>
                            {c}
                        </li>
                    ))}
                </ul>
            </aside>
        </div>
    </Section>
);

export default Stack;
