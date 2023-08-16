import { Container } from '@/components/ui/Container'
import { Logo } from './Logo'
import { Button } from '@/components/ui/Button'

export function Header() {
  return (
    <header className="h-16 mb-8 shadow-md">
      <Container
        spacing="spaceless"
        className="flex flex-row justify-between items-center h-16 "
      >
        <div className="text-3xl flex items-center gap-2 font-medium">
          <Logo />
          <div>
            <h2 className="font-logo">Ymir</h2>
          </div>
        </div>

        <div>
          <Button size="sm" className="w-auto">
            Sign in
          </Button>
        </div>
      </Container>
    </header>
  )
}
