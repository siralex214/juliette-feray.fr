import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Merge Tailwind CSS classes without conflicts.
 * Combines clsx for conditional classes + tailwind-merge for deduplication.
 *
 * @example
 * cn('px-4 py-2', isActive && 'bg-brand-red', 'px-6')
 * // → 'py-2 bg-brand-red px-6'  (px-4 overridden by px-6)
 */
export const cn = (...inputs: ClassValue[]): string => {
  return twMerge(clsx(inputs))
}
