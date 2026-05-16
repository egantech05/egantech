import HeroBlock from '@/components/blocks/HeroBlock'
import LogoListBlock from '@/components/blocks/LogoListBlock'
import PillsBlock from '@/components/blocks/PillsBlock'
import CardGridBlock from '@/components/blocks/CardGridBlock'
import ContactBlock from '@/components/blocks/ContactBlock'
import { createServerClient } from '@/lib/supabase/server'
import Link from 'next/link'
import Image from 'next/image'
import Animation from '@/components/ui/Animation'
import Logo from '@/components/ui/EgantechLogo'


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
    .limit(6)

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

      <section className="px-6 relative flex items-center rounded-3xl overflow-hidden mx-4" style={{ minHeight: '750px' }}>

        <Animation type="fade" delay={0} duration={5000} className="absolute inset-0 z-[1]">
          <div style={{ position: 'absolute', inset: 0, backgroundImage: "url('/images/heroBackground/background.png')", backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        </Animation>
        <Animation type="fade" delay={0} duration={5000} className="absolute inset-0 z-[8]">
          <div style={{ position: 'absolute', inset: 0, backgroundImage: "url('/images/heroBackground/standing.png')", backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        </Animation>

        <Animation type="slideRight" delay={600} duration={5000} className="absolute inset-0 z-[6]">
          <div style={{ position: 'absolute', inset: 0, backgroundImage: "url('/images/heroBackground/left.png')", backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        </Animation>
        <Animation type="slideLeft" delay={600} duration={5000} className="absolute inset-0 z-[7]">
          <div style={{ position: 'absolute', inset: 0, backgroundImage: "url('/images/heroBackground/right.png')", backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        </Animation>
        <Animation type="fade" delay={2000} duration={5000} className="absolute inset-0 z-[2]">
          <div style={{ position: 'absolute', inset: 0, backgroundImage: "url('/images/heroBackground/aki.png')", backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        </Animation>

        <Animation type="slideRight" delay={4000} duration={5000} className="absolute inset-0 z-[5]">
          <div style={{ position: 'absolute', inset: 0, backgroundImage: "url('/images/heroBackground/cloudtop.png')", backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        </Animation>
        <Animation type="slideLeft" delay={4000} duration={5000} className="absolute inset-0 z-[4]">
          <div style={{ position: 'absolute', inset: 0, backgroundImage: "url('/images/heroBackground/cloudmid.png')", backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        </Animation>
        <Animation type="slideRight" delay={4000} duration={5000} className="absolute inset-0 z-[3]">
          <div style={{ position: 'absolute', inset: 0, backgroundImage: "url('/images/heroBackground/cloudbottom.png')", backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        </Animation>
        {/* Content on top */}
        <div className="relative max-w-5xl mx-auto flex flex-col justify-center items-center text-center" style={{ zIndex: 10 }}>
          <Animation type="fade" delay={100} duration={3000}>
            <Logo className="w-auto text-zinc-800" />
            <p className="text-xl font-bold mt-4 text-zinc-800">
              Developer . Innovator . Explorer
            </p>
          </Animation>
        </div>

      </section>

      <div className=''>
        <Animation type="slideRight" delay={500} duration={3000}>
          <LogoListBlock
            config={{ title: '' }}
            technologies={sortedTechnologies}
            align="center"
            showTooltip={false}
          />
        </Animation>
      </div>
      <Animation delay={500} duration={3000}>
        <PillsBlock
          config={{ title: '' }}
          tags={allTags}
        />
      </Animation>

      <Animation type="slideLeft" delay={500} duration={5000}>
        <CardGridBlock
          config={{ count: 6 }}
          posts={posts ?? []}
        />
      </Animation>

      <div className="max-w-5xl mx-auto px-6 pb-16 flex justify-center">
        <Link
          href="/projects"
          className="px-6 py-2 border border-gray-200 text-sm text-gray-100 rounded-lg hover:bg-gray-300 hover:text-gray-900 transition-colors"
        >
          View more
        </Link>
      </div>


      <Animation duration={3000}>
        <div className="max-w-5xl mx-auto px-6 pb-16 flex justify-center">
          <ContactBlock
            config={{
              heading: 'Get in touch',
              subheading: 'Have a project in mind or just want to say hello?',
            }}
          />
        </div>
      </Animation>


    </div>
  )
}