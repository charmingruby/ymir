import { Descriptor } from '@/components/ui/Descriptor'
import { Title } from '@/components/ui/Title'
import { Text } from '@/components/ui/Text'
import { advantagesContent } from '@/contents/home/advantages'

export function Apresentation() {
  const { descriptor, title, description } = advantagesContent

  return (
    <div className="flex flex-col gap-6">
      <Descriptor content={descriptor} />

      <Title content={title} />

      <div className="max-w-2xl">
        <Text>{description}</Text>
      </div>
    </div>
  )
}
