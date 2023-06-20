'use client'

import { CreateApp } from '@/components/modules/home/create-app'
import { Features } from '@/components/modules/home/features'
import { HomeHero } from '@/components/modules/home/hero'
import { StructureExplanation } from '@/components/modules/home/structure-explanation'
import { SupportsOffered } from '@/components/modules/home/supports-offered'

export default function Home() {
  return (
    <div className="relative">
      {/* Blur */}
      <div className="absolute -z-10 h-screen w-1/2 -translate-x-1/2 rounded-full bg-gray-900 blur-full" />
      <HomeHero />
      <Features />
      <StructureExplanation />
      <SupportsOffered />
      <CreateApp />
    </div>
  )
}
