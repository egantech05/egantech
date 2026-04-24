import { CardGridBlockConfig } from '@/types/blocks'
import { Section } from '@/types/section'

export default function CardGridBlock({ config }: { config: Section['config'] }) {
    const { count } = config as unknown as CardGridBlockConfig

    return (
        <section className="w-full py-8 px-6">
            <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* cards will be rendered here once we connect to Supabase */}
                    <p className="text-sm text-gray-400">No posts yet</p>
                </div>
            </div>
        </section>
    )
}