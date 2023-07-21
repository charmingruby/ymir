import { Container } from '@/components/ui/container'
import { FeatureList } from './feature-list'
import { Presentation } from './presentation'

export function Features() {
  return (
    <div className="flex items-center justify-center border-b-2 border-gray-600 bg-gray-900 ">
      <Container>
        <div className="flex flex-col py-12 lg:py-24">
          <div className="flex flex-col gap-12 lg:flex-row lg:gap-8">
            <Presentation />
            <FeatureList />
          </div>
        </div>
      </Container>
    </div>
  )
}
