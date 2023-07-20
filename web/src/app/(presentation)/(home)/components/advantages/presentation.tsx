import { Descriptor } from '@/components/ui/descriptor'
import { Title } from '@/components/ui/title'
import { Text } from '@/components/ui/text'
import { advantagesContent } from '@/app/(presentation)/(home)/contents/advantages'

export function Presentation() {
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
