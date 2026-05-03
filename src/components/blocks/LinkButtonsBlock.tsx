import Link from 'next/link'
import { Section } from '@/types/section'
import GitHubIcon from '@/components/ui/icons/GitHubIcon'
import WebIcon from '@/components/ui/icons/WebIcon'

export default function LinkButtonsBlock({ config }: { config: Section['config'] }) {
    const githubUrl = config.github_url as string | undefined
    const websiteUrl = config.website_url as string | undefined

    if (!githubUrl && !websiteUrl) return null

    return (
        <section className="w-full py-4 px-6">
            <div className="max-w-5xl mx-auto flex flex-wrap gap-3">
                {githubUrl && (
                    <Link
                        href={githubUrl}
                        target="_blank"
                        className="flex items-center gap-2 px-4 py-2 text-sm border border-gray-200 rounded-lg hover:border-gray-900 transition-colors"
                    >
                        <GitHubIcon className="h-4 w-4" />
                        GitHub
                    </Link>
                )}
                {websiteUrl && (
                    <Link
                        href={websiteUrl}
                        target="_blank"
                        className="flex items-center gap-2 px-4 py-2 text-sm border border-gray-200 rounded-lg hover:border-gray-900 transition-colors"
                    >
                        <WebIcon className="h-4 w-4" />
                        Visit Website
                    </Link>
                )}
            </div>
        </section>
    )
}
