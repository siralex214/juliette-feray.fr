'use client'

import { useState } from 'react'

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

interface PolaroidProps {
  photo: PhotoItem
}

function Polaroid({ photo }: PolaroidProps): React.JSX.Element {
  return (
    <div
      className="polaroid-card bg-paper"
      style={
        {
          padding: '9px 9px 32px',
          '--polaroid-rotation': photo.rotation,
        } as React.CSSProperties
      }
    >
      <div
        className="flex w-full items-center justify-center overflow-hidden"
        style={{
          aspectRatio: '4/3',
          background: photo.bgGradient,
        }}
      >
        <CameraPlaceholderSvg />
      </div>
      <p className="font-hand mt-2 text-center text-[0.82rem] text-ink-light">{photo.caption}</p>
    </div>
  )
}

interface PanelProps {
  project: Project
}

function ProjectPanel({ project }: PanelProps): React.JSX.Element {
  return (
    <div className="animate-panelIn grid gap-14 pt-12 pb-4 lg:grid-cols-[2fr_3fr]">
      {/* Info */}
      <div>
        <h3 className="font-display mb-4 text-[2rem] font-bold text-paper">{project.title}</h3>
        <p className="mb-3 text-[0.925rem] leading-relaxed text-paper/65">{project.description}</p>
        <p className="text-[0.925rem] leading-relaxed text-paper/65">{project.longDescription}</p>

        {/* Tags */}
        <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies et types de contenu">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="border border-brand-red px-2.5 py-1 text-[0.7rem] tracking-[0.12em] uppercase text-brand-red"
            >
              {tag}
            </li>
          ))}
        </ul>

        {/* Film strip decoration */}
        <div
          className="mt-8 flex h-[14px] items-stretch overflow-hidden rounded-sm opacity-40"
          style={{ background: '#1a1816' }}
          aria-hidden="true"
        >
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="my-[2px] mx-[3px] h-[10px] w-[10px] shrink-0 rounded-sm bg-cream"
            />
          ))}
        </div>
      </div>

      {/* Photo grid */}
      <div
        className="grid gap-[1.1rem]"
        style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}
      >
        {project.photos.map((photo) => (
          <Polaroid key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  )
}

// ─── Section ──────────────────────────────────────────────────────────────────

export default function ProjectsSection(): React.JSX.Element {
  const [activeId, setActiveId] = useState<string>('photo')

  const activeProject = PROJECTS.find((p) => p.id === activeId) ?? PROJECTS[0]

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-ink py-20 text-paper lg:py-28"
      aria-labelledby="projects-title"
    >
      {/* Red top accent */}
      <div className="absolute inset-x-0 top-0 h-[5px] bg-brand-red" aria-hidden="true" />

      <div className="mx-auto max-w-[1160px] px-5 lg:px-16">
        {/* Header */}
        <div className="mb-8">
          <Stamp light>Réalisations</Stamp>
          <h2
            id="projects-title"
            className="font-display font-black text-paper"
            style={{ fontSize: 'clamp(2.4rem, 4vw, 3.4rem)' }}
          >
            Mes <em className="italic text-brand-red">projets</em>
          </h2>
          <p className="font-hand mt-3 flex items-center gap-3 text-[1.1rem] text-paper/50">
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
          className="flex flex-wrap border-b border-paper/[0.12]"
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
                'font-hand relative top-[1.5px] px-5 py-[11px] text-[1.05rem]',
                'border border-paper/10 border-b-0',
                'transition-all duration-200',
                activeId === project.id
                  ? 'bg-brand-red border-brand-red text-paper'
                  : 'bg-paper/[0.04] text-paper/45 hover:bg-paper/[0.08] hover:text-paper/70'
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
            {activeId === project.id && <ProjectPanel project={activeProject} />}
          </div>
        ))}
      </div>
    </section>
  )
}
