'use client'

import type { FormEvent } from 'react'
import { useState } from 'react'

import Stamp from '@/components/ui/Stamp'
import type { FormStatus } from '@/types'
import { cn } from '@/utils/cn'

// ─── SVG icons ────────────────────────────────────────────────────────────────

function LocationIconSvg(): React.JSX.Element {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M10 2C7.24 2 5 4.24 5 7C5 10.75 10 18 10 18C10 18 15 10.75 15 7C15 4.24 12.76 2 10 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      <circle cx="10" cy="7" r="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </svg>
  )
}

function MailIconSvg(): React.JSX.Element {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect
        x="2"
        y="4"
        width="16"
        height="12"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M2 7L10 12L18 7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}

function PhoneIconSvg(): React.JSX.Element {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M5.5 3C5.5 3 6.5 2 7.5 3L9.5 6.5C10 7.5 9 8 9 9C9 10 11 12 12 12C13 12 13.5 11 14.5 11.5L18 13.5C19 14.5 18 15.5 18 15.5C15 18.5 3 7.5 5.5 3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  )
}

function TelephoneDecoSvg(): React.JSX.Element {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" aria-hidden="true">
      <path
        d="M18,14 C18,14 23,9 28,14 L35,25 C37,29 33,31 33,35 C33,39 43,49 47,49 C51,49 52,45 56,47 L67,54 C71,58 67,63 67,63 C54,76 8,30 18,14Z"
        stroke="#A6171C"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.7"
      />
      <path
        d="M53,12 C57,16 59,21 59,27"
        stroke="#A6171C"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity="0.4"
      />
      <path
        d="M59,7 C65,13 68,21 68,30"
        stroke="#A6171C"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.25"
      />
    </svg>
  )
}

// ─── Contact info data ────────────────────────────────────────────────────────

const CONTACT_INFO = [
  {
    icon: LocationIconSvg,
    label: 'Localisation',
    value: 'Rouen, Normandie',
  },
  {
    icon: MailIconSvg,
    label: 'Email',
    value: 'xxxxx.xxxxx@email.com',
  },
  {
    icon: PhoneIconSvg,
    label: 'Téléphone',
    value: '+33 6 00 00 00 00',
  },
] as const

// ─── Section ──────────────────────────────────────────────────────────────────

