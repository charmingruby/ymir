import { Banner } from '@/components/pages/landing/about/Banner'
import { CTA } from '@/components/pages/landing/about/CTA'
import { Cycle } from '@/components/pages/landing/about/Cycle'
import { FreeTrial } from '@/components/pages/landing/about/FreeTrial'
import { Presentation } from '@/components/pages/landing/about/Presentation'
import { Team } from '@/components/pages/landing/about/Team'

export default function About() {
  return (
    <>
      <Presentation />
      <Banner />
      <Cycle />
      <Team />
      <FreeTrial />
      <CTA />
    </>
  )
}
