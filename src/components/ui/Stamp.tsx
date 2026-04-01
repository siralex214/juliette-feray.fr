import type { ComponentPropsWithoutRef } from 'react'

import { cn } from '@/utils/cn'

interface StampProps extends ComponentPropsWithoutRef<'span'> {
  /** Light variant — white text/border for dark backgrounds */
  light?: boolean
}

/**
 * Section label styled like a hand-stamped badge with a slight rotation.
 * Used at the top of each section to identify it.
 *
 * @example
 * <Stamp>À propos</Stamp>
 * <Stamp light>Réalisations</Stamp>
 */
export default function Stamp({ light = false, className, children, ...props }: StampProps): React.JSX.Element {
  return (
    <span
      className={cn(
        'inline-block',
        'px-3 py-1',
        'text-[0.62rem] font-medium tracking-[0.22em] uppercase',
        'mb-5',
        light
          ? 'border border-paper/30 text-paper/60'
          : 'border border-brand-red text-brand-red stamp-border',
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}
