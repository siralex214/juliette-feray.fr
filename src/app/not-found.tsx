import type React from 'react'

import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Page introuvable',
}

export default function NotFound(): React.JSX.Element {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-cream px-8 text-center">
      <p className="font-hand text-2xl text-brand-red">Oops !</p>
      <h1 className="font-display text-8xl font-black tabular-nums text-ink">404</h1>
      <p className="text-lg text-ink-light">Cette page n&apos;existe pas.</p>
      <Link
        href="/"
        className="mt-2 bg-ink px-8 py-3 text-sm font-medium tracking-wide text-paper transition-colors hover:bg-brand-red"
      >
        ← Retour à l&apos;accueil
      </Link>
    </main>
  )
}
