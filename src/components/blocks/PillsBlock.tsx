import { PillsBlockConfig } from '@/types/blocks'
import { Section } from '@/types/section'

export default function PillsBlock({ config }: { config: Section['config'] }) {
    const { title } = config as unknown as PillsBlockConfig

    return (
        <section className="w-full py-8 px-6">
            <div className="max-w-5xl mx-auto">
                {title && (
                    <p className="text-sm text-gray-500 mb-4">{title}</p>
                )}
                <div className="flex items-center gap-2 flex-wrap">
                    {/* pills will be rendered here once we connect to Supabase */}
                    <p className="text-sm text-gray-400">No tags yet</p>
                </div>
            </div>
        </section>
    )
}