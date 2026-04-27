import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function PublicLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div
            className="min-h-screen flex flex-col"
            style={{
                backgroundImage: "url('/images/hero.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <Header />
            <main className="flex-1">
                {children}
            </main>
            <Footer />
        </div>
    )
}