import Image from 'next/image'
import supportImage from '@/assets/images/support.svg'

export function Illustration() {
  return (
    <div className="hidden lg:flex">
      <Image src={supportImage} alt="coding illustration" />
    </div>
  )
}
