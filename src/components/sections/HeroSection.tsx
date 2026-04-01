// Server component — no 'use client' needed

import type React from 'react'

// ─── SVG decorations ──────────────────────────────────────────────────────────

function StarsSvg(): React.JSX.Element {
  return (
    <svg viewBox="0 0 120 85" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <polygon points="14,3 16.5,10.5 24,10.5 18,15 20.5,22 14,17.5 7.5,22 10,15 4,10.5 11.5,10.5" fill="#C8A84B" />
      <polygon points="68,0 71,9 80,9 73,14 76,23 68,18 60,23 63,14 56,9 65,9" fill="#C8A84B" />
      <polygon
        points="100,18 102.5,25 110,25 104,29.5 106.5,37 100,32.5 93.5,37 96,29.5 90,25 97.5,25"
        fill="#C8A84B"
        opacity="0.7"
      />
      <polygon
        points="30,48 32,54 38,54 33.5,57.5 35.5,63.5 30,60 24.5,63.5 26.5,57.5 22,54 28,54"
        fill="#C8A84B"
        opacity="0.85"
      />
      <polygon
        points="88,55 89.5,60 95,60 90.5,63 92,68 88,65.5 84,68 85.5,63 81,60 86.5,60"
        fill="#C8A84B"
        opacity="0.65"
      />
    </svg>
  )
}

function WaveSvg(): React.JSX.Element {
  return (
    <svg viewBox="0 0 160 55" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M5,38 C22,8 42,55 62,25 C82,-5 102,50 122,20 C138,2 150,22 158,17"
        stroke="#A6171C"
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}

function BinderClipSvg(): React.JSX.Element {
  return (
    <svg viewBox="0 0 44 68" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="6" y="36" width="32" height="26" rx="2" fill="#A6171C" />
      <path
        d="M14,36 L14,14 C14,9.6 17.6,6 22,6 C26.4,6 30,9.6 30,14 L30,36"
        stroke="#9E9E9E"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
      <rect x="6" y="36" width="32" height="8" fill="#8A1015" />
      <rect x="13" y="56" width="5" height="9" rx="1.5" fill="#8A1015" style={{ transform: 'rotate(-18deg)', transformOrigin: '15.5px 60.5px' }} />
      <rect x="26" y="56" width="5" height="9" rx="1.5" fill="#8A1015" style={{ transform: 'rotate(18deg)', transformOrigin: '28.5px 60.5px' }} />
    </svg>
  )
}

function FilmStripSvg(): React.JSX.Element {
  return (
    <svg viewBox="0 0 40 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="4" y="0" width="32" height="80" rx="2" fill="#1a1816" />
      <rect x="8" y="4" width="6" height="5" rx="1" fill="#F5F0E8" opacity="0.5" />
      <rect x="26" y="4" width="6" height="5" rx="1" fill="#F5F0E8" opacity="0.5" />
      <rect x="8" y="71" width="6" height="5" rx="1" fill="#F5F0E8" opacity="0.5" />
      <rect x="26" y="71" width="6" height="5" rx="1" fill="#F5F0E8" opacity="0.5" />
      <rect x="8" y="14" width="24" height="16" rx="1" fill="#F5F0E8" opacity="0.1" />
      <rect x="8" y="34" width="24" height="16" rx="1" fill="#F5F0E8" opacity="0.1" />
      <rect x="8" y="54" width="24" height="16" rx="1" fill="#F5F0E8" opacity="0.1" />
    </svg>
  )
}

function ProfileSvg(): React.JSX.Element {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="40" cy="27" r="17" fill="#A6171C" opacity="0.82" />
      <ellipse cx="40" cy="66" rx="26" ry="19" fill="#A6171C" opacity="0.82" />
    </svg>
  )
}

// ─── Section ──────────────────────────────────────────────────────────────────

