import { T, GRID_BG } from "./tokens.ts";
import { PROFILE } from "../../data/profile.ts";

const LINKS = [
    { label: "Email", value: PROFILE.email, href: "mailto:" + PROFILE.email },
    { label: "GitHub", value: "github.com/Omelihunna", href: PROFILE.github },
    { label: "LinkedIn", value: "omelihunna-iheanacho", href: PROFILE.linkedin },
    { label: "Résumé", value: "PDF", href: PROFILE.resume },
];

const Contact = () => (
    <section id="contact" className="scroll-mt-14" style={GRID_BG}>
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em]" style={{ color: T.faint }}>
                (05) Contact
            </p>
            <h2
                className="mt-4 max-w-3xl text-3xl leading-[1.1] tracking-tight md:text-5xl"
                style={{ color: T.ink }}
            >
                Got something with a queue,
                <br className="hidden sm:block" /> a ledger or a deadline?
            </h2>

            <ul className="mt-10 grid gap-px sm:grid-cols-2 lg:grid-cols-4" style={{ background: T.line }}>
                {LINKS.map((l) => (
                    <li key={l.label} style={{ background: T.bg }}>
                        <a
                            href={l.href}
                            target={l.href.startsWith("mailto:") ? undefined : "_blank"}
                            rel="noreferrer noopener"
                            className="group block p-5 transition-colors hover:bg-white/[0.03]"
                        >
                            <span
                                className="font-mono text-[9px] uppercase tracking-[0.16em]"
                                style={{ color: T.faint }}
                            >
                                {l.label}
                            </span>
                            <span
                                className="mt-2 block break-all font-mono text-sm transition-colors group-hover:text-[color:var(--ac)]"
                                style={{ color: T.ink, ["--ac" as string]: T.accent }}
                            >
                                {l.value} ↗
                            </span>
                        </a>
                    </li>
                ))}
            </ul>

            <footer
                className="mt-16 flex flex-wrap items-center justify-between gap-3 border-t pt-6 font-mono text-[10px] uppercase tracking-[0.14em]"
                style={{ borderColor: T.line, color: T.faint }}
            >
                <span>
                    © {new Date().getFullYear()} {PROFILE.name}
                </span>
                <a href="/" style={{ color: T.faint }}>
                    v1 ↗
                </a>
            </footer>
        </div>
    </section>
);

export default Contact;
