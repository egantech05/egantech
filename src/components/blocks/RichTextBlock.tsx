import ReactMarkdown from 'react-markdown'
import { RichTextBlockConfig } from '@/types/blocks'
import { Section } from '@/types/section'

export default function RichTextBlock({ config }: { config: Section['config'] }) {
    const { content } = config as unknown as RichTextBlockConfig

    return (
        <section className="w-full py-8 px-6">
            <div className="max-w-5xl mx-auto prose prose-gray max-w-none">
                <ReactMarkdown>{content ?? ''}</ReactMarkdown>
            </div>
        </section>
    )
}