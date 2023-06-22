import { FeatureApresentation } from './components/feature-apresentation'
import { Separator } from '@/components/shared/separator'
import { FeaturesList } from './components/features-list'
import { Container } from '@/components/shared/container'

export function Features() {
  return (
    <section className="flex min-h-screen w-full items-center justify-center border-y-2 border-gray-600 bg-gray-900 py-16">
      <Container>
        <FeatureApresentation />

        <div className="py-12">
          <Separator />
        </div>

        <FeaturesList />
      </Container>
    </section>
  )
}
