import { Container } from '@/components/ui/container'
import { navItems } from './navigation-list'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface DrawerProps {
  onClick: () => void
}

export function Drawer({ onClick }: DrawerProps) {
  return (
    <div className="fixed mt-16 w-full border-b border-gray-600 bg-gray-900 py-6 shadow-lg">
      <Container>
        <div className="flex w-full flex-col gap-6">
          {/* Navigation Items */}
          <div>
            <div className="mb-4 text-lg text-gray-50">
              <strong>For you</strong>
            </div>

            <ul className="flex flex-col gap-3">
              {navItems.map((item) => (
                <Link
                  prefetch={false}
                  href={`/${item === 'Home' ? '' : item.toLowerCase()}`}
                  key={item}
                  onClick={onClick}
                >
                  <li className="cursor-pointer font-medium text-gray-200 transition-colors hover:text-gray-50 active:text-gray-50">
                    {item}
                  </li>
                </Link>
              ))}
            </ul>
          </div>

          {/* Actions */}
          <div>
            <div className="mb-4 text-lg text-gray-50">
              <strong>Start using</strong>
            </div>
            <div className="flex flex-col gap-3">
              <Link href="/dashboard" prefetch={false} onClick={onClick}>
                <Button variant="secondary" className="h-8">
                  <span className="">Sign in</span>
                </Button>
              </Link>

              <Link href="/dashboard" onClick={onClick} prefetch={false}>
                <Button variant="primary" className="h-8">
                  <span className="">Sign up</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
