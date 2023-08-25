import * as Container from '@/components/ui/Container'
import { Text } from '@/components/ui/Text'
import { Button } from '@/components/ui/Button'

export function CTA() {
  return (
    <Container.Root backgroundColor="blueGradient">
      <Container.Content className="flex flex-col justify-center items-center gap-8 py-16">
        <div className="flex flex-col text-4xl sm:text-5xl text-center text-white">
          <strong>Our solutions</strong>
        </div>

        <Text className="max-w-2xl text-center text-gray-50">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, beatae.
          Repellat inventore fuga voluptatibus? Provident nemo ea dolorem ipsum
          sapiente? Esse id exercitationem omnis labore placeat officiis! Neque,
          qui voluptas.
        </Text>

        <div className="w-full flex justify-center">
          <Button variant="light">Check</Button>
        </div>
      </Container.Content>
    </Container.Root>
  )
}
