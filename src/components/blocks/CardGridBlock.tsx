import { CardGridBlockConfig } from '@/types/blocks'
import { Section } from '@/types/section'
import { Post } from '@/types/post'
import Link from 'next/link'
import Image from 'next/image'

export default function CardGridBlock({
    config,
    posts = [],
}: {
    config: Section['config']
    posts?: Post[]
}) {
    const { count } = config as unknown as CardGridBlockConfig
    const displayPosts = posts.slice(0, count)

    return (
        <section className="w-full py-8 px-6">
            <div className="max-w-5xl mx-auto">
                {displayPosts.length === 0 && (
                    <p className="text-sm text-gray-400">No posts yet</p>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {displayPosts.map(post => (
                        <Link
                            key={post.id}
                            href={`/projects/${post.slug}`}
                            className="group border border-gray-200 rounded-lg overflow-hidden hover:border-gray-400 transition-colors"
                        >
                            {post.cover_image ? (
                                <div className="relative aspect-video bg-gray-100">
                                    <Image
                                        src={post.cover_image}
                                        alt={post.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            ) : (
                                <div className="aspect-video bg-gray-100" />
                            )}
                            <div className="p-4">
                                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-gray-600 transition-colors">
                                    {post.title}
                                </h3>
                                {post.caption && (
                                    <p className="mt-1 text-xs text-gray-500 line-clamp-2">{post.caption}</p>
                                )}
                                {post.tags && post.tags.length > 0 && (
                                    <div className="mt-3 flex flex-wrap gap-1">
                                        {post.tags.map(tag => (
                                            <span
                                                key={tag}
                                                className="px-2 py-0.5 bg-gray-100 text-gray-500 text-xs rounded-full"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}
                                {post.published_at && (
                                    <p className="mt-2 text-xs text-gray-400">
                                        {new Date(post.published_at).toLocaleDateString()}
                                    </p>
                                )}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}