import { Container } from '@/components/ui/Container'
import { FeatureList } from './FeatureList'
import { Apresentation } from './Apresentation'

export function Features() {
  return (
    <div className="flex min-h-screen items-center justify-center border-b-2 border-gray-600 ">
      <Container>
        <div className="flex flex-col py-12">
          <div className="flex flex-col">
            <Apresentation />
            <FeatureList />
          </div>
        </div>
      </Container>
    </div>
  )
}
