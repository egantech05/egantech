export default function Footer() {
    return (
        <footer className="w-full border-t border-gray-100 py-8 px-6 mt-16">
            <div className="max-w-5xl mx-auto flex items-center justify-between">
                <p className="text-sm text-gray-400">© {new Date().getFullYear()} egantech</p>
                <div className="flex items-center gap-6">
                    <a href="https://linkedin.com/in/eganahmad" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-gray-900 transition-colors">
                        LinkedIn
                    </a>
                    <a href="https://github.com/egantech05" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-gray-900 transition-colors">
                        GitHub
                    </a>
                </div>
            </div>
        </footer>
    )
}