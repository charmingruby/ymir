import { Container } from '@/components/ui/container'
import { FeatureList } from './feature-list'
import { Presentation } from './presentation'

export function Features() {
  return (
    <div className="flex min-h-screen items-center justify-center border-b-2 border-gray-600 ">
      <Container>
        <div className="flex flex-col py-12">
          <div className="flex flex-col">
            <Presentation />
            <FeatureList />
          </div>
        </div>
      </Container>
    </div>
  )
}
