import { SplitViewBlockConfig } from '@/types/blocks'
import { Section } from '@/types/section'
import Image from 'next/image'

export default function SplitViewBlock({ config }: { config: Section['config'] }) {
    const { image_url, description, image_position } = config as unknown as SplitViewBlockConfig

    return (
        <section className="w-full py-8 px-6">
            <div className={`max-w-5xl mx-auto flex flex-col md:flex-row gap-8 ${image_position === 'right' ? 'md:flex-row-reverse' : ''
                }`}>
                <div className="relative flex-1 aspect-video rounded-lg overflow-hidden bg-gray-100">
                    <Image
                        src={image_url}
                        alt="Split view image"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="flex-1 flex items-center">
                    <p className="text-gray-600 leading-relaxed">{description}</p>
                </div>
            </div>
        </section>
    )
}