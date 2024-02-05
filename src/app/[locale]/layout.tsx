import type { Metadata } from 'next'
import '@/styles/globals.css'
import { Syncopate, Gantari } from 'next/font/google'

import { NavigationSection } from '@/components/sections/nav-section'
import { Footer } from '@/components/sections/footer'

// i18n imports
import { unstable_setRequestLocale } from 'next-intl/server'
import { Locale } from '@/i18n'
import { cn } from '@/lib/utils'

const displayFont = Syncopate({
    subsets: ['latin'],
    display: 'swap',
    weight: ['400', '700'],
    variable: '--font-display',
})

const sansFont = Gantari({
    // Gantari is a variable font so we don't need to specify weights
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-sans',
})

// @todo: Add metadata
export const metadata: Metadata = {
    title: '',
    description: '',
}

type LocaleLayoutProps = Readonly<{
    children: React.ReactNode
    params: { locale: Locale }
}>
export default function LocaleLayout({
    children,
    params: { locale },
}: LocaleLayoutProps) {
    unstable_setRequestLocale(locale)

    return (
        <html
            lang={locale}
            className={cn(
                displayFont.variable,
                sansFont.variable,
                'antialiased',
            )}
        >
            <body className={''}>
                <NavigationSection />
                {children}
                <Footer />
            </body>
        </html>
    )
}
