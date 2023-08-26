import * as Container from '@/components/ui/Container'
import { Logo } from './Logo'
import Link from 'next/link'
import { ActionButton } from './ActionButton'

export function Header() {
  return (
    <header className="h-16 shadow-md flex w-full bg-white fixed z-20">
      <Container.Content
        spacing="spaceless"
        className="flex flex-row justify-between items-center h-16"
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

        <ActionButton />
      </Container.Content>
    </header>
  )
}
