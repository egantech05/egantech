import HeroBlock from '@/components/blocks/HeroBlock'
import LogoListBlock from '@/components/blocks/LogoListBlock'
import PillsBlock from '@/components/blocks/PillsBlock'
import CardGridBlock from '@/components/blocks/CardGridBlock'

export default function Home() {
  return (
    <>
      <HeroBlock
        config={{
          heading: 'Egantech',
          subheading: 'shaping the future',
        }}
      />
      <LogoListBlock
        config={{
          title: 'Technologies',
        }}
      />
      <PillsBlock
        config={{
          title: 'Topics',
        }}
      />
      <CardGridBlock
        config={{
          count: 3,
        }}
      />
    </>
  )
}