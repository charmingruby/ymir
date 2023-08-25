import { SectionDescriptor } from '@/components/shared/SectionDescriptor'
import { Text } from '@/components/ui/Text'
import { PlanList } from './PlanList'
import { Button } from '@/components/ui/Button'
import { ArrowRight } from 'lucide-react'
import { SectionTitle } from '@/components/shared/SectionTitle'
import * as Container from '@/components/ui/Container'

export function Plans() {
  return (
    <Container.Root backgroundColor="dark">
      <Container.Content className="pt-16 md:pt-24 pb-16">
        <div className="flex sm:items-center flex-col">
          <SectionDescriptor text="we make everyone satisfied" onDarkColor />

          <div className="sm:text-center gap-4 flex flex-col sm:items-center">
            <SectionTitle title="We are a platform to multiple types of works" />
            <Text className="max-w-2xl sm:text-center" variant="white">
              Whether you{"'"}re an individual developer, a team, or a thriving
              enterprise, Ymir provides all the essential components to craft a
              website that outshines the competition.
            </Text>
          </div>

          <div className="mt-4">
            <Button variant="terciary">
              <span>View all</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <PlanList />
      </Container.Content>
    </Container.Root>
  )
}
