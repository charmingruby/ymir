import Image from 'next/image'
import { BiBell } from 'react-icons/bi'
import exampleAvatar from '@/assets/images/example-profile-icon.jpg'
import { RxCaretDown, RxMagnifyingGlass } from 'react-icons/rx'

export function DashboardHeader() {
  return (
    <header className="flex h-20 w-full items-center justify-between gap-2 border-b-2 border-gray-600 bg-gray-800 px-8">
      <div className="flex h-10 w-full items-center gap-2 rounded-full border-2 border-gray-500 bg-gray-700 pl-2 pr-1">
        <RxMagnifyingGlass className="text-gray-400" />
        <input className="flex-1 text-gray-50" />
      </div>

      <div className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-md ">
          <BiBell size={18} />
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
    </header>
  )
}
