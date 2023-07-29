import { Container } from '@/components/ui/container'
import { Presentation } from './presentation'
import { ReasonList } from './reason-list'

export function WhyUs() {
  return (
    <section className="flex w-full items-center border-y border-gray-600 bg-gray-900 py-24">
      <Container>
        <Presentation />

        <ReasonList />
      </Container>
    </section>
  )
}
