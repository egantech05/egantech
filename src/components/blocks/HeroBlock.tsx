import { HeroBlockConfig } from '@/types/blocks'
import { Section } from '@/types/section'

export default function HeroBlock({ config }: { config: Section['config'] }) {
    const { heading, subheading } = config as unknown as HeroBlockConfig

    return (
        <section className="w-full bg-gray-100 py-24 px-6">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-4xl font-bold tracking-tight">{heading}</h1>
                {subheading && (
                    <p className="mt-4 text-gray-600 text-lg">{subheading}</p>
                )}
            </div>
        </section>
    )
}