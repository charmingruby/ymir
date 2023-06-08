import { Actions } from './components/Actions'
import { Logo } from './components/Logo'
import { Navigation } from './components/Navigation'

export function Header() {
  return (
    <header className="h-16 w-full border-b border-gray-500">
      <div className="mx-auto my-0 flex h-16 w-full max-w-6xl items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <Logo />
          <Navigation />
        </div>

        <Actions />
      </div>
    </header>
  )
}
