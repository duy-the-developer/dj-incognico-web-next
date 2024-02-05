import { useTranslations } from 'next-intl'
import { Main } from './main'

export default function Home() {
    const formatMessage = useTranslations('Index')

    return (
        <main className="">
            <Main />
        </main>
    )
}
