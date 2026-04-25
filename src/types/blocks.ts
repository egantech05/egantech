export type HeroBlockConfig = {
    use_logo?: boolean
    heading?: string
    subheading?: string
    background_image?: string
    background_color?: string
    min_height?: string
}

export type RichTextBlockConfig = {
    content: string
}

export type GalleryBlockConfig = {
    images: string[]
}

export type SplitViewBlockConfig = {
    image_url: string
    description: string
    image_position: 'left' | 'right'
}

export type CardGridBlockConfig = {
    count: number
}

export type LogoListBlockConfig = {
    title: string
}

export type PillsBlockConfig = {
    title: string
}