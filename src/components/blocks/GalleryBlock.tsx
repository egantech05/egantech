import { GalleryBlockConfig } from '@/types/blocks'
import { Section } from '@/types/section'
import Image from 'next/image'

export default function GalleryBlock({ config }: { config: Section['config'] }) {
    const { images } = config as unknown as GalleryBlockConfig

    return (
        <section className="w-full py-8 px-6">
            <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {images?.map((url, index) => (
                        <div key={index} className="relative aspect-video rounded-lg overflow-hidden bg-gray-100">
                            <Image
                                src={url}
                                alt={`Gallery image ${index + 1}`}
                                fill
                                className="object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}