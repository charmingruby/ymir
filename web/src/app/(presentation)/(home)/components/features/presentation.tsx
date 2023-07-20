import { Descriptor } from '@/components/ui/descriptor'
import { Title } from '@/components/ui/title'
import { Text } from '@/components/ui/text'
import { FeaturesContent } from '../../contents/features'

export function Presentation() {
  const { descriptor, title, description } = FeaturesContent

  return (
    <div className="mb-12 flex flex-col gap-6">
      <Descriptor content={descriptor} />
      <Title content={title} />
      <div className="flex items-center justify-center">
        <Text>{description}</Text>
      </div>
    </div>
  )
}
