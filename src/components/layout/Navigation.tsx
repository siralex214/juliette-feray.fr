'use client'

import { useEffect, useState } from 'react'

import { NAV_LINKS } from '@/lib/projects'
import { cn } from '@/utils/cn'

export default function Navigation(): React.JSX.Element {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = (): void => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    handler() // sync on mount
    return (): void => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav
      className={cn(
        'fixed inset-x-0 top-0 z-50 h-[68px]',
        'bg-cream/90 backdrop-blur-md',
        'border-b border-ink/10',
        'transition-shadow duration-300',
        scrolled && 'shadow-[0_2px_24px_rgba(28,26,23,0.08)]'
      )}
      aria-label="Navigation principale"
    >
      <div className="mx-auto flex h-full max-w-[1160px] items-center justify-between px-5 lg:px-16">
        {/* Logo */}
        <a
          href="#hero"
          className="font-hand text-[1.9rem] font-bold leading-none text-ink no-underline"
          aria-label="Juliette Féray — Accueil"
        >
          JF<span className="text-brand-red text-[1.3rem]">★</span>
        </a>

        {/* Links */}
        <ul className="hidden items-center gap-10 md:flex" role="list">
          {NAV_LINKS.map((link) =>
            link.isCtaButton ? (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    'bg-ink px-5 py-2',
                    'text-[0.8rem] font-medium tracking-wide text-paper uppercase',
                    'transition-colors duration-200',
                    'hover:bg-brand-red'
                  )}
                >
                  {link.label}
                </a>
              </li>
            ) : (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    'relative',
                    'text-[0.8rem] font-normal tracking-[0.1em] text-ink-mid uppercase',
                    'no-underline transition-colors duration-200',
                    'after:absolute after:-bottom-0.5 after:left-0',
                    'after:h-[1.5px] after:w-0 after:bg-brand-red',
                    'after:transition-[width] after:duration-200',
                    'hover:text-ink hover:after:w-full'
                  )}
                >
                  {link.label}
                </a>
              </li>
            )
          )}
        </ul>
      </div>
    </nav>
  )
}
