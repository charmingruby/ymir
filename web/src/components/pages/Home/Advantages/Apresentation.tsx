import { Descriptor } from '@/components/shared/Descriptor'
import { Title } from '@/components/shared/Title'
import { Text } from '@/components/shared/Text'

export function Apresentation() {
  return (
    <div className="flex flex-col gap-6">
      <Descriptor content="Unlock the potential of your applications" />

      <Title content="Accelerate your development" />

      <div className="max-w-2xl">
        <Text>
          Enhance collaboration, boost productivity, and take your software
          development to new heights. Join us on this journey as we unveil the
          secrets behind successful application development.
        </Text>
      </div>
    </div>
  )
}
