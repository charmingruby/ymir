'use client'

import { CTA } from '@/components/pages/Home/CTA'
import { Advantages } from '@/components/pages/Home/Advantages'
import { Hero } from '@/components/pages/Home/Hero'
import { Features } from '@/components/pages/Home/Features'
import { Supports } from '@/components/pages/Home/Supports'

export default function Home() {
  return (
    <div className="relative">
      {/* Blur */}
      <div className="absolute -z-10 h-screen w-1/2 -translate-x-1/2 rounded-full bg-gray-800 blur-full" />

      <Hero />
      <Advantages />
      <Features />
      <Supports />
      <CTA />
    </div>
  )
}
