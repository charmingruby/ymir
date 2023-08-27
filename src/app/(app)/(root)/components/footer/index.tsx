import { TopFooter } from './top-footer'
import { BottomFooter } from './bottom-footer'
import * as Container from '@/components/ui/container'
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
