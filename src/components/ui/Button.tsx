import type { ComponentPropsWithoutRef } from 'react'

import { cn } from '@/utils/cn'

// ─── Types ────────────────────────────────────────────────────────────────────

type ButtonVariant = 'dark' | 'outline' | 'ghost'

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  variant?: ButtonVariant
  asChild?: false
}

interface ButtonAsAnchorProps extends ComponentPropsWithoutRef<'a'> {
  variant?: ButtonVariant
  href: string
  asChild: true
}

type Props = ButtonProps | ButtonAsAnchorProps

// ─── Variant styles ───────────────────────────────────────────────────────────

const variantStyles: Record<ButtonVariant, string> = {
  dark: [
    'bg-ink text-paper',
    'shadow-[4px_4px_0_#A6171C]',
    'hover:bg-brand-red hover:-translate-x-0.5 hover:-translate-y-0.5',
    'hover:shadow-[6px_6px_0_#7D1115]',
  ].join(' '),

  outline: [
    'bg-transparent text-ink border border-ink/20',
    'hover:border-brand-red hover:text-brand-red',
  ].join(' '),

  ghost: ['bg-transparent text-ink-light hover:text-ink'].join(' '),
}

// ─── Component ────────────────────────────────────────────────────────────────

const baseStyles = [
  'inline-flex items-center gap-2',
  'px-8 py-3.5',
  'text-sm font-medium tracking-wide',
  'transition-all duration-200',
  'cursor-pointer',
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2',
].join(' ')

export default function Button(props: Props): React.JSX.Element {
  const { variant = 'dark', className, children, ...rest } = props

  const classes = cn(baseStyles, variantStyles[variant], className)

  if ('asChild' in props && props.asChild) {
    const {
      asChild: _asChild,
      href,
      ...anchorRest
    } = rest as ComponentPropsWithoutRef<'a'> & {
      asChild: true
      href: string
    }
    return (
      <a href={href} className={classes} {...anchorRest}>
        {children}
      </a>
    )
  }

  const { asChild: _asChild, ...btnRest } = rest as ComponentPropsWithoutRef<'button'> & {
    asChild?: false
  }

  return (
    <button className={classes} {...btnRest}>
      {children}
    </button>
  )
}
