import { Container } from '@/components/ui/container'
import { navItems } from './navigation-items'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface DrawerProps {
  onClick: () => void
}

export function Drawer({ onClick }: DrawerProps) {
  return (
    <div className="fixed mt-16 w-full border-b-2 border-gray-600 bg-gray-900 py-6">
      <Container>
        <div className="flex w-full flex-col items-center gap-6">
          {/* Navigation Items */}
          <ul className="flex flex-col items-center gap-4">
            {navItems.map((item) => (
              <Link
                href={`/${item === 'Home' ? '' : item.toLowerCase()}`}
                key={item}
                onClick={onClick}
              >
                <li className="cursor-pointer font-medium text-gray-50 transition-colors active:text-primary-300">
                  {item}
                </li>
              </Link>
            ))}
          </ul>

          {/* Actions */}
          <div className="flex flex-col items-center gap-2">
            <Link href="/dashboard" onClick={onClick}>
              <Button variant="secondary" className="h-8">
                <span className="">Sign in</span>
              </Button>
            </Link>

            <Link href="/dashboard" onClick={onClick}>
              <Button variant="primary" className="h-8">
                <span className="">Sign up</span>
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  )
}