export default function HeroSection(): React.JSX.Element {
  return (
    <section
      id="hero"
      className="relative flex min-h-svh items-center overflow-hidden pt-[68px]"
      aria-label="Introduction"
    >
      <div className="mx-auto w-full max-w-[1160px] px-5 lg:px-16">
        <div className="grid items-center gap-16 py-16 md:grid-cols-2 lg:gap-20">

          {/* ── Left: Text ── */}
          <div>
            <span
              className="font-hand mb-4 block text-[1.25rem] text-brand-red"
              style={{ transform: 'rotate(-1.2deg)' }}
            >
              Community Manager &amp; Communication
            </span>

            <h1
              className="font-display mb-6 font-black text-ink"
              style={{
                fontSize: 'clamp(4rem, 7.5vw, 7rem)',
                lineHeight: '0.93',
                letterSpacing: '-0.02em',
              }}
            >
              Juliette
              <br />
              <em className="text-brand-red not-italic">Féray.</em>
            </h1>

            <p className="mb-8 flex items-center gap-3 text-sm text-ink-light before:h-px before:w-8 before:bg-ink-light before:shrink-0">
              5 ans d&apos;expérience · Rouen, Normandie
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-ink px-8 py-3.5 text-sm font-medium tracking-wide text-paper shadow-[4px_4px_0_#A6171C] transition-all duration-200 hover:bg-brand-red hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#7D1115]"
              >
                Voir mes réalisations
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-ink/20 bg-transparent px-8 py-3.5 text-sm font-medium tracking-wide text-ink-mid transition-colors duration-200 hover:border-brand-red hover:text-brand-red"
              >
                Me contacter
              </a>
            </div>
          </div>

          {/* ── Right: Visual card ── */}
          <div
            className="relative hidden items-center justify-center md:flex"
            style={{ minHeight: '380px' }}
            aria-hidden="true"
          >
            {/* Main polaroid card */}
            <div
              className="relative z-10 max-w-[280px] bg-paper px-8 pb-10 pt-8 tape"
              style={{
                transform: 'rotate(2.5deg)',
                boxShadow: '7px 9px 0 #A6171C, 9px 11px 28px rgba(0,0,0,0.14)',
              }}
            >
              <div className="mx-auto mb-6 flex size-[120px] items-center justify-center rounded-full bg-cream">
                <ProfileSvg />
              </div>
              <p className="font-hand text-center text-[1.65rem] font-bold leading-tight text-ink">
                Juliette Féray
              </p>
              <p className="mt-1 text-center text-[0.72rem] tracking-[0.14em] uppercase text-ink-light">
                Community Manager
              </p>
              <div className="mt-5 flex justify-center">
                <span className="font-hand bg-brand-red px-3 py-0.5 text-sm text-paper">
                  Disponible ✓
                </span>
              </div>
            </div>

            {/* Floating stars */}
            <div
              className="deco absolute -top-4 -right-6 w-[110px] animate-floatDeco"
              style={{ '--r': '6deg' } as React.CSSProperties}
            >
              <StarsSvg />
            </div>

            {/* Wavy red line */}
            <div
              className="deco absolute bottom-5 -left-11 w-[150px] animate-floatDeco"
              style={
                {
                  animationDuration: '6s',
                  animationDelay: '-1s',
                  '--r': '-3deg',
                } as React.CSSProperties
              }
            >
              <WaveSvg />
            </div>

            {/* Binder clip */}
            <div
              className="deco absolute top-[36%] -right-11 w-[44px] animate-floatDeco"
              style={
                {
                  animationDuration: '3.8s',
                  animationDelay: '-0.5s',
                  '--r': '10deg',
                } as React.CSSProperties
              }
            >
              <BinderClipSvg />
            </div>

            {/* Film strip */}
            <div
              className="deco absolute -bottom-5 right-5 w-[60px] animate-floatDeco opacity-70"
              style={
                {
                  animationDuration: '7s',
                  animationDelay: '-2s',
                  '--r': '-5deg',
                } as React.CSSProperties
              }
            >
              <FilmStripSvg />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="font-hand absolute bottom-8 left-1/2 -translate-x-1/2 animate-scrollBounce flex flex-col items-center gap-1.5 text-[0.85rem] text-ink-light"
        aria-hidden="true"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M8 2 L8 14 M3 9 L8 14 L13 9"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span>Défiler</span>
      </div>
    </section>
  )
}
