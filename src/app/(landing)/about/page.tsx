import { Presentation } from './components/Presentation'
import { Banner } from './components/Banner'
import { CTA } from './components/CTA'
import { FreeTrial } from './components/FreeTrial'
import { Cycle } from './components/Cycle'
import { TeamInvitation } from './components/TeamInvitation'

export default function About() {
  return (
    <>
      <Presentation />
      <Banner />
      <Cycle />
      <TeamInvitation />
      <FreeTrial />
      <CTA />
    </>
  )
}
