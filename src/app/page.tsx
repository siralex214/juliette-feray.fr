import type React from 'react'

import type { Metadata } from 'next'
import Footer from '@/components/layout/Footer'
import Navigation from '@/components/layout/Navigation'
import AboutSection from '@/components/sections/AboutSection'
import ContactSection from '@/components/sections/ContactSection'
import HeroSection from '@/components/sections/HeroSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import ThreeBackgroundClient from '@/components/three/ThreeBackgroundClient'

export const metadata: Metadata = {
  title: 'Accueil',
}

export default function HomePage(): React.JSX.Element {
  return (
    <>
      {/* Three.js ambient background — client component, renders above cream bg */}
      <ThreeBackgroundClient />

      {/* All page content sits above the Three.js canvas (z-10) */}
      <div className="relative z-10">
        <Navigation />
        <main>
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  )
}
