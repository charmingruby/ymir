import * as Container from '@/components/ui/Container'
import solvingPuzzle from '@/assets/images/solving-puzzle.svg'
import Image from 'next/image'
import { SectionDescriptor } from '@/components/shared/SectionDescriptor'
import { SectionTitle } from '@/components/shared/SectionTitle'
import { Text } from '@/components/ui/Text'
import { Button } from '@/components/ui/Button'

export default function Products() {
  return (
    <Container.Root className="min-h-screen">
      {/* Presentation */}
      <Container.Content
        spacing="topPage"
        className="flex flex-row min-h-screen items-center"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-8">
          {/* Content */}
          <div className="flex flex-col">
            <SectionDescriptor text="Customizable projects" />
            <SectionTitle title="We have ready solutions" dark />
            <Text variant="lowOpacity">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
              odio totam sed, qui ut et reiciendis autem reprehenderit.
              Quisquam, harum minima iure tempora sed molestiae vero omnis
              quidem possimus ut.
            </Text>
            <Button>Acc ess</Button>
          </div>

          {/* Illustration */}
          <div>
            <Image src={solvingPuzzle} alt="People solving a puzzle" />
          </div>
        </div>
      </Container.Content>

      {/* Areas */}

      {/* Products */}

      {/* CTA */}
    </Container.Root>
  )
}
