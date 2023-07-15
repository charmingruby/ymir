import { Descriptor } from '@/components/ui/Descriptor'
import { Title } from '@/components/ui/Title'
import { Text } from '@/components/ui/Text'
import { FeaturesContent } from '@/contents/home/features'

export function Apresentation() {
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
