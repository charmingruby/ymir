import { Container } from '@/components/ui/container'
import { Actions } from './actions'
import { Logo } from './logo'
import { NavigationItems } from './navigation/navigation-items'

export function Header() {
  return (
    <header className="fixed top-0 z-50 h-16 w-full border-b border-gray-500 backdrop-blur-xl backdrop-filter">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-4 lg:gap-16">
            <Logo />

            {/* Separator */}
            <div className="h-8 w-px rounded-full bg-gray-200 lg:hidden" />

            <NavigationItems />
          </div>

          <Actions />
        </div>
      </Container>
    </header>
  )
}
