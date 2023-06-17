'use client'

import { Features } from '@/components/modules/home/features'
import { HomeHero } from '@/components/modules/home/hero'
import { ProjectsReferences } from '@/components/modules/home/projects-references'
import { StructureExplanation } from '@/components/modules/home/structure-explanation'
import { StartApp } from '@/components/modules/home/start-app'
import { AppSpecifications } from '@/components/modules/home/app-specifications'

export default function Home() {
  return (
    <div className="relative">
      {/* Blur */}
      <div className="absolute -z-10 h-screen w-2/3 -translate-x-1/2 rounded-full bg-gray-900 blur-full" />
      <HomeHero />
      <Features />
      <ProjectsReferences />
      <StructureExplanation />
      <AppSpecifications />

      <StartApp />
    </div>
  )
}
