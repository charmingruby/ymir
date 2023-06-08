import Image from 'next/image'
import logoImage from '../../../assets/images/logo.svg'

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Image src={logoImage} alt="" className="h-7 w-7" />
      <span className="font-alt text-3xl leading-none text-gray-50">Ymir</span>
    </div>
  )
}
