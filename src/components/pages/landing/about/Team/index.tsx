import * as Container from '@/components/ui/Container'
import { Members } from './Members'

export function Team() {
  return (
    <Container.Root>
      <Container.Content
        spacing="spaceless"
        className="pt-8 lg:pt-16 pb-4 lg:pb-8"
      >
        <Members />
      </Container.Content>
    </Container.Root>
  )
}
