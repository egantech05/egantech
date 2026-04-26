'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase/client'
import { Post } from '@/types/post'
import { Technology } from '@/types/technology'
import CardGridBlock from '@/components/blocks/CardGridBlock'
import PillsBlock from '@/components/blocks/PillsBlock'
import LogoListBlock from '@/components/blocks/LogoListBlock'

export default function ProjectsPage() {
    const [posts, setPosts] = useState<Post[]>([])
    const [technologies, setTechnologies] = useState<Technology[]>([])
    const [allTags, setAllTags] = useState<string[]>([])
    const [selectedTags, setSelectedTags] = useState<string[]>([])
    const [selectedTechs, setSelectedTechs] = useState<string[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchData()
    }, [])

    async function fetchData() {
        const { data: postsData } = await supabase
            .from('posts')
            .select('*')
            .eq('status', 'published')
            .order('published_at', { ascending: false })

        const { data: techsData } = await supabase
            .from('technologies')
            .select('*')
            .order('name')

        if (postsData) {
            setPosts(postsData)
            const tags = [...new Set(postsData.flatMap(p => p.tags ?? []))]
            setAllTags(tags)
        }

        if (techsData) setTechnologies(techsData)
        setLoading(false)
    }

    function toggleTag(tag: string) {
        setSelectedTags(prev =>
            prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
        )
    }

    function toggleTech(id: string) {
        setSelectedTechs(prev =>
            prev.includes(id) ? prev.filter(t => t !== id) : [...prev, id]
        )
    }

    const filteredPosts = posts.filter(post => {
        const matchesTags =
            selectedTags.length === 0 ||
            selectedTags.every(tag => post.tags?.includes(tag))

        const matchesTechs =
            selectedTechs.length === 0 ||
            selectedTechs.every(id => post.technologies?.includes(id))

        return matchesTags && matchesTechs
    })

    if (loading) {
        return <div className="max-w-5xl mx-auto px-6 py-12 text-sm text-gray-400">Loading...</div>
    }

    return (
        <>


            <div className='bg-gray-500'>
                <LogoListBlock
                    config={{ title: '' }}
                    technologies={technologies}
                    selectedTechs={selectedTechs}
                    onTechClick={toggleTech}
                />
            </div>

            <PillsBlock
                config={{ title: '' }}
                tags={allTags}
                selectedTags={selectedTags}
                onTagClick={toggleTag}
            />

            {selectedTags.length > 0 || selectedTechs.length > 0 ? (
                <div className="max-w-5xl mx-auto px-6 pb-2">
                    <button
                        onClick={() => { setSelectedTags([]); setSelectedTechs([]) }}
                        className="text-xs text-gray-400 hover:text-gray-700 transition-colors"
                    >
                        Clear filters
                    </button>
                </div>
            ) : null}

            <CardGridBlock
                config={{ count: filteredPosts.length }}
                posts={filteredPosts}
            />
        </>
    )
}