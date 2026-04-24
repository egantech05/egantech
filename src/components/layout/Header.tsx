import Link from 'next/link'

export default function Header() {
    return (
        <header className="w-full border-b border-gray-100">
            <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
                <Link href="/" className="font-bold text-lg tracking-tight">
                    egantech
                </Link>
                <nav className="flex item-center gap-6">
                    <Link href="/" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                        Home
                    </Link>
                    <Link href="/projects" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                        Projects
                    </Link>
                </nav>
            </div>
        </header>
    )
}