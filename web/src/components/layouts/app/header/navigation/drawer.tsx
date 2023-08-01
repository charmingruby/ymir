import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { DrawerItem } from './drawer-item'

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
              <DrawerItem label="Features" onClick={onClick} url="/features" />
              <DrawerItem label="Products" onClick={onClick} url="/products" />
              <DrawerItem label="Pricing" onClick={onClick} url="/pricing" />
              <DrawerItem label="Team" onClick={onClick} url="/team" />
              <DrawerItem label="Docs" onClick={onClick} url="/docs" />
            </ul>
          </div>

          {/* Actions */}
          <div>
            <div className="mb-4 text-lg text-gray-50">
              <strong>Start using</strong>
            </div>
            <div className="flex flex-col gap-3">
              <Link href="/dashboard" prefetch={false} onClick={onClick}>
                <Button color="secondary" className="h-8">
                  <span className="">Sign in</span>
                </Button>
              </Link>

              <Link href="/dashboard" onClick={onClick} prefetch={false}>
                <Button color="primary" className="h-8">
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
