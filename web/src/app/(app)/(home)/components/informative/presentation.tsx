import { Descriptor } from '@/components/descriptor'
import { Title } from '@/components/ui/title'
import { Text } from '@/components/ui/text'

export function Presentation() {
  return (
    <>
      <Descriptor content="Use what do your prefer" />
      <Title content="Technology Independent" />

      <div className="max-w-2xl">
        <Text>
          {' '}
          The application is technology-agnostic, offering independence to
          users, allowing them to choose their preferred technology stack
          without any constraints.
        </Text>
      </div>
    </>
  )
}
