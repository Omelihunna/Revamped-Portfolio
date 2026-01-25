const Footer = () => {
    return (
        <footer className="mt-16 pt-8 border-t border-slate-800/50 animate-fade-in">
            <div className="text-center">
                <p className="text-slate-400 text-sm">
                    © {new Date().getFullYear()} Iheanacho Omelihunna. <br /> Built with{' '}
                    <span className="text-red-400">❤️</span> and{' '}
                    <span className="gradient-text font-semibold">modern web technologies</span>
                </p>
            </div>
        </footer>
    )
}

export default Footer;