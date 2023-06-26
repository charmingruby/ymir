import Image from 'next/image'
import { BiBell } from 'react-icons/bi'
import exampleAvatar from '@/assets/images/example-profile-icon.jpg'
import { RxCaretDown } from 'react-icons/rx'
import logoUrl from '@/assets/images/logo.svg'
import { LuSettings } from 'react-icons/lu'
import { NavigationMenu } from './NavigationMenu'

export function Header() {
  return (
    <header className="flex w-full flex-col items-center justify-between gap-2 border-b-2 border-gray-600 bg-gray-900 px-6">
      <div className="flex h-16 w-full items-center justify-between gap-2">
        <Image src={logoUrl} alt="" width={28} height={28} />

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div>
              <BiBell size={18} />
            </div>

            <div>
              <LuSettings size={18} />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-gray-50">
              <Image
                src={exampleAvatar}
                height={64}
                width={64}
                alt=""
                className="h-8 w-8 rounded-full"
              />
            </div>

            <div>
              <RxCaretDown size={18} className="text-gray-300" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex h-12 w-full justify-between">
        <NavigationMenu />
        <div className="flex h-12 items-center">kkjjjjjjjjjjj</div>
      </div>
    </header>
  )
}
