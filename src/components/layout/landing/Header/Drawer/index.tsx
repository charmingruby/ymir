import { DrawerItem } from './DrawerItem'
import { Container } from '@/components/ui/Container'
import { DrawerActions } from './DrawerActions'

interface DrawerProps {
  onClick: () => void
}

export function Drawer({ onClick }: DrawerProps) {
  return (
    <div className="fixed mt-16 w-full border-b border-gray-600 bg-gray-900 py-6 shadow-lg">
      <Container spacing="spaceless">
        <div className="flex w-full flex-col gap-6">
          <div>
            <div className="mb-4 text-lg text-gray-50">
              <strong>For you</strong>
            </div>

            <ul className="flex flex-col gap-3">
              <DrawerItem label="Features" onClick={onClick} url="/features" />
              <DrawerItem label="Products" onClick={onClick} url="/products" />
              <DrawerItem label="Pricing" onClick={onClick} url="/pricing" />
              <DrawerItem label="The Ymir" onClick={onClick} url="/about" />
              <DrawerItem label="Contact" onClick={onClick} url="/contact" />
            </ul>
          </div>

          <DrawerActions onClick={onClick} />
        </div>
      </Container>
    </div>
  )
}
