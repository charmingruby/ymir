import { Attractive } from '@/components/pages/landing/home/Attractive'
import { CTA } from '@/components/pages/landing/home/CTA'
import { Features } from '@/components/pages/landing/home/Features'
import { Hero } from '@/components/pages/landing/home/Hero'
import { Plans } from '@/components/pages/landing/home/Plans'
import { Products } from '@/components/pages/landing/home/Products'
import { WhyUs } from '@/components/pages/landing/home/WhyUs'

export default function Home() {
  return (
    <div>
      <Hero />
      <WhyUs />
      <Features />
      <Plans />
      <Products />
      <Attractive />
      <CTA />
    </div>
  )
}
