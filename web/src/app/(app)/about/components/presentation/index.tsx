import { Container } from '@/components/ui/container'
import { Illustration } from './illustration'

export function Presentation() {
  return (
    <section className="min-h-screen">
      <Container>
        <div>
          <Illustration />
        </div>

        <div></div>
      </Container>
    </section>
  )
}
