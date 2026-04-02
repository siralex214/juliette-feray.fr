import type React from 'react'

export default function Footer(): React.JSX.Element {
  return (
    <footer className="bg-ink text-paper/45 py-9">
      <div className="mx-auto flex max-w-290 flex-wrap items-center justify-between gap-4 px-5 lg:px-16">
        <span className="font-hand text-paper text-[1.5rem]">JF★</span>
        <p className="text-[0.78rem]">
          © {new Date().getFullYear()} Juliette Féray — Community Manager &amp; Communication
        </p>
        <a
          href="#hero"
          className="text-paper/40 hover:text-brand-red text-[0.75rem] tracking-widest uppercase no-underline transition-colors duration-200"
          aria-label="Retour en haut de page"
        >
          ↑ Retour en haut
        </a>
      </div>
    </footer>
  )
}
