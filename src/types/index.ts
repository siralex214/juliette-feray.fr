// ─── Global shared types ──────────────────────────────────────────────────────

/** Generic async function type */
export type AsyncFn<T = void> = () => Promise<T>

/** Make specific keys of T optional */
export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>

/** Make specific keys of T required */
export type RequiredBy<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>

/** API response wrapper */
export type ApiResponse<T> = { success: true; data: T } | { success: false; error: string }

// ─── Portfolio types ──────────────────────────────────────────────────────────

/** A placeholder photo frame inside a project panel */
export interface PhotoItem {
  id: string
  caption: string
  /** Inline style for the photo inner background gradient */
  bgGradient: string
  /** CSS rotation applied to the polaroid frame (e.g. '-2.5deg') */
  rotation: string
}

/** A project category displayed as a tab */
export interface Project {
  id: string
  label: string
  emoji: string
  title: string
  description: string
  longDescription: string
  tags: readonly string[]
  photos: readonly PhotoItem[]
}

/** Form submission state */
export type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

/** Nav link entry */
export interface NavLink {
  href: string
  label: string
  isCtaButton?: boolean
}
