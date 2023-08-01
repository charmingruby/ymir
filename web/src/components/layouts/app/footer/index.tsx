import { Container } from '@/components/ui/container'
import { TopFooter } from './top-footer'
import { BottomFooter } from './bottom-footer'

export function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="bg-gray-75 border-t border-gray-600 py-12">
        <Container>
          <TopFooter />
        </Container>
      </div>

      <div className="bg-gray-75 border-t border-gray-600 py-4">
        <Container>
          <BottomFooter />
        </Container>
      </div>
    </footer>
  )
}
