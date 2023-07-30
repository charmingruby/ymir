import { Container } from '@/components/ui/container'
import { Illustration } from './illustration'
import { Content } from './content'

export function Informative() {
  return (
    <section className="relative flex items-center overflow-hidden border-b border-gray-600 py-12">
      {/* Blur */}
      <div className="absolute right-0 -z-10 h-screen w-1/2 translate-x-1/2 rounded-full bg-gray-800 blur-full" />
      <Container>
        <div className="flex flex-col justify-between md:flex-row">
          <Content />
          <Illustration />
        </div>
      </Container>
    </section>
  )
}
