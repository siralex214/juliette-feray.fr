import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Page introuvable',
}

export default function NotFound(): React.JSX.Element {
  return (
    <main className="bg-cream flex min-h-screen flex-col items-center justify-center gap-6 px-8 text-center">
      <p className="font-hand text-brand-red text-2xl">Oops !</p>
      <h1 className="font-display text-ink text-8xl font-black tabular-nums">404</h1>
      <p className="text-ink-light text-lg">Cette page n&apos;existe pas.</p>
      <Link
        href="/"
        className="bg-ink text-paper hover:bg-brand-red mt-2 px-8 py-3 text-sm font-medium tracking-wide transition-colors"
      >
        ← Retour à l&apos;accueil
      </Link>
    </main>
  )
}
