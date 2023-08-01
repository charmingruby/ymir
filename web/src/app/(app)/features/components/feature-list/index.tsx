import { Container } from '@/components/ui/container'
import { List } from './list'
import { Presentation } from './presentation'

export function FeatureList() {
  return (
    <section className="border-t border-gray-600 bg-gray-900 py-12">
      <Container>
        <Presentation />
        <List />
      </Container>
    </section>
  )
}
