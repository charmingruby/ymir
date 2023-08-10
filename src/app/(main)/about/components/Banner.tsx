import { Container } from '@/components/ui/Container'
import { Text } from '@/components/ui/Text'

export function Banner() {
  return (
    <section className="border-y border-gray-500">
      <Container
        spacing="spaceless"
        className="flex flex-col justify-center items-center gap-8 py-20"
      >
        <Text className="max-w-2xl text-center text-xl font-medium leading-7">
          We provide a dedicated space for developers, offering support in{' '}
          <span className="font-semibold text-gray-50">
            project advancement through collaborative resources
          </span>{' '}
          while promoting continuous learning and career growth.
        </Text>
      </Container>
    </section>
  )
}
