import { Descriptor } from '@/components/shared/descriptor'
import { Title } from '@/components/shared/title'
import { Text } from '@/components/shared/text'
import { Container } from '@/components/shared/container'

export function Structure() {
  return (
    <div className="border-b-2 border-gray-600 py-12">
      <Container>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-6">
            <Descriptor content="blabla" />

            <Title
              content="
              Method designed for
              speed up your projects with quality"
            />

            <div className="flex items-center justify-center">
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                officia veniam incidunt quibusdam enim praesentium, magni
                sapiente, nisi itaque sequi magnam alias aspernatur ullam, quasi
                blanditiis dolorem nesciunt ducimus accusamus.
              </Text>
            </div>
          </div>
        </div>
        Structure Explanation (Talking about entities, use cases, etc){' '}
      </Container>
    </div>
  )
}
