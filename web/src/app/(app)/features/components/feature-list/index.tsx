import { Container } from '@/components/ui/container'
import { List } from './list'
import { Text } from '@/components/ui/text'

export function FeatureList() {
  return (
    <section className="border-t border-gray-600 bg-gray-900 py-12">
      <Container>
        <div className="mb-8 flex flex-col gap-4">
          <h2 className="text-center text-5xl font-semibold text-primary-300">
            Powerful Features
          </h2>
          <Text className="text-center">
            Features that make your life easier.
          </Text>
        </div>

        <List />
      </Container>
    </section>
  )
}
