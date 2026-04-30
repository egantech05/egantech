import { HeroBlockConfig } from '@/types/blocks'
import { Section } from '@/types/section'
import Image from 'next/image'

export default function HeroBlock({ config }: { config: Section['config'] }) {
    const { image, height } = config as unknown as HeroBlockConfig

    const isGif = image?.toLowerCase().endsWith('.gif')

    return (
        <section
            className="w-full overflow-hidden"
            style={height ? { height: `${height}px` } : undefined}
        >
            {image ? (
                <Image
                    src={image}
                    alt="Hero image"
                    width={0}
                    height={0}
                    sizes="100vw"
                    unoptimized={isGif}
                    className="w-full h-full object-cover"
                    style={!height ? { height: 'auto' } : undefined}
                />
            ) : (
                <div style={{ height: height ? `${height}px` : '400px' }} />
            )}
        </section>
    )
}