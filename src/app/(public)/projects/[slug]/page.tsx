import { createServerClient } from '@/lib/supabase/server'
import { renderBlock } from '@/components/blocks'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Image from 'next/image'

type Props = {
    params: Promise<{ slug: string }>
    searchParams: Promise<{ preview?: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params
    const supabase = createServerClient()

    const { data: post } = await supabase
        .from('posts')
        .select('title, caption, cover_image')
        .eq('slug', slug)
        .single()

    if (!post) return {}

    return {
        title: `${post.title} | egantech`,
        description: post.caption ?? undefined,
        openGraph: {
            title: post.title,
            description: post.caption ?? undefined,
            images: post.cover_image ? [post.cover_image] : [],
        },
    }
}

export default async function ProjectPage({ params, searchParams }: Props) {
    const { slug } = await params
    const { preview } = await searchParams
    const isPreview = preview === 'true'
    const supabase = createServerClient()

    const query = supabase
        .from('posts')
        .select('*')
        .eq('slug', slug)

    if (!isPreview) {
        query.eq('status', 'published')
    }

    const { data: post } = await query.single()

    if (!post) notFound()

    const { data: sections } = await supabase
        .from('sections')
        .select('*')
        .eq('post_id', post.id)
        .order('position', { ascending: true })

    const { data: technologies } = post.technologies?.length
        ? await supabase
            .from('technologies')
            .select('*')
            .in('id', post.technologies)
        : { data: [] }

    const aboveSections = sections?.filter(s => s.above_header) ?? []
    const belowSections = sections?.filter(s => !s.above_header) ?? []

    return (
        <article>
            {isPreview && (
                <div className="w-full bg-yellow-400 text-yellow-900 text-sm font-medium text-center py-2 px-4">
                    Preview mode — this post is not published yet
                </div>
            )}

            {/* Sections above header */}
            {aboveSections.map(section => (
                <div key={section.id}>
                    {renderBlock(section)}
                </div>
            ))}

            {/* Post header */}
            <div className="max-w-5xl mx-auto px-6 py-12">
                <h1 className="text-3xl font-bold tracking-tight">{post.title}</h1>
                {post.caption && (
                    <p className="mt-2 text-gray-600">{post.caption}</p>
                )}
                {post.published_at && (
                    <p className="mt-2 text-sm text-gray-400">
                        {new Date(post.published_at).toLocaleDateString()}
                    </p>
                )}

                {post.tags && post.tags.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                        {post.tags.map((tag: string) => (
                            <span
                                key={tag}
                                className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}

                {technologies && technologies.length > 0 && (
                    <div className="mt-4 flex items-center gap-4 flex-wrap">
                        {technologies.map((tech: { id: string; name: string; logo_url: string | null }) => (
                            <div key={tech.id} className="relative group flex items-center justify-center">
                                {tech.logo_url ? (
                                    <Image
                                        src={tech.logo_url}
                                        alt={tech.name}
                                        width={0}
                                        height={0}
                                        sizes="100vw"
                                        style={{ width: 'auto', height: '24px' }}
                                        className="object-contain grayscale"
                                    />
                                ) : (
                                    <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-xs text-gray-500">
                                        {tech.name.charAt(0).toUpperCase()}
                                    </div>
                                )}
                                <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
                                    {tech.name}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Sections below header */}
            {belowSections.map(section => (
                <div key={section.id}>
                    {renderBlock(section)}
                </div>
            ))}
        </article>
    )
}