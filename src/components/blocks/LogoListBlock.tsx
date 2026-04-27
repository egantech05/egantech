'use client'

import { LogoListBlockConfig } from '@/types/blocks'
import { Section } from '@/types/section'
import { Technology } from '@/types/technology'
import Image from 'next/image'

export default function LogoListBlock({
    config,
    technologies = [],
    selectedTechs = [],
    onTechClick,
    className = '',
    align = 'left',
}: {
    config: Section['config']
    technologies?: Technology[]
    selectedTechs?: string[]
    onTechClick?: (id: string) => void
    className?: string
    align?: 'left' | 'center'
}) {
    const { title } = config as unknown as LogoListBlockConfig
    const isInteractive = !!onTechClick

    return (
        <section className={`w-full py-8 px-6 border-b border-gray-100 ${className}`}>
            <div className="max-w-5xl mx-auto">
                {title && (
                    <p className="text-sm text-gray-500 mb-4">{title}</p>
                )}
                <div className={`flex items-center gap-6 flex-wrap ${align === 'center' ? 'justify-center' : 'justify-start'
                    }`}>
                    {technologies.length === 0 && (
                        <p className="text-sm text-gray-400">No technologies yet</p>
                    )}
                    {technologies.map(tech => (
                        <div
                            key={tech.id}
                            onClick={() => onTechClick?.(tech.id)}
                            className={`relative group flex items-center justify-center transition-opacity ${isInteractive ? 'cursor-pointer' : 'cursor-default'
                                } ${isInteractive && selectedTechs.length > 0 && !selectedTechs.includes(tech.id)
                                    ? 'opacity-30'
                                    : 'opacity-100'
                                }`}
                        >
                            {tech.logo_url ? (
                                <div className="relative h-8 w-auto">
                                    <Image
                                        src={tech.logo_url}
                                        alt={tech.name}
                                        height={32}
                                        width={0}
                                        sizes="100vw"
                                        style={{ width: 'auto', height: '32px' }}
                                        className={`h-8 w-auto object-contain transition-all ${isInteractive && selectedTechs.includes(tech.id)
                                            ? 'grayscale-0'
                                            : isInteractive
                                                ? 'grayscale hover:grayscale-0'
                                                : 'grayscale'
                                            }`}
                                    />
                                </div>
                            ) : (
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium transition-colors ${isInteractive && selectedTechs.includes(tech.id)
                                    ? 'bg-gray-900 text-white'
                                    : 'bg-gray-200 text-gray-500'
                                    }`}>
                                    {tech.name.charAt(0).toUpperCase()}
                                </div>
                            )}

                            {/* Tooltip */}
                            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
                                {tech.name}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}