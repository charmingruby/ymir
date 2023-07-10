import { Descriptor } from '@/components/shared/Descriptor'
import { Title } from '@/components/shared/Title'
import { Text } from '@/components/shared/Text'

export function Apresentation() {
  return (
    <div className="flex w-auto flex-col gap-6 md:w-1/2">
      <Descriptor content="Special supports" />
      <Title content="Better integrations" />
      <div className="max-w-2xl">
        <Text>
          Elevate Your Innovation: Tailored Support for Advanced Technologies.
          Explore our dedicated section, offering specialized features and
          support for cutting-edge technologies. Achieve remarkable results with
          our comprehensive technology support.
        </Text>
      </div>
    </div>
  )
}
