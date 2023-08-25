import { SectionDescriptor } from '@/components/shared/SectionDescriptor'
import { Text } from '@/components/ui/Text'
import { FeatureList } from './FeatureList'
import { Button } from '@/components/ui/Button'
import { ArrowRight } from 'lucide-react'
import { SectionTitle } from '@/components/shared/SectionTitle'
import * as Container from '@/components/ui/Container'

export function Features() {
  return (
    <Container.Root>
      <Container.Content className="pt-8 pb-16 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 grid-cols-1">
          <div className="flex flex-col">
            <SectionDescriptor text="developer friendly features" />
            <div className="space-y-4">
              <SectionTitle dark title="Streamlined development features" />
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
      </Container.Content>
    </Container.Root>
  )
}