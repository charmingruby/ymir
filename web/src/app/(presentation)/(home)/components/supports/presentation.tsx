import { Descriptor } from '@/components/ui/descriptor'
import { Title } from '@/components/ui/title'
import { Text } from '@/components/ui/text'
import { SupportsContent } from '../../contents/supports'

export function Presentation() {
  const { descriptor, title, description } = SupportsContent

  return (
    <div className="flex w-auto flex-col gap-6 md:w-1/2">
      <Descriptor content={descriptor} />
      <Title content={title} />
      <div className="max-w-2xl">
        <Text>{description}</Text>
      </div>
    </div>
  )
}
