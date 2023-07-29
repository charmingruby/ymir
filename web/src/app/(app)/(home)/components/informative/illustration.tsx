import Image from 'next/image'
import coding from '@/assets/images/code-typing.svg'

export function Illustration() {
  return (
    <div className="hidden md:block">
      <Image src={coding} alt="" width={480} />
    </div>
  )
}
