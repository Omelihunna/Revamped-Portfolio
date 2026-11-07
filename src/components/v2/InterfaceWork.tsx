import { Section, SectionHead } from "./Chrome.tsx";
import { T } from "./tokens.ts";
import { INTERFACE_WORK } from "../../data/profile.ts";

/* The one inverted section: it is the one about visual work. */
const InterfaceWork = () => (
    <Section id="interface" light>
        <SectionHead
            light
            n="03"
            kicker="Interface work"
            title={<>Where the brief was how it feels, not how it scales.</>}
            lede={
                <>
                    Client front-ends and my own, each measured by something different — time to
                    first impression, range without clutter, a dense clinical screen that stays
                    legible.
                </>
            }
        />

        <ol>
            {INTERFACE_WORK.map((s, i) => (
                <li
                    key={s.name}
                    className="grid gap-x-8 gap-y-2 border-t py-8 sm:grid-cols-12"
                    style={{ borderColor: T.lightLine }}
                >
                    <div className="font-mono text-[10px] uppercase tracking-[0.16em] sm:col-span-3 sm:pt-2"
                         style={{ color: T.lightDim }}>
                        {String(i + 1).padStart(2, "0")} — {s.sector}
                    </div>
                    <div className="sm:col-span-9">
                        <h3 className="text-2xl tracking-tight md:text-3xl" style={{ color: T.lightInk }}>
                            {s.href ? (
                                <a
                                    href={s.href}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    className="underline decoration-1 underline-offset-[6px] transition-opacity hover:opacity-60"
                                >
                                    {s.name} ↗
                                </a>
                            ) : (
                                <>
                                    {s.name}
                                    <span
                                        className="ml-3 align-middle font-mono text-[10px] uppercase tracking-[0.14em]"
                                        style={{ color: T.lightDim }}
                                    >
                                        not public
                                    </span>
                                </>
                            )}
                        </h3>
                        <p className="mt-3 max-w-xl text-sm leading-relaxed" style={{ color: T.lightDim }}>
                            {s.body}
                        </p>
                    </div>
                </li>
            ))}
        </ol>
    </Section>
);

export default InterfaceWork;
