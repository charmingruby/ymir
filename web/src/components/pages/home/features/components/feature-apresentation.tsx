import { Descriptor } from '@/components/shared/descriptor'
import { Title } from '@/components/shared/title'
import { Text } from '@/components/shared/text'

export function FeatureApresentation() {
  return (
    <div className="flex flex-col gap-6">
      <Descriptor content="Based on popular patterns" />

      <Title content="Accelerate your development" />

      <div className="max-w-2xl">
        <Text>
          Each part of Software Development, from the beggining to the end,
          documented, guaranteing management facilities beyound teams
        </Text>
      </div>
    </div>
  )
}
