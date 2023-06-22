'use client'

import { CreateApp } from '@/components/pages/home/create-app'
import { Features } from '@/components/pages/home/features'
import { Hero } from '@/components/pages/home/hero'
import { Structure } from '@/components/pages/home/structure'
import { Supports } from '@/components/pages/home/supports'

export default function Home() {
  return (
    <div className="relative">
      {/* Blur */}
      <div className="absolute -z-10 h-screen w-1/2 -translate-x-1/2 rounded-full bg-gray-900 blur-full" />
      <Hero />
      <Features />
      <Structure />
      <Supports />
      <CreateApp />
    </div>
  )
}
