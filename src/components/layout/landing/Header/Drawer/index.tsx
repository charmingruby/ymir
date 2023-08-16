import { DrawerItem } from './DrawerItem'
import { Container } from '@/components/ui/Container'
import { DrawerActions } from './DrawerActions'

interface DrawerProps {
  onClick: () => void
}

export function Drawer({ onClick }: DrawerProps) {
  return (
    <div className="fixed mt-16 w-full border-y border-primary-300 bg-white py-6 shadow-md">
      <Container spacing="spaceless">
        <div className="flex w-full flex-col gap-6">
          <div>
            <div className="mb-3 text-lg text-center text-gray-600">
              <strong>For you</strong>
            </div>

            <ul className="flex flex-col items-center gap-2">
              <DrawerItem label="Home" onClick={onClick} url="/" />
              <DrawerItem label="The Ymir" onClick={onClick} url="/about" />
              <DrawerItem label="Features" onClick={onClick} url="/features" />
              <DrawerItem label="Products" onClick={onClick} url="/products" />
              <DrawerItem label="Contact" onClick={onClick} url="/contact" />
            </ul>
          </div>

          <DrawerActions onClick={onClick} />
        </div>
      </Container>
    </div>
  )
}
