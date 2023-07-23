import { Actions } from './actions'
import { Container } from '@/components/ui/container'
import { Description } from './description'
import { Title } from './title'

export function CTA() {
  return (
    <div className="bg-primary-900 relative overflow-hidden py-16">
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
