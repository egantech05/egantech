import { blockRegistry } from '@/lib/blocks/registry'
import { Section } from '@/types/section'

export function renderBlock(section: Section) {
    const Block = blockRegistry[section.block_type]

    if (!Block) {
        console.warn(`No block found for type: ${section.block_type}`)
        return null
    }

    return Block({ config: section.config })
}