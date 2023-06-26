import { Container } from '@/components/shared/Container'
import { StructureList } from './StructureList'
import { Apresentation } from './Apresentation'

export function Structure() {
  return (
    <div className="flex min-h-screen items-center justify-center border-b-2 border-gray-600 ">
      <Container>
        <div className="flex flex-col gap-4 py-12">
          <div className="flex flex-col gap-6">
            <Apresentation />
            <StructureList />
          </div>
        </div>
      </Container>
    </div>
  )
}
