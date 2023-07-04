import { Descriptor } from '@/components/shared/Descriptor'
import { Title } from '@/components/shared/Title'
import { Text } from '@/components/shared/Text'

export function Apresentation() {
  return (
    <div className="flex w-auto flex-col gap-6 md:w-1/2">
      <Descriptor content="blabal" />
      <Title content="Special Supports" />
      <div className="max-w-2xl">
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde magnam
          labore repellat quidem architecto adipisci facere modi quos, eaque
          atque sapiente, eos, magni autem ab. Reprehenderit dignissimos illum
          numquam deleniti?
        </Text>
      </div>
    </div>
  )
}
