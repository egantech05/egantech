import React from 'react'
import { Section } from '@/types/section'
import HeroBlock from '@/components/blocks/HeroBlock'
import LogoListBlock from '@/components/blocks/LogoListBlock'
import PillsBlock from '@/components/blocks/PillsBlock'
import CardGridBlock from '@/components/blocks/CardGridBlock'
import RichTextBlock from '@/components/blocks/RichTextBlock'
import GalleryBlock from '@/components/blocks/GalleryBlock'
import SplitViewBlock from '@/components/blocks/SplitViewBlock'
import ContactBlock from '@/components/blocks/ContactBlock'

export const blockRegistry: Record<string, React.ComponentType<{ config: Section['config'] }>> = {
    hero: HeroBlock,
    logo_list: LogoListBlock,
    pills: PillsBlock,
    card_grid: CardGridBlock,
    rich_text: RichTextBlock,
    gallery: GalleryBlock,
    split_view: SplitViewBlock,
    contact: ContactBlock,
}