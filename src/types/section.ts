export type Section = {
    id: string
    post_id: string
    position: number
    block_type: string
    config: Record<string, unknown>
    above_header: boolean
    created_at: string
}