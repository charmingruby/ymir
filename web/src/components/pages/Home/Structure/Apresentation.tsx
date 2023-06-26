import { Descriptor } from '@/components/shared/Descriptor'
import { Title } from '@/components/shared/Title'
import { Text } from '@/components/shared/Text'

export function Apresentation() {
  return (
    <>
      <Descriptor content="blabla" />
      <Title
        content="
              Method designed for
              speed up your projects with quality"
      />
      <div className="flex items-center justify-center">
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex officia
          veniam incidunt quibusdam enim praesentium, magni sapiente, nisi
          itaque sequi magnam alias aspernatur ullam, quasi blanditiis dolorem
          nesciunt ducimus accusamus.
        </Text>
      </div>
    </>
  )
}
