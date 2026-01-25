
const Websites = () => {
    return (
        <section id="website-work" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 animate-fade-in" aria-label="Website work">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Websites</h2>
            </div>

            <div>
                <ol className="group/list">
                    {/* Vispring */}
                    <li className="mb-12 animate-slide-up">
                        <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-xl transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-glow lg:group-hover:drop-shadow-lg"></div>
                            <div className="z-10 sm:col-span-8">
                                <h3 className="font-medium leading-snug text-slate-200 mb-2">
                                    <a
                                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                                        href="https://vispring.com"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                        aria-label="Vispring (opens in a new tab)"
                                    >
                                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                        <span className="gradient-text font-semibold">Vispring</span>
                                    </a>
                                </h3>
                                <div className="glass rounded-lg p-4">
                                    <p className="text-slate-300 text-sm leading-relaxed">
                                        Luxury bedding manufacturer's website featuring their premium products and brand story.
                                        Built with modern web technologies to deliver a premium user experience.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </li>

                    {/* Islas Secas */}
                    <li className="mb-12 animate-slide-up" style={{animationDelay: '0.1s'}}>
                        <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-xl transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-glow lg:group-hover:drop-shadow-lg"></div>
                            <div className="z-10 sm:col-span-8">
                                <h3 className="font-medium leading-snug text-slate-200 mb-2">
                                    <a
                                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                                        href="https://islassecas.com"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                        aria-label="Islas Secas (opens in a new tab)"
                                    >
                                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                        <span className="gradient-text font-semibold">Islas Secas</span>
                                    </a>
                                </h3>
                                <div className="glass rounded-lg p-4">
                                    <p className="text-slate-300 text-sm leading-relaxed">
                                        Luxury eco-resort website showcasing Panama's premier private island destination.
                                        Developed with focus on performance and stunning visual presentation.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </li>

                    {/* Stanton Solar */}
                    <li className="mb-12 animate-slide-up" style={{animationDelay: '0.2s'}}>
                        <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-xl transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-glow lg:group-hover:drop-shadow-lg"></div>
                            <div className="z-10 sm:col-span-8">
                                <h3 className="font-medium leading-snug text-slate-200 mb-2">
                                    <a
                                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                                        href="https://stantonsolar.com"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                        aria-label="Stanton Solar (opens in a new tab)"
                                    >
                                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                        <span className="gradient-text font-semibold">Stanton Solar</span>
                                    </a>
                                </h3>
                                <div className="glass rounded-lg p-4">
                                    <p className="text-slate-300 text-sm leading-relaxed">
                                        Solar energy solutions provider website featuring their services and installations.
                                        Built with emphasis on lead generation and user engagement.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </li>
                </ol>
            </div>
        </section>
    );
};

export default Websites;