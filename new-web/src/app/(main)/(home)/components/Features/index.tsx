import { Container } from '@/components/ui/Container'
import { SectionDescriptor } from '@/components/SectionDescriptor'
import { Text } from '@/components/ui/Text'

import { FeatureList } from './FeatureList'
import { SectionTitle } from '@/components/SectionTitle'

export function Features() {
  return (
    <div className="bg-gray-900">
      <Container>
        <div className="grid lg:grid-cols-1">
          <div className="flex flex-col sm:items-center justify-center">
            <SectionDescriptor text="developer friendly features" />
            <div className="space-y-4 sm:text-center">
              <SectionTitle title="Streamlined development features" />
              <Text size="lg" className="max-w-4xl">
                Discover the strength of our feature-rich application that
                enables efficient project management and seamless scalability.
                Boost productivity, enhance collaboration, and achieve
                organizational excellence with our powerful tools and
                functionalities.
              </Text>
            </div>
          </div>
        </div>

        <FeatureList />
      </Container>
    </div>
  )
}
