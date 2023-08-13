import { Presentation } from './components/Presentation'
import { Banner } from './components/Banner'
import { ReasonList } from './components/ReasonList'
import { Creator } from './components/Creator'
import { CTA } from './components/CTA'
import { FreeTrial } from './components/FreeTrial'
import { Attractive } from './components/Attractive'

export default function About() {
  return (
    <>
      <Presentation />
      <Banner />
      <ReasonList />
      <FreeTrial />
      <Attractive />
      <Creator />
      <CTA />
    </>
  )
}
