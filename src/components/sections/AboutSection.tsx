// Server component

import type React from 'react'

import Stamp from '@/components/ui/Stamp'

// ─── Skill chips data ─────────────────────────────────────────────────────────

const SKILLS = [
  { label: 'Community Management', rotation: '-2deg' },
  { label: 'Photographie', rotation: '1.5deg' },
  { label: 'Création de contenu', rotation: '-1deg' },
  { label: 'Stratégie digitale', rotation: '2.5deg' },
  { label: 'Design graphique', rotation: '-1.5deg' },
  { label: 'Réseaux sociaux', rotation: '1deg' },
] as const

// ─── SVG decorations ──────────────────────────────────────────────────────────

function MegaphoneSvg(): React.JSX.Element {
  return (
    <svg
      width="90"
      height="90"
      viewBox="0 0 90 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="8" y="34" width="22" height="22" rx="3" fill="#E5DDD0" />
      <rect
        x="8"
        y="34"
        width="22"
        height="22"
        rx="3"
        stroke="#C0B8A8"
        strokeWidth="1.5"
        fill="none"
      />
      <path d="M30,26 L70,14 L70,76 L30,64 Z" fill="#A6171C" opacity="0.85" />
      <path d="M30,26 L70,14 L70,76 L30,64 Z" stroke="#8A1015" strokeWidth="1" fill="none" />
      <ellipse cx="73" cy="45" rx="11" ry="18" fill="#A6171C" opacity="0.6" />
      <rect x="16" y="56" width="10" height="20" rx="2" fill="#C0B8A8" />
      <path
        d="M78,35 Q84,45 78,55"
        stroke="#A6171C"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity="0.4"
      />
      <path
        d="M82,30 Q91,45 82,60"
        stroke="#A6171C"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.25"
      />
    </svg>
  )
}

function CameraIconSvg(): React.JSX.Element {
  return (
    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" aria-label="Appareil photo">
      <rect
        x="4"
        y="12"
        width="30"
        height="20"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.4"
        fill="none"
      />
      <circle cx="19" cy="22" r="6" stroke="currentColor" strokeWidth="1.4" fill="none" />
      <circle cx="19" cy="22" r="2.5" fill="currentColor" opacity="0.25" />
      <rect
        x="13"
        y="8"
        width="12"
        height="5"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.4"
        fill="none"
      />
      <rect
        x="26"
        y="14"
        width="5"
        height="5"
        rx="1"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
      />
    </svg>
  )
}

function CoffeeIconSvg(): React.JSX.Element {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" aria-label="Café">
      <path
        d="M7,16 L7,26 Q7,30 11,30 L23,30 Q27,30 27,26 L27,16 Z"
        stroke="currentColor"
        strokeWidth="1.4"
        fill="none"
      />
      <path
        d="M27,19 Q33,19 33,23 Q33,27 27,27"
        stroke="currentColor"
        strokeWidth="1.4"
        fill="none"
      />
      <path
        d="M13,10 C13,6 16,6 16,3"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M19,10 C19,7 22,7 22,4"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}

function PhoneIconSvg(): React.JSX.Element {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" aria-label="Téléphone">
      <path
        d="M9,6 C9,6 11,4 13,6 L16,11 C17,13 15,14 15,16 C15,18 19,22 21,22 C23,22 23,20 25,21 L30,24 C32,26 30,28 30,28 C24,34 4,14 9,6Z"
        stroke="currentColor"
        strokeWidth="1.4"
        fill="none"
      />
    </svg>
  )
}

// ─── Section ──────────────────────────────────────────────────────────────────

export default function AboutSection(): React.JSX.Element {
  return (
    <section id="about" className="relative py-24 lg:py-36" aria-labelledby="about-title">
      {/* Top dashed separator */}
      <div
        className="absolute inset-x-0 top-0 h-0.75 opacity-35"
        style={{
          backgroundImage:
            'repeating-linear-gradient(90deg, #A6171C 0px, #A6171C 20px, transparent 20px, transparent 30px)',
        }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-290 px-5 lg:px-16">
        <div className="grid items-start gap-20 lg:grid-cols-[3fr_2fr]">
          {/* ── Text column ── */}
          <div>
            <Stamp>À propos</Stamp>

            <h2
              id="about-title"
              className="font-display text-ink mb-6 font-black"
              style={{ fontSize: 'clamp(2.4rem, 4vw, 3.6rem)' }}
            >
              Qui suis-<em className="text-brand-red italic">je</em>&nbsp;?
            </h2>

            <p className="text-ink-light mb-4 max-w-135">
              Passionnée par la communication digitale et la création de contenu, j&apos;accompagne
              marques et organisations dans le développement de leur présence en ligne depuis plus
              de 5 ans. Community manager de formation, je transforme vos idées en récits engageants
              et vos communautés en véritables ambassadeurs.
            </p>
            <p className="text-ink-light mb-8 max-w-135">
              De la gestion des réseaux sociaux à la production photographique, en passant par la
              conception d&apos;affiches et la stratégie de marque — j&apos;aime raconter des
              histoires qui résonnent et créer des identités visuelles qui marquent les esprits.
            </p>

            {/* Skill chips */}
            <ul className="mb-8 flex flex-wrap gap-2.5" aria-label="Compétences">
              {SKILLS.map(({ label, rotation }) => (
                <li
                  key={label}
                  className="font-hand border-ink bg-paper inline-block border px-3.5 py-1.5 text-base shadow-[2px_2px_0_#1C1A17]"
                  style={{ transform: `rotate(${rotation})` }}
                >
                  {label}
                </li>
              ))}
            </ul>

            {/* Experience badge */}
            <div
              className="bg-brand-red text-paper inline-flex items-baseline gap-2 px-6 py-3 shadow-[3px_3px_0_#7D1115]"
              style={{ transform: 'rotate(-1deg)' }}
              aria-label="5 ans d'expérience en communication"
            >
              <span className="font-display text-[2.8rem] leading-none font-black">5</span>
              <span className="text-[0.8rem] leading-tight opacity-88">
                ans d&apos;expérience
                <br />
                en communication
              </span>
            </div>
          </div>

          {/* ── Visual column ── */}
          <div className="hidden flex-col items-center gap-6 lg:flex" aria-hidden="true">
            {/* Polaroid card */}
            <div
              className="bg-paper tape polaroid-shadow relative max-w-50 px-3 pt-3 pb-11"
              style={{ transform: 'rotate(-4deg)' }}
            >
              <div className="bg-cream flex size-44 items-center justify-center">
                <MegaphoneSvg />
              </div>
              <p className="font-hand text-ink-light mt-3 text-center text-base">Communication !</p>
            </div>

            {/* Handwritten annotation */}
            <p
              className="font-hand text-brand-red text-[1.2rem]"
              style={{ transform: 'rotate(3deg)', marginTop: '-0.5rem' }}
            >
              ← C&apos;est moi !
            </p>

            {/* Small picto row */}
            <div className="text-ink flex items-center gap-6 opacity-55">
              <CameraIconSvg />
              <CoffeeIconSvg />
              <PhoneIconSvg />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
