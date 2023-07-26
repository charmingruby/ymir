import { Descriptor } from '@/components/descriptor'
import { Title } from '@/components/ui/title'
import { Text } from '@/components/ui/text'

export function Presentation() {
  return (
    <>
      <Descriptor content="Use what do your prefer" />
      <Title content="Technology Independent" />

      <div className="max-w-2xl">
        <Text>
          {' '}
          Elevate Your Innovation: Tailored Support for Advanced Technologies.
          Explore our dedicated section, offering specialized features and
          support for cutting-edge technologies. Achieve remarkable results with
          our comprehensive technology support.,
        </Text>
      </div>
    </>
  )
}
