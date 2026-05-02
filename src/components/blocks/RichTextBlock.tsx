import ReactMarkdown from 'react-markdown'
import { RichTextBlockConfig } from '@/types/blocks'
import { Section } from '@/types/section'

export default function RichTextBlock({ config }: { config: Section['config'] }) {
    const { content } = config as unknown as RichTextBlockConfig

    return (
        <section className="w-full py-8">
            <div className="max-w-5xl mx-auto px-6">
                <div className="
                prose 
                prose-gray 
                max-w-none
                prose-p:text-gray-300
                prose-headings:text-gray-200
                prose-strong:text-gray-100
                ">
                    <ReactMarkdown>{content ?? ''}</ReactMarkdown>
                </div>
            </div>
        </section>
    )
}