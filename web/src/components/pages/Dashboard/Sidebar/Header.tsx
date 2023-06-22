import { LuMoreHorizontal } from 'react-icons/lu'
import Image from 'next/image'
import logoUrl from '../../../../../assets/images/logo.svg'

export function Header() {
  return (
    <header className="flex h-20 w-full items-center justify-between border-b-2 border-r-2 border-gray-600 px-6">
      <Image src={logoUrl} alt="" width={28} height={28} />
      <LuMoreHorizontal
        className="cursor-pointer text-gray-300 transition-colors hover:text-gray-100"
        size={24}
      />
    </header>
  )
}
