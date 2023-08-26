import { TopFooter } from './TopFooter'
import { BottomFooter } from './BottomFooter'
import * as Container from '@/components/ui/Container'
export function Footer() {
  return (
    <footer className="bg-white">
      <Container.Root className="border-t border-gray-100 py-8">
        <Container.Content spacing="spaceless">
          <TopFooter />
        </Container.Content>
      </Container.Root>

      <Container.Root className="border-t border-gray-100 py-4">
        <Container.Content spacing="spaceless">
          <BottomFooter />
        </Container.Content>
      </Container.Root>
    </footer>
  )
}
