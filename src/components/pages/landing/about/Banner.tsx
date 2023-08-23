import * as Container from '@/components/ui/Container'
import { Text } from '@/components/ui/Text'

export function Banner() {
  return (
    <Container.Root className="border-t border-gray-100 ">
      <Container.Content
        spacing="spaceless"
        className="flex flex-col justify-center items-center gap-8 py-20"
      >
        <Text
          className="max-w-2xl  text-center text-xl font-medium leading-7"
          variant="lowOpacity"
        >
          We provide a dedicated space for developers, offering support in{' '}
          <span className="font-semibold text-gray-800">
            project advancement through collaborative resources
          </span>{' '}
          while promoting continuous learning and career growth.
        </Text>
      </Container.Content>
    </Container.Root>
  )
}
