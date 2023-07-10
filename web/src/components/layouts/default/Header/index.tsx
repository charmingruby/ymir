import { Container } from '@/components/shared/Container'
import { Actions } from './Actions'
import { Logo } from './Logo'
import { Navigation } from './Navigation/Navigation'

export function Header() {
  return (
    <header className="fixed top-0 z-50 h-16 w-full border-b border-gray-500 backdrop-blur-xl backdrop-filter">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-4 md:gap-16">
            <Logo />

            {/* Separator */}
            <div className="h-8 w-px rounded-full bg-gray-200 md:hidden" />

            <Navigation />
          </div>

          <Actions />
        </div>
      </Container>
    </header>
  )
}
