import Technology from "./Technology.tsx";

const Projects = () => {
    return (
        <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 animate-fade-in"
            aria-label="Selected projects">
            <div
                className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Projects</h2>
            </div>
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-slate-200 mb-2 animate-fade-in">
                    Featured Projects
                </h2>
                <p className="text-slate-400 text-sm animate-fade-in" style={{ animationDelay: '0.1s' }}>
                    A selection of projects demonstrating my expertise in full-stack development.
                </p>
            </div>
            <div>
                <ul className="group/list space-y-8">

                    {/* KlasStack */}
                    <li className="animate-slide-up">
                        <div
                            className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                            <div
                                className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-xl transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-glow lg:group-hover:drop-shadow-lg"></div>
                            <div className="z-10 sm:order-2 sm:col-span-8">
                                <h3 className="mb-2">
                                    <a
                                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base link-hover"
                                        href="https://klasstack.com"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                        aria-label="KlasStack"
                                    >
                                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                        <span className="gradient-text font-semibold">KlasStack</span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                            aria-hidden="true"
                                        >
                                            <path fillRule="evenodd"
                                                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                                clipRule="evenodd"></path>
                                        </svg>
                                    </a>
                                </h3>
                                <p className="mt-2 text-sm leading-normal text-slate-300">
                                    Multi-tenant school management SaaS serving primary, secondary, and tertiary institutions. Built the NestJS modular monolith backend with request-scoped tenant isolation, role-based access control, fee collection, and result approval workflows, plus a Next.js dashboard and a React Native companion app. Backed by MySQL, Redis/BullMQ job queues, and containerised deployments.
                                </p>
                                <ul className="mt-3 flex flex-wrap" aria-label="Technologies used:">
                                    <Technology name={"NestJS"} />
                                    <Technology name={"Next.js"} />
                                    <Technology name={"TypeScript"} />
                                    <Technology name={"MySQL"} />
                                    <Technology name={"Redis / BullMQ"} />
                                    <Technology name={"Multi-Tenancy"} />
                                    <Technology name={"Docker"} />
                                </ul>
                            </div>
                        </div>
                    </li>

                    {/* Islas Secas */}
                    <li className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
                        <div
                            className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                            <div
                                className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-xl transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-glow lg:group-hover:drop-shadow-lg"></div>
                            <div className="z-10 sm:order-2 sm:col-span-8">
                                <h3 className="mb-2">
                                    <a
                                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base link-hover"
                                        href="https://islassecas.com"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                        aria-label="Islas Secas"
                                    >
                                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                        <span className="gradient-text font-semibold">Islas Secas</span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                            aria-hidden="true"
                                        >
                                            <path fillRule="evenodd"
                                                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                                clipRule="evenodd"></path>
                                        </svg>
                                    </a>
                                </h3>
                                <p className="mt-2 text-sm leading-normal text-slate-300">
                                    Luxury eco-resort website showcasing Panama's premier private island destination. Developed with focus on performance and stunning visual presentation, providing a seamless experience for potential guests.
                                </p>
                                <ul className="mt-3 flex flex-wrap" aria-label="Technologies used:">
                                    <Technology name={"Frontend Development"} />
                                    <Technology name={"Performance Optimization"} />
                                    <Technology name={"UI/UX"} />
                                </ul>
                            </div>
                        </div>
                    </li>

                    {/* Descriptomizer */}
                    <li className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
                        <div
                            className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                            <div
                                className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-xl transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-glow lg:group-hover:drop-shadow-lg"></div>
                            <div className="z-10 sm:order-2 sm:col-span-8">
                                <h3 className="mb-2">
                                    <a
                                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base link-hover"
                                        href="https://descriptomizer.com"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                        aria-label="Descriptomizer"
                                    >
                                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                        <span className="gradient-text font-semibold">Descriptomizer</span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                            aria-hidden="true"
                                        >
                                            <path fillRule="evenodd"
                                                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                                clipRule="evenodd"></path>
                                        </svg>
                                    </a>
                                </h3>
                                <p className="mt-2 text-sm leading-normal text-slate-300">
                                    Software-as-a-Service (SaaS) analytics platform designed for e-commerce businesses. Uses a lightweight pixel to gather behavioral data, aggregates it in the cloud, and leverages advanced AI models to generate actionable conversion reports.
                                </p>
                                <ul className="mt-3 flex flex-wrap" aria-label="Technologies used:">
                                    <Technology name={"SaaS Architecture"} />
                                    <Technology name={"AI/ML Integration"} />
                                    <Technology name={"AWS"} />
                                    <Technology name={"Data Analytics"} />
                                </ul>
                            </div>
                        </div>
                    </li>

                </ul>

                {/* Call to action */}
                <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
                    <p className="text-slate-400 mb-4">Check out more on my GitHub</p>
                    <a
                        href="https://github.com/Omelihunna"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="btn-primary inline-flex items-center gap-2"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                        </svg>
                        View on GitHub
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Projects;