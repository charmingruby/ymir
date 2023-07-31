import Image from 'next/image'
import fastImage from '@/assets/images/fast-development.svg'

export function Illustration() {
  return (
    <Image
      src={fastImage}
      alt="High development speed"
      height={400}
      priority
      quality={100}
    />
  )
}
