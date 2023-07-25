import { Descriptor } from '@/components/descriptor'
import { SupportsContent } from '../../contents/supports'
import { Title } from '@/components/ui/title'
import { Text } from '@/components/ui/text'

export function Presentation() {
  const { descriptor, title, description } = SupportsContent

  return (
    <>
      <Descriptor content={descriptor} />
      <Title content={title} />

      <div className="max-w-2xl">
        <Text>{description}</Text>
      </div>
    </>
  )
}
