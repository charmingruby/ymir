import { Container } from '@/components/ui/container'
import { FeatureList } from './feature-list'
import { Presentation } from './presentation'
import { Illustration } from './illustration'

export function Features() {
  return (
    <div className="flex items-center justify-center border-b border-gray-600 bg-gray-900 py-12">
      <Container>
        <div className="flex flex-col gap-8   ">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8">
            <Illustration />
            <Presentation />
          </div>
          <FeatureList />
        </div>
      </Container>
    </div>
  )
}
