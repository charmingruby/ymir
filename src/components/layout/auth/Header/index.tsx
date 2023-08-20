import { Container } from '@/components/ui/Container'
import { Logo } from './Logo'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

export function Header() {
  return (
    <header className="h-16 shadow-md">
      <Container
        spacing="spaceless"
        className="flex flex-row justify-between items-center h-16 "
      >
        <Link
          href="/"
          prefetch={false}
          className="text-3xl flex items-center gap-2 font-medium"
        >
          <Logo />
          <div>
            <h2 className="font-logo">Ymir</h2>
          </div>
        </Link>

        <div>
          <Button size="sm" className="w-auto">
            Sign in
          </Button>
        </div>
      </Container>
    </header>
  )
}
