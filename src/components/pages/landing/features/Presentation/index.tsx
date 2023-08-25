import { SectionTitle } from '@/components/shared/SectionTitle'
import { Button } from '@/components/ui/Button'
import * as Container from '@/components/ui/Container'
import { Text } from '@/components/ui/Text'
import { Flame } from 'lucide-react'

export function Presentation() {
  return (
    <Container.Root className="bg-primary-gradient">
      <Container.Content spacing="spaceless" className="pt-36 pb-20">
        <div className="flex w-full text-center items-center gap-8 flex-col max-w-2xl mx-auto">
          <div className="flex flex-col gap-4 items-center">
            <Flame className="text-white h-10 w-10" />
            <SectionTitle title="Blazing features" />
            <Text variant="white">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
              laborum iste laudantium adipisci enim, nemo earum illum veritatis
              fugiat doloribus ea accusamus? Aut rerum nesciunt qui optio
              repudiandae eaque dolore?
            </Text>
          </div>
          <Button variant="light">Request demo</Button>
        </div>
      </Container.Content>
    </Container.Root>
  )
}
