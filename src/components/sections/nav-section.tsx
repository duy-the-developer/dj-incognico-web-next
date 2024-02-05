import React from 'react'
import { Container } from '@/components/container'
import { useTranslations } from 'next-intl'
import { Link } from '@/navigation'
import { cn } from '@/lib/utils'

const navItems = [
    {
        id: 2,
        label: 'about',
        href: '/',
    },
    {
        id: 1,
        label: 'home',
        href: '/',
    },
    {
        id: 3,
        label: 'contact',
        href: '/',
    },
]

export const NavigationSection = () => {
    const t = useTranslations('NavigationSection')

    return (
        <Container>
            <nav className="flex items-center justify-between py-4 lg:py-6">
                {navItems.map((item) => (
                    <Link
                        key={item.id}
                        href={item.href}
                        className={cn(
                            item.label === 'home' && 'h3 font-display',
                        )}
                    >
                        {t(item.label)}
                    </Link>
                ))}
            </nav>
        </Container>
    )
}
