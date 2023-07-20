'use client'

import { Advantages } from './components/advantages'
import { CTA } from './components/cta'
import { Features } from './components/features'
import { Hero } from './components/hero'
import { Supports } from './components/supports'

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
