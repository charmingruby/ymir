import Image from 'next/image'
import logoImage from '@/assets/images/logo.svg'
import Link from 'next/link'

export function Logo() {
  return (
    <Link href="/" prefetch={false}>
      <div className="flex items-center gap-2">
        <Image src={logoImage} alt="" className="h-7 w-7" />
        <span className="hidden font-alt text-3xl leading-none text-gray-50 lg:block">
          Ymir
        </span>
      </div>
    </Link>
  )
}
