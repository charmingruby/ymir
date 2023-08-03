import { TopFooter } from './TopFooter'
import { BottomFooter } from './BottomFooter'
import { Container } from '@/components/ui/Container'

export function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="bg-gray-75 border-t border-gray-600 py-10">
        <Container spacing="spaceless">
          <TopFooter />
        </Container>
      </div>

      <div className="bg-gray-75 border-t border-gray-600 py-2">
        <Container spacing="spaceless">
          <BottomFooter />
        </Container>
      </div>
    </footer>
  )
}
