import { Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './global.css'

const poppins = Poppins({
    weight: ['400', '600', '700', '800'],
    subsets: ['latin'],
    display: 'swap',
})

export const metadata: Metadata = {
    metadataBase: new URL('https://www.preicfesgratuito.com'),
    title: 'Pre ICFES Gratuito 📚🧑‍💻',
    description: 'Preicfes gratuito para jóvenes en Bogotá. Prepárate para las pruebas Saber 11 con simulacros y test vocacionales con IA.',
    keywords: ['preicfes', 'saber 11', 'icfes gratuito', 'bogotá', 'test vocacional', 'preparación icfes', 'simulacros icfes'],
    generator: 'v0.app',
    openGraph: {
        title: 'Pre ICFES Gratuito 📚🧑‍💻 | Prepárate para el Saber 11',
        description: 'Preicfes 100% gratuito para jóvenes. Prepárate con nuestra IA y test vocacionales.',
        url: 'https://www.preicfesgratuito.com',
        siteName: 'Pre ICFES Gratuito',
        locale: 'es_CO',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Pre ICFES Gratuito 📚🧑‍💻',
        description: 'Prepárate para las pruebas Saber 11. Preicfes gratuito para jóvenes.',
    },
    icons: {
        icon: [
            {
                url: '/icon-light-32x32.png',
                media: '(prefers-color-scheme: light)',
            },
            {
                url: '/icon-dark-32x32.png',
                media: '(prefers-color-scheme: dark)',
            },
            {
                url: '/icon.svg',
                type: 'image/svg+xml',
            },
        ],
        apple: '/apple-icon.png',
    },
}

export const viewport: Viewport = {
    colorScheme: 'light dark',
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: 'white' },
        { media: '(prefers-color-scheme: dark)', color: 'black' },
    ],
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="es">
            <head>
            </head>
            <body className={`${poppins.className} antialiased`} style={{ backgroundColor: '#f5f7fa', color: '#1f2a63' }}>
                {children}
                {process.env.NODE_ENV === 'production' && <Analytics />}
            </body>
        </html>
    )
}