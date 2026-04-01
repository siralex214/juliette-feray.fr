'use client'

import dynamic from 'next/dynamic'
import type React from 'react'

// ssr: false est autorisé ici car ce fichier est un Client Component
const ThreeBackground = dynamic(() => import('@/components/three/ThreeBackground'), { ssr: false })

export default function ThreeBackgroundClient(): React.JSX.Element {
  return <ThreeBackground />
}
