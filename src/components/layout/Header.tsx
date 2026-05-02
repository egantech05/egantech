
import Link from 'next/link'
import Logo from '@/components/ui/EgantechLogo'
import EganIcon from '@/components/ui/icons/EganIcon'
import ProjectIcon from '@/components/ui/icons/ProjectIcon'

export default function Header() {
    return (
        <header className="w-full top-0 z-50">
            <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
                <Link href="/">
                    <Logo className="h-5 w-auto text-gray-200" />
                </Link>
                <nav className="flex items-center gap-3">
                    {/*}
                    <Link
                        href="/"
                        style={{ width: '48px', height: '36px' }}
                        className="rounded-lg border border-gray-200 flex items-center justify-center text-gray-200 hover:text-gray-900 hover:border-gray-900 transition-colors"
                    >
                        <EganIcon className="h-5 w-auto" />
                    </Link>
                    */}
                    <Link
                        href="/projects"
                        className="  flex items-center justify-center gap-2 px-3 h-9 text-gray-200 hover:text-gray-900 hover:border-gray-900 transition-colors text-sm"
                    >
                        <ProjectIcon className="h-5 w-auto" /><span> Explore</span>
                    </Link>
                </nav>
            </div>
        </header>
    )
}