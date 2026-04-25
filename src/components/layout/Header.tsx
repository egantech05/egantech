import Link from 'next/link'
import Logo from '@/components/ui/EgantechLogo'
import EgantechLogo from '@/components/ui/EgantechLogo'

export default function Header() {
    return (
        <header className="w-full border-b border-gray-100">
            <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
                <Link href="/" className="font-bold text-lg tracking-tight">
                    <EgantechLogo className="h-5 w-auto text-black" />
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