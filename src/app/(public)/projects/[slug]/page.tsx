import { createServerClient } from '@/lib/supabase/server'
import { renderBlock } from '@/components/blocks'
import { notFound } from 'next/navigation'

type Props = {
    params: { slug: string }
}

export default async function ProjectPage({ params }: Props) {
    const supabase = createServerClient()

    const { data: post } = await supabase
        .from('posts')
        .select('*')
        .eq('slug', params.slug)
        .eq('status', 'published')
        .single()

    if (!post) notFound()

    const { data: sections } = await supabase
        .from('sections')
        .select('*')
        .eq('post_id', post.id)
        .order('position', { ascending: true })

    return (
        <div>
            <div className="max-w-5xl mx-auto px-6 py-12">
                <h1 className="text-3xl font-bold tracking-tight">{post.title}</h1>
                {post.caption && (
                    <p className="mt-2 text-gray-600">{post.caption}</p>
                )}
            </div>
            <div>
                {sections?.map(section => (
                    <div key={section.id}>
                        {renderBlock(section)}
                    </div>
                ))}
            </div>
        </div>
    )
}