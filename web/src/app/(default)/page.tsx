'use client'

import { ServicesDisplay } from '@/components/modules/home/services'
import { HomeHero } from '@/components/modules/home/hero'

export default function Home() {
  return (
    <div className="relative">
      {/* Blur */}
      <div className="absolute -z-10 h-screen w-2/3 -translate-x-1/2 rounded-full bg-gray-900 blur-full" />
      <HomeHero />
      <ServicesDisplay />
    </div>
  )
}
