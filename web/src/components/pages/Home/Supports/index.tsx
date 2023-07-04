import { Container } from '@/components/shared/Container'
import { Illustration } from './Illustration'
import { Apresentation } from './Apresentation'
import { TechnologyList } from './TechnologyList'

export function Supports() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden border-b-2 border-gray-600 py-12">
      {/* Blur */}
      <div className="absolute right-0 -z-10 h-screen w-1/2 translate-x-1/2 rounded-full bg-gray-800 blur-full" />
      <Container>
        <Apresentation />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Illustration />

          <div className="flex flex-1 items-center">
            <TechnologyList />
          </div>
        </div>
      </Container>
    </section>
  )
}
