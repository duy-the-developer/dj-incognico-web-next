import { notFound } from 'next/navigation'
import { getRequestConfig } from 'next-intl/server'

export const locales = ['en', 'fr']
export type Locale = (typeof locales)[number]
export const defaultLocale = 'en'
export const localePrefix = 'always' //default

export default getRequestConfig(async ({ locale }) => {
    if (!locales.includes(locale as any)) {
        return notFound()
    }

    return {
        messages: (await import(`../messages/${locale}.json`)).default,
    }
})
