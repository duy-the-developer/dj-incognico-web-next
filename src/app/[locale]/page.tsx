import { useTranslations } from 'next-intl'

export default function Home() {
    const formatMessage = useTranslations('Index')

    return <main className="">{formatMessage('title')}</main>
}
