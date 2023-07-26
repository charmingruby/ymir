'use client'

import { WhyUs } from './components/why-us'
import { CTA } from './components/cta'
import { Features } from './components/features'
import { Hero } from './components/hero'
import { Informative } from './components/informative'

export default function Home() {
  return (
    <div className="relative">
      {/* Blur */}
      <div className="absolute -z-10 h-screen w-1/2 -translate-x-1/2 rounded-full bg-gray-800 blur-full" />

      <Hero />
      <WhyUs />
      <Features />
      <Informative />
      <CTA />
    </div>
  )
}
