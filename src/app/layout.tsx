import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'gantech',
  description: 'shaping the future',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}