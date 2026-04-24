export type Post = {
    id: string
    title: string
    slug: string
    caption: string | null
    cover_image: string | null
    status: 'draft' | 'published'
    tags: string[]
    technologies: string[]
    published_at: string | null
    created_at: string
    updated_at: string
}