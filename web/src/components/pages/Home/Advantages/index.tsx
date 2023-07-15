import { Apresentation } from './Apresentation'
import { Separator } from '@/components/ui/Separator'
import { Container } from '@/components/ui/Container'
import { AdvantageList } from './AdvantageList'

export function Advantages() {
  return (
    <section className="flex min-h-screen w-full items-center justify-center border-y-2 border-gray-600 bg-gray-900 py-16">
      <Container>
        <Apresentation />

        <div className="py-12">
          <Separator />
        </div>

        <AdvantageList />
      </Container>
    </section>
  )
}
