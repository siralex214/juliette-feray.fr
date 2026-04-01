import type React from 'react'

export default function Footer(): React.JSX.Element {
  return (
    <footer className="bg-ink py-9 text-paper/45">
      <div className="mx-auto flex max-w-[1160px] flex-wrap items-center justify-between gap-4 px-5 lg:px-16">
        <span className="font-hand text-[1.5rem] text-paper">JF★</span>
        <p className="text-[0.78rem]">
          © {new Date().getFullYear()} Juliette Féray — Community Manager &amp; Communication
        </p>
        <a
          href="#hero"
          className="text-[0.75rem] tracking-[0.1em] uppercase text-paper/40 no-underline transition-colors duration-200 hover:text-brand-red"
          aria-label="Retour en haut de page"
        >
          ↑ Retour en haut
        </a>
      </div>
    </footer>
  )
}
