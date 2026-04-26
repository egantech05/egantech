import HeroBlock from '@/components/blocks/HeroBlock'
import LogoListBlock from '@/components/blocks/LogoListBlock'
import PillsBlock from '@/components/blocks/PillsBlock'
import CardGridBlock from '@/components/blocks/CardGridBlock'
import { createServerClient } from '@/lib/supabase/server'

export default async function Home() {
  const supabase = createServerClient()

  const { data: posts } = await supabase
    .from('posts')
    .select('*')
    .eq('status', 'published')
    .order('published_at', { ascending: false })
    .limit(3)

  const { data: technologies } = await supabase
    .from('technologies')
    .select('*')
    .order('name')

  const allTags = posts
    ? [...new Set(posts.flatMap(post => post.tags ?? []))]
    : []

  return (
    <>
      <HeroBlock
        config={{
          use_logo: true,
          subheading: 'Developer . Innovator . Explorer',
          min_height: '500px',
        }}
      />
      <LogoListBlock
        config={{ title: '' }}
        technologies={technologies ?? []}
      />
      <PillsBlock
        config={{ title: 'Topics' }}
        tags={allTags}
      />
      <CardGridBlock
        config={{ count: 3 }}
        posts={posts ?? []}
      />
    </>
  )
}