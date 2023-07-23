import Image from 'next/image'
import { Container } from '@/components/ui/container'
import fastImage from '@/assets/images/fast-development.svg'

export function Presentation() {
  return (
    <section className="min-h-screen border-b-2 border-gray-600">
      <Container>
        <Image
          src={fastImage}
          alt="High development speed"
          height={400}
          priority
          quality={100}
        />
      </Container>
    </section>
  )
}
