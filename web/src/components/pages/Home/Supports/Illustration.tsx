import Image from 'next/image'
import supportImage from '@/assets/images/support.svg'

export function Illustration() {
  return (
    <div>
      <Image src={supportImage} alt="" width={400} height={400} />
    </div>
  )
}
