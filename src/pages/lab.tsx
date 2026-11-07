import SEO from "../components/SEO.tsx";
import SystemSchematic from "../components/SystemSchematic.tsx";
import { KLASSTACK, DESCRIPTOMIZER, COLLECTION_GOD } from "../data/systems.ts";

const Lab = () => {
    return (
        <>
        <SEO
            title="Schematic prototype — Iheanacho Omelihunna"
            url="https://iheanacho-portfolio.vercel.app/lab/schematic"
            robots="noindex, nofollow"
        />
        <main className="min-h-screen px-5 py-12 md:px-10 md:py-20" style={{ background: "#0a0c0b" }}>
            <div className="mx-auto max-w-5xl">
                <header className="mb-10">
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em]" style={{ color: "#7d8480" }}>
                        (01) Prototype — v2 direction
                    </p>
                    <h1 className="mt-3 text-3xl leading-tight md:text-4xl" style={{ color: "#e8eae8" }}>
                        A project explains itself<br />
                        <span style={{ color: "#5c6560" }}>as a system.</span>
                    </h1>
                    <p className="mt-4 max-w-xl text-sm leading-relaxed" style={{ color: "#7d8480" }}>
                        Three projects, one component. A request path, a batch pipeline and a
                        third-party payment flow differ only by their spec object — nodes, edges
                        and the modes worth showing.
                    </p>
                </header>

                <section className="mb-5">
                    <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.18em]" style={{ color: "#5c6560" }}>
                        A — request path
                    </p>
                    <SystemSchematic spec={KLASSTACK} />
                </section>

                <section className="mb-5">
                    <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.18em]" style={{ color: "#5c6560" }}>
                        B — batch pipeline
                    </p>
                    <SystemSchematic spec={DESCRIPTOMIZER} />
                </section>

                <section>
                    <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.18em]" style={{ color: "#5c6560" }}>
                        C — third-party payment flow
                    </p>
                    <SystemSchematic spec={COLLECTION_GOD} />
                </section>

                <p className="mt-6 max-w-2xl font-mono text-[11px] leading-relaxed" style={{ color: "#5c6560" }}>
                    A and B are drawn from the project write-ups. C is inferred from its name alone
                    and is marked as such. Every metric and log line in all three is a placeholder
                    and has to be replaced with something true before this ships.
                </p>
            </div>
        </main>
        </>
    );
};

export default Lab;
