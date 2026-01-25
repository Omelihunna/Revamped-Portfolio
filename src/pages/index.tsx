import RadialCursor from "../components/RadialCursor.tsx";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import Projects from "../components/Projects.tsx";
import WorkHistory from "../components/WorkHistory.tsx";
import About from "../components/About.tsx";
import ScrollAnimation from "../components/ScrollAnimation.tsx";
import SEO from "../components/SEO.tsx";

const Index = () => {
    return (
        <>
            <SEO />
            <div className="__variable_20b187 group/spotlight relative min-h-screen">
                <RadialCursor />

                {/* Background gradient overlay */}
                <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 opacity-50"></div>

                {/* Animated background elements */}
                <div className="fixed inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-full blur-3xl animate-float"></div>
                    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-accent-500/20 to-primary-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
                </div>

                <div className="relative z-10 mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
                    <div className="lg:flex lg:justify-between lg:gap-4">
                        <ScrollAnimation>
                            <Header />
                        </ScrollAnimation>

                        <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
                            <ScrollAnimation>
                                <About />
                            </ScrollAnimation>
                            <ScrollAnimation>
                                <WorkHistory />
                            </ScrollAnimation>
                            <ScrollAnimation>
                                <Projects />
                            </ScrollAnimation>
                            <ScrollAnimation>
                                <Footer />
                            </ScrollAnimation>
                        </main>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index;