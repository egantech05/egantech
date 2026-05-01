import HeroBlock from '@/components/blocks/HeroBlock'
import LogoListBlock from '@/components/blocks/LogoListBlock'
import PillsBlock from '@/components/blocks/PillsBlock'
import CardGridBlock from '@/components/blocks/CardGridBlock'
import ContactBlock from '@/components/blocks/ContactBlock'
import { createServerClient } from '@/lib/supabase/server'
import Link from 'next/link'
import Image from 'next/image'

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
    <div>
      <section
        className="w-full px-6 relative flex items-center"
        style={{
          minHeight: '750px',
          backgroundImage: "url('/images/background.gif')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
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
      <div className='bg-gray-800'>
        <LogoListBlock
          config={{ title: '' }}
          technologies={technologies ?? []}
          align="center"
        />
      </div>
      <PillsBlock
        config={{ title: '' }}
        tags={allTags}
      />
      <CardGridBlock
        config={{ count: 3 }}
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