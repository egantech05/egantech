import { GalleryBlockConfig } from '@/types/blocks'
import { Section } from '@/types/section'
import Image from 'next/image'

export default function GalleryBlock({ config }: { config: Section['config'] }) {
    const { images, height, width } = config as unknown as GalleryBlockConfig

    if (!images || images.length === 0) return null

    const isGif = (src: string) => src?.toLowerCase().endsWith('.gif')
    const hasHeight = !!height
    const hasWidth = !!width

    return (
        <section className="w-full py-8 px-6">
            <div className="max-w-5xl mx-auto">
                {images.length === 1 ? (
                    <div className="overflow-hidden rounded-lg"
                        style={{
                            width: hasWidth ? `${width}px` : '100%',
                            height: hasHeight ? `${height}px` : 'auto',
                        }}
                    >
                        <Image
                            src={images[0]}
                            alt="Gallery image"
                            width={width ?? 1200}
                            height={height ?? 0}
                            sizes="100vw"
                            unoptimized={isGif(images[0])}
                            style={{
                                width: hasWidth ? `${width}px` : '100%',
                                height: hasHeight ? `${height}px` : 'auto',
                                objectFit: hasHeight && hasWidth ? 'cover' : 'contain',
                            }}
                            className="rounded-lg"
                        />
                    </div>
                ) : (
                    <div
                        className="grid gap-4"
                        style={{ gridTemplateColumns: `repeat(${images.length}, 1fr)` }}
                    >
                        {images.map((src, index) => (
                            <div key={index} className="overflow-hidden rounded-lg">
                                <Image
                                    src={src}
                                    alt={`Gallery image ${index + 1}`}
                                    width={width ?? 600}
                                    height={height ?? 0}
                                    sizes="100vw"
                                    unoptimized={isGif(src)}
                                    style={{
                                        width: hasWidth ? `${width}px` : '100%',
                                        height: hasHeight ? `${height}px` : 'auto',
                                        objectFit: hasHeight && hasWidth ? 'cover' : 'contain',
                                    }}
                                    className="rounded-lg"
                                />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}