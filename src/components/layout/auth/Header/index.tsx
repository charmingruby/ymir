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
        <div className="flex flex-row items-center gap-2">
          <Logo />
          <div>
            <h2 className="font-alt text-4xl">Ymir</h2>
          </div>
        </div>

        <div>
          <Button color="dark" size="sm" className="w-auto">
            Sign in
          </Button>
        </div>
      </Container>
    </header>
  )
}
