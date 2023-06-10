import { ContentContainer } from '../content-container'
import { Actions } from './components/Actions'
import { Logo } from './components/Logo'
import { Navigation } from './components/Navigation'

export function Header() {
  return (
    <header className="fixed top-0 h-16 w-full border-b border-gray-500 backdrop-blur-xl backdrop-filter">
      <ContentContainer>
        <div className="flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-16">
            <Logo />
            <Navigation />
          </div>

          <Actions />
        </div>
      </ContentContainer>
    </header>
  )
}
