import type { Metadata } from 'next'
import '@/styles/globals.css'

// @todo: Add metadata
export const metadata: Metadata = {
    title: '',
    description: '',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={''}>{children}</body>
        </html>
    )
}
