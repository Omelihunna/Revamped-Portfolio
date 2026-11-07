import { useEffect } from "react";
import SEO from "../components/SEO.tsx";
import { Nav } from "../components/v2/Chrome.tsx";
import Hero from "../components/v2/Hero.tsx";
import Systems from "../components/v2/Systems.tsx";
import Experience from "../components/v2/Experience.tsx";
import InterfaceWork from "../components/v2/InterfaceWork.tsx";
import Stack from "../components/v2/Stack.tsx";
import Contact from "../components/v2/Contact.tsx";
import { T } from "../components/v2/tokens.ts";

const V2 = () => {
    /* index.html paints the body slate-900 for v1; overscroll would show it. */
    useEffect(() => {
        const prev = document.body.style.background;
        document.body.style.background = T.bg;
        return () => {
            document.body.style.background = prev;
        };
    }, []);

    return (
        <>
            <SEO
                title="Iheanacho Omelihunna — Full-Stack Engineer"
                description="Iheanacho Omelihunna is a Full-Stack Engineer who builds multi-tenant backends, job queues and double-entry ledgers — and the interfaces on top of them."
                url="https://iheanacho-portfolio.vercel.app/v2"
                robots="noindex, follow"
            />
            <div className="min-h-screen font-sans antialiased" style={{ background: T.bg }}>
                <Nav />
                <main>
                    <Hero />
                    <Systems />
                    <Experience />
                    <InterfaceWork />
                    <Stack />
                    <Contact />
                </main>
            </div>
        </>
    );
};

export default V2;
