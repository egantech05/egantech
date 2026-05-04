import HeroBlock from '@/components/blocks/HeroBlock'
import LogoListBlock from '@/components/blocks/LogoListBlock'
import PillsBlock from '@/components/blocks/PillsBlock'
import CardGridBlock from '@/components/blocks/CardGridBlock'
import ContactBlock from '@/components/blocks/ContactBlock'
import { createServerClient } from '@/lib/supabase/server'
import Link from 'next/link'
import Image from 'next/image'


export const dynamic = 'force-dynamic'

export default async function Home() {
  const supabase = createServerClient()

  const { data: allPostTechs } = await supabase
    .from('posts')
    .select('technologies, tags')
    .eq('status', 'published')

  const { data: posts } = await supabase
    .from('posts')
    .select('*')
    .eq('status', 'published')
    .order('published_at', { ascending: false })
    .limit(5)

  const { data: technologies } = await supabase
    .from('technologies')
    .select('*')
    .order('name')

  const tagUsageCount = (allPostTechs ?? []).reduce<Record<string, number>>((acc, post) => {
    (post.tags ?? []).forEach((tag: string) => {
      acc[tag] = (acc[tag] ?? 0) + 1
    })
    return acc
  }, {})

  const allTags = Object.entries(tagUsageCount)
    .sort((a, b) => b[1] - a[1])
    .map(([tag]) => tag)



  const techUsageCount = (allPostTechs ?? []).reduce<Record<string, number>>((acc, post) => {
    (post.technologies ?? []).forEach((id: string) => {
      acc[id] = (acc[id] ?? 0) + 1
    })
    return acc
  }, {})

  const sortedTechnologies = [...(technologies ?? [])].sort(
    (a, b) => (techUsageCount[b.id] ?? 0) - (techUsageCount[a.id] ?? 0)
  )

  return (
    <div>

      <section
        className="px-6 relative flex items-center rounded-3xl overflow-hidden mx-4"
        style={{
          minHeight: '750px',
          backgroundImage: "url('/images/background.gif')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
        }}
      >

        <div className="max-w-5xl mx-auto">
          <Image
            src="/images/Egancece.png"
            alt="egantech"
            width={400}
            height={83}
            className="w-auto h-16"
            priority
          />
          <p className="text-xl font-bold mt-4 text-black">
            Developer . Innovator . Explorer
          </p>
        </div>
      </section>
      <div className=''>
        <LogoListBlock
          config={{ title: '' }}
          technologies={sortedTechnologies}
          align="center"
          showTooltip={false}
        />
      </div>
      <PillsBlock
        config={{ title: '' }}
        tags={allTags}
      />
      <CardGridBlock
        config={{ count: 5 }}
        posts={posts ?? []}
      />
      <div className="max-w-5xl mx-auto px-6 pb-16 flex justify-center">
        <Link
          href="/projects"
          className="px-6 py-2 border border-gray-200 text-sm text-gray-100 rounded-lg hover:border-gray-900 hover:text-gray-900 transition-colors"
        >
          View more
        </Link>
      </div>

      <div className="max-w-5xl mx-auto px-6 pb-16 flex justify-center">
        <ContactBlock
          config={{
            heading: 'Get in touch',
            subheading: 'Have a project in mind or just want to say hello?',
          }}
        />
      </div>


    </div>
  )
}