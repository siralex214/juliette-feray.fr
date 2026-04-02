'use client'

import { useEffect, useState } from 'react'

import Image from 'next/image'

import Stamp from '@/components/ui/Stamp'
import { PROJECTS } from '@/lib/projects'
import type { PhotoItem, Project } from '@/types'
import { cn } from '@/utils/cn'

// ─── Sub-components ───────────────────────────────────────────────────────────

function CameraPlaceholderSvg(): React.JSX.Element {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <rect x="6" y="10" width="24" height="16" rx="2" fill="white" opacity="0.2" />
      <circle cx="18" cy="18" r="5" fill="white" opacity="0.3" />
      <circle cx="18" cy="18" r="2" fill="white" opacity="0.4" />
    </svg>
  )
}

interface LightboxProps {
  src: string
  alt: string
  onClose: () => void
}

function Lightbox({ src, alt, onClose }: LightboxProps): React.JSX.Element {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent): void => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={alt}
    >
      <button
        className="absolute top-4 right-4 cursor-pointer text-white/70 transition-colors hover:text-white"
        onClick={onClose}
        aria-label="Fermer"
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
      <div className="relative max-h-[90vh] max-w-[90vw]" onClick={(e) => e.stopPropagation()}>
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={900}
          className="max-h-[90vh] max-w-[90vw] object-contain"
        />
      </div>
    </div>
  )
}

interface PolaroidProps {
  photo: PhotoItem
  onPhotoClick: (src: string, caption: string) => void
}

function Polaroid({ photo, onPhotoClick }: PolaroidProps): React.JSX.Element {
  const cardStyle = {
    padding: '9px 9px 32px',
    '--polaroid-rotation': photo.rotation,
  } as React.CSSProperties

  const imageContent = (
    <div
      className="relative flex w-full items-center justify-center overflow-hidden"
      style={{ aspectRatio: '4/3', background: photo.bgGradient }}
    >
      {photo.link ? (
        <Image src={photo.link} alt={photo.caption} fill className="object-cover" />
      ) : (
        <CameraPlaceholderSvg />
      )}
    </div>
  )

  const caption = (
    <p className="font-hand text-ink-light mt-2 text-center text-[0.82rem]">{photo.caption}</p>
  )

  if (photo.externalLink) {
    return (
      <a
        href={photo.externalLink}
        target="_blank"
        rel="noopener noreferrer"
        className="polaroid-card bg-paper h-fit"
        style={cardStyle}
        aria-label={`Voir le lien externe : ${photo.caption}`}
      >
        {imageContent}
        {caption}
      </a>
    )
  }

  if (photo.link) {
    return (
      <button
        className="polaroid-card bg-paper cursor-zoom-in p-0 text-left"
        style={cardStyle}
        onClick={() => onPhotoClick(photo.link!, photo.caption)}
        aria-label={`Agrandir : ${photo.caption}`}
      >
        {imageContent}
        {caption}
      </button>
    )
  }

  return (
    <div className="polaroid-card bg-paper" style={cardStyle}>
      {imageContent}
      {caption}
    </div>
  )
}

interface PanelProps {
  project: Project
  onPhotoClick: (src: string, caption: string) => void
}

function ProjectPanel({ project, onPhotoClick }: PanelProps): React.JSX.Element {
  return (
    <div className="animate-panelIn grid gap-14 pt-12 pb-4 lg:grid-cols-[2fr_3fr]">
      {/* Info */}
      <div>
        <h3 className="font-display text-paper mb-4 text-[2rem] font-bold">{project.title}</h3>
        <p className="text-paper/65 mb-3 text-[0.925rem] leading-relaxed">{project.description}</p>
        <p className="text-paper/65 text-[0.925rem] leading-relaxed">{project.longDescription}</p>

        {/* Tags */}
        <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies et types de contenu">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="border-brand-red text-brand-red border px-2.5 py-1 text-[0.7rem] tracking-[0.12em] uppercase"
            >
              {tag}
            </li>
          ))}
        </ul>

        {/* Film strip decoration */}
        <div
          className="mt-8 flex h-3.5 items-stretch overflow-hidden rounded-sm opacity-40"
          style={{ background: '#1a1816' }}
          aria-hidden="true"
        >
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="bg-cream mx-0.75 my-0.5 h-2.5 w-2.5 shrink-0 rounded-sm" />
          ))}
        </div>
      </div>

      {/* Photo grid */}
      <div className="grid gap-[1.1rem]" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
        {project.photos.map((photo) => (
          <Polaroid key={photo.id} photo={photo} onPhotoClick={onPhotoClick} />
        ))}
      </div>
    </div>
  )
}

// ─── Section ──────────────────────────────────────────────────────────────────

export default function ProjectsSection(): React.JSX.Element {
  const [activeId, setActiveId] = useState<string>('rouen')
  const [lightbox, setLightbox] = useState<{ src: string; caption: string } | null>(null)

  const activeProject = PROJECTS.find((p) => p.id === activeId) ?? PROJECTS[0]

  return (
    <section
      id="projects"
      className="bg-ink text-paper relative overflow-hidden py-20 lg:py-28"
      aria-labelledby="projects-title"
    >
      {/* Red top accent */}
      <div className="bg-brand-red absolute inset-x-0 top-0 h-[5px]" aria-hidden="true" />

      <div className="mx-auto max-w-[1160px] px-5 lg:px-16">
        {/* Header */}
        <div className="mb-8">
          <Stamp light>Réalisations</Stamp>
          <h2
            id="projects-title"
            className="font-display text-paper font-black"
            style={{ fontSize: 'clamp(2.4rem, 4vw, 3.4rem)' }}
          >
            Mes <em className="text-brand-red italic">projets</em>
          </h2>
          <p className="font-hand text-paper/50 mt-3 flex items-center gap-3 text-[1.1rem]">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <polygon
                points="10,2 12,7.5 18,7.5 13.5,11 15.5,16.5 10,13 4.5,16.5 6.5,11 2,7.5 8,7.5"
                fill="#C8A84B"
              />
            </svg>
            Explorez mes différentes collaborations
          </p>
        </div>

        {/* ── Tabs ── */}
        <div
          className="border-paper/[0.12] flex flex-wrap border-b"
          role="tablist"
          aria-label="Catégories de projets"
        >
          {PROJECTS.map((project) => (
            <button
              key={project.id}
              role="tab"
              id={`tab-${project.id}`}
              aria-selected={activeId === project.id}
              aria-controls={`panel-${project.id}`}
              className={cn(
                'font-hand relative top-[1.5px] px-5 py-2.75 text-[1.05rem]',
                'border-paper/10 border border-b-0',
                'transition-all duration-200',
                activeId === project.id
                  ? 'bg-brand-red border-brand-red text-paper'
                  : 'bg-paper/4 text-paper/45 hover:bg-paper/8 hover:text-paper/70'
              )}
              onClick={(): void => setActiveId(project.id)}
            >
              {project.emoji} {project.label}
            </button>
          ))}
        </div>

        {/* ── Panel ── */}
        {PROJECTS.map((project) => (
          <div
            key={project.id}
            id={`panel-${project.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${project.id}`}
            hidden={activeId !== project.id}
          >
            {activeId === project.id && (
              <ProjectPanel
                project={activeProject}
                onPhotoClick={(src, caption) => setLightbox({ src, caption })}
              />
            )}
          </div>
        ))}
      </div>

      {/* ── Lightbox ── */}
      {lightbox && (
        <Lightbox src={lightbox.src} alt={lightbox.caption} onClose={() => setLightbox(null)} />
      )}
    </section>
  )
}
