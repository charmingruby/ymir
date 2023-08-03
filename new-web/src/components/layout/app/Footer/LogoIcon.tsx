import Image from 'next/image'
import logo from '@/assets/images/logo.svg'

export function LogoIcon() {
  return (
    <div className="flex justify-start">
      <Image src={logo} alt="Brand logo" className="h-12 w-12" />
    </div>
  )
}
