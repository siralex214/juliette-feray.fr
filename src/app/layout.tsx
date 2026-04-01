import type { Metadata, Viewport } from 'next'
import { Caveat, DM_Sans, Playfair_Display } from 'next/font/google'

import './globals.css'

// ─── Fonts ───────────────────────────────────────────────────────────────────

const caveat = Caveat({
  variable: '--font-caveat',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '600', '700'],
})

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
  style: ['normal', 'italic'],
  weight: ['700', '900'],
})

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
  display: 'swap',
})

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: {
    default: 'Juliette Féray — Community Manager & Communication',
    template: '%s | Juliette Féray',
  },
  description:
    "Portfolio de Juliette Féray, Community Manager et Chargée de Communication. 5 ans d'expérience en communication digitale, photographie et gestion de contenu à Rouen.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    title: 'Juliette Féray — Community Manager & Communication',
    description: 'Portfolio · Community Management · Photographie · Stratégie digitale',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f5f0e8' },
    { media: '(prefers-color-scheme: dark)', color: '#1c1a17' },
  ],
}

// ─── Layout ───────────────────────────────────────────────────────────────────

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps): React.JSX.Element {
  return (
    <html
      lang="fr"
      className={`${caveat.variable} ${playfair.variable} ${dmSans.variable}`}
      suppressHydrationWarning
    >
      <body className="grain-overlay font-sans antialiased">{children}</body>
    </html>
  )
}
