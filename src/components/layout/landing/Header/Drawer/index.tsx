import { DrawerItem } from './DrawerItem'
import * as Container from '@/components/ui/Container'
import { DrawerActions } from './DrawerActions'

interface DrawerProps {
  onClick: () => void
}

export function Drawer({ onClick }: DrawerProps) {
  return (
    <Container.Root className="fixed mt-16 w-full bg-gray-50 py-6 shadow-md border-t border-gray-100">
      <Container.Content spacing="spaceless">
        <div className="flex w-full flex-col gap-6">
          <div>
            <div className="mb-3 text-lg text-center text-gray-600">
              <strong>For you</strong>
            </div>

            <ul className="flex flex-col items-center gap-2">
              <DrawerItem label="Home" onClick={onClick} url="/" />
              <DrawerItem label="Features" onClick={onClick} url="/features" />
              <DrawerItem
                label="Solutions"
                onClick={onClick}
                url="/solutions"
              />
              <DrawerItem label="Contact" onClick={onClick} url="/contact" />
              <DrawerItem label="The Ymir" onClick={onClick} url="/about" />
            </ul>
          </div>

          <DrawerActions onClick={onClick} />
        </div>
      </Container.Content>
    </Container.Root>
  )
}
