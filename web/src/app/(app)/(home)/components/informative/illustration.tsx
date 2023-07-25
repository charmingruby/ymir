import Image from 'next/image'
import supportImage from '@/assets/images/support.svg'

export function Illustration() {
  return (
    <div className="hidden md:block">
      <Image src={supportImage} alt="" width={480} />
    </div>
  )
}
