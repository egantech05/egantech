
import Link from 'next/link'
import Logo from '@/components/ui/EgantechLogo'
import EganIcon from '@/components/ui/icons/EganIcon'
import ProjectIcon from '@/components/ui/icons/ProjectIcon'

export default function Header() {
    return (
        <header className="w-full border-b border-gray-100">
            <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
                <Link href="/">
                    <Logo className="h-5 w-auto text-black" />
                </Link>
                <nav className="flex items-center gap-3">
                    <Link
                        href="/"
                        style={{ width: '48px', height: '36px' }}
                        className="rounded-lg border border-gray-300 flex items-center justify-center text-gray-400 hover:text-gray-900 hover:border-gray-900 transition-colors"
                    >
                        <EganIcon className="h-5 w-auto" />
                    </Link>
                    <Link
                        href="/projects"
                        style={{ width: '48px', height: '36px' }}
                        className="rounded-lg border border-gray-300 flex items-center justify-center text-gray-400 hover:text-gray-900 hover:border-gray-900 transition-colors"
                    >
                        <ProjectIcon className="h-5 w-auto" />
                    </Link>
                </nav>
            </div>
        </header>
    )
}