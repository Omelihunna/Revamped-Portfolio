import { useEffect, useState, type ReactNode } from "react";
import { T } from "./tokens.ts";

export const SECTIONS = [
    { id: "systems", n: "01", label: "Systems" },
    { id: "experience", n: "02", label: "Experience" },
    { id: "interface", n: "03", label: "Interface" },
    { id: "stack", n: "04", label: "Stack" },
    { id: "contact", n: "05", label: "Contact" },
];

export const Nav = () => {
    const [active, setActive] = useState("");

    useEffect(() => {
        /* The callback only reports sections whose intersection CHANGED, so the
         * current one has to be read off an accumulated set, not off `entries`. */
        const visible = new Set<string>();
        const obs = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) visible.add(e.target.id);
                    else visible.delete(e.target.id);
                });
                const current = SECTIONS.filter((s) => visible.has(s.id)).pop();
                if (current) setActive(current.id);
            },
            { rootMargin: "-15% 0px -60% 0px" },
        );
        SECTIONS.forEach((s) => {
            const el = document.getElementById(s.id);
            if (el) obs.observe(el);
        });

        /* Landing on a #hash scrolls after the observer's first callback, so the
         * nav would latch onto the top section until the visitor scrolled. Sync
         * once from real positions after the jump settles. */
        const sync = () => {
            const current = SECTIONS.filter((s) => {
                const el = document.getElementById(s.id);
                return el && el.getBoundingClientRect().top <= window.innerHeight * 0.25;
            }).pop();
            if (current) setActive(current.id);
        };
        const t = window.setTimeout(sync, 120);

        return () => {
            window.clearTimeout(t);
            obs.disconnect();
        };
    }, []);

    return (
        <header
            className="sticky top-0 z-40 border-b backdrop-blur"
            style={{ borderColor: T.line, background: "rgba(10,12,11,0.82)" }}
        >
            <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 md:px-8">
                <a
                    href="#top"
                    className="shrink-0 font-mono text-[11px] uppercase tracking-[0.18em]"
                    style={{ color: T.ink }}
                >
                    <span className="hidden sm:inline">Iheanacho Omelihunna</span>
                    <span className="sm:hidden">Omelihunna</span>
                </a>
                <nav aria-label="Sections">
                    <ul className="flex items-center gap-1 sm:gap-2">
                        {SECTIONS.map((s) => {
                            const on = active === s.id;
                            return (
                                <li key={s.id}>
                                    <a
                                        href={"#" + s.id}
                                        aria-current={on ? "true" : undefined}
                                        className="block rounded-sm px-1.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] transition-colors sm:px-2"
                                        style={{ color: on ? T.accent : T.faint }}
                                    >
                                        <span className="hidden sm:inline">{s.label}</span>
                                        <span className="sm:hidden">{s.n}</span>
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export const SectionHead = ({
    n,
    kicker,
    title,
    lede,
    light = false,
}: {
    n: string;
    kicker: string;
    title: ReactNode;
    lede?: ReactNode;
    light?: boolean;
}) => (
    <div className="mb-10 md:mb-14">
        <p
            className="font-mono text-[10px] uppercase tracking-[0.2em]"
            style={{ color: light ? T.lightDim : T.faint }}
        >
            ({n}) {kicker}
        </p>
        <h2
            className="mt-4 max-w-3xl text-3xl leading-[1.1] tracking-tight md:text-5xl"
            style={{ color: light ? T.lightInk : T.ink }}
        >
            {title}
        </h2>
        {lede && (
            <p
                className="mt-5 max-w-2xl text-sm leading-relaxed md:text-base"
                style={{ color: light ? T.lightDim : T.dim }}
            >
                {lede}
            </p>
        )}
    </div>
);

export const Section = ({
    id,
    children,
    light = false,
}: {
    id: string;
    children: ReactNode;
    light?: boolean;
}) => (
    <section
        id={id}
        className="scroll-mt-14 border-b px-5 py-16 md:px-8 md:py-24"
        style={{
            borderColor: light ? T.lightLine : T.line,
            background: light ? T.lightBg : undefined,
        }}
    >
        <div className="mx-auto max-w-6xl">{children}</div>
    </section>
);
