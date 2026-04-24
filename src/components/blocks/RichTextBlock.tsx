import { RichTextBlockConfig } from '@/types/blocks'
import { Section } from '@/types/section'

export default function RichTextBlock({ config }: { config: Section['config'] }) {
    const { content } = config as unknown as RichTextBlockConfig

    return (
        <section className="w-full py-8 px-6">
            <div className="max-w-5xl mx-auto prose">
                <p>{content}</p>
            </div>
        </section>
    )
}