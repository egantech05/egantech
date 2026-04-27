import EgantechLogo from '@/components/ui/EgantechLogo'
import { HeroBlockConfig } from '@/types/blocks'
import { Section } from '@/types/section'

export default function HeroBlock({ config }: { config: Section['config'] }) {
    const {
        use_logo,
        heading,
        subheading,
        background_image,
        background_color,
        min_height,
    } = config as unknown as HeroBlockConfig

    return (
        <section
            className="w-full px-6 relative flex items-center"
            style={{
                backgroundColor: 'transparent',
                backgroundImage: background_image ? `url(${background_image})` : undefined,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: min_height ?? '400px',
            }}
        >
            {/* dark overlay when background image is present */}
            {background_image && (
                <div className="absolute inset-0 bg-white/50" />
            )}

            <div className="max-w-5xl mx-auto relative z-10">
                {use_logo && <EgantechLogo className="h-16 w-auto text-gray-600 opacity-30" />}
                {heading && (
                    <h1 className="text-4xl font-bold tracking-tight">{heading}</h1>
                )}
                {subheading && (
                    <p className={`text-xl font-bold mt-4 ${background_image ? 'text-gray-600' : 'text-gray-600'}`}>
                        {subheading}
                    </p>
                )}
            </div>
        </section>
    )
}