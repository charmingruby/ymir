import { TopFooter } from './TopFooter'
import { BottomFooter } from './BottomFooter'
import { Container } from '@/components/ui/Container'

export function Footer() {
  return (
    <footer className="bg-gray-50">
      <div className="border-t border-gray-100 py-8">
        <Container spacing="spaceless">
          <TopFooter />
        </Container>
      </div>

      <div className="border-t border-gray-100 py-4">
        <Container spacing="spaceless">
          <BottomFooter />
        </Container>
      </div>
    </footer>
  )
}
