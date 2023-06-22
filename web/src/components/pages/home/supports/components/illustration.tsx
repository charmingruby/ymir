import illustration from '@/assets/images/tl.png'
import Image from 'next/image'

export function Illustration() {
  return (
    <div className="flex items-center justify-center">
      <Image src={illustration} alt="" width={340} height={340} />
    </div>
  )
}
