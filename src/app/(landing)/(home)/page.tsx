import { HeroBlur } from '@/components/layout/landing/HeroBlur'
import { Hero } from './components/Hero'
import { WhyUs } from './components/WhyUs'
import { Features } from './components/Features'
import { Attractive } from './components/Attractive'
import { Plans } from './components/Plans'
import { CTA } from './components/CTA'
import { Products } from './components/Products'

export default function Home() {
  return (
    <>
      <div className="relative">
        <HeroBlur />

        <Hero />
        <WhyUs />
        <Features />
        <Plans />
        <Products />
        <Attractive />
        <CTA />
      </div>
    </>
  )
}
