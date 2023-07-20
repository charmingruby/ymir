import { Presentation } from './presentation'
import { Separator } from '@/components/ui/separator'
import { Container } from '@/components/ui/container'
import { AdvantageList } from './advantage-list'

export function Advantages() {
  return (
    <section className="flex min-h-screen w-full items-center justify-center border-y-2 border-gray-600 bg-gray-900 py-16">
      <Container>
        <Presentation />

        <div className="py-12">
          <Separator />
        </div>

        <AdvantageList />
      </Container>
    </section>
  )
}
