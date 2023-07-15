import { Descriptor } from '@/components/ui/Descriptor'
import { Title } from '@/components/ui/Title'
import { Text } from '@/components/ui/Text'
import { SupportsContent } from '@/contents/home/supports'

export function Apresentation() {
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
