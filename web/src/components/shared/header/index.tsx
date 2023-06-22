import { Container } from '../container'
import { Actions } from './components/Actions'
import { Logo } from './components/Logo'
import { Navigation } from './components/Navigation'

export function Header() {
  return (
    <header className="fixed top-0 z-50 h-16 w-full border-b border-gray-500 backdrop-blur-xl backdrop-filter">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-16">
            <Logo />
            <Navigation />
          </div>

          <Actions />
        </div>
      </Container>
    </header>
  )
}
