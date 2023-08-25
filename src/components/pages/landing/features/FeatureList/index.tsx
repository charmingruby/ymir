import { SectionDescriptor } from '@/components/shared/SectionDescriptor'
import { SectionTitle } from '@/components/shared/SectionTitle'
import * as Container from '@/components/ui/Container'
import { Text } from '@/components/ui/Text'
import { FeatureItem } from './FeatureItem'

export function FeatureList() {
  return (
    <Container.Root>
      <Container.Content>
        <div className="flex sm:items-center flex-col">
          <SectionDescriptor text="Dev's time saver" />

          <div className="sm:text-center gap-4 flex flex-col sm:items-center">
            <SectionTitle title="Made for productivity" dark />
            <Text className="max-w-2xl sm:text-center" variant="lowOpacity">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Accusamus officia aliquam cum ipsum explicabo, quo excepturi alias
              provident voluptatum nihil nobis debitis ullam veritatis ex
              distinctio quis culpa incidunt ipsam?
            </Text>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          <FeatureItem />
          <FeatureItem />
          <FeatureItem />
          <FeatureItem />
          <FeatureItem />
          <FeatureItem />
        </div>
      </Container.Content>
    </Container.Root>
  )
}
