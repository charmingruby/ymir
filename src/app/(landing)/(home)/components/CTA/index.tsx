import { Container } from '@/components/ui/Container'
import { Blur } from './Blur'
import { Text } from '@/components/ui/Text'
import { Button } from '@/components/ui/Button'

export function CTA() {
  return (
    <div className="bg-primary-900 relative overflow-hidden">
      <Blur />
      <Container className="flex flex-col justify-center items-center gap-8 py-16">
        <div className="flex flex-col text-4xl sm:text-5xl text-center">
          <strong>Boost your productivity.</strong>
          <strong>Start using our app today.</strong>
        </div>

        <Text className="max-w-2xl text-center">
          Supercharge your productivity with our app. Start today and unlock a
          new level of efficiency, collaboration, and organization. Experience
          the difference firsthand.
        </Text>

        <div className="w-full flex justify-center">
          <Button>Start now</Button>
        </div>
      </Container>
    </div>
  )
}
