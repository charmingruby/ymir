import { Descriptor } from '@/components/descriptor'
import { Title } from '@/components/ui/title'
import { Text } from '@/components/ui/text'
import { advantagesContent } from '@/app/(app)/(home)/contents/advantages'

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
