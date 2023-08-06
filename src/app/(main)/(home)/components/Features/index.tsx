import { Container } from '@/components/ui/Container'
import { SectionDescriptor } from '@/components/shared/SectionDescriptor'
import { Text } from '@/components/ui/Text'
import { FeatureList } from './FeatureList'
import { Button } from '@/components/ui/Button'
import { ArrowRight } from 'lucide-react'
import { SectionTitle } from '@/components/shared/SectionTitle'

export function Features() {
  return (
    <div className="bg-gray-900 border-b border-gray-600">
      <Container className="pt-8 pb-16 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 grid-cols-1">
          <div className="flex flex-col">
            <SectionDescriptor text="developer friendly features" />
            <div className="space-y-4">
              <SectionTitle title="Streamlined development features" />
              <Text size="lg">
                Discover the strength of our feature-rich application that
                enables efficient project management and seamless scalability.
                Boost productivity, enhance collaboration, and achieve
                organizational excellence with our powerful tools and
                functionalities.
              </Text>

              <Button className="lg:self-start">
                <span>View all</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <FeatureList />
        </div>
      </Container>
    </div>
  )
}
