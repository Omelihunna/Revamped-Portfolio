const About = () => {
    return (
        <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 animate-fade-in"
            aria-label="About me">
            <div
                className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">About</h2>
            </div>
            <div className="space-y-6">
                <div className="glass rounded-xl p-6 animate-slide-up">
                    <p className="text-slate-300 leading-relaxed">
                        I am a Full-Stack Engineer with a strong background in Electrical & Electronics Engineering.
                        I specialize in building robust backend systems, dynamic frontend interfaces, and cross-platform mobile applications.
                        My expertise spans across Node.js, React, AWS, Docker, and Blockchain technologies.
                    </p>
                </div>

                <div className="glass rounded-xl p-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                    <p className="text-slate-300 leading-relaxed">
                        I have extensive experience in both backend and frontend development, working with technologies such as
                        <span className="gradient-text-primary font-semibold"> Node.js</span>, <span className="gradient-text-primary font-semibold">NestJS</span>, <span className="gradient-text-primary font-semibold">TypeScript</span>, <span className="gradient-text-primary font-semibold">React</span>,
                        <span className="gradient-text-primary font-semibold"> Next.js</span>, and <span className="gradient-text-primary font-semibold">Solidity</span>.
                        I am also proficient in cloud services like <span className="gradient-text-primary font-semibold">AWS</span> and containerization with <span className="gradient-text-primary font-semibold">Docker</span>.
                    </p>
                </div>

                {/* Education & Certs */}
                <div className="glass rounded-xl p-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                    <h3 className="text-lg font-semibold text-slate-200 mb-2">Education</h3>
                    <p className="text-slate-300 leading-relaxed">
                        Bachelor of Science (B.Sc.) — Electrical & Electronics Engineering (2024)
                    </p>

                    <h3 className="text-lg font-semibold text-slate-200 mt-4 mb-2">Certifications</h3>
                    <ul className="list-disc list-inside text-slate-300 text-sm space-y-1">
                        <li>Web Development Bootcamp — Udemy</li>
                        <li>100 Days of Code: Python Pro Bootcamp — Udemy</li>
                        <li>AWS Cloud Technical Essentials — Coursera</li>
                        <li>Git and GitHub Bootcamp — Udemy</li>
                        <li>Networking Basics — Cisco Networking Academy</li>
                        <li>Migrating to the AWS Cloud — Coursera</li>
                        <li>MATLAB, SIMULINK & SIMSCAPE Onramp — MathWorks</li>
                    </ul>
                </div>

                {/* Skills highlight section */}
                <div className="mt-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                    <h3 className="text-lg font-semibold text-slate-200 mb-4 gradient-text">Technical Skills</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {[
                            'Full-Stack Development',
                            'API Design',
                            'Database Design',
                            'Cloud Architecture',
                            'Performance Optimization',
                            'Team Leadership'
                        ].map((skill, index) => (
                            <div
                                key={skill}
                                className="tech-tag items-center justify-center flex px-3 py-2 rounded-lg text-sm font-medium text-slate-300 text-center transition-all duration-300 hover:scale-105"
                                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                            >
                                {skill}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;