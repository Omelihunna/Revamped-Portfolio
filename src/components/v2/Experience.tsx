import { Section, SectionHead } from "./Chrome.tsx";
import { T } from "./tokens.ts";
import { EXPERIENCE } from "../../data/profile.ts";

const Experience = () => (
    <Section id="experience">
        <SectionHead
            n="02"
            kicker="Experience"
            title={<>Nine roles, mostly backend, one of them mine.</>}
            lede={
                <>
                    Lending, education, analytics, blockchain and consulting — the through-line is
                    the data layer and what sits directly above it.
                </>
            }
        />

        <ol className="group/list">
            {EXPERIENCE.map((r) => (
                <li
                    key={r.org + r.period}
                    className="group grid gap-x-8 gap-y-3 border-t py-7 transition-opacity sm:grid-cols-12 lg:group-hover/list:opacity-45 lg:hover:!opacity-100"
                    style={{ borderColor: T.line }}
                >
                    <header className="sm:col-span-3 sm:pt-1" aria-label={r.periodLabel}>
                        <div
                            className="font-mono text-[10px] uppercase tracking-[0.16em]"
                            style={{ color: T.faint }}
                        >
                            {r.period}
                        </div>
                        <div
                            className="mt-1 font-mono text-[9px] uppercase tracking-[0.14em]"
                            style={{ color: "#4b524d" }}
                        >
                            {r.engagement}
                        </div>
                    </header>

                    <div className="sm:col-span-9">
                        <h3 className="text-lg leading-snug tracking-tight md:text-xl">
                            <span style={{ color: T.ink }}>{r.title}</span>
                            <span style={{ color: T.faint }}> · </span>
                            <span style={{ color: T.accent }}>{r.org}</span>
                        </h3>
                        <p className="mt-2.5 max-w-2xl text-sm leading-relaxed" style={{ color: T.dim }}>
                            {r.body}
                        </p>
                        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies used">
                            {r.tech.map((t) => (
                                <li
                                    key={t}
                                    className="rounded-sm border px-2 py-1 font-mono text-[9px] uppercase tracking-[0.12em]"
                                    style={{ borderColor: T.line, color: T.faint }}
                                >
                                    {t}
                                </li>
                            ))}
                        </ul>
                    </div>
                </li>
            ))}
        </ol>
    </Section>
);

export default Experience;
