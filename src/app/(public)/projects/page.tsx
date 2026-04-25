import PillsBlock from '@/components/blocks/PillsBlock'
import CardGridBlock from '@/components/blocks/CardGridBlock'

export default function ProjectsPage() {
    return (
        <>
            <div className="max-w-5xl mx-auto px-6 pt-12">
                <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
            </div>
            <PillsBlock
                config={{
                    title: 'Filter by topic',
                }}
            />
            <CardGridBlock
                config={{
                    count: 6,
                }}
            />
        </>
    )
}