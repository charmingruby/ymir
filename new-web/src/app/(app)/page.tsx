import { HeroBlur } from '@/components/layout/app/HeroBlur'
import { Hero } from './components/Hero'
import { WhyUs } from './components/WhyUs'
import { Features } from './components/Features'
import { Attractive } from './components/Attractive'
import { Plans } from './components/Plans'
import { CTA } from './components/CTA'

export default function Home() {
  return (
    <>
      <div className="relative">
        <HeroBlur />

        <div className="divide-y divide-gray-600">
          <Hero />
          <WhyUs />
          <Features />
          <Plans />
          <Attractive />
          <CTA />
        </div>
      </div>
    </>
  )
}
