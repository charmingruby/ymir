import * as Container from '@/components/ui/Container'
import { Text } from '@/components/ui/Text'
import { Button } from '@/components/ui/Button'

export function CTA() {
  return (
    <Container.Root backgroundColor="blueGradient">
      <Container.Content className="flex flex-col justify-center items-center gap-8 py-16">
        <div className="flex flex-col text-4xl sm:text-5xl text-center text-white">
          <strong>Boost your productivity.</strong>
          <strong>Start using our app today.</strong>
        </div>

        <Text className="max-w-2xl text-center text-gray-50">
          Supercharge your productivity with our app. Start today and unlock a
          new level of efficiency, collaboration, and organization. Experience
          the difference firsthand.
        </Text>

        <div className="w-full flex justify-center">
          <Button variant="light">Start now</Button>
        </div>
      </Container.Content>
    </Container.Root>
  )
}
