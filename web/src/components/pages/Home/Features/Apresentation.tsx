import { Descriptor } from '@/components/shared/Descriptor'
import { Title } from '@/components/shared/Title'
import { Text } from '@/components/shared/Text'

export function Apresentation() {
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
