import { SectionDescriptor } from '@/components/SectionDescriptor'
import { Container } from '@/components/ui/Container'
import { Text } from '@/components/ui/Text'
import { PlanList } from './PlanList'
import { SectionTitle } from '@/components/SectionTitle'

export function Plans() {
  return (
    <div className="">
      <Container>
        <div className="flex flex-col">
          <div className="grid-cols-1 md:grid-cols-3 grid">
            <div className="flex flex-col md:col-span-2">
              <SectionDescriptor text="we can make everyone happy" />
              <div className="space-y-4">
                <SectionTitle title="We are a platform to multiple types of works" />
                <Text>
                  Whether you&apos;re an individual developer, a team, or a
                  thriving enterprise, Ymir provides all the essential
                  components to craft a website that outshines the competition.
                </Text>
              </div>
            </div>
          </div>
        </div>

        <PlanList />
      </Container>
    </div>
  )
}
