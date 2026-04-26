'use client'
import { PillsBlockConfig } from '@/types/blocks'
import { Section } from '@/types/section'

export default function PillsBlock({
    config,
    tags = [],
    selectedTags = [],
    onTagClick,
}: {
    config: Section['config']
    tags?: string[]
    selectedTags?: string[]
    onTagClick?: (tag: string) => void
}) {
    const { title } = config as unknown as PillsBlockConfig

    return (
        <section className="w-full py-8 px-6">
            <div className="max-w-5xl mx-auto">
                {title && (
                    <p className="text-sm text-gray-500 mb-4">{title}</p>
                )}
                <div className="flex items-center gap-2 flex-wrap">
                    {tags.length === 0 && (
                        <p className="text-sm text-gray-400">No tags yet</p>
                    )}
                    {tags.map(tag => (
                        <button
                            key={tag}
                            onClick={() => onTagClick?.(tag)}
                            className={`px-3 py-1 rounded-full text-sm transition-colors ${selectedTags.includes(tag)
                                ? 'bg-gray-900 text-white'
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                        >
                            {tag}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    )
}