import { useEffect, useState } from "react";


const Header = () => {
    const [activeState, setActiveState] = useState<Record<string, boolean>>({
        about: false,
        experience: false,
        projects: false,
        websiteWork: false
    })


    useEffect(() => {
        const handleScroll = () => {
            const aboutSection = document.getElementById('about');
            const experienceSection = document.getElementById('experience');
            const projectsSection = document.getElementById('projects');
            const websiteWorkSection = document.getElementById('website-work');

            const aboutTop = aboutSection?.getBoundingClientRect().top ?? 0;
            const experienceTop = experienceSection?.getBoundingClientRect().top ?? 0;
            const projectsTop = projectsSection?.getBoundingClientRect().top ?? 0;
            const websiteWorkTop = websiteWorkSection?.getBoundingClientRect().top ?? 0;

            const updateActiveState = (section: string) => {
                setActiveState({
                    about: section === 'about',
                    experience: section === 'experience',
                    projects: section === 'projects',
                    websiteWork: section === 'websiteWork',
                });
            };

            // Adjusting the condition to include all sections
            if (aboutTop >= 0 && aboutTop < window.innerHeight / 2) {
                updateActiveState('about');
            } else if (experienceTop >= 0 && experienceTop < window.innerHeight / 2) {
                updateActiveState('experience');
            } else if (projectsTop >= 0 && projectsTop < window.innerHeight / 2) {
                updateActiveState('projects');
            } else if (websiteWorkTop >= 0 && websiteWorkTop < window.innerHeight / 2) {
                updateActiveState('websiteWork');
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('load', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('load', handleScroll);
        };
    }, []);


    return (
        <header
            className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:flex-col lg:justify-between lg:py-24 animate-fade-in">
            <div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl animate-slide-down">
                    <a href="/" className="gradient-text hover:scale-105 transition-transform duration-300 inline-block">
                        Iheanacho Omelihunna
                    </a>
                </h1>
                <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl animate-slide-up">
                    Full-Stack Engineer
                </h2>
                <p className="mt-4 max-w-xs leading-normal text-slate-300 animate-fade-in">
                    Full-Stack Engineer with expertise in Backend, Frontend, and Mobile development. Committed to building scalable, secure, and high-performance applications.
                </p>
                <nav className="nav hidden lg:block" aria-label="In-page jump links">
                    <ul className="mt-16 w-max space-y-2">
                        <li>
                            <a
                                className={`group flex items-center py-3 px-4 rounded-lg transition-all duration-300 hover:bg-slate-800/50 hover:backdrop-blur-sm ${activeState.about && 'active bg-slate-800/30 backdrop-blur-sm'}`}
                                href="#about"
                            >
                                <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-gradient-to-r group-hover:from-primary-400 group-hover:to-accent-400 group-focus-visible:w-16 group-focus-visible:bg-gradient-to-r group-focus-visible:from-primary-400 group-focus-visible:to-accent-400 motion-reduce:transition-none"></span>
                                <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200 transition-colors duration-300">About</span>
                            </a>
                        </li>
                        <li>
                            <a
                                className={`group flex items-center py-3 px-4 rounded-lg transition-all duration-300 hover:bg-slate-800/50 hover:backdrop-blur-sm ${activeState.experience && 'active bg-slate-800/30 backdrop-blur-sm'}`}
                                href="#experience"
                            >
                                <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-gradient-to-r group-hover:from-primary-400 group-hover:to-accent-400 group-focus-visible:w-16 group-focus-visible:bg-gradient-to-r group-focus-visible:from-primary-400 group-focus-visible:to-accent-400 motion-reduce:transition-none"></span>
                                <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200 transition-colors duration-300">Experience</span>
                            </a>
                        </li>
                        <li>
                            <a
                                className={`group flex items-center py-3 px-4 rounded-lg transition-all duration-300 hover:bg-slate-800/50 hover:backdrop-blur-sm ${activeState.websiteWork && 'active bg-slate-800/30 backdrop-blur-sm'}`}
                                href="#website-work"
                            >
                                <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-gradient-to-r group-hover:from-primary-400 group-hover:to-accent-400 group-focus-visible:w-16 group-focus-visible:bg-gradient-to-r group-focus-visible:from-primary-400 group-focus-visible:to-accent-400 motion-reduce:transition-none"></span>
                                <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200 transition-colors duration-300">Websites</span>
                            </a>
                        </li>
                        <li>
                            <a
                                className={`group flex items-center py-3 px-4 rounded-lg transition-all duration-300 hover:bg-slate-800/50 hover:backdrop-blur-sm ${activeState.projects && 'active bg-slate-800/30 backdrop-blur-sm'}`}
                                href="#projects"
                            >
                                <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-gradient-to-r group-hover:from-primary-400 group-hover:to-accent-400 group-focus-visible:w-16 group-focus-visible:bg-gradient-to-r group-focus-visible:from-primary-400 group-focus-visible:to-accent-400 motion-reduce:transition-none"></span>
                                <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200 transition-colors duration-300">Projects</span>
                            </a>
                        </li>

                    </ul>
                </nav>
            </div>
            <ul className="ml-1 mt-8 flex items-center space-x-4" aria-label="Social media">
                <li className="text-xs shrink-0">
                    <a
                        className="block p-2 rounded-lg hover:bg-slate-800/50 hover:backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:text-primary-400 group"
                        href="https://github.com/Omelihunna"
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label="GitHub (opens in a new tab)"
                        title="GitHub"
                    >
                        <span className="sr-only">GitHub</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-6 w-6 transition-all duration-300 group-hover:drop-shadow-glow"
                            aria-hidden="true"
                        >
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                        </svg>
                    </a>
                </li>
                <li className="text-xs shrink-0">
                    <a
                        className="block p-2 rounded-lg hover:bg-slate-800/50 hover:backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:text-primary-400 group"
                        href="mailto:omelihunna@gmail.com"
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label="Email (opens in a new tab)"
                        title="Email"
                    >
                        <span className="sr-only">Email</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-6 w-6 transition-all duration-300 group-hover:drop-shadow-glow"
                            aria-hidden="true"
                        >
                            <path d="M1.75 3h20.5c.966 0 1.75.784 1.75 1.75v14.5A1.75 1.75 0 0 1 22.25 21H1.75A1.75 1.75 0 0 1 0 19.25V4.75C0 3.784.784 3 1.75 3Zm0 1.5a.25.25 0 0 0-.25.25v14.5c0 .138.112.25.25.25h20.5a.25.25 0 0 0 .25-.25V4.75a.25.25 0 0 0-.25-.25H1.75Z"></path>
                            <path d="M22.5 4.75l-10.5 7.5-10.5-7.5"></path>
                            <path d="M12 14l10-7.3V19a.25.25 0 0 1-.25.25H2.25a.25.25 0 0 1-.25-.25V6.7l10 7.3Z"></path>
                        </svg>
                    </a>
                </li>
            </ul>
        </header>
    )
}

export default Header;