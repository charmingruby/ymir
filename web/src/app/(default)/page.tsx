'use client'

import { CTA } from '@/components/pages/Home/CTA'
import { Features } from '@/components/pages/Home/Features'
import { Hero } from '@/components/pages/Home/Hero'
import { Structure } from '@/components/pages/Home/Structure'
import { Supports } from '@/components/pages/Home/Supports'

export default function Home() {
  return (
    <div className="relative">
      {/* Blur */}
      <div className="absolute -z-10 h-screen w-1/2 -translate-x-1/2 rounded-full bg-gray-800 blur-full" />
      <Hero />
      <Features />
      <Structure />
      <Supports />
      <CTA />
    </div>
  )
}
