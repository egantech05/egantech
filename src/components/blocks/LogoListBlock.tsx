import { LogoListBlockConfig } from '@/types/blocks'
import { Section } from '@/types/section'

export default function LogoListBlock({ config }: { config: Section['config'] }) {
    const { title } = config as unknown as LogoListBlockConfig

    return (
        <section className="w-full py-8 px-6 border-b border-gray-100">
            <div className="max-w-5xl mx-auto">
                {title && (
                    <p className="text-sm text-gray-500 mb-4">{title}</p>
                )}
                <div className="flex items-center gap-8 flex-wrap">
                    {/* logos will be rendered here once we connect to Supabase */}
                    <p className="text-sm text-gray-400">No technologies yet</p>
                </div>
            </div>
        </section>
    )
}