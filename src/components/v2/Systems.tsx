import SystemSchematic from "../SystemSchematic.tsx";
import { KLASSTACK, COLLECTION_GOD, THORERO, DESCRIPTOMIZER } from "../../data/systems.ts";
import { Section, SectionHead } from "./Chrome.tsx";
import { T } from "./tokens.ts";

const ENTRIES = [
    { spec: KLASSTACK, label: "Multi-tenant SaaS", href: "https://klasstack.com" },
    { spec: COLLECTION_GOD, label: "Receivables collection", href: null },
    { spec: THORERO, label: "Operational governance", href: "https://thorero.com" },
    { spec: DESCRIPTOMIZER, label: "Behavioural analytics", href: "https://descriptomizer.com" },
];

const Systems = () => (
    <Section id="systems">
        <SectionHead
            n="01"
            kicker="Systems"
            title={<>Four systems, and the states worth showing.</>}
            lede={
                <>
                    A list of technologies tells you what I have touched. These show how the pieces
                    sit together and what each one does when something fails — switch the mode on any
                    diagram.
                </>
            }
        />

        <div className="space-y-10">
            {ENTRIES.map(({ spec, label, href }) => (
                <div key={spec.name}>
                    <div className="mb-2.5 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                        <span
                            className="font-mono text-[10px] uppercase tracking-[0.18em]"
                            style={{ color: T.faint }}
                        >
                            {label}
                        </span>
                        {href && (
                            <a
                                href={href}
                                target="_blank"
                                rel="noreferrer noopener"
                                className="font-mono text-[10px] uppercase tracking-[0.14em] underline underline-offset-4 transition-colors"
                                style={{ color: T.dim }}
                            >
                                Visit ↗
                            </a>
                        )}
                    </div>
                    <SystemSchematic spec={spec} />
                </div>
            ))}
        </div>

        <p className="mt-8 max-w-2xl font-mono text-[11px] leading-relaxed" style={{ color: T.faint }}>
            Architectures are real. The figures and log lines in each panel are placeholders —
            marked illustrative on every one.
        </p>
    </Section>
);

export default Systems;
