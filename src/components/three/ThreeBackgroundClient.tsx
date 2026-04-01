'use client'

import type React from 'react'
import dynamic from 'next/dynamic'

// ssr: false est autorisé ici car ce fichier est un Client Component
const ThreeBackground = dynamic(() => import('@/components/three/ThreeBackground'), { ssr: false })

export default function ThreeBackgroundClient(): React.JSX.Element {
  return <ThreeBackground />
}
