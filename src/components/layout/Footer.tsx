import EganIcon from '@/components/ui/icons/EganIcon'
import GitHubIcon from '@/components/ui/icons/GitHubIcon'
import LinkedInIcon from '@/components/ui/icons/LinkedInIcon'

export default function Footer() {
    return (
        <footer className="w-full border-t border-gray-100 py-8 px-6 mt-16">
            <div className="max-w-5xl mx-auto flex items-center justify-between">
                <div className="flex items-center gap-2">

                    <p className="text-sm text-gray-400">© {new Date().getFullYear()} </p>

                    <p className="text-sm text-gray-400">egantech</p>

                </div>
                <EganIcon className="h-5 w-auto text-gray-400" />
                <div className="flex items-center gap-6">
                    <a
                        href="https://linkedin.com/in/eganahmad"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-gray-400 hover:text-gray-900 transition-colors"
                    >
                        <LinkedInIcon className="h-5 w-5" />
                        LinkedIn
                    </a>
                    <a
                        href="https://github.com/egantech05"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-gray-400 hover:text-gray-900 transition-colors"
                    >
                        <GitHubIcon className="h-5 w-5" />
                        GitHub
                    </a>
                </div>
            </div>
        </footer>
    )
}