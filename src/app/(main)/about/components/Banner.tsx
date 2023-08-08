import { Container } from '@/components/ui/Container'
import { Text } from '@/components/ui/Text'

export function Banner() {
  return (
    <section className="border-y border-gray-500">
      <Container className="flex flex-col justify-center items-center gap-8 py-16">
        <Text className="max-w-2xl text-center">
          We have created a unique space to connect creative minds and aspiring
          programmers, enabling engagement with opportunities, enhancing skills,
          and driving careers through a continuous learning journey. Our
          platform promotes professional growth, providing essential resources
          to successfully create and market applications.
        </Text>
      </Container>
    </section>
  )
}
