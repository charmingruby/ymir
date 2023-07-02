import { Actions } from './Actions'
import { Container } from '@/components/shared/Container'
import { Description } from './Description'
import { Title } from './Title'

export function CTA() {
  return (
    <div className="bg-primary-900 relative overflow-hidden border-b-2 border-gray-900 py-16">
      <div className="absolute right-1/2 -z-10 h-1/2 w-1/2 translate-x-1/2 bg-primary-300 blur-full" />
      <Container>
        {/* Content */}
        <div className="flex flex-col items-center gap-8">
          <Title />
          <Description />
          <Actions />
        </div>
      </Container>
    </div>
  )
}
