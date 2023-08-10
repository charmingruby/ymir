import { Presentation } from './components/Presentation'
import { Banner } from './components/Banner'
import { ReasonList } from './components/ReasonList'
import { Creator } from './components/Creator'

export default function About() {
  return (
    <>
      <Presentation />
      <Banner />
      <ReasonList />
      <Creator />
    </>
  )
}
