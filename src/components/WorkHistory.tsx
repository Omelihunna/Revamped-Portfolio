import Technology from "./Technology.tsx";

const WorkHistory = () => {
    return (
        <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 animate-fade-in"
            aria-label="Work experience">
            <div
                className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Experience</h2>
            </div>
            <div>
                <ol className="group/list space-y-8">

                    {/* KlasStack */}
                    <li className="animate-slide-up">
                        <div
                            className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                            <div
                                className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-xl transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-glow lg:group-hover:drop-shadow-lg"></div>
                            <header
                                className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-primary-400 sm:col-span-2"
                                aria-label="February 2026 to Present">
                                Feb 2026 — Present
                            </header>
                            <div className="z-10 sm:col-span-6">
                                <h3 className="font-medium leading-snug text-slate-200 mb-2">
                                    <span className="gradient-text font-semibold">Co-Founder @ KlasStack</span>
                                </h3>
                                <div className="glass rounded-lg p-4 mt-3">
                                    <p className="text-slate-300 text-sm leading-relaxed">
                                        Co-founded a multi-tenant school management SaaS and lead its technical direction end to end. Architected the NestJS modular monolith with request-scoped tenant isolation and role-based access control, shipped the Next.js admin and parent portals alongside a React Native companion app, and set up the containerised deployment and infrastructure-as-code that runs it.
                                    </p>
                                </div>
                                <ul className="mt-3 flex flex-wrap" aria-label="Technologies used">
                                    <Technology name={"NestJS"} />
                                    <Technology name={"Next.js"} />
                                    <Technology name={"MySQL"} />
                                    <Technology name={"Redis / BullMQ"} />
                                    <Technology name={"Multi-Tenancy"} />
                                    <Technology name={"Docker"} />
                                    <Technology name={"Terraform"} />
                                </ul>
                            </div>
                        </div>
                    </li>

                    {/* Lendsqr */}
                    <li className="animate-slide-up">
                        <div
                            className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                            <div
                                className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-xl transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-glow lg:group-hover:drop-shadow-lg"></div>
                            <header
                                className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-primary-400 sm:col-span-2"
                                aria-label="September 2025 to May 2026">
                                Sep 2025 — May 2026
                            </header>
                            <div className="z-10 sm:col-span-6">
                                <h3 className="font-medium leading-snug text-slate-200 mb-2">
                                    <span className="gradient-text font-semibold">Full-Stack Engineer @ Lendsqr</span>
                                </h3>
                                <div className="glass rounded-lg p-4 mt-3">
                                    <p className="text-slate-300 text-sm leading-relaxed">
                                        Contributed the refactor of multiple core applications using Test-Driven Development (TDD), focusing on Savings and Services modules while implementing comprehensive Jest test suites that achieved 90%+ code coverage. Optimized several modules, enabling accurate interest accrual calculations and seamless transaction visibility, reducing discrepancies by over 90%.
                                    </p>
                                </div>
                                <ul className="mt-3 flex flex-wrap" aria-label="Technologies used">
                                    <Technology name={"Jest"} />
                                    <Technology name={"TDD"} />
                                    <Technology name={"Node.js"} />
                                    <Technology name={"Savings/Services Modules"} />
                                </ul>
                            </div>
                        </div>
                    </li>

                    {/* Thiscreet */}
                    <li className="animate-slide-up">
                        <div
                            className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                            <div
                                className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-xl transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-glow lg:group-hover:drop-shadow-lg"></div>
                            <header
                                className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-primary-400 sm:col-span-2"
                                aria-label="June 2024 to August 2025">
                                Jun 2024 — Aug 2025
                            </header>
                            <div className="z-10 sm:col-span-6">
                                <h3 className="font-medium leading-snug text-slate-200 mb-2">
                                    <span className="gradient-text font-semibold">Full-Stack Developer @ Thiscreet</span>
                                </h3>
                                <div className="glass rounded-lg p-4 mt-3">
                                    <p className="text-slate-300 text-sm leading-relaxed">
                                        Developed and maintained cross-platform mobile applications using React Native and Expo, resulting in a 30% increase in user engagement on Android and iOS. Implemented secure authentication and authorization using OAuth 2.0 and JWT, safeguarding sensitive user data.
                                    </p>
                                </div>
                                <ul className="mt-3 flex flex-wrap" aria-label="Technologies used">
                                    <Technology name={"React Native"} />
                                    <Technology name={"Expo"} />
                                    <Technology name={"OAuth 2.0"} />
                                    <Technology name={"JWT"} />
                                </ul>
                            </div>
                        </div>
                    </li>

                    {/* Rondwell (Volunteer) */}
                    <li className="animate-slide-up">
                        <div
                            className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                            <div
                                className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-xl transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-glow lg:group-hover:drop-shadow-lg"></div>
                            <header
                                className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-primary-400 sm:col-span-2"
                                aria-label="June 2025 to September 2025">
                                Jun 2025 — Sep 2025
                            </header>
                            <div className="z-10 sm:col-span-6">
                                <h3 className="font-medium leading-snug text-slate-200 mb-2">
                                    <span className="gradient-text font-semibold">Software Engineer (Volunteer) @ Rondwell</span>
                                </h3>
                                <div className="glass rounded-lg p-4 mt-3">
                                    <p className="text-slate-300 text-sm leading-relaxed">
                                        Architected and delivered an event-driven onboarding pipeline using RabbitMQ. Built a modern, security-forward authentication platform (OTP, JWT, Google OAuth, 2FA, Passkeys). Implemented comprehensive test coverage using Jest and Mocha.
                                    </p>
                                </div>
                                <ul className="mt-3 flex flex-wrap" aria-label="Technologies used">
                                    <Technology name={"RabbitMQ"} />
                                    <Technology name={"Google OAuth"} />
                                    <Technology name={"Jest"} />
                                    <Technology name={"Mocha"} />
                                    <Technology name={"WebAuthn"} />
                                </ul>
                            </div>
                        </div>
                    </li>

                    {/* Descriptomizer */}
                    <li className="animate-slide-up">
                        <div
                            className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                            <div
                                className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-xl transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-glow lg:group-hover:drop-shadow-lg"></div>
                            <header
                                className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-primary-400 sm:col-span-2"
                                aria-label="March 2025 to May 2025">
                                Mar 2025 — May 2025
                            </header>
                            <div className="z-10 sm:col-span-6">
                                <h3 className="font-medium leading-snug text-slate-200 mb-2">
                                    <span className="gradient-text font-semibold">Software Engineer @ Descriptomizer</span>
                                </h3>
                                <div className="glass rounded-lg p-4 mt-3">
                                    <p className="text-slate-300 text-sm leading-relaxed">
                                        Reduced SQL report generation time by 43% through query optimization. Automated site tracking for clients using cron jobs and AWS services. Improved data integrity by resolving 90%+ of client data discrepancies.
                                    </p>
                                </div>
                                <ul className="mt-3 flex flex-wrap" aria-label="Technologies used">
                                    <Technology name={"SQL"} />
                                    <Technology name={"AWS"} />
                                    <Technology name={"Cron Jobs"} />
                                    <Technology name={"Analytics"} />
                                </ul>
                            </div>
                        </div>
                    </li>

                    {/* Risidio */}
                    <li className="animate-slide-up">
                        <div
                            className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                            <div
                                className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-xl transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-glow lg:group-hover:drop-shadow-lg"></div>
                            <header
                                className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-primary-400 sm:col-span-2"
                                aria-label="January 2025 to May 2025">
                                Jan 2025 — May 2025
                            </header>
                            <div className="z-10 sm:col-span-6">
                                <h3 className="font-medium leading-snug text-slate-200 mb-2">
                                    <span className="gradient-text font-semibold">Full-Stack Developer @ Risidio</span>
                                </h3>
                                <div className="glass rounded-lg p-4 mt-3">
                                    <p className="text-slate-300 text-sm leading-relaxed">
                                        Engineered and deployed custom ERC-721 NFT smart contracts on Hedera using Hardhat and Solidity. Integrated IPFS for decentralized metadata storage. Developed a robust backend using NestJS.
                                    </p>
                                </div>
                                <ul className="mt-3 flex flex-wrap" aria-label="Technologies used">
                                    <Technology name={"Solidity"} />
                                    <Technology name={"Hardhat"} />
                                    <Technology name={"Hedera"} />
                                    <Technology name={"IPFS"} />
                                    <Technology name={"NestJS"} />
                                </ul>
                            </div>
                        </div>
                    </li>

                    {/* TenthDoc */}
                    <li className="animate-slide-up">
                        <div
                            className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                            <div
                                className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-xl transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-glow lg:group-hover:drop-shadow-lg"></div>
                            <header
                                className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-primary-400 sm:col-span-2"
                                aria-label="March 2024 to October 2024">
                                Mar 2024 — Oct 2024
                            </header>
                            <div className="z-10 sm:col-span-6">
                                <h3 className="font-medium leading-snug text-slate-200 mb-2">
                                    <span className="gradient-text font-semibold">Frontend Developer @ TenthDoc</span>
                                </h3>
                                <div className="glass rounded-lg p-4 mt-3">
                                    <p className="text-slate-300 text-sm leading-relaxed">
                                        Built reusable and scalable React components. Integrated frontend applications with backend services via RESTful APIs and optimized application performance through effective state management.
                                    </p>
                                </div>
                                <ul className="mt-3 flex flex-wrap" aria-label="Technologies used">
                                    <Technology name={"React.js"} />
                                    <Technology name={"RESTful APIs"} />
                                    <Technology name={"State Management"} />
                                </ul>
                            </div>
                        </div>
                    </li>

                    {/* ValueGate Consulting */}
                    <li className="animate-slide-up">
                        <div
                            className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                            <div
                                className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-xl transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-glow lg:group-hover:drop-shadow-lg"></div>
                            <header
                                className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-primary-400 sm:col-span-2"
                                aria-label="May 2024 to August 2024">
                                May 2024 — Aug 2024
                            </header>
                            <div className="z-10 sm:col-span-6">
                                <h3 className="font-medium leading-snug text-slate-200 mb-2">
                                    <span className="gradient-text font-semibold">Full-Stack Developer @ ValueGate Consulting</span>
                                </h3>
                                <div className="glass rounded-lg p-4 mt-3">
                                    <p className="text-slate-300 text-sm leading-relaxed">
                                        Developed and maintained server-side applications using Node.js and Express.js. Implemented security protocols including JWT authentication, SSL encryption, and Helmet.js. Conducted code reviews and improved system architecture.
                                    </p>
                                </div>
                                <ul className="mt-3 flex flex-wrap" aria-label="Technologies used">
                                    <Technology name={"Node.js"} />
                                    <Technology name={"Express.js"} />
                                    <Technology name={"JWT"} />
                                    <Technology name={"Helmet.js"} />
                                    <Technology name={"Security"} />
                                </ul>
                            </div>
                        </div>
                    </li>

                    {/* Freelance */}
                    <li className="animate-slide-up">
                        <div
                            className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                            <div
                                className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-xl transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-glow lg:group-hover:drop-shadow-lg"></div>
                            <header
                                className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-primary-400 sm:col-span-2"
                                aria-label="March 2021 to May 2024">
                                Mar 2021 — May 2024
                            </header>
                            <div className="z-10 sm:col-span-6">
                                <h3 className="font-medium leading-snug text-slate-200 mb-2">
                                    <span className="gradient-text font-semibold">Freelance Full-Stack & Python Developer</span>
                                </h3>
                                <div className="glass rounded-lg p-4 mt-3">
                                    <p className="text-slate-300 text-sm leading-relaxed">
                                        Developed and deployed scalable MERN stack applications, optimizing MongoDB and MySQL databases. Built automation tools, web scrapers, and real-time data applications.
                                    </p>
                                </div>
                                <ul className="mt-3 flex flex-wrap" aria-label="Technologies used">
                                    <Technology name={"MERN Stack"} />
                                    <Technology name={"Python"} />
                                    <Technology name={"Web Scraping"} />
                                    <Technology name={"Automation"} />
                                </ul>
                            </div>
                        </div>
                    </li>

                </ol>

                <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
                    <a
                        className="btn-primary inline-flex items-center gap-2"
                        href="/Iheanacho_Omelihunna_Resume.pdf"
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label="View My Résumé (opens in a new tab)"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                            <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                        </svg>
                        View My Résumé
                    </a>
                </div>
            </div>
        </section>
    )
}

export default WorkHistory;