export default function ContactSection(): React.JSX.Element {
  const [status, setStatus] = useState<FormStatus>('idle')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    setStatus('submitting')

    // Simulated async submission
    await new Promise<void>((resolve) => setTimeout(resolve, 1500))
    setStatus('success')
  }

  return (
    <section id="contact" className="relative py-24 lg:py-36" aria-labelledby="contact-title">
      {/* Top dashed separator */}
      <div
        className="absolute inset-x-0 top-0 h-[3px] opacity-30"
        style={{
          backgroundImage:
            'repeating-linear-gradient(90deg, #A6171C 0px, #A6171C 20px, transparent 20px, transparent 30px)',
        }}
        aria-hidden="true"
      />

      {/* Subtle background tint */}
      <div className="bg-cream/40 absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1160px] px-5 lg:px-16">
        {/* Header */}
        <div className="mb-14">
          <Stamp>Contact</Stamp>
          <h2
            id="contact-title"
            className="font-display text-ink font-black"
            style={{ fontSize: 'clamp(2.4rem, 4vw, 3.6rem)' }}
          >
            Travaillons <em className="text-brand-red italic">ensemble</em>
          </h2>
          <p className="font-hand text-ink-light mt-3 max-w-[480px] text-[1.1rem]">
            Un projet, une collaboration, une question ? Je suis disponible et ravie
            d&apos;échanger.
          </p>
        </div>

        <div className="grid items-start gap-16 lg:grid-cols-[2fr_3fr]">
          {/* ── Info column ── */}
          <div>
            {/* Contact items */}
            <ul className="mb-10 space-y-5" aria-label="Coordonnées">
              {CONTACT_INFO.map(({ icon: Icon, label, value }) => (
                <li key={label} className="flex items-center gap-4">
                  <div
                    className="bg-brand-red text-paper flex size-10 shrink-0 items-center justify-center"
                    aria-hidden="true"
                  >
                    <Icon />
                  </div>
                  <div>
                    <p className="text-ink-light text-[0.7rem] tracking-[0.12em] uppercase">
                      {label}
                    </p>
                    <p className="text-ink text-[0.95rem] font-medium">{value}</p>
                  </div>
                </li>
              ))}
            </ul>

            {/* Deco telephone */}
            <div
              className="hidden opacity-60 lg:block"
              style={{ transform: 'rotate(-8deg)', width: '80px' }}
              aria-hidden="true"
            >
              <TelephoneDecoSvg />
            </div>

            {/* Availability note */}
            <div
              className="border-brand-red mt-8 inline-block border-l-[3px] pl-4"
              style={{ transform: 'rotate(-0.5deg)' }}
            >
              <p className="font-hand text-ink-light text-[1rem]">
                Disponible pour des missions
                <br />
                freelance dès maintenant ✓
              </p>
            </div>
          </div>

          {/* ── Form card ── */}
          <div
            className="bg-paper tape relative px-8 py-10"
            style={{
              boxShadow: '6px 8px 0 #A6171C, 8px 10px 24px rgba(0,0,0,0.10)',
              transform: 'rotate(0.3deg)',
            }}
          >
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-10 text-center">
                <div
                  className="bg-brand-red text-paper mb-4 flex size-16 items-center justify-center"
                  aria-hidden="true"
                >
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path
                      d="M5 14L11 20L23 8"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="font-display text-ink mb-2 text-[1.5rem] font-bold">
                  Message envoyé !
                </h3>
                <p className="font-hand text-ink-light text-[1.05rem]">
                  Merci, je reviendrai vers vous très bientôt.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => void handleSubmit(e)}
                noValidate
                aria-label="Formulaire de contact"
              >
                <div className="mb-6 grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="text-ink-light mb-1.5 block text-[0.75rem] tracking-[0.1em] uppercase"
                    >
                      Nom *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      required
                      autoComplete="name"
                      disabled={status === 'submitting'}
                      className={cn(
                        'border-ink/10 bg-cream w-full border px-4 py-3',
                        'text-ink placeholder:text-ink-light/50 text-[0.9rem]',
                        'transition-colors duration-200 outline-none',
                        'focus:border-brand-red',
                        'disabled:opacity-50'
                      )}
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="text-ink-light mb-1.5 block text-[0.75rem] tracking-[0.1em] uppercase"
                    >
                      Email *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      required
                      autoComplete="email"
                      disabled={status === 'submitting'}
                      className={cn(
                        'border-ink/10 bg-cream w-full border px-4 py-3',
                        'text-ink placeholder:text-ink-light/50 text-[0.9rem]',
                        'transition-colors duration-200 outline-none',
                        'focus:border-brand-red',
                        'disabled:opacity-50'
                      )}
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="contact-subject"
                    className="text-ink-light mb-1.5 block text-[0.75rem] tracking-[0.1em] uppercase"
                  >
                    Sujet
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    disabled={status === 'submitting'}
                    className={cn(
                      'border-ink/10 bg-cream w-full border px-4 py-3',
                      'text-ink placeholder:text-ink-light/50 text-[0.9rem]',
                      'transition-colors duration-200 outline-none',
                      'focus:border-brand-red',
                      'disabled:opacity-50'
                    )}
                    placeholder="Objet de votre message"
                  />
                </div>

                <div className="mb-8">
                  <label
                    htmlFor="contact-message"
                    className="text-ink-light mb-1.5 block text-[0.75rem] tracking-[0.1em] uppercase"
                  >
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    disabled={status === 'submitting'}
                    className={cn(
                      'border-ink/10 bg-cream w-full resize-none border px-4 py-3',
                      'text-ink placeholder:text-ink-light/50 text-[0.9rem]',
                      'transition-colors duration-200 outline-none',
                      'focus:border-brand-red',
                      'disabled:opacity-50'
                    )}
                    placeholder="Décrivez votre projet ou votre demande…"
                  />
                </div>

                <button
                  type="submit"
                  // disabled={status === 'submitting'}
                  disabled={true}
                  className={cn(
                    'bg-ink inline-flex cursor-pointer items-center gap-3 px-8 py-3.5',
                    'text-paper text-sm font-medium tracking-wide uppercase',
                    'shadow-[4px_4px_0_#A6171C] transition-all duration-200',
                    'hover:bg-brand-red hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#7D1115]',
                    'disabled:hover:bg-ink disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-x-0 disabled:hover:translate-y-0 disabled:hover:shadow-[4px_4px_0_#A6171C]'
                  )}
                >
                  {status === 'submitting' ? (
                    <>
                      <svg
                        className="animate-spin"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        aria-hidden="true"
                      >
                        <circle
                          cx="8"
                          cy="8"
                          r="6"
                          stroke="currentColor"
                          strokeWidth="2"
                          opacity="0.25"
                        />
                        <path
                          d="M8 2A6 6 0 0 1 14 8"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                      Envoi en cours…
                    </>
                  ) : (
                    'Envoyer le message'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
