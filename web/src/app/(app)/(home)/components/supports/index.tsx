import { Container } from '@/components/ui/container'
import { Illustration } from './illustration'
import { Presentation } from './presentation'
import { TechnologyList } from './technology-list'

export function Supports() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden border-b border-gray-600 py-12">
      {/* Blur */}
      <div className="absolute right-0 -z-10 h-screen w-1/2 translate-x-1/2 rounded-full bg-gray-800 blur-full" />
      <Container>
        <div className="flex flex-col items-center justify-between md:flex-row">
          <Presentation />
          <Illustration />
        </div>

        <div className="flex flex-1 items-center">
          <TechnologyList />
        </div>
      </Container>
    </section>
  )
}
